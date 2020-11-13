import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Categories from '../views/Categories.vue'
import Random from '../views/Random.vue'
import Post from '../views/Post.vue'
import Sitemap from '../views/Sitemap.vue'
import { routeInterface } from '@/interfaces/interface'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/categories',
    name: 'Categories',
    component: Categories
  },
  {
    path: '/random',
    name: 'Random',
    component: Random
  },
  {
    path: '/post/:id',
    name: 'Post',
    component: Post
  },
  {
    path: '/sitemap',
    name: 'Sitemap',
    component: Sitemap
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

const routerOpt: Array<object> | undefined = router.options.routes;
function getRoutesList(routes: Array<object> | undefined, pre: string) {
  return routes.reduce((array: string[], route: routeInterface) => {
    console.log(route);
    const path = `${pre}${route.path}`;
    if (route.path !== '*') {
      array.push(path);
    }
    return array;
  }, []);
}

function getRoutesXML(): string {
  const list: string = getRoutesList(routerOpt, '').map((route: string) => `<url><loc>${route}</loc></url>`).join('\r\n');
  return `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
    ${list}
  </urlset>`;
}

getRoutesList(routerOpt, '');

getRoutesXML()

export default router

export const siteMap = getRoutesList(routerOpt, '');
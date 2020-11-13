import { itemPost, commentsInterface } from '@/interfaces/interface';
import Vue from 'vue';

const mutations = {
    SET_POSTS(state: object,posts: Array<itemPost>) {
        Vue.set(state, 'posts', posts) 
    },
    SET_POST(state: object,post: itemPost) {
        Vue.set(state, 'post', post)
    },
    SET_COMMENTS(state: object,comments: commentsInterface) {
        Vue.set(state, 'comments',comments)
    },
    SET_CATEGORIES(state: object,categories: Array<string>) {
        Vue.set(state, 'categories', categories);
    }
}

export default mutations
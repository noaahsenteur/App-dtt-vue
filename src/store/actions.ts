import {itemPost, commitFunction } from '../interfaces/interface'
import Axios from 'axios'
import store from './index'

const baseUrl = 'https://jsonplaceholder.typicode.com'
const baseCat = 'https://api.publicapis.org'

const actions = {
    getPosts({ commit }: commitFunction){
        Axios.get(baseUrl + '/posts').then(response => {

            const tempArray: Array<itemPost> = response.data;
            const date: Date = new Date();

            tempArray.map(key => {
                const year: number  = date.getFullYear() - Math.floor(Math.random() * 10);
                key.date = year;
            })

            commit('SET_POSTS', tempArray);
            
        })
    },
    getPost({ commit }: commitFunction, productId: string){
        Axios.get(baseUrl + '/posts/' + productId).then(response =>{
            commit('SET_POST', response.data);
        })
    },
    getComments({ commit }: commitFunction, productId: string){
        Axios.get(baseUrl + '/posts/' + productId + '/comments').then(response =>{
            commit('SET_COMMENTS', response.data);
        })
    },
    getCategories({ commit }: commitFunction){
        Axios.get(baseCat + '/categories').then(response =>{
            commit('SET_CATEGORIES', response.data);
        })
    },
    descendPosts({ commit }: commitFunction){
        const tempList = store.state.posts.sort((a: itemPost, b: itemPost) =>{
            if(a.date > b.date){
                return 1;
            } else {
                return -1;
            }

        })
        commit('SET_POSTS', tempList);
    },
    ascendPosts({ commit }: commitFunction){
        
        const tempList = store.state.posts.sort((a: itemPost, b: itemPost) =>{
            if(a.date < b.date){
                return 1;
            } else {
                return -1;
            }

        })
        commit('SET_POSTS', tempList);
    }
}

export default actions
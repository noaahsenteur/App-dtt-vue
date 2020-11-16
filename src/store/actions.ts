import {itemPost, commitFunction } from '../interfaces/interface'
import Axios from 'axios'
import store from './index'
import { AxiosResponse } from '../interfaces/axiosInterface'

const baseUrl = 'https://jsonplaceholder.typicode.com'
const baseCat = 'https://api.publicapis.org'

/**
 * Note that api calls need to be async so the application isn't heldback.
 * There could be a delay in pulling the data. Which could take sometime. 
 * The rest of the application shouldnt have too wait for this.So we make the api calls async. 
 */

const actions = {

        async getPosts({ commit }: commitFunction): Promise<void> {

        let tempArray: Array<itemPost>;
        const date: Date = new Date();

        try {

            const response: AxiosResponse = await Axios.get(baseUrl + '/posts');

            /**
             * Made use of a wait instead of just writing a promise. 
             * Because it makes it more readable and takes less space for the same thing. 
            */

            tempArray = await response.data;

            /* Moved the for loop which was present on the home.vue in the action. Used a ES6 map function instead of a for loop. */

            tempArray.map(key => {

                const year: number  = date.getFullYear() - Math.floor(Math.random() * 10);
                key.date = year;

            })

        commit('SET_POSTS', tempArray.slice(0,10));

        } catch(err) {
            console.log(err);
        }
    },

    async getPost({ commit }: commitFunction, productId: string): Promise<void> {

        try { 

            const response: AxiosResponse = await Axios.get(baseUrl + '/posts/' + productId);
            commit('SET_POST', response.data);

        } catch(err) {
            console.log(err);
        }
    },

    async getComments({ commit }: commitFunction, productId: string): Promise<void> {

        try {

            const response: AxiosResponse = await Axios.get(baseUrl + '/posts/' + productId + '/comments');
            commit('SET_COMMENTS', response.data);

        } catch(err) {
            console.log(err);
        }
    },

    async getCategories({ commit }: commitFunction): Promise<void> {

        try {   

            const response = await Axios.get(baseCat + '/categories');
            commit('SET_CATEGORIES', response.data);

        } catch(err){
            console.log(err);
        }
    },
    
    /**
     * Sort method returns a new array on the given conditions.
     */

    descendPosts({ commit }: commitFunction): void {

        const tempList: Array<itemPost> = store.state.posts.sort((a: itemPost, b: itemPost): number =>{

            if(a.date > b.date){
                return 1;
            } else {
                return -1;
            }

        })
        commit('SET_POSTS', tempList);

    },

    ascendPosts({ commit }: commitFunction): void {

    const tempList: Array<itemPost> = store.state.posts.sort((a: itemPost, b: itemPost): number =>{

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
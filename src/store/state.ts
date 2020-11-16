import { vueState } from '../interfaces/interface'

/**
 * Current state of the application. 
 * Which is being mutated by the mutations on the result of the actions. 
 */

const state: vueState = {

    posts: [],
    post: {},
    comments: {},
    categories: {},
    
}

export default state
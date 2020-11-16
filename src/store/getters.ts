import store from './index'

/**
 * Made use of getters, so we can use mapGetters on the vue components. 
 * Which makes it easier too display the current state's
 */

const getters = {

    getPosts(): Array<object> {
        return store.state.posts;
    },

    getPost(): object {
        return store.state.post;
    },

    getComments(): object {
        return store.state.comments;
    },

    getCategories(): object {
        return store.state.categories;
    }

}

export default getters
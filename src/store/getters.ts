import store from './index'

const getters = {
        getPosts(): Array<object>{
            return store.state.posts;
        },
        getPost(): object{
            return store.state.post;
        },
        getComments(): object{
            return store.state.comments;
        },
        getCategories(): object {
            return store.state.categories;
        }
}

export default getters
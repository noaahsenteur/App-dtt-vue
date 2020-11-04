<!-- Template goes here -->
<template>
    <div class="content-wrap">

        <div class="post-wrap center-item b-row">
            <b-col lg="6">
                <div class="info-card rise-anim">
                        
                    <div class="head-content">
                            {{ post.title }}
                    </div>

                    <div class="body">
                        <p>
                            {{ post.body }}
                        </p>
                    </div>

                </div>
            </b-col>
        </div>

        <div class="post-comments-wrap">

            <div class="title">
                Gerelateerde comments
            </div>

            <div class="comments b-row">
                <b-col lg="6" v-for="(comment, index) in comments.slice(0,3)" :key="index">
                    <post-comments :email="comment.email" :content="comment.body" :date="new Date().toLocaleString()"></post-comments>
                </b-col>
            </div>

        </div>

    </div>
</template>

<script lang="ts">
/* Imports */
import { Vue, Component } from 'vue-property-decorator'
import Axios from 'axios'
import Comments from '../components/comment.vue'

/* Components */
@Component({
    components:{
        'post-comments' : Comments
    }
})

/* Classes */
export default class Post extends Vue {
    id: string = this.$route.params.id
    post: object = {}
    comments: Array<object> = []


    mounted(){
        /* Pulling data from api */
        Axios.get('https://jsonplaceholder.typicode.com/posts/' + this.id ).then(response => {
            this.post = response.data;        
        }).catch(function (error) {
            // handle error
            console.log(error);
        })

        /* Pulling data from api */
        Axios.get('https://jsonplaceholder.typicode.com/posts/' + this.id + '/comments').then(response => {
            this.comments = response.data;
        }).catch(function (error) {
            // handle error
            console.log(error);
        })

      }

}
</script>

<style scoped>

    .content-wrap .post-wrap {
        margin-bottom: 15px;
        border-bottom: 1px solid rgba(242, 242, 242, 1);
        padding-bottom: 30px;
    }

    .content-wrap .post-wrap .post-detail {
        border-radius: 5px;
        overflow: hidden;
    }

    .content-wrap .post-comments-wrap .title {
        text-align: center;
        margin-bottom: 15px;
        font-size: 1.25em;
    }

    .content-wrap .post-comments-wrap .comments {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

</style>
<!-- Template goes here -->
<template>
    <div class="content-wrap">

        <div class="post-wrap center-item b-row">
            <b-col lg="6">
                <div class="info-card rise-anim">
                    <div class="head-content">
                            {{ getPost.title }}
                    </div>

                    <div class="body">
                        <p>
                            {{ getPost.body }}
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
                <b-col lg="6" v-for="(comment, index) in getComments" :key="index">
                    <post-comments :email="comment.email" :content="comment.body" :date="new Date().toLocaleString()"></post-comments>
                </b-col>
            </div>

        </div>

    </div>
</template>

<script lang="ts">
/* Imports */
import { Vue, Component } from 'vue-property-decorator'
import Comments from '../components/comment.vue'
import { mapGetters } from 'vuex'

/* Components */
@Component({
    components:{
        'post-comments' : Comments
    },
    computed: mapGetters(['getPost','getComments'])
})

/* Classes */
export default class Post extends Vue {

    id: string = this.$route.params.id;
    
    mounted(){
        this.$store.dispatch('getPost', this.id)
        this.$store.dispatch('getComments', this.id);
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
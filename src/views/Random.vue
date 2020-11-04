<!-- Template goes here -->
<template>
    <div>

        <div class="toolbar">
            <button v-on:click="Randomize">Randomize</button>
        </div>

        <div class="center-item b-row">
            <b-col lg="4" md="6" sm="12" xs="12" class="rise-anim">
                <info-card :title="post.title" :content="post.body" :id="post.id" :date="post.date" ></info-card>
            </b-col>
        </div>
        

    </div>
</template>

<script lang="ts">
    /* Imports */
    import { Vue, Component } from 'vue-property-decorator' 
    import Card from '../components/info-card.vue';
    import Axios from 'axios'
    
    /* Interface */
    interface PostObject {
        [date: string]: any;
    }

    /* Components */
    @Component({
        components: {
            'info-card': Card
        }
    })

    /* Classes */
    export default class Random extends Vue {

        post: PostObject = {}

        /**
         * Making a function too make a random pull from the api for a random post
         */
        RandomInt(min: number, max: number): number {

            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min) + min);

        }

       Randomize(): void {

             Axios.get('https://jsonplaceholder.typicode.com/posts/'+ this.RandomInt(0,100)).then(response => {

                this.post = response.data;
                const date: Date = new Date();
                const year: number = date.getFullYear() - Math.floor(Math.random() * 10);
                this.post.date = year;
            }).catch(function (error) {
                // handle error
                console.log(error);
            })
       } 
       
        /* Calling the random function */
        created(){
            this.Randomize();
        }
    }
</script>
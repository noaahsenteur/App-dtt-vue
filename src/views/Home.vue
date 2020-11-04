<!-- Template goes here -->
<template>
    <div class="content-wrap">

        <div class="toolbar center-item">
            <button v-if="desc" v-on:click="SortDesc">Sorteer van laag naar hoog</button>
            <button v-else-if="!desc" v-on:click="SortAsc">Sorteer van hoog naar laag</button>
        </div>

        <div class="posts-overview center-item b-row">
            <b-col class="mb-15 rise-anim" align-self="stretch" lg="4" md="6" sm="12" xs="12" v-bind:key="index" v-for="(item,index) in homeitems.slice(0,10)">
                <app-card :title="item.title" :content="item.body" :id="item.id.toString()" :date="item.date"></app-card>
            </b-col>
        </div>

    </div>
</template>

<script lang="ts">
    /* Imports */
    import { Vue, Component } from 'vue-property-decorator' 
    import Axios from 'axios'
    import Card from '@/components/info-card.vue'

    /* Interface */
    interface HomeItems {
        body: string;
        date: number;
        title: string;
        id: number;
    }

    /* Components */
    @Component({
        components: {
            'app-card': Card,
        }
    })

    /* Classes */
    export default class Home extends Vue {

    public homeitems: Array<HomeItems> = []
        
    desc = false;

    created(){

        /* Pulling data from api */
        Axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
            const tempArray: Array<HomeItems> = [];
                /** 
                 *  Add a random year to each object in the array .
                 *  So i can sort the years based on publishing year.
                 */

                for(const key in response.data){
                    const date: Date = new Date();
                    const year: number  = date.getFullYear() - Math.floor(Math.random() * 10);
                    response.data[key].date = year;
                    tempArray.push(response.data[key]);
                }

            this.homeitems = tempArray;
        }).catch(function (error) {
            // handle error
            console.log(error);
        });
      }

    /* Made a Descending and Ascending function for sorting the posts by year */ 

    SortDesc(): Array<object>{
        return this.homeitems.sort((a: HomeItems, b: HomeItems) =>{
                this.desc = false;

                if(a.date > b.date){
                    return 1;
                } else {
                    return -1;
                }

            })
        }

      SortAsc(): Array<object>{
        return this.homeitems.sort((a: HomeItems, b: HomeItems) =>{
                this.desc = true;
                if(a.date < b.date){
                    return 1;
                } else {
                    return -1;
                }

            })
        }
    }
</script>
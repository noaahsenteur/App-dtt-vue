<!-- Template goes here -->
<template>
    <div class="content-wrap">
        <div class="posts-overview center-item b-row">
            <b-col class="mb-15 rise-anim" lg="4" md="6" sm="6" xs="6" v-for="(category, index) in categoryitems.slice(0,10)" :key="index">
                <category-card  :title="category"></category-card>
            </b-col>
        </div>
    </div>
</template>


<script lang="ts">
    /* Imports */
    import { Vue, Component } from 'vue-property-decorator' 
    import Axios from 'axios'
    import Category from '@/components/category-card.vue'

    /* Components */
    @Component({
        components: {
            'category-card': Category,
        }
    })

    /* Classes */
    export default class Categories extends Vue {
    
    /* Data */
    public categoryitems: Array<object> = [];

    created(){
        /* Pulling data from api */
        Axios.get('https://api.publicapis.org/categories').then(response => {

        this.categoryitems = response.data;
            
        }).catch(function (error) {
            // handle error
            console.log(error);
        })
      }


    }
</script>
<!-- Template goes here -->
<template>
    <div class="content-wrap">

        <div v-show="showPopup" class="popup-wrap">
            <sort-popup :showPopup="showPopup" @closePopup="openPopup()"></sort-popup>
        </div>
        <div class="toolbar center-item">
        <button @click="openPopup()">Sorteer</button>
        <!--
        <select v-model="sortMethod" @change="sortPosts">
            <option value="desc">hoog naar laag</option>
            <option value="asc">laag naar hoog</option>
        </select>
        -->
        </div>

        <div class="posts-overview center-item b-row">
            <b-col  class="mb-15 rise-anim" align-self="stretch" lg="4" md="6" sm="12" xs="12" v-bind:key="index" v-for="(item,index) in getPosts">
                <app-card :title="item.title" :content="item.body" :id="item.id.toString()" :date="item.date"></app-card>
            </b-col>
        </div>

    </div>
</template>

<script lang="ts">

    /* Imports */
    import { Vue, Component } from 'vue-property-decorator' 
    import Card from '@/components/info-card.vue'
    import Sort from '@/components/sort-popup.vue'
    import { itemPost } from '../interfaces/interface'
    import { mapGetters } from 'vuex';

    /* Components */
    @Component({
        components: {
            'app-card': Card,
            'sort-popup' : Sort,
        }, 
        computed: mapGetters(['getPosts'])
    })

    /* Classes */
    export default class Home extends Vue {

    showPopup = false
    
    homeitems: Array<itemPost> = [];

    openPopup(){
        this.showPopup = !this.showPopup;
    }

    mounted(){
        this.$store.dispatch('getPosts');
    }

    /* Made a Descending and Ascending function for sorting the posts by year */ 

    }
</script>

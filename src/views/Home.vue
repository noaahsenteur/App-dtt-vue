<!-- Template goes here -->
<template>
    <div class="content-wrap">

        <div v-show="showPopup" class="popup-wrap">
            <sort-popup :showPopup="showPopup" @closePopup="openPopup()"></sort-popup>
        </div>
        
        <toolbar-app>
            <button @click="openPopup()" slot="toolbar-btn">Sorteer</button>
        </toolbar-app>

        <div class="posts-overview center-item b-row">

            <b-col  class="mb-15 rise-anim" align-self="stretch" lg="4" md="6" sm="12" xs="12" v-bind:key="index" v-for="(item,index) in getPosts">
                <app-card :title="item.title" :content="item.body" :id="item.id" :date="item.date"></app-card>
            </b-col>

        </div>

    </div>
</template>

<script lang="ts">

    /* Imports */
    import { Vue, Component } from 'vue-property-decorator' 
    import Card from '@/components/info-card.vue'
    import Sort from '@/components/sort-popup.vue'
    import Toolbar from '@/components/toolbar.vue'
    import { itemPost } from '../interfaces/interface'
    import { mapGetters } from 'vuex';

    /* Components */
    @Component({
        components: {
            'app-card': Card,
            'sort-popup' : Sort,
            'toolbar-app' : Toolbar
        }, 
        computed: mapGetters(['getPosts'])
    })

    /* Classes */
    export default class Home extends Vue {

        showPopup = false

        homeitems: Array<itemPost> = [];

        openPopup(): void {
            this.showPopup = !this.showPopup;
        }

        created(): void {
            this.$store.dispatch('getPosts');
        }

    }
    
</script>

<style scoped>

    .popup-wrap {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        z-index: 9;
        background: rgba(255,255,255,0.8);
        display: flex;
        justify-content: center;
        align-items: center;
    }

</style>

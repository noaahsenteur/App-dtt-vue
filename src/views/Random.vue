<!-- Template goes here -->
<template>
    <div class="content-wrap">

         <toolbar-app>
            <button @click="Randomize()" slot="toolbar-btn">Randomize</button>
        </toolbar-app>

        <div class="center-item b-row">
            <b-col lg="4" md="6" sm="12" xs="12" class="rise-anim">
                <info-card :title="getPost.title" :content="getPost.body" :id="getPost.id" :date="getPost.date"></info-card>
            </b-col>
        </div>
        

    </div>
</template>

<script lang="ts">
    /* Imports */
    import { Vue, Component } from 'vue-property-decorator' 
    import Card from '../components/info-card.vue'
    import Toolbar from '@/components/toolbar.vue'
    import { mapGetters } from 'vuex'
    
    /* Components */
    @Component({
        components: {
            'info-card': Card,
            'toolbar-app': Toolbar
        },
        computed: mapGetters(['getPost'])
    })

    /* Classes */
    export default class Random extends Vue {

        /**
         * Making a function too make a random pull from the api for a random post
         */
        RandomInt(min: number, max: number): string {

            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min) + min).toString();

        }
    
       Randomize(): void {
           const tempInt: string = this.RandomInt(0,100);
           this.$store.dispatch('getPost', tempInt);
       } 
       
        /* Calling the random function */
        created(): void {
            this.Randomize();
        }
    }
</script>
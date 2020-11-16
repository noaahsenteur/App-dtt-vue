<!-- Template goes here -->
<template>

    <div class="content-wrap">

        <div class="posts-overview center-item b-row">

            <b-col class="mb-15 rise-anim" lg="4" md="6" sm="6" xs="6" v-for="(category, index) in getCategories" :key="index">
                <category-card  :title="category"></category-card>
            </b-col>

        </div>

    </div>

</template>


<script lang="ts">
    /* Imports */
    import { Vue, Component } from 'vue-property-decorator' 
    import Category from '@/components/category-card.vue'
    import { mapGetters } from 'vuex'

    /* Components */
    @Component({
        components: {
            'category-card': Category,
        },
        computed: mapGetters(['getCategories'])
    })

    /* Classes */
    export default class Categories extends Vue {
    
        created(): void {
            this.$store.dispatch('getCategories');
        }
        
    }
</script>
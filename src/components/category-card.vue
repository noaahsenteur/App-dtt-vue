<!-- Template goes here -->
<template>

    <div class="category-card">

        <div class="head-content">
            {{ title }}
        </div>

    </div>

</template>

<script lang="ts">

    /* Importing */
    import { Vue, Prop, Component } from 'vue-property-decorator'

    /* Components */
    @Component
    

    /* Classes */
    export default class Category extends Vue {

        /* Props */
        @Prop({ default: 'John doe' }) readonly title!: string
    }

    </script>

    <style scoped>

        .category-card {
            height: 100%;
            text-align: center;
            border-radius: 5px;
            overflow: hidden;
            display: flex;
            flex-direction: column;
        }

        .category-card .head-content{
            padding-bottom: 25px;
            background: #6497b1;
            color: white;
            padding: 25px;
            height: 100px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .category-card .body-content {
            font-size: 0.75em;
            padding: 10px 15px 25px 25px;
        }

</style>

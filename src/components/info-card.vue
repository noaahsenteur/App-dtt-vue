<!-- Template goes here -->
<template>

    <router-link :to="'post/' + id" class="info-card">

        <div class="head-content">
            {{ title }}
        </div>

        <div class="body">

            <div class="publishing-date">
                published year : {{ date }}
            </div>

            <div class="content">
                {{ content }}
            </div>

        </div>

    </router-link>

</template>


<script lang="ts">

/* Import */
import { Vue, Prop, Component } from 'vue-property-decorator'

/* Component */
@Component

/* Classes */
export default class App extends Vue {

    @Prop({ default: 'John doe' }) readonly title!: string
    @Prop({ default: 'John doe' }) readonly content!: string
    @Prop() readonly id!: string
    @Prop() readonly date!: string

}

</script>

<style>

.info-card {
    height: 100%;
    text-align: left;
    border-radius: 5px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition-property: all;
    transition-timing-function: ease;
    transition-duration: 0.2s;
    border: 1px solid #f4f4f9;
}

.info-card:hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.head-content{
    padding-bottom: 25px;
    background: white;
    color: black;
    padding: 25px;
    height: 100px;
    display: flex;
   
}

.body {
    font-size: 0.75em;
    padding: 10px 15px 25px 25px;
    color: #677294;
}

.publishing-date {
    font-size: 0.65em;
    text-transform: uppercase;
    padding-top: 10px;
    font-weight: 800;
}

</style>

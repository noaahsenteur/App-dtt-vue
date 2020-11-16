<!-- Template goes here -->
<template>
<div class="popup-wrap">

    <div class="sort-wrap">

        <div @click="closePopup()" class="close-btn">
            <i class="fas fa-times-circle"></i>
        </div>

        <div class="title">
            Sorteer op plaatsdatum
        </div>

        <div class="content">

            <div @click="ascendList" class="sorting-method">
                <div class="text">
                    Nieuw naar oud
                </div>
                <i class="fas fa-sort-amount-down"></i>
            </div>

            <div @click="descendList" class="sorting-method">
                <div class="text">
                    Oud naar nieuw
                </div>
                <i class="fas fa-sort-amount-down-alt"></i>
            </div>

        </div>

    </div>

</div>
</template>

<script lang="ts">

import { Vue, Component } from 'vue-property-decorator'

@Component
 export default class Sort extends Vue {

     closePopup(): void{
        this.$emit('closePopup');
     }

    descendList(): void{
        this.closePopup();
        this.$store.dispatch('descendPosts')
    }

    ascendList(): void{
        this.closePopup();
        this.$store.dispatch('ascendPosts')
    }
 }

</script>

<style scoped>

    .sort-wrap {
        position: relative;
        width: 250px;
        background: white;
        border: 1px solid #f4f4f9;
        padding: 25px 15px;
        border-radius: 5px;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }

    .sorting-method {
        transition-property: all;
        transition-timing-function: ease;
        transition-duration: 0.2s;
        opacity: 0.8;
    }

    .sorting-method:hover{
        background: #6497b1;
        opacity: 1.0;
        color: white;
    }

    .title {
        text-transform: uppercase;
        font-size: 0.85em;
        text-align: center;
        padding-bottom: 10px;
        border-bottom: 1px solid #f4f4f9;
    }

    .sorting-method {
        padding: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .text {
        text-transform: uppercase;
        font-size: 0.75em;
    }

    .content {
        margin-top: 10px;
    }

    .close-btn {
        position: absolute;
        right: -10px;
        top: -10px;
        font-size: 1.25em;
        opacity: 0.75;
        transition-property: all;
        transition-duration: 0.2s;
        transition-timing-function: ease;
    }

    .close-btn:hover {
        opacity: 1.0;
    }

</style>
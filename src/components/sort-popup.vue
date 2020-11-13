<template>
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
</template>

<script lang="ts">

import { Vue, Component } from 'vue-property-decorator'

@Component
 export default class Sort extends Vue {
     closePopup(){
        this.$emit('closePopup');
     }

    descendList(){
        this.closePopup();
        this.$store.dispatch('descendPosts')
    }

    ascendList(){
        this.closePopup();
        this.$store.dispatch('ascendPosts')
    }
 }
</script>

<style scoped>

    .sort-wrap {
        position: relative;
    }

    .sort-wrap .title {
        text-transform: uppercase;
        font-size: 0.85em;
        text-align: center;
        padding-bottom: 5px;
        border-bottom: 1px solid #f4f4f9;
    }

    .sort-wrap .content .sorting-method {
        padding: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .sort-wrap .content .sorting-method .text {
        text-transform: uppercase;
        font-size: 0.75em;
    }

    .sort-wrap .close-btn {
        position: absolute;
        right: -10px;
        top: -10px;
        font-size: 1.25em;
    }

</style>
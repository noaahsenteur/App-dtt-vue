<!-- Template goes here -->
<template>

    <div class="toolbar">
        <slot name="toolbar-btn"></slot>
    </div>

</template>

<script lang="ts">
/* Importing */
import { Vue, Component } from 'vue-property-decorator' 

/* Component */
@Component
export default class Toolbar extends Vue {

}

</script>

<style>

    .toolbar {
        display: flex;
        justify-content: center;
        margin-bottom: 25px;
    }

    .toolbar button {
        transition-property: all;
        transition-timing-function: ease;
        transition-duration: 0.2s;
        opacity: 0.8;
        background: white;
        border: 1px solid #6497b1;
        padding: 10px 25px;
        text-transform: uppercase;
        font-size: 0.75em;
        border-radius: 25px;
        color: #6497b1;
        letter-spacing: 1px;
        outline: none;
    }

    .toolbar button:hover {
        opacity: 1;
        color: white;
        background: #6497b1;
    }

</style>
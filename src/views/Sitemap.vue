<template>
<div>
    <ul>
        <li v-for="(rout, index) in routers" :key="index" >
            {{ rout }}
        </li>
    </ul>
</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator' 
import { siteMap } from '../router/index';

@Component
export default class Sitemap extends Vue {
    routers: object = siteMap
}

</script>
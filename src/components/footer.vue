<!-- template goes here -->
<template>
    <div class="footer-wrap">
        <div class="links-wrapper">
            <router-link to="/sitemap"> Sitemap </router-link>
            -
            <a href="https://www.linkedin.com/in/noah-senteur-04a9b5153/"> Linked in </a>
            -
            <a href="https://wa.me/31623947567"> Whatsapp </a>
        </div>
        <div class="credits">
            Noah Senteur
        </div>
    </div>
</template>

<script lang="ts">
/* Importing */
 import { Component, Vue } from 'vue-property-decorator'

/* Component */
@Component

/* Classes */
export default class Footer extends Vue {

}
</script>

<style scoped>

    .footer-wrap {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .links-wrapper {
        font-weight: 500;
        text-transform: uppercase;
        padding: 5px;
        color: #03396c;
        border-bottom: 0.5px solid rgba(0,0,0,0.1);
    }

    .links-wrapper a {
        color: #03396c;
    }

    .credits {   
        padding-top: 10px;
        text-transform: uppercase;
        font-size: 0.75em;
    }

    @media only screen and (max-width:767px){
        .links-wrapper {
            font-size: 0.75em;
        }
    }

</style>
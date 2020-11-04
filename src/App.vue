<!-- Template goes here -->
<template>
  <div id="app">

    <header>

      <div class="container">
        <app-header></app-header>
      </div>

    </header>

    <div class="body-wrap">

      <div class="container">
        <router-view></router-view>
      </div>

    <footer>

      <div class="container">
        <app-footer></app-footer>
      </div>

    </footer>

    </div>

  </div>
</template>

<script lang="ts">
  /* Imports */
  import { Component, Vue } from 'vue-property-decorator'
  import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
  import Header from '@/components/header.vue'
  import Footer from '@/components/footer.vue'  
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'


  Vue.use(BootstrapVue)
  Vue.use(IconsPlugin)
  
  /* Components */
  @Component({
    components: {
      'app-header':Header,
      'app-footer': Footer
    }
  })

  /* Classes */
  export default class App extends Vue {
  
  }

</script>

<style>

  /* Importing font */
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');


  /* General styling */
  body{
    font-family: 'Montserrat', sans-serif;
    padding: 0px;
    margin: 0px;
  }

  ul {
    list-style: none;
    padding: none;
  }

  a,a:hover {
    color: black;
    text-decoration: none;
  }

  p,h1,h2,h3,h4 {
    padding: 0;
    margin: 0;
  }

  button {
    opacity: 0.8;
    background: #6497b1;
    border: none;
    padding: 10px 25px;
    text-transform: uppercase;
    font-size: 0.75em;
    border-radius: 25px;
    color: white;
    letter-spacing: 1px;
    outline: none;
  }

  #app header {
    margin-bottom: 25px;
    position: fixed;
    width: 100%;
    background: white;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    z-index: 9;
  }

  #app footer {
    padding: 25px;
    margin-top: 25px;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: white;
  }

  .center-item {
    display: flex;
    justify-content: center;
  }

  .content-wrap {
    margin: 0 auto;
  }
  
  .content-wrap .posts-overview {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .body-wrap {
    padding-top: 100px;
    padding-bottom: 125px;
  }

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

  .mb-15 {
    margin-bottom: 25px
  }

  .rise-anim {
    transition-property: transform;
    transition-property: all;
    transition-duration: 0.2s;
    transition-timing-function: ease;
  }

  .rise-anim:hover {
    transform: translateY(-10px);
  }

  @media only screen and (max-width:767px){
    #app footer {
      padding: 10px;
    }  

    .body-wrap {
      padding-top: 75px;
      padding-bottom: 75px;
    }

  }

</style>

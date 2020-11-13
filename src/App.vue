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
  import './assets/general-styling.css'


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
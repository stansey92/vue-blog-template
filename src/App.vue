<template>
  <div id="app">
      <Navbar />
      <div class="content">
        <router-view></router-view>
      </div>
  </div>
</template>

<script>
import Navbar from './components/layout/Navbar.vue'

export default {
  name: 'app',
  components: {
    Navbar,
  }
}
</script>

<style>
  .content {
      margin-top: 56px;
  }

</style>

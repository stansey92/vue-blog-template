<template>
  <div class="container">
    <h1 class="title">Blog</h1>
    <div class="link">
        <router-link to='/'>Home</router-link>
    </div>
    <div class="link">
        <router-link to='/articles'>Articles</router-link>
    </div>
    <div class="link">
        <router-link to='/about'>About</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container {
    background: #22292f;
    width: 200px;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
  }
  .title {
    font-family: Helvetica, sans-serif;
    color: #ffffff;
    margin: 15px 0px 30px 15px;
  }
  .link {
    text-align: center;
    margin: 10px; 
  }
  .link a {
    font-family: Helvetica, sans-serif;
    text-decoration: none;
    color: #ffffff;
    font-size: 18px;
  }
  
</style>

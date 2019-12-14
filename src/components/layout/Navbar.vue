<template>
    <b-navbar toggleable="sm" type="dark" variant="dark" class="header" fixed="top" >
        <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
        <b-navbar-brand to="/">Blog-template</b-navbar-brand>
        <b-collapse id="nav-text-collapse" is-nav>
        <b-navbar-nav>
            <b-nav-item to="/">Home</b-nav-item>
            <b-nav-item to="/articles">Articles</b-nav-item>
            <b-nav-item to="/about">About</b-nav-item>
        </b-navbar-nav>
        </b-collapse>
    </b-navbar>   
</template>

<script>

export default {
    name: 'Navbar'
}
</script>

<style scoped>
    
    
</style>

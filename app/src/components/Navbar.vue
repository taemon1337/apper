<template>
  <nav class="navbar ">
    <div class="navbar-brand">
      <a class="navbar-item" href="http://bulma.io">
        <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
      </a>
  
      <div class="navbar-burger burger" data-target="navMenuExample">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  
    <div id="navMenuExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item " href="./">
          Home
        </a>
        <router-link class='navbar-item' to="/manage">Manage</router-link>
      </div>
  
      <div class="navbar-end">
        <a class="navbar-item" href="https://github.com/taemon1337" target="_blank">
          <span class='fa fa-github'></span>
          Github
        </a>
        <a class="navbar-item" href="https://twitter.com/taemon1337" target="_blank">
          <span class='fa fa-twitter'></span>
          Twitter
        </a>
        <div class="navbar-item">
          <div class="field is-grouped">
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'Navbar',
    data () {
      return {}
    }
  }
</script>

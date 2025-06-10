<template>
  <img alt="Vue logo" src="./assets/img-unajma.png">
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> / 
      <router-link to="/Login">Login</router-link> /
      <router-link to="/Firebase">Firebase</router-link> /
      <router-link to="/Social">Social</router-link>
      <router-link to="/aws">AWS</router-link>
    </nav>
    
    <router-view />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import LoginView from './views/LoginView.vue';

@Options({
  components: {
    LoginView,
  },
})
export default class App extends Vue {}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #003366; /* Azul oscuro del logo */
  margin-top: 60px;
}
nav {
  margin-bottom: 30px;
}

nav a {
  color: #00923f; /* Verde del logo */
  text-decoration: none;
  margin: 0 12px;
  font-weight: bold;
  transition: color 0.2s;
}

nav a.router-link-exact-active {
  color: #003366; /* Azul oscuro del logo */
  border-bottom: 2px solid #ffcc00; /* Amarillo del logo */
}

nav a:hover {
  color: #ffcc00; /* Amarillo del logo */
}

</style>

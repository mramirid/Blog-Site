<template>
  <section class="header-container">
    <header class="the-header">
      <the-side-nav-toggle @toggle="$emit('side-nav-toggle')" />
      <div class="logo">
        <nuxt-link to="/">Blog Site</nuxt-link>
      </div>
      <div class="spacer" />
      <nav class="navigation-items">
        <ul class="nav-list">
          <li class="nav-item"><nuxt-link to="/posts">Blog</nuxt-link></li>
          <li class="nav-item"><nuxt-link to="/about">About</nuxt-link></li>
          <li class="nav-item"><nuxt-link to="/admin">Admin</nuxt-link></li>
        </ul>
      </nav>
    </header>
  </section>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

import TheSideNavToggle from './TheSideNavToggle.vue'

export default defineComponent({
  name: 'TheHeader',
  components: {
    TheSideNavToggle,
  },
  emits: ['side-nav-toggle'],
})
</script>

<style scoped>
.header-container {
  height: 60px;
}

.the-header {
  width: 100%;
  position: fixed;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: black;
  z-index: 100;
  box-sizing: border-box;
  padding: 0 20px;
}

.logo {
  margin: 0 10px;
  font-size: 1.3rem;
}

.logo a {
  text-decoration: none;
  color: white;
}

.spacer {
  flex: 1;
}

.navigation-items {
  display: none;
}

@media (min-width: 768px) {
  .navigation-items {
    display: block;
  }
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

.nav-item {
  margin: 0 10px;
}

.nav-item a {
  text-decoration: none;
  color: white;
}

.nav-item a:hover,
.nav-item a:active,
.nav-item a.nuxt-link-active {
  color: red;
}
</style>

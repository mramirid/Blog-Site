<template>
  <div>
    <the-header @side-nav-toggle="displaySideNav" />
    <the-side-nav :show="sideNavIsDisplayed" @close="hideSideNav" />
    <nuxt />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

import TheHeader from '@/components/navigation/TheHeader.vue'
import TheSideNav from '@/components/navigation/TheSideNav.vue'

export default defineComponent({
  components: {
    TheHeader,
    TheSideNav,
  },
  setup() {
    const sideNavIsDisplayed = ref(false)

    function displaySideNav() {
      sideNavIsDisplayed.value = !sideNavIsDisplayed.value
    }

    function hideSideNav() {
      sideNavIsDisplayed.value = false
    }

    return {
      sideNavIsDisplayed,
      displaySideNav,
      hideSideNav,
    }
  },
})
</script>

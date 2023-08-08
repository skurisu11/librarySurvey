<template>
  <div>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'App'
})
</script>

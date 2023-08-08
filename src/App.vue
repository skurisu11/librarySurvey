<template>
  <div id="app">
    <hello></hello> <!-- あなたの子コンポーネントを使用する -->
  </div>
</template>

<script lang="ts">
import Hello from './components/Hello.vue';

export default {
  name: 'App',
  components: {
    Hello
  }
}
</script>

<style scoped>
/* ここにスタイルを書く */
</style>

<!--<template>-->
<!--  <v-ons-page>-->
<!--    <v-ons-toolbar>-->
<!--      <div class="center">{{ title }}</div>-->
<!--      <div class="right">-->
<!--        <v-ons-toolbar-button>-->
<!--          <v-ons-icon icon="ion-navicon, material: md-menu"></v-ons-icon>-->
<!--        </v-ons-toolbar-button>-->
<!--      </div>-->
<!--    </v-ons-toolbar>-->
<!--    <div style="text-align: center; padding-top:10px">Hello World!</div>-->
<!--    <p style="text-align: center">-->
<!--      <v-ons-button @click="alert">Click Me!</v-ons-button>-->
<!--    </p>-->
<!--  </v-ons-page>-->
<!--</template>-->
<!--<script>-->
<!--export default{-->
<!--  data() {-->
<!--    return {-->
<!--      title: 'My app'-->
<!--    };-->
<!--  },-->
<!--  methods: {-->
<!--    alert() {-->
<!--      this.$ons.notification.alert('This is an Onsen UI alert notification test.');-->
<!--    }-->
<!--  }-->
<!--};-->
<!--</script>-->

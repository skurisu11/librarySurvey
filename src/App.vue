<template>
  <v-ons-page> <!-- インデントがない -->
    <v-ons-toolbar>
      <div class="center">{{ title }}</div> <!-- インデントが不足している -->
      <div class="right">
        <v-ons-toolbar-button> <!-- インデントが多すぎる -->
          <v-ons-icon icon="ion-navicon, material: md-menu"></v-ons-icon>
        </v-ons-toolbar-button>
      </div>
    </v-ons-toolbar>
    <div style="text-align:center;padding-top:10px">Hello World!</div> <!-- スペースが不足している -->
    <p style="text-align:center">
      <v-ons-button@click="alert">Click Me!</v-ons-button> <!-- スペースがない -->
    </p>
  </v-ons-page>
</template>
<script>
export default{
  data() {
    return {
      title: 'My app'
    };
  },
  methods: {
    alert() {
      this.$ons.notification.alert('This is an Onsen UI alert notification test.');
    }
  }
};
</script>

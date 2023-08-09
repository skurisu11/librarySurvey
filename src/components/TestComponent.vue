<template>
  <div>
    <!-- 'v-for'ディレクティブの中でキーが存在しない -->
    <div v-for="item in items">{{ item.name }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { name: 'Item 1' },
        { name: 'Item 2' }
      ]
    };
  },
  // computedプロパティが使用されていない
  computed: {
    unusedComputed() {
      return 'This is unused';
    }
  }
};
</script>

<style scoped>
/* 未知のプロパティ 'alig-items' */
.container {
  display: flex;
  alig-items: center;
}
</style>

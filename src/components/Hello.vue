<template>
  <div>
    {{ message }}
  </div>
</template>

<script lang="ts">
import { sayHello } from '@/myLibrary';

export default {
  data() {
    return {
      message: sayHello('Monaca')
    };
  }
}
</script>

<style scoped>
/* ここにスタイルを書く */
</style>

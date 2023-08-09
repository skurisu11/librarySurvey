<template>
  <div>{{ message }}</div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';

export default defineComponent({
  name: 'TestComponent',
  setup() {
    // const message: number = ref('Hello World');  // 故意の型エラー
    const message: number = 123;  // 任意の数値を設定
    return { message };
  }
});
</script>

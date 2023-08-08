<template>
  <div>
    <button @click="incrementCount">{{ count }}</button>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";

export default defineComponent({
  name: "App",
  setup() {
    const count = ref<number>("0"); // <--- 型エラー: string 値を number 型のrefに代入している。

    function incrementCount() {
      count.value += 1;
      console.log(count.valu); // <--- 構文エラー: "valu" はtypoであり、正しくは "value" であるべき。
    }

    return {
      count,
      incrementCount,
    };
  },
});
</script>

<style scoped>
</style>

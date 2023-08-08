<template>
  <div>
    <!-- コメントもインデントを修正します。 -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      unusedData: 'This data is not used in template' // このデータはテンプレートで使われていないため、未使用変数として警告される
    };
  },
  methods: {
    logMessage() {
      // console.log(); // consoleの呼び出し時の引数が足りないため、エラーになる
    }
  }
};
</script>

<style>
/* CSSの内容は関連しないため、ここには何も書きません */
</style>

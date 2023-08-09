<template>
  <div>
    <button @click="logMessage()">Click Me</button>
  </div>
</template>

<script>
export default {
  name: 'ExampleComponent',
  methods: {
    logMessage() {
      console.log("Improperly indented message.");
      const unusedVariable = "I'm not used anywhere";;
    }
  }
}
</script>

<style scoped>
</style>

<template>
  <div>
    <button @click="sayHello"></button>
  </div>
</template>

<script>
export default {
  methods: {
    sayHello: function() {
      console.log('Hello!')
    }
  }
}
</script>

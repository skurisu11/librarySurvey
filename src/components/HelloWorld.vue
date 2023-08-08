<template>
  <div>{{ greeting }}</div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';

export default defineComponent({
  name: 'HelloWorld',
  setup() {
    const greeting = ref('Hello, Vue 3 with TypeScript!');
    return { greeting };
  }
});
</script>
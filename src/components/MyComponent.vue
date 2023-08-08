<template>
  <div>
    <p>Window Width: {{ width }}</p>
    <p>Window Height: {{ height }}</p>
  </div>
</template>

<script>
import { useWindowSize } from '@vueuse/core'

export default {
  setup() {
    const { width, height } = useWindowSize()

    return { width, height }
  }
}
</script>
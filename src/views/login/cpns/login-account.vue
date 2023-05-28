<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
export default defineComponent({
  setup() {
    const account = reactive({
      name: '',
      password: ''
    })
    return {
      account
    }
  }
})
</script>

<style scoped></style>

<template>
  <p class="text-danger">
    {{ message }}
  </p>
</template>

<script>
export default {
  props: {
    message: { type: String, default: '' }
  }
}
</script>

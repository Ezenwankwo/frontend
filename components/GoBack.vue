<template>
  <b-icon icon="arrow-left" class="mr-3" @click="goBack" />
</template>

<script>
export default {
  methods: {
    goBack () {
      return this.$router.go(-1)
    }
  }
}
</script>

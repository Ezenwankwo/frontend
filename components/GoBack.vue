<template>
  <b-icon icon="arrow-left" class="mr-3 goback" @click="goBack" />
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

<style>
.goback {
  color: #489B16;
}
</style>

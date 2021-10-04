<template>
  <b-col cols="5" class="px-0">
    <div class=" border-bottom p-3 mx-0 h6">
      <GoBack />Explore
    </div>
    <b-form-input v-model="text" placeholder="Search townsmeet" class="w-75 mx-auto my-3" />
    <b-nav pills justified>
      <b-nav-item to="trending">
        Trending
      </b-nav-item>
      <b-nav-item to="latest">
        Latest
      </b-nav-item>
    </b-nav>
  </b-col>
</template>

<script>
export default {
  layout: 'user',
  data () {
    return {
      text: ''
    }
  }
}
</script>

<style>
.nuxt-link-active {
  color: white !important;
  background-color: #489B16;
  border-radius: 0 !important;
}
</style>

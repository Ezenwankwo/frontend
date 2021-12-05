<template>
  <div class="fixed-bottom mobile h4 d-block d-sm-none p-3 d-flex justify-content-between m-0 shadow">
    <NuxtLink to="/feed">
      <b-icon icon="house-door" />
    </NuxtLink>
    <NuxtLink to="/towns">
      <b-icon icon="geo-alt" />
    </NuxtLink>
    <NuxtLink to="/explore/trending">
      <b-icon icon="search" />
    </NuxtLink>
    <NuxtLink to="/notifications">
      <b-icon icon="bell" />
    </NuxtLink>
    <NuxtLink :to="`/profiles/${profile.user}/posts`">
      <b-icon icon="person-circle" />
    </NuxtLink>
  </div>
</template>

<script>
export default {
  data () {
    return {
      profile: {}
    }
  },
  async fetch () {
    try {
      const id = this.$cookies.get('userId')
      const token = this.$cookies.get('userToken')
      this.$axios.setHeader('Authorization', `Token ${token}`)
      this.profile = await this.$axios.$get(`/user/personal/${id}`)
    } catch {
      this.error = 'failed'
    }
  },
  methods: {
    logOut () {
      this.$cookies.removeAll()
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.mobile {
  background-color: white !important;
  color: #212529 !important;
}
.nuxt-link-active {
  color: #489B16 !important;
  background-color: white;
}
a {
  color: #212529 !important;
}
</style>

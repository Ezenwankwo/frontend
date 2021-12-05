<template class="page">
  <b-container fluid>
    <b-row class="vh-100">
      <MainNav />
      <Nuxt />
      <PostForm />
      <MobileNav />
    </b-row>
  </b-container>
</template>

<script>
export default {
  middleware: 'auth',
  data () {
    return {}
  },
  methods: {
    async signout () {
      const token = this.$cookies.get('token')
      try {
        this.$http.setHeader('Authorization', `Token ${token}`)
        await this.$http.$post(
          'https://tmapi-test.herokuapp.com/auth/token/logout'
        )
        this.$cookies.remove('email')
        this.$cookies.remove('token')
        this.$router.push('/signin')
      } catch {
        this.error = 'signout failed'
      }
    }
  }
}
</script>

<style>
.page {
  background-color: #E5E5E5;
}
</style>

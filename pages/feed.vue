<template class="page">
  <b-container>
    <b-row class="center" align-h="center">
      <b-col cols="12" md="8" lg="5">
        <b-card title="Welcome to your feed">
          <b-card-text>
            You are signed in as {{ email }}
          </b-card-text>
          <b-link href="#" class="text-center link my-5" @click="signout">
            Sign out
          </b-link>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data () {
    // const emailAddress = localStorage.getItem('email')
    const emailAddress = this.$cookies.get('email')
    return {
      email: emailAddress
    }
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
.center {
  margin-top: 100px;
}
.link {
  color: #489B16;
  text-decoration: none;
}
.button {
  background-color: #489B16;
  border: 0;
  height: 50px;
  font-weight: 400;
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
}
.input {
  display: block;
  width: 100%;
  height: 50px;
  padding: 1.1rem;
  margin: 20px 0px 20px 0px;
  color: #464a4c;
  border: 1px solid #e6ecf5;
  border-radius: 3px;
}
</style>

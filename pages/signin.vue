<template class="page">
  <b-container>
    <b-row class="center" align-h="center">
      <b-col cols="12" md="8" lg="5">
        <b-card title="Welcome back">
          <b-card-text>
            Connect with your town.
          </b-card-text>
          <b-form class="mt-5" @submit="onSubmit">
            <b-form-input
              id="email"
              v-model="email"
              placeholder="Email"
              type="email"
              required
              class="input"
            />
            <b-form-input
              id="password"
              v-model="password"
              placeholder="Password"
              type="password"
              required
              class="input"
            />
            <small><NuxtLink to="/resetpassword" class="link">
              Forgot password?
            </NuxtLink></small>
            <b-button block type="submit" class="button" variant="success">
              Sign In
            </b-button>
          </b-form>
          <hr>
          <b-card-text>
            New to townsmeet?
            <NuxtLink to="/" class="link">
              Sign Up.
            </NuxtLink>
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    onSubmit () {}
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

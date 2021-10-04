<template class="page">
  <b-container>
    <b-row align-v="center" align-h="center" class="vh-100">
      <b-col cols="12" md="7">
        <h1 class="mt-5">
          Where people live.
        </h1>
        <p class="my-5 pr-lg-5">
          Townsmeet is where you connect and engage with the people, businesses
          and public authorities in your town.
        </p>
      </b-col>
      <b-col cols="12" md="5">
        <b-card title="Create your account">
          <b-card-text>
            It's free and quick.
          </b-card-text>
          <b-form class="mt-5" @submit.prevent="onSubmit">
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
            <small>By clicking "Sign Up", you agree to our terms of use and privacy
              policy.</small>
            <b-button block type="submit" class="button" variant="success">
              Sign Up
            </b-button>
          </b-form>
          <hr>
          <b-card-text>
            Already have an account?
            <NuxtLink to="/login" class="link">
              Sign In.
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
    async onSubmit () {
      try {
        await this.$http.$post(
          'https://tmapi-test.herokuapp.com/auth/users/',
          {
            email: this.email,
            password: this.password
          }
        )
        this.$cookies.set('email', this.email)
        this.$router.push('/verify')
      } catch (e) {
        this.error = 'Signup failed'
      }
    }
  }
}
</script>

<style>
.page {
  background-color: #e5e5e5;
}
.link {
  color: #489b16;
  text-decoration: none;
}
.button {
  background-color: #489b16;
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

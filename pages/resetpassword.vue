<template class="page">
  <b-container>
    <b-row align-v="center" align-h="center" class="vh-100">
      <b-col cols="12" md="8" lg="5">
        <b-card title="Reset your password">
          <b-card-text>
            Enter the email address you used to register and we will
            email you a recovery code to reset your password.
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
            <b-button block type="submit" class="button" variant="success">
              Email me a recovery code
            </b-button>
          </b-form>
          <hr>
          <b-card-text>
            Back to
            <NuxtLink to="/signin" class="link">
              Sign In
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
      email: ''
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

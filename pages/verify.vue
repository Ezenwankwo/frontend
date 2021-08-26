<template class="page">
  <b-container>
    <b-row class="center" align-h="center">
      <b-col cols="12" md="8" lg="5">
        <b-card title="Verify your email">
          <b-card-text>
            Enter the verification code we sent to your email.
          </b-card-text>
          <b-form class="mt-5" @submit="onSubmit">
            <b-form-input
              id="code"
              v-model="code"
              placeholder="Enter 6 digit code"
              type="number"
              required
              class="input"
            />
            <b-button block type="submit" class="button" variant="success">
              Verify
            </b-button>
          </b-form>
          <hr>
          <b-card-text>
            Didn't get the code?
            <span class="link">
              Resend
            </span>
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
      code: ''
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

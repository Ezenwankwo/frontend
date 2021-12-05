<template class="page">
  <b-container>
    <b-row align-v="center" align-h="center" class="vh-100">
      <b-col cols="12" md="8" lg="5">
        <b-card title="Verify your email">
          <b-card-text>
            Enter the verification code we sent to your email <span class="font-italic">{{ email }}</span>
          </b-card-text>
          <b-form class="mt-5" @submit.prevent="onSubmit">
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
    const email = this.$cookies.get('userEmail')
    return {
      code: '',
      email
    }
  },
  methods: {
    async onSubmit () {
      const token = this.code
      const email = this.$cookies.get('userEmail')
      const password = this.$cookies.get('userPassword')
      try {
        await this.$axios.$get(
          `/user/verify/${email}/${token}/`
        )
        const user = await this.$axios.$post(
          '/user/api-token-auth/',
          {
            email,
            password
          }
        )
        this.$cookies.set('userId', user.user_id)
        this.$cookies.set('userToken', user.token)
        this.$cookies.remove('userPassword')
        this.$router.push('/createprofile')
      } catch (e) {
        this.error = 'failed'
      }
    }
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

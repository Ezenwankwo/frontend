<template class="page">
  <b-container>
    <b-row align-v="center" align-h="center" class="vh-100">
      <b-col cols="12" md="8" lg="5">
        <b-card title="Create your profile">
          <b-card-text>
            What do we call you?
          </b-card-text>
          <b-form class="mt-5" @submit.prevent="onSubmit">
            <b-form-input
              id="first"
              v-model="firstName"
              placeholder="First name"
              type="text"
              required
              class="input"
            />
            <b-form-input
              id="last"
              v-model="lastName"
              placeholder="Last name"
              type="text"
              required
              class="input"
            />
            <Message v-if="error" :message="error" />
            <b-form-input
              id="user"
              v-model="userName"
              placeholder="Username"
              type="text"
              required
              class="input"
            />
            <b-button block type="submit" class="button" variant="success">
              Continue
            </b-button>
          </b-form>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data () {
    return {
      firstName: '',
      lastName: '',
      userName: '',
      error: null
    }
  },
  methods: {
    async onSubmit () {
      const userId = this.$cookies.get('userId')
      const token = this.$cookies.get('userToken')
      try {
        this.$axios.setHeader('Authorization', `Token ${token}`)
        const res = await this.$axios.$post(
          '/user/personal/',
          {
            user: userId,
            first_name: this.firstName,
            last_name: this.lastName,
            username: this.userName
          }
        )
        this.$cookies.set('userName', res.username)
        this.$router.push('/moreprofile')
      } catch (e) {
        this.error = 'Username is taken'
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

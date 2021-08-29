<template class="page">
  <b-container>
    <b-row class="center" align-h="center">
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
      userName: ''
    }
  },
  methods: {
    async onSubmit () {
      // const userId = localStorage.getItem('userId')
      const userId = this.$cookies.get('userId')
      try {
        await this.$http.$post(
          'https://tmapi-test.herokuapp.com/user/personal/',
          {
            user: userId,
            first_name: this.firstName,
            last_name: this.lastName,
            username: this.userName
          }
        )
        this.$router.push('/moreprofile')
      } catch (e) {
        this.error = 'Profile creation failed'
      }
    }
  }
}
</script>

<style>
.page {
  background-color: #e5e5e5;
}
.center {
  margin-top: 100px;
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

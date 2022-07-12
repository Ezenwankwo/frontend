<template>
  <div class="container mx-auto px-4 lg:px-12 columns-10 py-8 md:py-12 grid md:grid-cols-2">
    <div>
      <div class="text-tm-black text-xl md:text-3xl lg:pb-12 pb-6 font-medium">
        Sign up to <span class="text-tm-green">connect</span> with your
        townspeople.
      </div>
      <form @submit.prevent="signupWithTownsmeet">
        <div class="mb-3 lg:w-96">
          <label
            for="exampleEmail0"
            class="form-label inline-block mb-2 text-tm-black"
          >Email address</label>
          <input
            id="email"
            v-model.trim="signup.email"
            type="email"
            maxlength="50"
            minlength="10"
            class="
                w-full
                p-3
                text-base
                font-normal
                text-tm-black
                bg-white bg-clip-padding
                border border-tm-black
                rounded
                m-0
                focus:border-tm-green
                focus:outline-none
              "
            required
          >
        </div>
        <div class="mb-3 lg:w-96">
          <label
            for="examplePassword0"
            class="form-label inline-block mb-2 text-tm-black"
          >Password</label>
          <input
            id="password"
            v-model.trim="signup.password"
            type="password"
            maxlength="25"
            minlength="5"
            autocomplete="off"
            class="
                w-full
                p-3
                text-base
                font-normal
                text-tm-black
                bg-white bg-clip-padding
                border border-tm-black
                rounded
                m-0
                focus:border-tm-green
                focus:outline-none
              "
            required
          >
        </div>
        <div class="text-sm text-tm-black m-0">
          I agree to the <NuxtLink to="/terms" class="text-tm-green">
            terms of use
          </NuxtLink> and <NuxtLink to="/privacy" class="text-tm-green">
            privacy policy
          </NuxtLink>.
        </div>
        <button
          type="submit"
          class="
            lg:w-96
            w-full
            mt-3
            px-6
            py-3
            bg-tm-green
            text-white
            font-bold
            text-lg
            leading-normal
            rounded-full
            shadow-md
            hover:bg-teal-600 hover:shadow-lg
            focus:bg-teal-600 focus:shadow-lg focus:outline-none
          "
        >
          Signup
        </button>
      </form>
      <button
        type="button"
        class="
          w-full
          lg:w-96
          mt-3
          px-6
          py-3
          bg-white bg-clip-padding
          text-tm-black
          font-medium
          text-lg
          leading-normal
          border
          border-tm-green
          rounded-full
          shadow-md
          hover:bg-tm-green hover:shadow-lg hover:text-white
          focus:bg-green-900 focus:shadow-lg focus:outline-none focus:text-white
        "
      >
        Signup with Google
      </button>
      <p class="text-tm-black mt-3">
        Have an account? <NuxtLink to="/login" class="text-tm-green ml-2">
          Login
        </NuxtLink>
      </p>
    </div>
    <div class="hidden md:block m-auto">
      <img src="~/assets/community.svg" class="object-fit">
    </div>
    <div class="md:hidden mx-auto lg:pb-12 pb-6 mt-8">
      <img src="~/assets/community.svg" class="object-contain mx-auto">
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignUp',
  layout: 'AnonymousUser',
  data () {
    return {
      signup: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async signupWithTownsmeet () {
      try {
        const res = await this.$axios.post('/users/user/create_user', {
          email: this.signup.email,
          password: this.signup.password
        })
        const user = res.data.data
        this.$store.commit('auth/updateUser', user)
        this.$router.push('/verify')
      } catch (e) {
        this.$toast.error(e.response.data.data, { position: 'top-center' })
      }
    }
  }
}
</script>

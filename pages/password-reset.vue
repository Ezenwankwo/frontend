<template>
  <div class="container mx-auto px-4 lg:px-12 columns-10 py-8 md:py-12 grid md:grid-cols-2">
    <div>
      <div class="text-tm-black text-xl md:text-3xl lg:pb-12 pb-6 font-medium">
        We will send you code to reset your password.
      </div>
      <form @submit.prevent="resetPassword">
        <div class="mb-3 lg:w-96">
          <label
            for="exampleEmail0"
            class="form-label inline-block mb-2 text-tm-black"
          >Enter email address</label>
          <input
            id="verify"
            v-model.trim="reset.email"
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
        <button
          type="submit"
          class="
            lg:w-96
            w-full
            my-3
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
          Send code
        </button>
      </form>
      <p class="text-tm-black">
        Return to <NuxtLink to="/login" class="text-tm-green ml-2">
          Login
        </NuxtLink>
      </p>
    </div>
    <div class="hidden md:block m-auto">
      <img src="~/assets/forgotpassword.svg" class="object-fit">
    </div>
    <div class="md:hidden mx-auto lg:pb-12 pb-6 mt-8">
      <img src="~/assets/forgotpassword.svg" class="object-contain mx-auto">
    </div>
  </div>
</template>

<script>
export default {
  name: 'PasswordReset',
  layout: 'AnonymousUser',
  data () {
    return {
      reset: {
        email: ''
      }
    }
  },
  methods: {
    async resetPassword () {
      try {
        const res = await this.$axios.post('/users/user/forgot_password', {
          email: this.reset.email
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

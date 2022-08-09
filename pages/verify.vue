<template>
  <div class="container mx-auto px-4 lg:px-12 columns-10 py-8 md:py-12 grid md:grid-cols-2">
    <div>
      <div class="text-tm-black text-xl md:text-3xl lg:pb-12 pb-6 font-medium">
        Verify email, we sent a code to: <span class="text-tm-green">{{ user.email }}</span>
      </div>
      <form @submit.prevent="verifyOTP">
        <div class="mb-3 lg:w-96">
          <label
            for="exampleEmail0"
            class="form-label inline-block mb-2 text-tm-black"
          >Enter verification code</label>
          <input
            id="verify"
            v-model.trim="otp.code"
            type="text"
            pattern="\d*"
            maxlength="6"
            minlength="6"
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
          Verify
        </button>
      </form>
      <p class="text-tm-black">
        Didn't receive code? <span class="text-tm-green ml-2" @click="resendOTP">Resend</span>
      </p>
    </div>
    <div class="hidden md:block m-auto">
      <img src="~/assets/acceptterms.svg" class="object-fit">
    </div>
    <div class="md:hidden mx-auto lg:pb-12 pb-6 mt-8">
      <img src="~/assets/acceptterms.svg" class="object-contain mx-auto">
    </div>
  </div>
</template>

<script>
export default {
  name: 'VerifyEmail',
  layout: 'AnonymousUser',
  // middleware: 'signup',
  data () {
    const user = this.$store.state.auth.user
    return {
      user,
      otp: {
        code: ''
      }
    }
  },
  methods: {
    async verifyOTP () {
      try {
        await this.$axios.post('/users/user/verify_otp', {
          otp: this.otp.code,
          email: this.user.email
        })
        this.user.verify = true
        this.$store.commit('auth/updateUser', this.user)
        if (this.user.token) {
          this.$router.push('/create-profile')
        } else {
          this.$router.push('/password-reset-confirm')
        }
      } catch (e) {
        this.$toast.error(e.response.data.data, { position: 'top-center' })
      }
    },
    async resendOTP () {
      try {
        await this.$axios.post('/users/user/resend_otp', {
          email: this.user.email
        })
        this.$toast.success('OTP Sent.', { position: 'top-center' })
      } catch (e) {
        this.$toast.error(e.response.data.data, { position: 'top-center' })
      }
    }
  }
}
</script>

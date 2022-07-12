<template>
  <div class="container mx-auto px-4 lg:px-12 columns-10 py-8 md:py-12 grid md:grid-cols-2">
    <div>
      <div class="text-tm-black text-xl md:text-3xl lg:pb-12 pb-6 font-medium">
        Please enter your new password.
      </div>
      <form @submit.prevent="updatePassword">
        <div class="mb-3 lg:w-96">
          <label
            for="password1"
            class="form-label inline-block mb-2 text-tm-black"
          >New password</label>
          <input
            id="password1"
            v-model.trim="password.password1"
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
        <div class="mb-3 lg:w-96">
          <label
            for="password2"
            class="form-label inline-block mb-2 text-tm-black"
          >Repeat password</label>
          <input
            id="password2"
            v-model.trim="password.password2"
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
          Save new password
        </button>
      </form>
    </div>
    <div class="hidden md:block m-auto">
      <img src="~/assets/security.svg" class="object-fit">
    </div>
    <div class="md:hidden mx-auto lg:pb-12 pb-6 mt-8">
      <img src="~/assets/security.svg" class="object-contain mx-auto">
    </div>
  </div>
</template>

<script>
export default {
  name: 'PasswordResetConfirm',
  layout: 'AnonymousUser',
  data () {
    const user = this.$store.state.auth.user
    return {
      user,
      password: {
        password1: '',
        password2: ''
      }
    }
  },
  methods: {
    async updatePassword () {
      try {
        await this.$axios.patch('/users/user/update_password', {
          email: this.user.email,
          password: this.password.password1,
          confirm_password: this.password.password2
        })
        this.$toast.success('Password reset successful.', { position: 'top-center' })
        this.$router.push('/login')
      } catch (e) {
        this.$toast.error(e.response.data.data, { position: 'top-center' })
      }
    }
  }
}
</script>

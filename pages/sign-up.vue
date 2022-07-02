<template>
  <div class="container mx-auto px-4 lg:px-12 columns-10 py-8 md:py-12 grid md:grid-cols-2">
    <div>
      <div class="text-tm-black text-2xl md:text-3xl lg:pb-12 pb-6 font-medium">
        Create account to <span class="text-tm-green">connect</span> with your
        townspeople.
      </div>
      <div class="md:hidden mx-auto lg:pb-12 pb-6">
        <img src="~/assets/community.svg" class="object-contain mx-auto">
      </div>
      <div class="mb-3 lg:w-96">
        <label
          for="exampleEmail0"
          class="form-label inline-block mb-2 text-tm-black"
        >Email address</label>
        <ValidationProvider v-slot="{ errors }" rules="required|email">
          <input
            id="email"
            v-model.trim="form.email"
            type="email"
            class="
                w-full
                px-3
                py-3
                text-base
                font-normal
                text-tm-black
                bg-white bg-clip-padding
                border border-solid border-tm-gray
                rounded
                m-0
                focus:text-tm-black
                focus:bg-white
                focus:border-tm-green
                focus:outline-none
              "
          >
          <span class="text-sm text-red-400">{{ errors[0] }}</span>
        </ValidationProvider>
      </div>
      <div class="mb-3 lg:w-96">
        <label
          for="examplePassword0"
          class="form-label inline-block mb-2 text-tm-black"
        >Password</label>
        <ValidationProvider v-slot="{ errors }" rules="required|min:8">
          <input
            id="password"
            v-model.trim="form.password"
            type="password"
            class="
                w-full
                px-3
                py-3
                text-base
                font-normal
                text-tm-black
                bg-white bg-clip-padding
                border border-solid border-tm-gray
                rounded
                m-0
                focus:text-tm-black
                focus:bg-white
                focus:border-tm-green
                focus:outline-none
              "
          >
          <span class="text-sm text-red-400">{{ errors[0] }}</span>
        </ValidationProvider>
      </div>
      <div class="text-sm text-tm-black m-0">
        I agree to the <NuxtLink to="/log-in">
          terms of use
        </NuxtLink> and <NuxtLink to="/log-in">
          privacy policy
        </NuxtLink>.
      </div>
      <button
        type="button"
        class="
          lg:w-96
          w-full
          mt-3
          px-6
          py-3
          bg-tm-green
          text-white
          font-medium
          text-lg
          leading-normal
          rounded-full
          shadow-md
          hover:bg-green-900 hover:shadow-lg
          focus:bg-green-900 focus:shadow-lg focus:outline-none
        "
      >
        Signup
      </button>
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
        @click="loginWithGoogle()"
      >
        Signup with Google
      </button>
      <p class="text-tm-black mt-3">
        Have an account? <NuxtLink to="/Log-in" class="text-tm-green ml-2">
          Login
        </NuxtLink>
      </p>
    </div>
    <div class="hidden md:block m-auto">
      <img src="~/assets/community.svg" class="object-fit">
    </div>
  </div>
</template>

<script>
import { ValidationProvider, extend } from 'vee-validate'
import { required, email, min } from 'vee-validate/dist/rules'

extend('email', {
  ...email,
  message: 'this field must be a valid email'
})
extend('required', {
  ...required,
  message: 'this field is required'
})
extend('min', {
  ...min,
  message: 'this field must have at least 8 characters'
})
export default {
  auth: false,
  components: {
    ValidationProvider
  },
  layout: 'AnonymousUser',
  data () {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async onSubmit () {},
    loginWithGoogle () {
      this.$auth.loginWith('google')
    }
  }
}
</script>

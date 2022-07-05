<template>
  <div class="container mx-auto px-4 lg:px-12 columns-10 py-8 md:py-12 grid md:grid-cols-2">
    <div>
      <div class="text-tm-black text-2xl md:text-3xl lg:pb-12 pb-6 font-medium">
        Login to <span class="text-tm-green">stay connected</span> with your
        townspeople.
      </div>
      <form novalidate @submit.prevent="onSubmit">
        <div class="mb-3 lg:w-96">
          <label
            for="email"
            class="form-label inline-block mb-2 text-tm-black"
          >Email address</label>
          <input
            id="email"
            v-model.trim="form.email"
            type="email"
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
          >
        </div>
        <div class="mb-0 lg:w-96">
          <label
            for="examplePassword0"
            class="form-label inline-block mb-2 text-tm-black"
          >Password</label>
          <input
            id="password"
            v-model.trim="form.password"
            type="password"
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
          >
        </div>
        <NuxtLink to="/password-reset">
          <div class="text-sm text-tm-green mt-0 text-right lg:w-96 w-full">
            Forgot password?
          </div>
        </NuxtLink>
        <NuxtLink to="/feed">
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
            Login
          </button>
        </NuxtLink>
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
        Login with Google
      </button>
      <p class="text-tm-black mt-3">
        Do not have an account? <NuxtLink to="/signup" class="text-tm-green ml-2">
          Signup
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
  name: 'LogIn',
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
    async onSubmit () {}
  }
}
</script>

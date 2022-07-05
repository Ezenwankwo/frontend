<template>
  <div class="container mx-auto px-4 lg:px-12 columns-10 py-8 md:py-12 grid md:grid-cols-2">
    <div>
      <div class="text-tm-black text-2xl md:text-3xl pb-4 font-medium">
        Forgot password?
      </div>
      <div class="text-tm-black text-base lg:pb-12 pb-6">
        No worries, we will send you instructions to reset your password.
      </div>
      <div class="mb-3 lg:w-96">
        <label
          for="exampleEmail0"
          class="form-label inline-block mb-2 text-tm-black"
        >Enter email address</label>
        <input
          id="verify"
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
      <NuxtLink to="verify">
        <button
          type="button"
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
          Send instructions
        </button>
      </NuxtLink>
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
  layout: 'AnonymousUser'
}
</script>

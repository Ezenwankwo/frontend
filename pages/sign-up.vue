<template>
  <div class="container mx-auto px-4 lg:px-12 columns-10 py-8 md:py-12 grid md:grid-cols-2">
    <div>
      <div class="text-tm-black text-2xl md:text-3xl lg:pb-12 pb-6 font-medium">
        Create account to <span class="text-tm-green">connect</span> with your
        townspeople.
      </div>
      <div class="md:hidden mx-auto lg:pb-12 pb-6">
        <img src="~/assets/town.svg" class="object-contain mx-auto">
      </div>
      <div class="mb-3 lg:w-96">
        <label
          for="exampleEmail0"
          class="form-label inline-block mb-2 text-tm-black"
        >Email address</label>
        <input
          id="exampleEmail0"
          type="email"
          class="
              w-full
              px-3
              py-3
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-tm-gray
              rounded
              m-0
              focus:text-gray-700
              focus:bg-white
              focus:border-tm-green
              focus:outline-none
            "
        >
      </div>
      <div class="mb-3 lg:w-96">
        <label
          for="examplePassword0"
          class="form-label inline-block mb-2 text-tm-black"
        >Password</label>
        <input
          id="examplePassword0"
          type="password"
          class="
              w-full
              px-3
              py-3
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-tm-gray
              rounded
              m-0
              focus:text-gray-700
              focus:bg-white
              focus:border-tm-green
              focus:outline-none
            "
        >
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
          py-3
          bg-tm-green
          text-white
          font-medium
          text-lg
          leading-normal
          rounded
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
          py-3
          bg-white bg-clip-padding
          text-tm-black
          font-medium
          text-lg
          leading-normal
          border
          border-tm-green
          rounded
          shadow-md
          hover:bg-tm-green hover:shadow-lg hover:text-white
          focus:bg-green-900 focus:shadow-lg focus:outline-none focus:text-white
        "
      >
        Signup with Google
      </button>
      <p class="text-tm-black mt-3">
        Have an account? <NuxtLink to="/Log-in" class="text-tm-green ml-2">
          Login
        </NuxtLink>
      </p>
    </div>
    <div class="hidden md:block">
      <img src="~/assets/town.svg" class="object-contain">
    </div>
  </div>
</template>

<script>
export default {
  layout: 'AnonymousUser'
}
</script>

<template>
  <div class="container mx-auto px-8 columns-10 py-12 grid md:grid-cols-2">
    <div>
      <div class="text-tm-black text-3xl pb-12 font-medium">
        Login to <span class="text-tm-green">stay connected</span> with your
        community.
      </div>
      <div class="md:hidden mx-auto">
        <img src="~/assets/community.png" class="object-contain mx-auto">
      </div>
      <div class="mb-3 lg:w-96">
        <label
          for="exampleEmail0"
          class="form-label inline-block mb-2 text-tm-black"
        >Enter email address</label>
        <input
          id="exampleEmail0"
          type="email"
          class="
              block
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
      <div class="mb-0 lg:w-96">
        <label
          for="examplePassword0"
          class="form-label inline-block mb-2 text-tm-black"
        >Password</label>
        <input
          id="examplePassword0"
          type="password"
          class="
              block
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
      <div class="text-sm text-red-400 mt-0 text-right w-96">
        Forgot password?
      </div>
      <button
        type="button"
        class="
          w-full
          lg:w-96
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
        Login
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
        Login with Google
      </button>
      <p class="text-tm-black mt-3">
        Do not have an account? <NuxtLink to="/sign-up" class="text-tm-green ml-2">
          Signup
        </NuxtLink>
      </p>
    </div>
    <div class="hidden md:block">
      <img src="~/assets/community.png" class="object-contain">
    </div>
  </div>
</template>

<script>
export default {
  layout: 'AnonymousUser'
}
</script>

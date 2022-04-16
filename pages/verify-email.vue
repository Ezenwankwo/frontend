<template>
  <div class="container mx-auto px-4 lg:px-12 columns-10 py-8 md:py-12 grid md:grid-cols-2">
    <div>
      <div class="text-tm-black text-2xl md:text-3xl pb-4 font-medium">
        Verify your email
      </div>
      <div class="text-tm-black text-base lg:pb-12 pb-6">
        Enter the six (6) digit code we sent to your email;<br>
        townsmeet@gmail.com
      </div>
      <div class="md:hidden mx-auto lg:pb-12 pb-6">
        <img src="~/assets/securelogin.svg" class="object-contain mx-auto">
      </div>
      <div class="mb-3 lg:w-96">
        <label
          for="exampleEmail0"
          class="form-label inline-block mb-2 text-tm-black"
        >Enter verification code</label>
        <input
          id="verify"
          type="number"
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
      <button
        type="button"
        class="
          lg:w-96
          w-full
          my-3
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
        Verify
      </button>
      <p class="text-tm-black">
        Didn't receive code? <span class="text-tm-green ml-2">Resend</span>
      </p>
    </div>
    <div class="hidden md:block mx-auto">
      <img src="~/assets/securelogin.svg" class="w-96">
    </div>
  </div>
</template>

<script>
export default {
  layout: 'AnonymousUser'
}
</script>

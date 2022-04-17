<template>
  <div class="container mx-auto px-4 lg:px-12 columns-10 py-8 md:py-12 grid md:grid-cols-2">
    <div>
      <div class="text-tm-black text-2xl md:text-3xl pb-4 font-medium">
        Reset password
      </div>
      <div class="text-tm-black text-base lg:pb-12 pb-6">
        Please enter your new password.
      </div>
      <div class="md:hidden mx-auto lg:pb-12 pb-6">
        <img src="~/assets/security.svg" class="object-contain mx-auto">
      </div>
      <div class="mb-3 lg:w-96">
        <label
          for="exampleEmail0"
          class="form-label inline-block mb-2 text-tm-black"
        >New password</label>
        <input
          id="password1"
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
      </div>
      <div class="mb-3 lg:w-96">
        <label
          for="exampleEmail0"
          class="form-label inline-block mb-2 text-tm-black"
        >Repeat password</label>
        <input
          id="password2"
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
        Save new password
      </button>
    </div>
    <div class="hidden md:block m-auto">
      <img src="~/assets/security.svg" class="object-fit">
    </div>
  </div>
</template>

<script>
export default {
  layout: 'AnonymousUser'
}
</script>

<template>
  <div class="container mx-auto px-4 lg:px-12 columns-10 py-8 md:py-12 grid md:grid-cols-2">
    <div>
      <div class="text-tm-black text-2xl md:text-3xl pb-4 font-medium">
        Create your profile
      </div>
      <div class="text-tm-black text-base lg:pb-12 pb-6">
        Show and tell people in your town something unique about yourself.
      </div>
      <div class="md:hidden mx-auto lg:pb-12 pb-6">
        <img src="~/assets/profilepic.svg" class="w-40 mx-auto border border-tm-gray rounded-full">
        <p class="text-tm-green mt-6 mx-auto text-center text-lg">
          Upload profile photo
        </p>
      </div>
      <div class="mb-3 lg:w-96">
        <label
          for="exampleEmail0"
          class="form-label inline-block mb-2 text-tm-black"
        >Full name</label>
        <input
          id="name"
          type="text"
          class="
              w-full
              px-3
              py-3
              text-base
              font-normal
              text-gray-70
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
        >Username</label>
        <input
          id="username"
          type="text"
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
          for="exampleFormControlTextarea1"
          class="form-label inline-block mb-2 text-tm-black"
        >Bio</label>
        <textarea
          id="bio"
          class="
                w-full
                px-3
                py-3
                text-base
                font-normal
                text-tm-black
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                m-0
                focus:text-tm-black
                focus:bg-white
                focus:border-tm-green
                focus:outline-none
            "
          rows="3"
        />
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
        Create Profile
      </button>
    </div>
    <div class="hidden md:block m-auto">
      <img src="~/assets/profilepic.svg" class="w-72 border border-tm-gray mx-auto rounded-full">
      <p class="text-tm-green mt-8 w-72 text-center text-lg">
        Upload profile photo
      </p>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'AnonymousUser'
}
</script>

<template>
  <div class="container mx-auto px-4 lg:px-12 columns-10 py-8 md:py-12 grid md:grid-cols-2">
    <div>
      <div class="text-tm-black text-2xl md:text-3xl pb-4 font-medium">
        Create your profile
      </div>
      <div class="text-tm-black text-base lg:pb-12 pb-6">
        Show and tell people in your town something unique about yourself.
      </div>
      <div class="md:hidden mx-auto lg:pb-12 pb-6 text-center">
        <img src="~/assets/profilepic.svg" class="w-40 mx-auto border border-tm-gray rounded-full mb-6">
        <input id="photo" type="file" class="hidden">
        <label for="photo" class="px-6 py-3 bg-tm-gray text-tm-green text-bold rounded-full">choose photo</label>
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
      <div class="mb-3 lg:w-96">
        <label
          for="exampleFormControlTextarea1"
          class="form-label inline-block mb-2 text-tm-black"
        >Bio</label>
        <textarea
          id="bio"
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
          rows="3"
        />
      </div>
      <NuxtLink to="/feed">
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
          Create Profile
        </button>
      </NuxtLink>
    </div>
    <div class="hidden md:block m-auto text-center">
      <img src="~/assets/profilepic.svg" class="w-60 border border-tm-gray mx-auto rounded-full mb-6 ring-2 ring-white">
      <input id="photo" type="file" class="hidden">
      <label for="photo" class="px-6 py-3 bg-tm-gray text-tm-green text-bold rounded-full">choose photo</label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CreateProfile',
  layout: 'AnonymousUser'
}
</script>

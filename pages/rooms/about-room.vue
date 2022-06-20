<template>
  <div class="grid grid-cols-10">
    <div class="col-span-10 lg:col-span-7 rounded-3xl lg:mr-8">
      <div class="rounded shadow-md mb-2 md:mb-4" style="background-position: center; background-image: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(https://mdbootstrap.com/img/new/slides/041.jpg)">
        <div class="flex justify-between p-4 md:p-8">
          <p class="text-white font-bold text-2xl items-center">
            MonTee Salsa Dance Club, Come and Join Us Gigi
          </p>
          <div class="ml-6 lg:ml-12">
            <div class="flex items-center space-x-2 text-sm md:text-base">
              <h4 class="font-bold text-white">
                Members
              </h4>
              <span class="rounded-full bg-tm-gray px-2 py-1 text-xs font-semibold text-tm-black">30</span>
            </div>
            <div class="mt-3 flex -space-x-3">
              <img class="inline-block h-9 md:h-12 w-9 md:w-12 rounded-full ring-2 ring-white" src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp" alt="user">
              <img class="inline-block h-9 md:h-12 w-9 md:w-12 rounded-full ring-2 ring-white" src="~/assets/profilepic.svg" alt="user">
              <img class="inline-block h-9 md:h-12 w-9 md:w-12 rounded-full ring-2 ring-white" src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp" alt="user">
            </div>
          </div>
        </div>
      </div>
      <div class="border-2 border-tm-gray bg-white rounded-3xl p-4 sm:p-6 mt-4 sm:mt-8">
        <h3 class="text-lg md:text-xl text-tm-black text-center font-bold">
          About
        </h3>
        <div class="text-sm md:text-base text-tm-black mt-2 md:mt-4 text-center">
          It is a long established fact that a reader will be distracted by the readable
          content of a page when looking at its layout. The point of using Lorem Ipsum is
          that it has a more-or-less normal distribution of letters, as opposed to using
          'Content here, content here', making it look like readable English.
        </div>
      </div>
      <NuxtLink to="/town-rooms">
        <div class="flex justify-center">
          <button
            type="button"
            class="
              px-6
              py-3
              mt-8
              w-1/2
              text-lg
              text-white
              bg-tm-green
              rounded-full
              shadow-md
              hover:outline-none hover:text-white hover:bg-green-600
              focus:outline-none focus:text-white focus:bg-green-600
            "
          >
            Join
          </button>
        </div>
      </NuxtLink>
    </div>
    <div class="col-span-3 invisible lg:visible text-tm-black">
      <div class="border-2 border-tm-gray bg-white rounded-3xl mb-4 p-4">
        <div class="flex items-center justify-between">
          <h4 class="text-lg font-bold">
            Active
          </h4>
          <span class="text-tm-green">See all</span>
        </div>
        <div class="mt-4">
          <div class="flex items-center my-4">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
              class="rounded w-12 border border-tm-gray mr-4"
              alt="Avatar"
            >
            <div>
              <p>Clearing of drainage at Uwanse and ...</p>
            </div>
          </div>
          <div class="flex items-center">
            <img
              src="~/assets/profilepic.svg"
              class="rounded w-12 border border-tm-gray mr-4"
              alt="Avatar"
            >
            <div>
              <p>Renovation of Mbukpa police station.</p>
            </div>
          </div>
          <div class="flex items-center my-4">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
              class="rounded w-12 border border-tm-gray mr-4"
              alt="Avatar"
            >
            <div>
              <p>Construction of security post at Ohovbe qtrs.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="border-2 border-tm-gray bg-white rounded-3xl p-4">
        <div class="flex items-center justify-between">
          <h4 class="text-lg font-bold">
            Suggestions
          </h4>
          <span class="text-tm-green">See all</span>
        </div>
        <div class="mt-4">
          <div class="flex items-center my-4">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
              class="rounded w-12 border border-tm-gray mr-4"
              alt="Avatar"
            >
            <div>
              <p>Clearing of drainage at Uwanse and ...</p>
            </div>
          </div>
          <div class="flex items-center">
            <img
              src="~/assets/profilepic.svg"
              class="rounded w-12 border border-tm-gray mr-4"
              alt="Avatar"
            >
            <div>
              <p>Renovation of Mbukpa police station.</p>
            </div>
          </div>
          <div class="flex items-center my-4">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
              class="rounded w-12 border border-tm-gray mr-4"
              alt="Avatar"
            >
            <div>
              <p>Construction of security post at Ohovbe qtrs.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  auth: false,
  layout: 'AuthenticatedUser'
}
</script>

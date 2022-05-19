<template>
  <div>
    <div
      class="
          border-2 border-tm-gray
          bg-white
          rounded-3xl
          p-1
          sm:p-2
          mb-4
          md:mb-8
          flex
          items-center
          justify-between
        "
    >
      <span class="text-tm-black flex text-base rounded-full font-bold p-2">Community Projects</span>
      <button
        type="button"
        class="
            px-3
            py-2
            rounded-md
            flex
            items-center
            flex-row
            text-sm
            sm:text-base
            font-bold
            text-white
            border
            border-tm-green
            bg-tm-green
            rounded-full
            shadow-md
            hover:outline-none hover:text-white
            focus:outline-none focus:text-white focus:bg-green-900
          "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-plus-circle mx-2"
          viewBox="0 0 16 16"
        >
          <path
            d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
          />
          <path
            d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
          />
        </svg>
        New Project
      </button>
    </div>
    <div class="grid grid-cols-10">
      <div class="col-span-10 lg:col-span-5 bg-white rounded-3xl lg:mr-8 mb-4 lg:mb-8">
        <div class="flex justify-end px-2 pt-2 sm:px-4 sm:pt-4">
          <span class="text-lg text-blue-400 italic">On-going</span>
        </div>
        <div class="md:grid md:grid-cols-9 px-2 sm:px-4">
          <div class="md:col-span-4 w-full p-1 md:p-2">
            <img
              alt="gallery"
              class="block object-cover object-center w-full h-full rounded-lg"
              src="https://media.istockphoto.com/photos/construction-site-shot-from-above-picture-id613110402?k=20&m=613110402&s=612x612&w=0&h=03dHdULmHPhpHEjdt1EcKZmKq9cV6bQ35XPeX5rp_wQ="
            >
          </div>
          <div class="md:col-span-5 ml-1 sm:ml-2">
            <h2 class="text-base sm:text-lg text-tm-black font-bold mb-2">
              Clear blocked drainage at Musaha community.
            </h2>
            <p class="text-sm sm:text-base text-tm-black">
              The drainage at Musaha and it's adjoining streets are completely
              blocked. If they are not cleared before the rain starts falling...
            </p>
          </div>
        </div>
        <hr class="border-dashed mt-2">
        <div class="grid grid-cols-10 p-2 sm:p-4">
          <div class="col-span-6 text-tm-black bg-tm-gray rounded-lg">
            <div class="w-5/6 mx-auto mt-4">
              <span class="text-xs sm:text-sm italic">20 donors</span>
              <span class="flex justify-between font-bold text-sm sm:text-base">
                <span>$1200</span>
                <span>$5000</span>
              </span>
              <div class="w-full bg-white h-3 rounded-full">
                <div class="bg-tm-green h-3 rounded-full" style="width: 25%" />
              </div>
              <span class="flex justify-between text-xs sm:text-sm italic">
                <span>13 Jan, 22</span>
                <span>14 Apr, 22</span>
              </span>
            </div>
          </div>
          <div class="col-span-4 mx-auto">
            <div>
              <div class="flex items-center space-x-2 text-sm md:text-base">
                <h4 class="font-bold text-tm-black">
                  Followers
                </h4>
                <span class="rounded-full bg-tm-gray px-2 py-1 text-xs font-semibold text-tm-black">30</span>
              </div>
              <div class="mt-3 flex -space-x-2 overflow-hidden">
                <img class="inline-block h-9 md:h-12 w-9 md:w-12 rounded-full ring-2 ring-white" src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp" alt="user">
                <img class="inline-block h-9 md:h-12 w-9 md:w-12 rounded-full ring-2 ring-white" src="~/assets/profilepic.svg" alt="user">
                <img class="inline-block h-9 md:h-12 w-9 md:w-12 rounded-full ring-2 ring-white" src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp" alt="user">
              </div>
              <div class="mt-2 md:mt-3 text-xs md:text-sm font-medium">
                <a href="#" class="text-tm-green">+ 27 others</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-10 lg:col-span-5 bg-white rounded-3xl lg:mr-8 mb-4 lg:mb-8">
        <div class="flex justify-end px-2 pt-2 sm:px-4 sm:pt-4">
          <span class="text-lg text-tm-green italic">Completed</span>
        </div>
        <div class="md:grid md:grid-cols-9 px-2 sm:px-4">
          <div class="md:col-span-4 w-full p-1 md:p-2">
            <img
              alt="gallery"
              class="block object-cover object-center w-full h-full rounded-lg"
              src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
            >
          </div>
          <div class="md:col-span-5 ml-1 sm:ml-2">
            <h2 class="text-base sm:text-lg text-tm-black font-bold mb-2">
              Clear blocked drainage at Musaha community.
            </h2>
            <p class="text-sm sm:text-base text-tm-black">
              The drainage at Musaha and it's adjoining streets are completely
              blocked.
            </p>
          </div>
        </div>
        <hr class="border-dashed mt-2">
        <div class="grid grid-cols-10 p-2 sm:p-4">
          <div class="col-span-6 text-tm-black bg-tm-gray rounded-lg">
            <div class="w-5/6 mx-auto mt-4">
              <span class="text-xs sm:text-sm italic">20 donors</span>
              <span class="flex justify-between font-bold text-sm sm:text-base">
                <span>$1200</span>
                <span>$5000</span>
              </span>
              <div class="w-full bg-white h-3 rounded-full">
                <div class="bg-tm-green h-3 rounded-full" style="width: 75%" />
              </div>
              <span class="flex justify-between text-xs sm:text-sm italic">
                <span>13 Jan, 22</span>
                <span>14 Apr, 22</span>
              </span>
            </div>
          </div>
          <div class="col-span-4 mx-auto">
            <div>
              <div class="flex items-center space-x-2 text-sm md:text-base">
                <h4 class="font-bold text-tm-black">
                  Followers
                </h4>
                <span class="rounded-full bg-tm-gray px-2 py-1 text-xs font-semibold text-tm-black">30</span>
              </div>
              <div class="mt-3 flex -space-x-2 overflow-hidden">
                <img class="inline-block h-9 md:h-12 w-9 md:w-12 rounded-full ring-2 ring-white" src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp" alt="user">
                <img class="inline-block h-9 md:h-12 w-9 md:w-12 rounded-full ring-2 ring-white" src="~/assets/profilepic.svg" alt="user">
                <img class="inline-block h-9 md:h-12 w-9 md:w-12 rounded-full ring-2 ring-white" src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp" alt="user">
              </div>
              <div class="mt-3 text-sm font-medium">
                <a href="#" class="text-tm-green">+ 27 others</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-10 lg:col-span-5 bg-white rounded-3xl lg:mr-8 mb-4 lg:mb-8">
        <div class="flex justify-end px-2 pt-2 sm:px-4 sm:pt-4">
          <span class="text-lg text-red-400 italic">Not-started</span>
        </div>
        <div class="md:grid md:grid-cols-9 px-2 sm:px-4">
          <div class="md:col-span-4 w-full p-1 md:p-2">
            <img
              alt="gallery"
              class="block object-cover object-center w-full h-full rounded-lg"
              src="https://media.istockphoto.com/photos/scrap-metal-junkyard-area-picture-id1179311310?k=20&m=1179311310&s=612x612&w=0&h=N9TWzQfWFkUgs_I1tg6VYmd3LQh1VIOLUES0JDZvSYo="
            >
          </div>
          <div class="md:col-span-5 ml-1 sm:ml-2">
            <h2 class="text-base sm:text-lg text-tm-black font-bold mb-2">
              Clear blocked drainage at Musaha community.
            </h2>
            <p class="text-sm sm:text-base text-tm-black">
              The drainage at Musaha and it's adjoining streets are completely
              blocked. If they are not cleared before the rain starts falling...
            </p>
          </div>
        </div>
        <hr class="border-dashed mt-2">
        <div class="grid grid-cols-10 p-2 sm:p-4">
          <div class="col-span-6 text-tm-black bg-tm-gray rounded-lg">
            <div class="w-5/6 mx-auto mt-4">
              <span class="text-xs sm:text-sm italic">20 donors</span>
              <span class="flex justify-between font-bold text-sm sm:text-base">
                <span>$1200</span>
                <span>$5000</span>
              </span>
              <div class="w-full bg-white h-3 rounded-full">
                <div class="bg-tm-green h-3 rounded-full" style="width: 25%" />
              </div>
              <span class="flex justify-between text-xs sm:text-sm italic">
                <span>13 Jan, 22</span>
                <span>14 Apr, 22</span>
              </span>
            </div>
          </div>
          <div class="col-span-4 mx-auto">
            <div>
              <div class="flex items-center space-x-2 text-sm md:text-base">
                <h4 class="font-bold text-tm-black">
                  Followers
                </h4>
                <span class="rounded-full bg-tm-gray px-2 py-1 text-xs font-semibold text-tm-black">30</span>
              </div>
              <div class="mt-3 flex -space-x-2 overflow-hidden">
                <img class="inline-block h-9 md:h-12 w-9 md:w-12 rounded-full ring-2 ring-white" src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp" alt="user">
                <img class="inline-block h-9 md:h-12 w-9 md:w-12 rounded-full ring-2 ring-white" src="~/assets/profilepic.svg" alt="user">
                <img class="inline-block h-9 md:h-12 w-9 md:w-12 rounded-full ring-2 ring-white" src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp" alt="user">
              </div>
              <div class="mt-3 text-sm font-medium">
                <a href="#" class="text-tm-green">+ 27 others</a>
              </div>
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

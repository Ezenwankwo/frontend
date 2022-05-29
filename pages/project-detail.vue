<template>
  <div>
    <GoBack />
    <div class="bg-white rounded-3xl">
      <div class="grid grid-cols-9 p-2 sm:p-4 mt-1 sm:mt-2">
        <div class="md:col-span-4 w-full">
          <img
            alt="gallery"
            class="block object-cover object-center w-full h-full rounded-lg"
            src="https://media.istockphoto.com/photos/construction-site-shot-from-above-picture-id613110402?k=20&m=613110402&s=612x612&w=0&h=03dHdULmHPhpHEjdt1EcKZmKq9cV6bQ35XPeX5rp_wQ="
          >
        </div>
        <div class="md:col-span-5 ml-2 sm:ml-4">
          <h2 class="text-lg sm:text-xl text-tm-black font-bold mb-2">
            Clear blocked drainage at Musaha community.
          </h2>
          <p class="text-sm sm:text-base text-tm-black">
            It is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout.
            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
            as opposed to using 'Content here, content here',
            making it look like readable English. Many desktop publishing packages
            and web page editors now use Lorem Ipsum as their default model text,
            and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
            Various versions have evolved over the years, sometimes by accident,
            sometimes on purpose (injected humour and the like).
          </p>
        </div>
      </div>
      <div class="grid grid-cols-9 p-2 sm:p-4">
        <div class="col-span-4">
          <div class="p-2 md:p-4 rounded-3xl bg-tm-gray">
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
          <button
            type="button"
            class="
                w-full
                mt-3
                mx-auto
                py-3
                bg-tm-green
                text-white
                font-medium
                text-lg
                leading-normal
                rounded-full
                shadow-md
                hover:bg-green-900 hover:shadow-lg
                focus:bg-green-900 focus:shadow-lg focus:outline-none
            "
          >
            Make a donation
          </button>
        </div>
        <div class="col-span-5 ml-2 sm:ml-4">
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
      <hr class="border-2 border-dashed my-2">
      <div class="p-4">
        <ul
          id="tabs-tab"
          class="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4"
          role="tablist"
        >
          <li class="nav-item" role="presentation">
            <a
              id="tabs-home-tab"
              href="#tabs-home"
              class="
                nav-link
                block
                font-medium
                text-xs
                leading-tight
                uppercase
                border-x-0 border-t-0 border-b-2 border-transparent
                px-6
                py-3
                my-2
                rounded-full
                hover:border-transparent hover:bg-tm-green
                focus:border-transparent focus:text-white focus:bg-tm-green
                active
            "
            >Latest Activity</a>
          </li>
          <li class="nav-item" role="presentation">
            <a
              id="tabs-profile-tab"
              href="#tabs-profile"
              class="
                nav-link
                block
                font-medium
                text-xs
                leading-tight
                uppercase
                border-x-0 border-t-0 border-b-2 border-transparent
                px-6
                py-3
                my-2
                hover:border-transparent hover:bg-gray-100 hover:text-white
                focus:border-transparent
            "
            >Comments</a>
          </li>
          <li class="nav-item" role="presentation">
            <a
              id="tabs-messages-tab"
              href="#tabs-messages"
              class="
                nav-link
                block
                font-medium
                text-xs
                leading-tight
                uppercase
                border-x-0 border-t-0 border-b-2 border-transparent
                px-6
                py-3
                my-2
                hover:border-transparent hover:bg-gray-100
                focus:border-transparent
            "
              data-bs-toggle="pill"
              data-bs-target="#tabs-messages"
              role="tab"
              aria-controls="tabs-messages"
              aria-selected="false"
            >Donations</a>
          </li>
        </ul>
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

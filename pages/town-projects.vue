<template>
  <div>
    <div
      class="
          border-2 border-tm-gray
          bg-white
          rounded-3xl
          p-1
          sm:p-2
          mb-2
          md:mb-4
          flex
          items-center
          justify-between
        "
    >
      <!-- post filter dropdown -->
      <div>
        <button
          ref="btnDropdownRef"
          class="text-tm-black flex text-base rounded-full font-bold p-2"
          type="button"
          @click="toggleDropdown()"
        >
          All
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-down my-auto ml-2"
            viewBox="0 0 16 16"
          >
            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
          </svg>
        </button>
        <div ref="popoverDropdownRef" :class="{'hidden': !dropdownPopoverShow, 'block': dropdownPopoverShow}" class="bg-white text-base z-50 float-left py-2 list-none text-left rounded border border-tm-gray shadow-lg mt-1" style="min-width:6rem">
          <a href="#pablo" class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent  text-tm-black hover:bg-tm-gray">
            All
          </a>
          <a href="#pablo" class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent  text-tm-black hover:bg-tm-gray">
            On-going
          </a>
          <a href="#pablo" class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent  text-tm-black hover:bg-tm-gray">
            Not-started
          </a>
          <a href="#pablo" class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent  text-tm-black hover:bg-tm-gray">
            Completed
          </a>
        </div>
      </div>
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
    <div class="grid grid-cols-12">
      <div class="col-span-12 md:col-span-6 lg:col-span-4 bg-white rounded-3xl mb-2 lg:mb-4">
        <NuxtLink to="/project-detail">
          <div class="flex justify-between px-2 pt-2 sm:px-4 sm:pt-4">
            <span class="text-sm md:text-base text-blue-400 italic">On-going</span>
            <span class="text-tm-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-three-dots"
                viewBox="0 0 16 16"
              >
                <path
                  d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
                />
              </svg>
            </span>
          </div>
          <div class="p-1 md:p-2">
            <div class="w-full">
              <img
                alt="gallery"
                class="block object-cover object-center w-full h-full rounded-lg"
                src="https://media.istockphoto.com/photos/construction-site-shot-from-above-picture-id613110402?k=20&m=613110402&s=612x612&w=0&h=03dHdULmHPhpHEjdt1EcKZmKq9cV6bQ35XPeX5rp_wQ="
              >
            </div>
            <div>
              <h2 class="text-base sm:text-lg text-tm-black font-medium my-1 md:my-2">
                Clear blocked drainage at Musaha community.
              </h2>
              <span
                class="
                rounded-full
                text-tm-black
                bg-tm-gray
                flex
                align-center
                ease
                w-max
              "
              >
                <img
                  class="rounded-full w-9 h-9 max-w-none"
                  alt="A"
                  src="~/assets/profilepic.svg"
                >
                <span class="flex items-center px-3 py-2">
                  Augustus Ezenwankwo
                </span>
              </span>
            </div>
          </div>
        </NuxtLink>
      </div>
      <div class="col-span-12 md:col-span-6 lg:col-span-4 bg-white rounded-3xl md:mx-2 mb-2 lg:mb-4">
        <div class="flex justify-between px-2 pt-2 sm:px-4 sm:pt-4">
          <span class="text-sm md:text-base text-tm-green italic">Completed</span>
          <span class="text-tm-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-three-dots"
              viewBox="0 0 16 16"
            >
              <path
                d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
              />
            </svg>
          </span>
        </div>
        <div class="p-1 sm:p-2">
          <div class="w-full">
            <img
              alt="gallery"
              class="block object-cover object-center w-full h-full rounded-lg"
              src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
            >
          </div>
          <div>
            <h2 class="text-base sm:text-lg text-tm-black font-medium my-1 md:my-2">
              Clear blocked drainage at Musaha community.
            </h2>
            <span
              class="
                rounded-full
                text-tm-black
                bg-tm-gray
                flex
                align-center
                ease
                w-max
              "
            >
              <img
                class="rounded-full w-9 h-9 max-w-none"
                alt="A"
                src="~/assets/profilepic.svg"
              >
              <span class="flex items-center px-3 py-2">
                Augustus Ezenwankwo
              </span>
            </span>
          </div>
        </div>
      </div>
      <div class="col-span-12 md:col-span-6 lg:col-span-4 bg-white rounded-3xl mb-2 lg:mb-4">
        <div class="flex justify-between px-2 pt-2 sm:px-4 sm:pt-4">
          <span class="text-sm md:text-base text-red-400 italic">Not-started</span>
          <span class="text-tm-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-three-dots"
              viewBox="0 0 16 16"
            >
              <path
                d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
              />
            </svg>
          </span>
        </div>
        <div class="p-1 sm:p-2">
          <div class="w-full">
            <img
              alt="gallery"
              class="block object-cover object-center w-full h-full rounded-lg"
              src="https://media.istockphoto.com/photos/scrap-metal-junkyard-area-picture-id1179311310?k=20&m=1179311310&s=612x612&w=0&h=N9TWzQfWFkUgs_I1tg6VYmd3LQh1VIOLUES0JDZvSYo="
            >
          </div>
          <div>
            <h2 class="text-base sm:text-lg text-tm-black font-medium my-1 md:my-2">
              Clear blocked drainage at Musaha community.
            </h2>
            <span
              class="
                rounded-full
                text-tm-black
                bg-tm-gray
                flex
                align-center
                ease
                w-max
              "
            >
              <img
                class="rounded-full w-9 h-9 max-w-none"
                alt="A"
                src="~/assets/profilepic.svg"
              >
              <span class="flex items-center px-3 py-2">
                Augustus Ezenwankwo
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createPopper } from '@popperjs/core'
export default {
  auth: false,
  layout: 'AuthenticatedUser',
  data () {
    return {
      dropdownPopoverShow: false
    }
  },
  methods: {
    toggleDropdown () {
      if (this.dropdownPopoverShow) {
        this.dropdownPopoverShow = false
      } else {
        this.dropdownPopoverShow = true
        createPopper(this.$refs.btnDropdownRef, this.$refs.popoverDropdownRef, {
          placement: 'bottom-start'
        })
      }
    }
  }
}
</script>

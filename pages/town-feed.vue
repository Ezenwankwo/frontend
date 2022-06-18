<template>
  <div class="grid grid-cols-10">
    <div class="col-span-10 lg:col-span-7 rounded-3xl lg:mr-8">
      <!-- post button and filter section-->
      <div
        class="
          border-2 border-tm-gray
          bg-white
          rounded-3xl
          p-1
          sm:p-2
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
            Today
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
              Today
            </a>
            <a href="#pablo" class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent  text-tm-black hover:bg-tm-gray">
              Last 7 days
            </a>
            <a href="#pablo" class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent  text-tm-black hover:bg-tm-gray">
              Last 30 days
            </a>
            <div class="h-0 my-2 border border-solid border-t-0 border-slate-800 opacity-25" />
            <a href="#pablo" class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent  text-tm-black hover:bg-tm-gray">
              Customise
            </a>
          </div>
        </div>
        <!-- create post button -->
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
          @click="togglePost()"
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
          New Post
        </button>
      </div>
      <!-- create post, hidden by default. -->
      <div :class="{'hidden': !postShow, 'visible': postShow}" class="rounded-3xl shadow-2xl bg-white">
        <div class="flex p-4 sm:p-6">
          <img
            class="hidden sm:block rounded-full w-12 h-12 max-w-none"
            alt="A"
            src="~/assets/profilepic.svg"
          >
          <img
            class="sm:hidden rounded-full w-9 h-9 max-w-none"
            alt="A"
            src="~/assets/profilepic.svg"
          >
          <div class="ml-2 sm:ml-4 w-full">
            <button ref="btnCategoryRef" class="flex border border-tm-black text-sm text-tm-black font-medium py-2 px-4 rounded-full" @click="toggleCategory()">
              Select post category
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
            <div ref="popoverCategoryRef" :class="{'hidden': !categoryPopoverShow, 'visible': categoryPopoverShow}" class="bg-white text-base z-50 float-left py-2 list-none text-left rounded border border-tm-gray shadow-lg mt-1" style="min-width:12rem">
              <a href="#pablo" class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent  text-tm-black hover:bg-tm-gray">
                Send security alert
              </a>
              <a href="#pablo" class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent  text-tm-black hover:bg-tm-gray">
                Ask for recommendation
              </a>
              <a href="#pablo" class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent  text-tm-black hover:bg-tm-gray">
                Discuss a civic issue
              </a>
              <a href="#pablo" class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent  text-tm-black hover:bg-tm-gray">
                Report an incident
              </a>
              <a href="#pablo" class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent  text-tm-black hover:bg-tm-gray">
                Find places, apartments, jobs etc
              </a>
              <a href="#pablo" class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent  text-tm-black hover:bg-tm-gray">
                Publicise an event
              </a>
              <a href="#pablo" class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent  text-tm-black hover:bg-tm-gray">
                Pass important information
              </a>
            </div>
            <textarea
              id="post"
              name="post"
              cols="30"
              rows="3"
              class="w-full text-tm-black text-sm sm:text-base border-l-2 border-tm-gray px-2 my-2 sm:my-4 placeholder:italic focus:border-l-2 focus:border-tm-green focus:outline-none"
              placeholder="What is happening in your town?"
            />
            <div class="flex items-center justify-between">
              <span class="flex text-tm-green">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-card-image"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                  <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54A.505.505 0 0 1 1 12.5v-9a.5.5 0 0 1 .5-.5h13z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-play-btn mx-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-emoji-smile"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
                </svg>
              </span>
              <button
                type="button"
                class="
                  px-3
                  py-2
                  flex
                  items-center
                  flex-row
                  text-sm
                  sm:text-base
                  font-medium
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
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- create post end-->
      <PostItem />
    </div>
    <TownSidebar />
  </div>
</template>

<script>
import { createPopper } from '@popperjs/core'

export default {
  layout: 'AuthenticatedUser',
  data () {
    return {
      dropdownPopoverShow: false,
      postShow: false,
      categoryPopoverShow: false
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
    },
    togglePost () {
      if (this.postShow) {
        this.postShow = false
      } else {
        this.postShow = true
      }
    },
    toggleCategory () {
      if (this.categoryPopoverShow) {
        this.categoryPopoverShow = false
      } else {
        this.categoryPopoverShow = true
        createPopper(this.$refs.btnCategoryRef, this.$refs.popoverCategoryRef, {
          placement: 'bottom-start'
        })
      }
    }
  }
}
</script>

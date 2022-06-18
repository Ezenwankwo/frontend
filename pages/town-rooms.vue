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
        <div class="flex justify-center">
          <div>
            <div class="dropdown relative">
              <button
                id="dropdownMenuButton1"
                class="
                  dropdown-toggle
                  px-4
                  py-2.5
                  bg-white
                  text-tm-black
                  font-bold
                  leading-tight
                  rounded
                  transition
                  duration-150
                  ease-in-out
                  flex
                  items-center
                  whitespace-nowrap
                "
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Discussions
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="caret-down"
                  class="w-2 ml-2"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path
                    fill="currentColor"
                    d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                  />
                </svg>
              </button>
              <ul
                class="
                  dropdown-menu
                  min-w-max
                  absolute
                  hidden
                  bg-white
                  text-base
                  z-50
                  float-left
                  py-2
                  list-none
                  text-left
                  rounded-lg
                  shadow-lg
                  mt-1
                  hidden
                  m-0
                  bg-clip-padding
                  border-none
                "
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a
                    class="
                      dropdown-item
                      text-sm
                      py-2
                      px-4
                      font-normal
                      block
                      w-full
                      whitespace-nowrap
                      bg-transparent
                      text-gray-700
                      hover:bg-gray-100
                    "
                    href="#"
                  >Action</a>
                </li>
                <li>
                  <a
                    class="
                      dropdown-item
                      text-sm
                      py-2
                      px-4
                      font-normal
                      block
                      w-full
                      whitespace-nowrap
                      bg-transparent
                      text-gray-700
                      hover:bg-gray-100
                    "
                    href="#"
                  >Another action</a>
                </li>
                <li>
                  <a
                    class="
                      dropdown-item
                      text-sm
                      py-2
                      px-4
                      font-normal
                      block
                      w-full
                      whitespace-nowrap
                      bg-transparent
                      text-gray-700
                      hover:bg-gray-100
                    "
                    href="#"
                  >Something else here</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <button
          class="
            px-3
            py-2
            rounded-md
            flex
            items-center
            flex-row
            text-base
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
      <PostItem />
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

<template>
  <div class="grid grid-cols-10">
    <div class="col-span-7 rounded-3xl mr-8">
      <div
        class="
          border-2 border-tm-gray
          bg-white
          rounded-3xl
          px-4
          py-2
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
                Today's Posts
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
      <div class="border-2 border-tm-gray bg-white rounded-3xl px-8 py-4 mt-4">
        <div class="flex items-center justify-between">
          <span
            class="
              text-xs
              inline-block
              py-1
              px-2.5
              border border-tm-green
              shadow-lg
              leading-none
              text-center
              whitespace-nowrap
              align-baseline
              font-bold
              bg-tm-green
              text-white
              rounded-full
            "
          >Safety</span>
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
        <p class="text-tm-black my-2 font-normal">
          It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </p>
        <div class="flex items-center text-sm justify-between text-gray-400">
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
          <i> 11 Feb 22, 10:30pm </i>
        </div>
        <div
          class="
            mt-4
            flex
            items-center
            text-tm-black
            justify-between
            w-1/2
            mx-auto
          "
        >
          <div class="flex items-center justify-between">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-chat"
                viewBox="0 0 16 16"
              >
                <path
                  d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"
                />
              </svg>
            </span>
            <span class="ml-2">3</span>
            <i class="ml-2">replies</i>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-tm-green">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-heart-fill"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                />
              </svg>
            </span>
            <span class="ml-2">21</span>
            <i class="ml-2">likes</i>
          </div>
          <div class="flex items-center justify-between">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-share"
                viewBox="0 0 16 16"
              >
                <path
                  d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"
                />
              </svg>
            </span>
            <i class="ml-2">share</i>
          </div>
        </div>
      </div>
      <div class="border-2 border-tm-gray bg-white rounded-3xl px-8 py-4 mt-4">
        <div class="flex items-center justify-between">
          <span
            class="
              text-xs
              inline-block
              py-1
              px-2.5
              border border-tm-green
              shadow-lg
              leading-none
              text-center
              whitespace-nowrap
              align-baseline
              font-bold
              bg-tm-green
              text-white
              rounded-full
            "
          >Searching</span>
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
        <p class="text-tm-black my-2 font-normal">
          It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged.
        </p>
        <img
          src="https://mdbootstrap.com/img/new/slides/041.jpg"
          class="max-w-full h-auto mb-2 rounded-lg"
          alt="..."
        >
        <div class="flex items-center text-sm justify-between text-gray-400">
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
            <span class="flex items-center px-3 py-2"> Eunice Effiong </span>
          </span>
          <i> 11 Feb 22, 10:30pm </i>
        </div>
        <div
          class="
            mt-4
            flex
            items-center
            text-tm-black
            justify-between
            w-1/2
            mx-auto
          "
        >
          <div class="flex items-center justify-between">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-chat"
                viewBox="0 0 16 16"
              >
                <path
                  d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"
                />
              </svg>
            </span>
            <span class="ml-2">3</span>
            <i class="ml-2">replies</i>
          </div>
          <div class="flex items-center justify-between">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-heart"
                viewBox="0 0 16 16"
              >
                <path
                  d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
                />
              </svg>
            </span>
            <i class="ml-2">like</i>
          </div>
          <div class="flex items-center justify-between">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-share"
                viewBox="0 0 16 16"
              >
                <path
                  d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"
                />
              </svg>
            </span>
            <i class="ml-2">share</i>
          </div>
        </div>
      </div>
    </div>
    <div class="col-span-3 text-tm-black">
      <div class="border-2 border-tm-gray bg-white rounded-3xl p-4">
        <div class="flex items-center justify-between">
          <h4 class="text-lg font-bold">
            Townspeople
          </h4>
          <span class="text-tm-green">See all</span>
        </div>
        <div class="mt-4">
          <div class="flex items-center my-4">
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
                class="rounded-full w-12 h-12 max-w-none"
                alt="A"
                src="~/assets/profilepic.svg"
              >
              <span class="flex items-center px-3 py-2">
                Augustus Ezenwankwo
              </span>
            </span>
          </div>
          <div class="flex items-center">
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
                class="rounded-full w-12 h-12 max-w-none"
                alt="A"
                src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
              >
              <span class="flex items-center px-3 py-2"> Eunice Effiong </span>
            </span>
          </div>
          <div class="flex items-center my-4">
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
                class="rounded-full w-12 h-12 max-w-none"
                alt="A"
                src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
              >
              <span class="flex items-center px-3 py-2">
                Peter Gregory Obi
              </span>
            </span>
          </div>
        </div>
      </div>
      <div class="border-2 border-tm-gray bg-white rounded-3xl my-4 p-4">
        <div class="flex items-center justify-between">
          <h4 class="text-lg font-bold">
            Projects
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
            Rooms
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

<template>
  <div class="bg-tm-gray">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <!-- header -->
      <div class="flex items-center justify-between h-16">
        <NuxtLink to="/" class="hidden md:block text-tm-green">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            fill="currentColor"
            class="bi bi-badge-tm-fill"
            viewBox="0 0 16 16"
          >
            <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm3.295 3.995V11H4.104V5.995h-1.7V5H7v.994H5.295zM8.692 7.01V11H7.633V5.001h1.209l1.71 3.894h.039l1.71-3.894H13.5V11h-1.072V7.01h-.057l-1.42 3.239h-.773L8.75 7.008h-.058z" />
          </svg>
        </NuxtLink>
        <NuxtLink :to="`/profile/${profile.user}/posts`" class="visible md:hidden text-tm-green">
          <img
            v-if="profile.image == null"
            src="~/assets/profilepic.svg"
            class="rounded-full w-12 border border-tm-gray"
            alt="Avatar"
          >
          <img
            v-else
            :src="profile.image"
            class="rounded-full w-12 border border-tm-gray"
            alt="Avatar"
          >
        </NuxtLink>
        <div>
          <input
            id="search"
            v-model.trim="form.search"
            type="search"
            class="
              w-full
              md:w-96
              px-6
              py-3
              text-sm
              font-normal
              text-tm-black
              bg-white bg-clip-padding
              border border-tm-gray
              rounded-3xl
              m-0
              placeholder:italic
              focus:text-tm-black
              focus:bg-white
              focus:border-tm-green
              focus:outline-none
            "
            placeholder="Search Townsmeet..."
          >
        </div>
        <div class="flex hidden md:block items-center">
          <NuxtLink :to="`/profile/${profile.user}/posts`">
            <img
              v-if="profile.image == null"
              src="~/assets/profilepic.svg"
              class="rounded-full w-12 border border-tm-gray"
              alt="Avatar"
            >
            <img
              v-else
              :src="profile.image"
              class="rounded-full w-12 border border-tm-gray"
              alt="Avatar"
            >
          </NuxtLink>
        </div>
        <div class="flex md:hidden">
          <!-- Mobile menu button -->
          <button
            class="
              inline-flex
              items-center
              justify-center
              p-2
              rounded-md
              text-white
              bg-tm-green
              hover:text-white hover:bg-tm-green
              focus:outline-none focus:bg-tm-green focus:text-white
            "
            @click="toggle"
          >
            <svg
              :class="[isOpen ? 'hidden' : 'block', 'h-6 w-6']"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              :class="[isOpen ? 'block' : 'hidden', 'h-6 w-6']"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
      <div :class="[isOpen ? '' : 'hidden', 'md:hidden']">
        <div class="px-2 pt-2 pb-3 sm:px-3">
          <NuxtLink
            to="/support"
            class="
                mt-1
                block
                px-3
                py-2
                rounded-md
                text-base
                font-medium
                text-tm-black
                hover:text-tm-green
                focus:outline-none focus:text-green-900
              "
          >
            Support
          </NuxtLink>
          <NuxtLink
            to="/terms"
            class="
                mt-1
                block
                px-3
                py-2
                rounded-md
                text-base
                font-medium
                text-tm-black
                hover:text-tm-green
                focus:outline-none focus:text-green-900
              "
          >
            Terms of use
          </NuxtLink>
          <NuxtLink
            to="/privacy"
            class="
                mt-1
                block
                px-3
                py-2
                rounded-md
                text-base
                font-medium
                text-tm-black
                hover:text-tm-green
                focus:outline-none focus:text-green-900
              "
          >
            Privacy policy
          </NuxtLink>
          <span
            class="
                mt-1
                mb-4
                block
                px-3
                py-2
                rounded-md
                text-base
                font-medium
                text-tm-black
                hover:text-tm-green
                focus:outline-none focus:text-green-900
              "
            @click="logout"
          >Logout</span>
        </div>
      </div>
      <!-- header ends -->
      <hr class="border border-white mb-2">
      <!-- body -->
      <div class="pb-8">
        <div class="grid grid-cols-12">
          <!-- left column/nav -->
          <div
            class="
              hidden
              sm:block
              sm:visible
              sm:col-span-3
              lg:col-span-2
              border-2 border-tm-gray
              text-center
              text-tm-black
            "
          >
            <div class="bg-white rounded-3xl py-2">
              <div class="my-10">
                <NuxtLink to="/feed">
                  <span v-if="$route.path == '/feed'">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      class="bi bi-geo-alt-fill text-tm-green mx-auto"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                    </svg>
                  </span>
                  <span v-else>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      class="bi bi-geo-alt mx-auto"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                      <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    </svg>
                  </span>
                  <h4 v-if="$route.path == '/feed'" class="text-lg font-medium leading-tight my-2 text-tm-green">
                    Feed
                  </h4>
                  <h4 v-else class="text-lg font-medium leading-tight my-2 text-tm-black">
                    Feed
                  </h4>
                </NuxtLink>
              </div>
              <div class="my-10">
                <NuxtLink to="/invite">
                  <span v-if="$route.path == '/invite'">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      class="bi bi-person-plus-fill mx-auto text-tm-green"
                      viewBox="0 0 16 16"
                    >
                      <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                      <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
                    </svg>
                  </span>
                  <span v-else class="text-3xl text-tm-black">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      class="bi bi-person-plus mx-auto"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                      <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
                    </svg>
                  </span>
                  <h4 v-if="$route.path == '/invite'" class="text-lg font-medium leading-tight my-2 text-tm-green">
                    Invite
                  </h4>
                  <h4 v-else class="text-lg font-medium leading-tight my-2">
                    Invite
                  </h4>
                </NuxtLink>
              </div>
              <div class="my-10">
                <NuxtLink to="/notifications">
                  <span v-if="$route.path == '/notifications'">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      class="bi bi-bell-fill mx-auto text-tm-green"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                    </svg>
                  </span>
                  <span v-else class="text-tm-black">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      class="bi bi-bell mx-auto"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                    </svg>
                  </span>
                  <h4 v-if="$route.path == '/notifications'" class="text-lg font-medium leading-tight my-2 text-tm-green">
                    Notifications
                  </h4>
                  <h4 v-else class="text-lg font-medium leading-tight my-2">
                    Notifications
                  </h4>
                </NuxtLink>
              </div>
              <div class="my-10">
                <NuxtLink to="/settings">
                  <span v-if="$route.path == '/settings'">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      class="bi bi-gear-fill mx-auto text-tm-green"
                      viewBox="0 0 16 16"
                    >
                      <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                    </svg>
                  </span>
                  <span v-else class="text-tm-black">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      class="bi bi-gear mx-auto"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
                      <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
                    </svg>
                  </span>
                  <h4 v-if="$route.path == '/settings'" class="text-lg font-medium leading-tight my-2 text-tm-green">
                    Settings
                  </h4>
                  <h4 v-else class="text-lg font-medium leading-tight my-2">
                    Settings
                  </h4>
                </NuxtLink>
              </div>
              <hr class="border border-2 border-dashed">
              <div class="text-center my-4">
                <p class="ml-2">
                  Support
                </p>
              </div>
              <div class="text-center my-4">
                <p class="ml-2">
                  Terms
                </p>
              </div>
              <div class="text-center my-4">
                <p class="ml-2">
                  Privacy
                </p>
              </div>
              <div class="text-center my-4" @click="logout">
                <p class="ml-2">
                  Logout
                </p>
              </div>
              <div />
              <div />
            </div>
          </div>
          <!-- content -->
          <div
            class="col-span-12 sm:col-span-9 lg:col-span-10 sm:ml-4 lg:ml-8"
          >
            <Nuxt />
          </div>
        </div>
      </div>
      <!-- mobile nav -->
      <div class="md:hidden block fixed inset-x-0 bottom-0 z-10 bg-tm-green p-2 m-2 rounded-3xl shadow">
        <div class="flex items-center justify-around text-white text-sm">
          <NuxtLink to="/feed">
            <span>
              <svg
                v-if="$route.path == '/feed'"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                class="bi bi-geo-alt-fill text-white mx-auto"
                viewBox="0 0 16 16"
              >
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
              </svg>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-geo-alt mx-auto"
                viewBox="0 0 16 16"
              >
                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              </svg>
              <span v-if="$route.path == '/feed'" class="font-bold">Feed</span>
              <span v-else>Feed</span>
            </span>
          </NuxtLink>
          <NuxtLink to="/invite">
            <span>
              <svg
                v-if="$route.path == '/invite'"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                class="bi bi-person-plus-fill mx-auto text-white"
                viewBox="0 0 16 16"
              >
                <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
              </svg>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-person-plus mx-auto"
                viewBox="0 0 16 16"
              >
                <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
              </svg>
              <span v-if="$route.path == '/invite'" class="font-bold">Invite</span>
              <span v-else>Invite</span>
            </span>
          </NuxtLink>
          <NuxtLink to="/notifications">
            <span>
              <svg
                v-if="$route.path == '/notifications'"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                class="bi bi-bell-fill mx-auto text-white"
                viewBox="0 0 16 16"
              >
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
              </svg>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-bell mx-auto"
                viewBox="0 0 16 16"
              >
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
              </svg>
              <span v-if="$route.path == '/notifications'" class="font-bold">Notifications</span>
              <span v-else>Notifications</span>
            </span>
          </NuxtLink>
          <NuxtLink to="/settings">
            <span>
              <svg
                v-if="$route.path == '/settings'"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                class="bi bi-gear-fill mx-auto text-white"
                viewBox="0 0 16 16"
              >
                <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
              </svg>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-gear mx-auto"
                viewBox="0 0 16 16"
              >
                <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
                <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
              </svg>
              <span v-if="$route.path == '/settings'" class="font-bold">Settings</span>
              <span v-else>Settings</span>
            </span>
          </NuxtLink>
        </div>
      </div>
      <!-- mobile nav ends -->
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'authorised',
  data () {
    const profile = this.$store.state.auth.profile
    return {
      profile,
      isOpen: false,
      form: {
        search: ''
      }
    }
  },
  methods: {
    toggle () {
      this.isOpen = !this.isOpen
    },
    logout () {
      this.$store.commit('auth/updateUser', {})
      this.$store.commit('auth/updateProfile', {})
      this.$store.commit('auth/updateLocation', {})
      this.$store.commit('post/updateFeed', [])
      this.$store.commit('auth/toggleAuthenticated', false)
      this.$router.push('/login')
    }
  }
}
</script>

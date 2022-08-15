<template>
  <div>
    <div>
      <nav class="bg-tm-gray">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-16">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <NuxtLink to="/">
                  <span class="hidden md:block text-tm-green">
                    <img src="~/assets/logo.png" class="object-contain w-12">
                  </span>
                  <span class="visible md:hidden text-tm-green">
                    <img src="~/assets/logo.png" class="object-contain w-12">
                  </span>
                </NuxtLink>
              </div>
            </div>
            <div class="hidden md:block">
              <div class="ml-4 flex items-center md:ml-6">
                <a
                  href="#"
                  class="
                      ml-4
                      px-3
                      py-2
                      rounded-md
                      text-base
                      font-medium
                      text-tm-black
                      hover:text-tm-green
                      focus:outline-none focus:text-green-900
                    "
                >How it works</a>
                <a
                  href="#"
                  class="
                      ml-4
                      px-3
                      py-2
                      rounded-md
                      text-base
                      font-medium
                      text-tm-black
                      hover:text-tm-green
                      focus:outline-none focus:text-green-900
                    "
                >Faq</a>
                <a
                  href="#"
                  class="
                      ml-4
                      px-3
                      py-2
                      rounded-md
                      text-base
                      font-medium
                      text-tm-black
                      hover:text-tm-green
                      focus:outline-none focus:text-green-900
                    "
                >Blog</a>
                <NuxtLink
                  v-show="$route.path != '/login'"
                  to="/login"
                  class="
                      ml-4
                      px-6
                      py-3
                      rounded-full
                      text-base
                      font-medium
                      text-tm-green
                      outline
                      outline-1
                      outline-tm-green
                      bg-tm-gray
                      shadow-md
                      hover:outline-tm-green hover:text-white hover:bg-tm-green
                      focus:outline-tm-green focus:text-white focus:bg-green-900
                    "
                >
                  Login
                </NuxtLink>
                <NuxtLink
                  v-show="$route.path != '/signup'"
                  to="/signup"
                  class="
                      ml-4
                      px-6
                      py-3
                      rounded-full
                      text-base
                      font-medium
                      text-white
                      outline
                      outline-1
                      outline-tm-green
                      bg-tm-green
                      shadow-md
                      hover:bg-teal-600 hover:text-white
                      focus:bg-teal-600 focus:text-white focus:bg-green-900
                    "
                >
                  Signup
                </NuxtLink>
              </div>
            </div>
            <div class="-mr-2 flex md:hidden">
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
        </div>
        <div :class="[isOpen ? '' : 'hidden', 'md:hidden']">
          <div class="px-2 pt-2 pb-3 sm:px-3">
            <a
              href="#"
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
            >How it works</a>
            <a
              href="#"
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
            >Faq</a>
            <a
              href="#"
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
            >Blog</a>
            <NuxtLink
              v-show="$route.path != '/login'"
              to="/login"
              class="
                px-6
                py-3
                text-base
                font-medium
                text-tm-green
                bg-tm-gray
                outline
                outline-1
                outline-tm-green
                rounded-full
                shadow-md
                hover:outline-none hover:bg-tm-green hover:text-white
                focus:outline-none focus:text-white focus:bg-green-900
              "
            >
              Login
            </NuxtLink>
            <NuxtLink
              v-show="$route.path != '/signup'"
              to="/signup"
              class="
                ml-2
                px-6
                py-3
                rounded-full
                text-base
                font-medium
                text-white
                outline
                outline-1
                outline-tm-green
                bg-tm-green
                shadow-md
                hover:bg-teal-600 hover:text-white
                focus:bg-teal-600focus:text-white focus:bg-green-900
              "
            >
              Signup
            </NuxtLink>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isOpen: false
    }
  },
  methods: {
    toggle () {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

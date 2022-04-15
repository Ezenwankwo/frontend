<template>
  <div>
    <div>
      <nav class="bg-tm-gray">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-16">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <img
                  class="h-8 w-8"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-400.svg"
                  alt="Workflow logo"
                >
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
                <a
                  href="#"
                  class="
                      ml-4
                      px-3
                      py-2
                      rounded-md
                      text-base
                      font-medium
                      text-tm-green
                      border-2
                      border-tm-green
                      bg-tm-gray
                      hover:outline-tm-green hover:text-white hover:bg-tm-green
                      focus:outline-tm-green focus:text-white focus:bg-green-900
                    "
                >Login</a>
                <a
                  href="#"
                  class="
                      ml-4
                      px-3
                      py-2
                      rounded-md
                      text-base
                      font-medium
                      text-white
                      border-2
                      border-tm-green
                      bg-tm-green
                      hover:outline-none hover:text-white
                      focus:outline-none focus:text-white focus:bg-green-900
                    "
                >Signup</a>
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
                  text-tm-green
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
            <a
              href="#"
              class="
                px-3
                py-2
                rounded-md
                text-base
                font-medium
                text-tm-green
                bg-tm-gray
                border
                border-tm-green
                hover:outline-none hover:bg-tm-green hover:text-white
                focus:outline-none focus:text-white focus:bg-green-900
              "
            >Login</a>
            <a
              href="#"
              class="
                px-3
                py-2
                rounded-md
                text-base
                font-medium
                text-white
                bg-tm-green
                border
                border-tm-green
                hover:outline-none hover:text-white
                focus:outline-none focus:text-white focus:bg-green-900
              "
            >Signup</a>
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

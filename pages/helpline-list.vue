<template>
  <div>
    <GoBack />
    <div class="rounded-3xl bg-white border-l-2 border-tm-gray p-4 sm:p-6">
      <div class="flex justify-between mb-4 md:mb-8">
        <input
          id="search"
          type="search"
          class="
              w-2/3
              md:w-1/2
              px-3
              md:px-6
              py-1.5
              md:py-3
              text-xs
              md:text-sm
              font-normal
              text-tm-black
              bg-white bg-clip-padding
              border border-tm-gray
              rounded-full
              placeholder:italic
              focus:text-tm-black
              focus:bg-white
              focus:border-tm-green
              focus:outline-none
            "
          placeholder="Type to filter safety"
        >
        <button class="flex items-center font-medium bg-tm-green rounded-full text-white text-sm md:text-base px-3 md:px-6 py-1.5 md:py-3 border-transparent">
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
          Add
        </button>
      </div>
      <div class="text-tm-black border border-tm-gray rounded-3xl mb-2 md:mb-4 p-2 md:p-4">
        <div class="flex justify-between">
          <div class="flex items-end">
            <img
              src="~/assets/profilepic.svg"
              class="rounded w-12 mr-4"
              alt="Avatar"
            >
            <p class="font-semibold text-base md:text-lg">
              Mbukpa Police Station
            </p>
          </div>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-three-dots"
              viewBox="0 0 16 16"
            >
              <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
            </svg>
          </span>
        </div>
        <p class="mt-2 md:mt-4 text-sm md:text-base">
          This is simply dummy text of the printing and typesetting industry. Lorem Ipsum.
        </p>
        <div class="flex justify-between items-center my-2 md:my-4">
          <div class="text-tm-green mt-2">
            <span class="px-2 md:px-4 py-1 md:py-2 text-sm md:text-base border border-tm-green rounded-full">08183096264</span>
            <span class="px-2 md:px-4 py-1 md:py-2 text-sm md:text-base border border-tm-green rounded-full">08055789594</span>
          </div>
          <span class="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-chat mr-2"
              viewBox="0 0 16 16"
            >
              <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
            </svg>
            <i>3</i>
          </span>
        </div>
      </div>
      <div class="text-tm-black border border-tm-gray rounded-3xl p-2 md:p-4">
        <div class="flex justify-between">
          <div class="flex items-end">
            <img
              src="~/assets/profilepic.svg"
              class="rounded w-12 mr-4"
              alt="Avatar"
            >
            <p class="font-semibold text-base md:text-lg">
              Community Vigilante Group
            </p>
          </div>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-three-dots"
              viewBox="0 0 16 16"
            >
              <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
            </svg>
          </span>
        </div>
        <p class="mt-2 md:mt-4 text-sm md:text-base">
          This is simply dummy text of the printing and typesetting industry. Lorem Ipsum.
          This is simply dummy text of the printing and typesetting industry.
        </p>
        <div class="flex justify-between items-center my-2 md:my-4">
          <div class="text-tm-green mt-2">
            <span class="px-2 md:px-4 py-1 md:py-2 text-sm md:text-base border border-tm-green rounded-full">08183096264</span>
            <span class="px-2 md:px-4 py-1 md:py-2 text-sm md:text-base border border-tm-green rounded-full">08055789594</span>
          </div>
          <span class="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-chat mr-2"
              viewBox="0 0 16 16"
            >
              <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
            </svg>
            <i>1</i>
          </span>
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

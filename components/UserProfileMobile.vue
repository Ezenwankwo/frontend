<template>
  <div
    class="
      lg:hidden
      grid grid-cols-10
      bg-white
      rounded-3xl
      p-4
      mb-2
      text-tm-black
    "
  >
    <div class="col-span-3">
      <img
        class="rounded-full w-20 sm:w-36 h-20 sm:h-36 max-w-none"
        alt="A"
        src="~/assets/profilepic.svg"
      />
    </div>
    <div class="col-span-7">
      <p class="font-semibold">Augustus Ezenwankwo</p>
      <span class="text-sm">@exalted</span>
      <p class="text-sm">
        It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged.
      </p>
      <div class="flex justify-between mt-2">
        <span class="flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-calendar-event mr-2"
            viewBox="0 0 16 16"
          >
            <path
              d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"
            />
            <path
              d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"
            />
          </svg>
          <span class="text-xs">Joined 13 Aug, 2021</span>
        </span>
        <button
          class="
            font-medium
            bg-white
            text-xs
            rounded-full
            text-tm-green
            px-4
            py-2
            border border-tm-green
          "
        >
          Edit
        </button>
      </div>
    </div>
  </div>
</template>
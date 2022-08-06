<template>
  <div
    class="
      lg:hidden
      bg-white
      rounded-3xl
      p-4
      mb-2
      text-tm-black
    "
  >
    <div>
      <li class="flex pt-4 pb-2 first:pt-0 last:pb-0">
        <img v-if="image == null" class="h-16 w-16 rounded-full" src="~/assets/profilepic.svg" alt="">
        <img v-else class="h-12 w-12 rounded-full" :src="image" alt="">
        <div class="ml-3 overflow-hidden">
          <p class="text-lg font-semibold text-tm-black truncate">
            {{ name }}
          </p>
          <p class="text-base text-slate-500">
            @{{ username }}
          </p>
        </div>
      </li>
      <p class="text-tm-black">
        {{ bio }}
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
          <span class="text-sm text-slate-500"> joined {{ $dayjs(created).fromNow() }}</span>
        </span>
        <button
          v-show="$store.state.auth.user.public_id === user"
          class="
            font-medium
            bg-white
            text-sm
            rounded-full
            text-tm-green
            px-6
            py-3
            border border-tm-green
          "
        >
          Edit
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: { type: String, default: '' },
    name: { type: String, default: '' },
    username: { type: String, default: '' },
    image: { type: String, default: '' },
    bio: { type: String, default: '' },
    created: { type: String, default: '' }
  }
}
</script>

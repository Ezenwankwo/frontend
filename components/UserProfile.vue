<template>
  <div class="border-2 border-tm-gray bg-white rounded-3xl px-4 py-8">
    <img
      v-if="image == null"
      class="rounded-full w-36 h-36 max-w-none ring-2 ring-white mx-auto"
      alt="A"
      src="~/assets/profilepic.svg"
    >
    <img
      v-else
      class="rounded-full w-36 h-36 max-w-none ring-2 ring-white mx-auto"
      alt="A"
      :src="image"
    >
    <div class="my-6 text-center">
      <p class="text-lg font-semibold">
        {{ name }}
      </p>
      <span>@{{ username }}</span>
    </div>
    <div class="text-center">
      <p>
        {{ bio }}
      </p>
      <span class="flex items-center justify-center mt-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-calendar-event mr-4"
          viewBox="0 0 16 16"
        >
          <path
            d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"
          />
          <path
            d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"
          />
        </svg>
        <span class="text-sm">Joined {{ $dayjs(created).fromNow() }}</span>
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
          mt-12
          border border-tm-green
        "
      >
        Edit Profile
      </button>
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

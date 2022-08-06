<template>
  <div
    class="
          border-2 border-tm-gray
          flex
          items-center
          justify-between
        "
  >
    <NuxtLink :to="`/profile/${$route.params.id}/posts`">
      <button class="text-xs md:text-sm px-4 md:px-6 py-2 md:py-3 rounded-full" :class="$route.path == `/profile/${$route.params.id}/posts` ? activeClass:inactiveClass">
        Posts
      </button>
    </NuxtLink>
    <NuxtLink :to="`/profile/${$route.params.id}/replies`">
      <button class="text-xs md:text-sm px-4 md:px-6 py-2 md:py-3 rounded-full" :class="$route.path == `/profile/${$route.params.id}/replies` ? activeClass:inactiveClass">
        Replies
      </button>
    </NuxtLink>
    <NuxtLink :to="`/profile/${$route.params.id}/likes`">
      <button class="text-xs md:text-sm px-4 md:px-6 py-2 md:py-3 rounded-full" :class="$route.path == `/profile/${$route.params.id}/likes` ? activeClass:inactiveClass">
        Likes
      </button>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeClass: 'bg-tm-green text-white',
      inactiveClass: 'bg-white'
    }
  }
}
</script>

<template>
  <div
    class="
          border-2 border-tm-gray
          flex
          items-center
          justify-between
        "
  >
    <NuxtLink to="/profiles/user-posts">
      <button class="text-xs md:text-sm px-4 md:px-6 py-2 md:py-3 rounded-full" :class="$route.path == '/profiles/user-posts' ? activeClass:inactiveClass">
        Posts
      </button>
    </NuxtLink>
    <NuxtLink to="/profiles/user-replies">
      <button class="text-xs md:text-sm px-4 md:px-6 py-2 md:py-3 rounded-full" :class="$route.path == '/profiles/user-replies' ? activeClass:inactiveClass">
        Replies
      </button>
    </NuxtLink>
    <NuxtLink to="/profiles/user-likes">
      <button class="text-xs md:text-sm px-4 md:px-6 py-2 md:py-3 rounded-full" :class="$route.path == '/profiles/user-likes' ? activeClass:inactiveClass">
        Likes
      </button>
    </NuxtLink>
    <NuxtLink to="/profiles/user-bookmarks">
      <button class="text-xs md:text-sm px-4 md:px-6 py-2 md:py-3 rounded-full" :class="$route.path == '/profiles/user-bookmarks' ? activeClass:inactiveClass">
        Bookmarks
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

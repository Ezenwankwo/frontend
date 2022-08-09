<template>
  <div class="grid grid-cols-10">
    <div class="col-span-10 lg:col-span-7 lg:mr-8">
      <div
        class="
          flex
          items-center
          justify-between
        "
      >
        <h4 class="flex items-center font-semibold text-lg md:text-xl text-tm-black my-2">
          Feed - 2km
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-pen-fill ml-2 text-tm-green"
            viewBox="0 0 16 16"
          >
            <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z" />
          </svg>
        </h4>
        <NuxtLink to="create-post">
          <button
            type="button"
            class="
              px-6
              py-3
              flex
              items-center
              text-base
              font-bold
              text-white
              bg-tm-green
              rounded-full
              shadow-lg
              hover:bg-teal-600
              focus:bg-teal-600
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-plus-lg mr-1"
              viewBox="0 0 16 16"
            >
              <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
            </svg>
            Post
          </button>
        </NuxtLink>
      </div>
      <div v-if="empty" class="rounded-3xl bg-white py-2 px-4 md:py-4 md:px-8 mt-4">
        <div class="my-4">
          <h4 class="text-lg font-semibold text-tm-black">
            No posts yet.
          </h4>
          <img src="~/assets/nodata.svg" class="object-fit w-1/4 my-8">
          <ul role="list" class="marker:text-tm-green list-disc pl-5 space-y-3 text-tm-black mt-2">
            <li>
              <NuxtLink to="/create-post">
                Create a post.
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/invite">
                Invite your townspeople.
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/settings">
                Change your distance preference.
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
      <PostItem
        v-for="post in posts"
        :id="post.public_id"
        :key="post.public_id"
        :category="post.category"
        :user="post.profile.user"
        :name="post.profile.name"
        :username="post.profile.username"
        :image="post.profile.image"
        :body="post.body"
        :upload="post.upload"
        :likes="post.num_likes"
        :liked="post.like_status"
        :replies="post.num_replies"
        :distance="post.distance"
        :created="post.created"
      />
    </div>
    <SideBar />
  </div>
</template>

<script>
export default {
  name: 'TownFeed',
  layout: 'AuthenticatedUser',
  data () {
    const user = this.$store.state.auth.user
    return {
      user,
      posts: [],
      lng: '',
      lat: '',
      empty: false
    }
  },
  mounted () {
    if (navigator.geolocation.getCurrentPosition) {
      navigator.geolocation.getCurrentPosition(
        this.locationSuccess,
        this.locationError,
        { enableHighAccuracy: true }
      )
    } else {
      this.$toast.error('Geolocation is not supported by this browser. Login with a different browser.', { position: 'top-center' })
    }
  },
  methods: {
    async getPosts () {
      const location = this.$store.state.auth.location
      try {
        this.$axios.setToken(this.user.token, 'Bearer')
        const res = await this.$axios.$get('/posts/post/retrieve_posts', {
          params: {
            lat: location.lat,
            lng: location.lng
          }
        })
        this.posts = res.data
        this.$store.commit('post/updateFeed', res.data)
        if (this.posts.length === 0) {
          this.empty = true
        }
      } catch (e) {
        const savedPosts = this.$store.state.post.feed
        this.posts = savedPosts
        this.$toast.warning('Failed to refresh feed.', { position: 'top-center' })
      }
    },
    locationSuccess (position) {
      const lat = position.coords.latitude
      const lng = position.coords.longitude
      this.$store.commit('auth/updateLocation', { lat, lng })
      this.getPosts()
    },
    locationError (error) {
      if (error.code === 1) {
        this.$toast.error('Location permission denied', { position: 'top-center' })
      } else {
        this.$toast.error('Location unavailable', { position: 'top-center' })
      }
    }
  }
}
</script>

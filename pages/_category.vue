<template>
  <div class="grid grid-cols-10">
    <div class="col-span-10 lg:col-span-7 lg:mr-8">
      <!-- post button and filter section-->
      <div
        class="
          flex
          items-center
          justify-between
        "
      >
        <h4 class="flex items-center font-semibold text-lg md:text-xl text-tm-black my-2">
          {{ $route.params.category.toUpperCase() }} - 2km
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
        :created="post.created"
      />
    </div>
    <SideBar />
  </div>
</template>

<script>
export default {
  name: 'CategoryPosts',
  layout: 'AuthenticatedUser',
  async asyncData ({ params, $axios, store }) {
    const user = store.state.auth.user
    try {
      $axios.setToken(user.token, 'Bearer')
      const res = await $axios.get(`/posts/category/${params.category}/category_posts`)
      return { posts: res.data.data }
    } catch (e) {
      return { posts: [] }
    }
  },
  data () {
    const user = this.$store.state.auth.user
    return {
      user
      // posts: []
    }
  }
}
</script>

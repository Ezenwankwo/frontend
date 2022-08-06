<template>
  <div class="grid grid-cols-10">
    <div class="col-span-10 lg:col-span-7 rounded-3xl lg:mr-8">
      <UserProfileMobile
        :user="profile.user"
        :name="profile.name"
        :username="profile.username"
        :image="profile.image"
        :bio="profile.bio"
        :created="profile.created"
      />
      <UserProfileNav />
      <PostItem
        v-for="post in posts"
        :id="post.public_id"
        :key="post.public_id"
        :category="post.category"
        :user="post.profile.user"
        :profile="post.profile.public_id"
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
    <div class="col-span-3 invisible lg:visible text-tm-black">
      <UserProfile
        :user="profile.user"
        :name="profile.name"
        :username="profile.username"
        :image="profile.image"
        :bio="profile.bio"
        :created="profile.created"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserLikes',
  layout: 'AuthenticatedUser',
  async asyncData ({ params, $axios, store }) {
    const user = store.state.auth.user
    try {
      $axios.setToken(user.token, 'Bearer')
      const res = await $axios.get(`/users/profile/${params.id}/retrieve_profile`)
      return { profile: res.data.data }
    } catch (e) {
      return { profile: {} }
    }
  },
  data () {
    const user = this.$store.state.auth.user
    return {
      user,
      posts: []
    }
  },
  async fetch () {
    try {
      this.$axios.setToken(this.user.token, 'Bearer')
      const res = await this.$axios.get(`/posts/post/${this.$route.params.id}/user_likes`)
      this.posts = res.data.data
    } catch (e) {
      this.$toast.error(e.response.data.data, { position: 'top-center' })
    }
  }
}
</script>

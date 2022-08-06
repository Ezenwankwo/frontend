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
      <ReplyItem
        v-for="reply in replies"
        :id="reply.public_id"
        :key="reply.public_id"
        :category="reply.category"
        :user="reply.profile.user"
        :name="reply.profile.name"
        :username="reply.profile.username"
        :image="reply.profile.image"
        :body="reply.body"
        :upload="reply.upload"
        :likes="reply.num_likes"
        :liked="reply.like_status"
        :replies="reply.num_replies"
        :created="reply.created"
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
  name: 'UserReplies',
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
      replies: []
    }
  },
  async fetch () {
    try {
      this.$axios.setToken(this.user.token, 'Bearer')
      const res = await this.$axios.get(`/posts/post/${this.$route.params.id}/user_replies`)
      this.replies = res.data.data
    } catch (e) {
      this.$toast.error(e.response.data.data, { position: 'top-center' })
    }
  }
}
</script>

<template>
  <b-col sm="12" md="9" lg="5" class="px-0">
    <div class="border-bottom p-3 mx-0 h6 d-flex justify-content-between">
      <div class="mt-2">
        <GoBack />Home
      </div>
      <CreatePost />
    </div>
    <Post
      v-for="post in posts"
      :key="post.id"
      :category="post.category"
      :town="post.town_name"
      :user="post.my_user"
      :created="post.created_at"
      :firstname="post.myuserprofile.first_name"
      :lastname="post.myuserprofile.last_name"
      :following="post.following.category"
      :username="post.myuserprofile.username"
      :body="post.body"
      :nolikes="post.num_of_likes"
      :nocomments="post.num_of_comments"
      :likes="post.likes"
      :photo="post.myuserprofile.profile_photo"
      :postid="post.id"
      :authuser="userID"
    />
  </b-col>
</template>

<script>
export default {
  layout: 'user',
  data () {
    const userId = this.$cookies.get('userId')
    return {
      posts: [],
      userID: userId
    }
  },
  async fetch () {
    const token = this.$cookies.get('userToken')
    this.$axios.setHeader('Authorization', `Token ${token}`)
    this.posts = await this.$axios.$get('/feed/posts/')
  }
}
</script>

<style>
.link {
  color: #489B16 !important;
  text-decoration: none !important;
}
.link:hover {
  color: #489B16;
}
.badge {
  background-color: #489B16;
}
.liked {
  color: #ffa400;
}
.not-liked {
  color: #212529;
}
</style>

<template>
  <b-col sm="12" md="9" lg="5" class="px-0">
    <div class="border-bottom p-3 mx-0 h6 d-flex justify-content-between">
      <div class="mt-2">
        <GoBack />{{ town.name }} {{ town.state }}
      </div>
      <CreatePost />
    </div>
    <div class="d-flex flex-wrap p-3 mx-0">
      <b-button :to="`/town/${town.id}/people`" pill class="town-item mt-2 mr-2">
        People
      </b-button>
      <b-button pill class="town-item mt-2 mr-2">
        Businesses
      </b-button>
      <b-button pill class="town-item mt-2 mr-2">
        Public Officers
      </b-button>
      <b-button pill class="town-item mt-2 mr-2">
        Agencies
      </b-button>
      <b-button pill class="town-item mt-2 mr-2">
        Non-profit
      </b-button>
      <b-button pill class="town-item mt-2 mr-2">
        Religious
      </b-button>
      <b-button pill class="town-item mt-2 mr-2">
        Traditional
      </b-button>
    </div>
    <b-nav pills justified class="mb-3 mt-2">
      <b-nav-item to="latest">
        Latest
      </b-nav-item>
      <b-nav-item to="popular">
        Popular
      </b-nav-item>
    </b-nav>
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
  async asyncData ({ app, params, $axios }) {
    const token = app.$cookies.get('userToken')
    $axios.setHeader('Authorization', `Token ${token}`)
    const town = await $axios.$get(`/town/user/${params.id}`)
    return { town }
  },
  data () {
    return {
      posts: []
    }
  },
  async fetch () {
    const token = this.$cookies.get('userToken')
    this.$axios.setHeader('Authorization', `Token ${token}`)
    this.posts = await this.$axios.$get(`/feed/town/${this.town.id}/latest`)
  }
}
</script>

<style>
.town-item {
  background-color: #fff;
  border-color: #489B16;
  color: #000;
}
.nuxt-link-active {
  color: white !important;
  background-color: #489B16;
  border-radius: 0 !important;
}
</style>

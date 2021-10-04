<template>
  <b-col cols="5" class="px-0">
    <div class="border-bottom p-3 mx-0 h6">
      <GoBack />Post
    </div>
    <div class="border-bottom mb-0 pb-2">
      <b-media tag="li" class="px-3 py-0">
        <template #aside>
          <NuxtLink :to="`/profiles/${post.my_user}/profile`">
            <b-img v-if="post.myuserprofile.profile_photo == null" src="/profile.png" width="42" alt="placeholder" />
            <b-img v-else :src="post.myuserprofile.profile_photo" width="42" alt="placeholder" />
          </NuxtLink>
        </template>
        <h6 class="my-0">
          <a class="link" href="#">{{ post.category }}</a> in
          <a class="link" href="#">{{ post.town_name }}</a>,
          <small>{{ $dayjs(post.created_at).fromNow() }}</small>
        </h6>
        <small class="my-0">
          {{ post.myuserprofile.first_name }} {{ post.myuserprofile.last_name }}
          <b-badge class="badge" pill>
            {{ post.following.category }}
          </b-badge>
          | @{{ post.myuserprofile.username }}
        </small>
        <p class="mt-2 mb-3 lead font-weight-normal">
          {{ post.body }}
        </p>
        <p class="d-flex justify-content-between my-0 mr-5 lead">
          <span><b-icon icon="chat-left" class="mr-2" /> {{ post.num_of_comments }}</span>
          <span>
            <b-icon v-if="post.likes.includes(userID)" :icon="likedIcon" class="mr-2" @click.prevent="liked()" />
            <b-icon v-else :icon="unlikedIcon" class="mr-2" @click.prevent="unliked()" />
            {{ post.num_of_likes }}
          </span>
          <span><b-icon icon="share" /></span>
          <span><b-icon icon="info-circle" /></span>
        </p>
      </b-media>
    </div>
    <ReplyPostForm
      :postid="post.id"
    />
    <hr>
    <ReplyPost
      v-for="comment in post.replies"
      :key="comment.id"
      :user="comment.my_user"
      :created="comment.created_at"
      :firstname="comment.myuserprofile.first_name"
      :lastname="comment.myuserprofile.last_name"
      :following="comment.following.category"
      :username="comment.myuserprofile.username"
      :body="comment.body"
      :nolikes="comment.num_of_likes"
      :nocomments="comment.num_of_comments"
      :like="comment.likes"
      :photo="comment.myuserprofile.profile_photo"
      :postid="comment.post.id"
      :authuser="userID"
      :commentid="comment.id"
    />
  </b-col>
</template>

<script>
export default {
  layout: 'user',
  async asyncData ({ app, params, $axios }) {
    const token = app.$cookies.get('userToken')
    $axios.setHeader('Authorization', `Token ${token}`)
    const postDetail = await $axios.$get(`/feed/posts/${params.id}`)
    return { post: postDetail }
  },
  data () {
    const userId = this.$cookies.get('userId')
    return {
      userID: userId,
      likedIcon: 'heart-fill',
      unlikedIcon: 'heart',
      post: {}
    }
  },
  methods: {
    async liked () {
      const userId = this.$cookies.get('userId')
      const token = this.$cookies.get('userToken')
      try {
        this.$axios.setHeader('Authorization', `Token ${token}`)
        const res = await this.$axios.get(`/feed/like_post/${userId}/${this.post.id}/`)
        if (res.status === 200) {
          this.likedIcon = 'heart'
          this.post.num_of_likes = res.data.num_likes
        } else {
          this.likedIcon = 'heart-fill'
          this.post.num_of_likes = res.data.num_likes
        }
      } catch {
        this.error = 'action failed'
      }
    },
    async unliked () {
      const userId = this.$cookies.get('userId')
      const token = this.$cookies.get('userToken')
      try {
        this.$axios.setHeader('Authorization', `Token ${token}`)
        const res = await this.$axios.get(`/feed/like_post/${userId}/${this.post.id}/`)
        if (res.status === 201) {
          this.unlikedIcon = 'heart-fill'
          this.post.num_of_likes = res.data.num_likes
        } else {
          this.unlikedIcon = 'heart'
          this.post.noLikes = res.data.num_likes
        }
      } catch {
        this.error = 'action failed'
      }
    }
  }
}
</script>

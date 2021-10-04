<template>
  <b-col cols="5" class="px-0">
    <div class="border-bottom p-3 mx-0 h6">
      <GoBack />Reply
    </div>
    <div class="border-bottom mb-0 pb-2">
      <b-media tag="li" class="px-3 py-0">
        <template #aside>
          <NuxtLink :to="`/profiles/${reply.my_user}/profile`">
            <b-img v-if="reply.myuserprofile.profile_photo == null" src="/profile.png" width="42" alt="placeholder" />
            <b-img v-else :src="reply.myuserprofile.profile_photo" width="42" alt="placeholder" />
          </NuxtLink>
        </template>
        <h6 class="my-0">
          Reply to
          <NuxtLink :to="`/posts/${reply.post}/postdetail`" class="link">
            Post
          </NuxtLink>,
          <small>{{ $dayjs(reply.created_at).fromNow() }}</small>
        </h6>
        <small class="my-0">
          {{ reply.myuserprofile.first_name }} {{ reply.myuserprofile.last_name }}
          <b-badge class="badge" pill>
            {{ reply.following.category }}
          </b-badge>
          | @{{ reply.myuserprofile.username }}
        </small>
        <p class="mt-2 mb-3 lead font-weight-normal">
          {{ reply.body }}
        </p>
        <p class="d-flex justify-content-between my-0 mr-5 lead">
          <span><b-icon icon="chat-left" class="mr-2" /> {{ reply.num_of_comments }}</span>
          <span>
            <b-icon v-if="reply.likes.includes(userID)" icon="heart-fill" class="mr-2" @click.prevent="liked()" />
            <b-icon v-else :icon="unlikedIcon" class="mr-2" @click.prevent="unliked()" />
            {{ reply.num_of_likes }}
          </span>
          <span><b-icon icon="share" /></span>
          <span><b-icon icon="info-circle" /></span>
        </p>
      </b-media>
    </div>
    <ReplyCommentForm
      :post="reply.post"
      :parentcomment="reply.id"
    />
    <hr>
    <ReplyComment
      v-for="comment in reply.replies"
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
      :postid="comment.post"
      :commentid="comment.id"
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
    const replyDetail = await $axios.$get(`/feed/replies/${params.id}`)
    return { reply: replyDetail }
  },
  data () {
    const userId = this.$cookies.get('userId')
    return {
      userID: userId,
      likedIcon: 'heart-fill',
      unlikedIcon: 'heart',
      reply: {}
    }
  },
  methods: {
    async liked () {
      const userId = this.$cookies.get('userId')
      const token = this.$cookies.get('userToken')
      try {
        this.$axios.setHeader('Authorization', `Token ${token}`)
        const res = await this.$axios.get(`/feed/like_comment/${userId}/${this.reply.id}/`)
        if (res.status === 200) {
          this.likedIcon = 'heart'
          this.reply.num_of_likes = res.data.num_likes
        } else {
          this.likedIcon = 'heart-fill'
          this.reply.num_of_likes = res.data.num_likes
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
        const res = await this.$axios.get(`/feed/like_comment/${userId}/${this.reply.id}/`)
        if (res.status === 201) {
          this.unlikedIcon = 'heart-fill'
          this.reply.num_of_likes = res.data.num_likes
        } else {
          this.unlikedIcon = 'heart'
          this.reply.num_of_likes = res.data.num_likes
        }
      } catch {
        this.error = 'action failed'
      }
    }
  }
}
</script>

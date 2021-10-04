<template>
  <div>
    <b-media tag="li" class="px-3 py-0">
      <template #aside>
        <NuxtLink :to="`/profiles/${user}/profile`">
          <b-img v-if="photo == null" src="/profile.png" width="42" alt="placeholder" />
          <b-img v-else :src="photo" width="42" alt="placeholder" />
        </NuxtLink>
      </template>
      <h6 class="my-0">
        Reply to <a href="#" class="link"> Post</a>,
        <small>{{ $dayjs(created).fromNow() }}</small>
      </h6>
      <small class="my-0">
        {{ firstname }} {{ lastname }}
        <b-badge class="badge" pill>
          {{ following }}
        </b-badge>
        | @{{ username }}
      </small>
      <NuxtLink :to="`/replies/${commentid}/replydetail`" class="post-body">
        <p class="mt-2 mb-3">
          {{ body }}
        </p>
      </NuxtLink>
      <p class="d-flex justify-content-between my-0 mr-5">
        <span>
          <NuxtLink :to="`/replies/${commentid}/replydetail`" class="post-body">
            <b-icon icon="chat-left" /> 0
          </NuxtLink>
        </span>
        <span>
          <b-icon v-if="likes.includes(authuser)" icon="heart-fill" />
          <b-icon v-else icon="heart" />
          {{ nolikes }}
        </span>
        <span><b-icon icon="share" /></span>
        <span><b-icon icon="info-circle" /></span>
      </p>
    </b-media>
    <hr>
  </div>
</template>

<script>
export default {
  props: {
    user: { type: Number, default: 0 },
    authuser: { type: Number, default: 0 },
    postid: { type: String, default: '' },
    commentid: { type: String, default: '' },
    category: { type: String, default: '' },
    town: { type: String, default: '' },
    created: { type: String, default: '' },
    firstname: { type: String, default: '' },
    lastname: { type: String, default: '' },
    following: { type: String, default: '' },
    username: { type: String, default: '' },
    body: { type: String, default: '' },
    nolikes: { type: Number, default: 0 },
    likes: { type: Array, default: () => [] },
    photo: { type: String, default: '' }
  }
}
</script>

<style>
.post-body {
  color: #212529 !important;
  text-decoration: none !important;
}
</style>

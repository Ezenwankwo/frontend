<template>
  <b-col sm="12" md="9" lg="5" class="px-0">
    <div class="border-bottom p-3 mx-0 h6 d-flex justify-content-between">
      <div class="mt-2">
        <GoBack />Notifications
      </div>
      <CreatePost />
    </div>
    <div>
      <b-list-group v-for="notification in notifications" :key="notification.id">
        <b-list-group-item button class="d-flex border-top-0 border-right-0 border-left-0 mt-0 justify-content-between align-items-center">
          <b-media class="pl-3 mb-0 pb-0">
            <template #aside>
              <NuxtLink :to="`/profiles/${notification.actor.profile.user}/posts`">
                <b-img
                  v-if="notification.actor.profile.profile_photo == null"
                  src="/profile.png"
                  rounded="circle"
                  width="42"
                  alt="placeholder"
                />
                <b-img
                  v-else
                  :src="notification.actor.profile.profile_photo"
                  rounded="circle"
                  width="42"
                  alt="placeholder"
                />
              </NuxtLink>
            </template>
            <div class="d-flex justify-content-between align-items-center">
              <div>
                <p class="mt-0 mb-0">
                  <span>
                    <i>{{ notification.verb }}</i> your
                    <NuxtLink v-if="notification.target.category" :to="`/posts/${notification.target.id}/postdetail`">post</NuxtLink>
                    <NuxtLink v-else :to="`/replies/${notification.target.id}/replydetail`">reply</NuxtLink>
                    in
                    <NuxtLink :to="`/town/${notification.target.following.town.id}/latest`">{{ notification.target.following.town.name }}</NuxtLink>
                  </span>
                </p>
                <small>
                  {{ notification.actor.profile.first_name }} {{ notification.actor.profile.last_name }}
                  <b-badge class="badge" pill>
                    {{ notification.target.following.category }}
                  </b-badge> |
                  {{ $dayjs(notification.timestamp).fromNow() }}
                </small>
              </div>
            </div>
          </b-media>
          <b-icon v-if="notification.verb == 'liked'" icon="heart-fill" />
          <b-icon v-else icon="chat-left" />
        </b-list-group-item>
      </b-list-group>
    </div>
  </b-col>
</template>

<script>
export default {
  layout: 'user',
  data () {
    return {
      notifications: []
    }
  },
  async fetch () {
    const token = this.$cookies.get('userToken')
    this.$axios.setHeader('Authorization', `Token ${token}`)
    this.notifications = await this.$axios.$get('/notification/user')
  }
}
</script>

<style>
span > a {
  color: #489B16 !important;
}
</style>

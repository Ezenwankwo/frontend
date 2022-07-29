<template>
  <div class="grid grid-cols-10">
    <div class="col-span-10 lg:col-span-7 lg:mr-8">
      <h2 class="font-bold text-2xl text-tm-black my-2">
        Notifications
      </h2>
      <NotificationItem
        v-for="notification in notifications"
        :key="notification.id"
        :user="notification.actor.profile.public_id"
        :name="notification.actor.profile.name"
        :image="notification.actor.profile.image"
        :post="notification.target.public_id"
        :body="notification.target.body"
        :verb="notification.verb"
        :created="notification.timestamp"
      />
    </div>
    <SideBar />
  </div>
</template>

<script>
export default {
  name: 'TownNotifications',
  layout: 'AuthenticatedUser',
  data () {
    const user = this.$store.state.auth.user
    return {
      user,
      notifications: []
    }
  },
  async fetch () {
    try {
      this.$axios.setToken(this.user.token, 'Bearer')
      const res = await this.$axios.get('/notifications/notification/user')
      this.notifications = res.data.data
    } catch (e) {
      this.$toast.error(e.response.data.data, { position: 'top-center' })
    }
  }
}
</script>

<template>
  <div class="grid grid-cols-10">
    <div class="col-span-10 lg:col-span-7 lg:mr-8">
      <h2 class="font-bold text-2xl text-tm-black my-2">
        Notifications
      </h2>
      <div v-if="empty" class="rounded-3xl bg-white py-2 px-4 md:py-4 md:px-8 mt-4">
        <div class="my-4">
          <h4 class="text-lg font-semibold text-tm-black">
            No notifications yet.
          </h4>
        </div>
      </div>
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
      notifications: [],
      empty: false
    }
  },
  async fetch () {
    try {
      this.$axios.setToken(this.user.token, 'Bearer')
      const res = await this.$axios.$get('/notifications/notification/user')
      this.notifications = res.data.filter(notification => notification.target !== null)
      if (this.notifications.length === 0) {
        this.empty = true
      }
    } catch (e) {
      this.$toast.error('Failed to fetch notifications', { position: 'top-center' })
      this.empty = true
    }
  }
}
</script>

<template>
  <b-col md="3" class="border-right px-5 d-none d-md-block">
    <div class="pt-5" style="position: fixed;">
      <b-img src="/logo.png" alt="logo" class="pl-3" />
      <b-list-group class="my-5 py-4 border-0 d-none d-lg-block">
        <b-list-group-item to="/feed" class="py-3 border-0 h4 nav-item">
          <b-icon icon="house-door" class="mr-3" />
          Home
        </b-list-group-item>
        <b-list-group-item to="/towns" class="py-3 border-0 h4 nav-item">
          <b-icon icon="geo-alt" class="mr-3" />
          Towns
        </b-list-group-item>
        <b-list-group-item to="/explore/trending" class="py-3 border-0 h4 nav-item">
          <b-icon icon="search" class="mr-3" />
          Explore
        </b-list-group-item>
        <b-list-group-item to="/notifications" class="py-3 border-0 h4 nav-item">
          <b-icon icon="bell" class="mr-3" />
          Notification
        </b-list-group-item>
      </b-list-group>
      <b-list-group class="my-5 py-4 border-0 w-50 d-lg-none">
        <b-list-group-item to="/feed" class="py-3 border-0 h2 nav-item">
          <b-icon icon="house-door" class="mr-3" />
        </b-list-group-item>
        <b-list-group-item to="/towns" class="py-3 border-0 h2 nav-item">
          <b-icon icon="geo-alt" class="mr-3" />
        </b-list-group-item>
        <b-list-group-item to="/explore/trending" class="py-3 border-0 h2 nav-item">
          <b-icon icon="search" class="mr-3" />
        </b-list-group-item>
        <b-list-group-item to="/notifications" class="py-3 border-0 h2 nav-item">
          <b-icon icon="bell" class="mr-3" />
        </b-list-group-item>
      </b-list-group>
      <b-media class="pl-3 mb-0 pb-0">
        <template #aside>
          <NuxtLink :to="`/profiles/${profile.user}/posts`">
            <b-img
              v-if="profile.profile_photo == null"
              src="/profile.png"
              rounded="circle"
              width="42"
              alt="placeholder"
            />
            <b-img
              v-else
              :src="profile.profile_photo"
              rounded="circle"
              width="42"
              alt="placeholder"
            />
          </NuxtLink>
        </template>
        <div class="d-flex justify-content-between align-items-center d-none d-md-none d-lg-block">
          <div>
            <NuxtLink :to="`/profiles/${profile.user}/posts`" class="profile">
              <h6 class="mt-0 mb-0">
                {{ profile.first_name }} {{ profile.last_name }}
              </h6>
              <small class="mt-0">
                @{{ profile.username }}
              </small>
            </NuxtLink>
          </div>
        </div>
      </b-media>
      <b-button size="sm" variant="outline-info" class="signout mt-5 ml-3" @click="logOut">
        <b-icon icon="power" aria-hidden="true" />
      </b-button>
    </div>
  </b-col>
</template>

<script>
export default {
  data () {
    return {
      hover: false,
      profile: {}
    }
  },
  async fetch () {
    try {
      const id = this.$cookies.get('userId')
      const token = this.$cookies.get('userToken')
      this.$axios.setHeader('Authorization', `Token ${token}`)
      this.profile = await this.$axios.$get(`/user/personal/${id}`)
    } catch {
      this.error = 'failed'
    }
  },
  methods: {
    logOut () {
      this.$cookies.removeAll()
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.nuxt-link-active {
  color: #489B16 !important;
  background-color: white;
}
.nav-item:hover {
  color: #489B16;
}
.signout {
  background-color: white;
  color: inherit;
  border-color: #489B16;
}
.signout:hover {
  background-color: #489B16;
}
.profile {
  color: #000 !important;
  text-decoration: none !important;
  background-color: inherit;
}
</style>

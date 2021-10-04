<template>
  <b-col cols="5" class="px-0">
    <div class="border-bottom p-3 mx-0 h6">
      <GoBack />Profile
    </div>
    <div class="border-0 p-3 mx-0">
      <b-media class="pl-3 mb-0 pb-0">
        <template #aside>
          <b-img
            v-if="profile.profile_photo == null"
            src="/profile.png"
            rounded="circle"
            width="84"
            alt="placeholder"
          />
          <b-img
            v-else
            :src="profile.profile_photo"
            rounded="circle"
            width="84"
            alt="placeholder"
          />
        </template>
        <div class="d-flex justify-content-between align-items-center">
          <div>
            <h5 class="mt-0 mb-0">
              {{ profile.first_name }} {{ profile.last_name }}
            </h5>
            <small class="mt-0">
              @{{ profile.username }}
            </small>
          </div>
          <div>
            <b-button pill size="sm" class="edit mt-0">
              Edit profile
            </b-button>
          </div>
        </div>
        <p class="mt-2">
          {{ profile.bio }}
        </p>
        <p class="d-inline">
          <span class="mr-5 link"><b-icon icon="geo-alt" class="mr-1" />3 Towns</span>
          <span><b-icon icon="calendar2-check" class="mr-1" />Joined Sept, 2021.</span>
        </p>
      </b-media>
    </div>
    <div class="mb-3">
      <b-nav pills justified class="mt-3">
        <b-nav-item to="posts">
          Posts
        </b-nav-item>
        <b-nav-item to="replies">
          Replies
        </b-nav-item>
        <b-nav-item to="likes">
          Likes
        </b-nav-item>
        <b-nav-item to="bookmarks">
          Bookmarks
        </b-nav-item>
      </b-nav>
    </div>
  </b-col>
</template>

<script>
export default {
  layout: 'user',
  async asyncData ({ app, params, $axios }) {
    const token = app.$cookies.get('userToken')
    $axios.setHeader('Authorization', `Token ${token}`)
    const profile = await $axios.$get(`/user/personal/${params.id}/`)
    return { profile }
  }
}
</script>

<style>
.nav-item.nav-item.nav-item a {
  color: inherit;
}
.edit {
  background-color: #fff !important;
  border-color: #489B16 !important;
  border-radius: 0;
  color: inherit;
}
.edit:hover {
  background-color: #489B16 !important;
}
.nuxt-link-active {
  color: white !important;
  background-color: #489B16;
  border-radius: 0 !important;
}
</style>

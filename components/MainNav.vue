<template>
  <b-col cols="3" class="border-right px-5">
    <div class="pt-5">
      <b-img src="/logo.png" alt="logo" class="pl-3" />
      <b-list-group class="my-5 py-4 border-0">
        <b-list-group-item to="feed" class="py-3 border-0 h4 nav-item">
          <b-icon icon="house-door" class="mr-3" />
          Home
        </b-list-group-item>
        <b-list-group-item to="towns" class="py-3 border-0 h4 nav-item">
          <b-icon icon="geo-alt" class="mr-3" />
          Towns
        </b-list-group-item>
        <b-list-group-item to="explore" class="py-3 border-0 h4 nav-item">
          <b-icon icon="search" class="mr-3" />
          Explore
        </b-list-group-item>
        <b-list-group-item to="notification" class="py-3 border-0 h4 nav-item">
          <b-icon icon="bell" class="mr-3" />
          Notification
        </b-list-group-item>
        <b-list-group-item to="profile" class="py-3 border-0 h4 nav-item">
          <b-icon icon="person" class="mr-3" />
          Profile
        </b-list-group-item>
      </b-list-group>
      <b-media class="pl-3 mb-0 pb-0">
        <template #aside>
          <b-img
            src="/profile.png"
            rounded="circle"
            width="42"
            alt="placeholder"
          />
        </template>
        <h6 class="mt-0 mb-0">
          Daniel Ugah
        </h6>
        <small class="mt-0">
          @crassitametnibh
        </small>
      </b-media>
    </div>
  </b-col>
</template>

<script>
export default {
  data () {
    return {
      hover: false
    }
  }
}
</script>

<style>
.nuxt-link-active {
  color: white;
  background-color: #489B16;
}
.nav-item:hover {
  background-color: #489B16;
  color: white;
}
</style>

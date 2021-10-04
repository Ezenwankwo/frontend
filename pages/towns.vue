<template>
  <b-col cols="5" class="px-0">
    <div class="border-bottom mb-0 p-3 mx-0 h6">
      <GoBack />Towns
    </div>
    <div>
      <b-list-group v-for="follower in followers" :key="follower.id">
        <NuxtLink :to="`/town/${follower.town.id}/latest`" style="text-decoration: none;">
          <b-list-group-item button class="d-flex border-top-0 border-right-0 border-left-0 mt-0 justify-content-between align-items-center">
            <div>
              <span class="font-weight-bold">{{ follower.town.name }}, {{ follower.town.state }}</span><br>
              <small>followed {{ $dayjs(follower.created_at).format('MMM D, YYYY') }}</small>
            </div>
            <b-button pill variant="success" class="follow">
              {{ follower.category }}
            </b-button>
          </b-list-group-item>
        </NuxtLink>
      </b-list-group>
      <p class="lead text-center mt-5">
        You can follow 3 more towns
      </p>
    </div>
  </b-col>
</template>

<script>
export default {
  layout: 'user',
  data () {
    return {
      followers: []
    }
  },
  async fetch () {
    const token = this.$cookies.get('userToken')
    this.$axios.setHeader('Authorization', `Token ${token}`)
    this.followers = await this.$axios.$get('http://127.0.0.1:8000/town/followers')
  }
}
</script>

<style>
.follow {
  background-color: #489B16;
  border: 0;
}
</style>

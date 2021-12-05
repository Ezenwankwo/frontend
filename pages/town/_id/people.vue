<template>
  <b-col sm="12" md="9" lg="5" class="px-0">
    <div class="border-bottom p-3 mx-0 h6 d-flex justify-content-between">
      <div class="mt-2">
        <GoBack />People
      </div>
      <CreatePost />
    </div>
    <div>
      <b-list-group v-for="person in people" :key="person.id">
        <NuxtLink :to="`/profiles/${person.my_user.user}/posts`" style="text-decoration: none;">
          <b-list-group-item button class="d-flex border-top-0 border-right-0 border-left-0 mt-0 justify-content-between align-items-center">
            <b-media class="pl-3 mb-0 pb-0">
              <template #aside>
                <NuxtLink :to="`/profiles/${person.my_user.user}/posts`">
                  <b-img
                    v-if="person.my_user.profile_photo == null"
                    src="/profile.png"
                    rounded="circle"
                    width="42"
                    alt="placeholder"
                  />
                  <b-img
                    v-else
                    :src="person.my_user.profile_photo"
                    rounded="circle"
                    width="42"
                    alt="placeholder"
                  />
                </NuxtLink>
              </template>
              <div class="d-flex justify-content-between align-items-center">
                <div>
                  <NuxtLink :to="`/profiles/${person.my_user.user}/posts`" class="profile">
                    <h6 class="mt-0 mb-0">
                      {{ person.my_user.first_name }} {{ person.my_user.last_name }}
                    </h6>
                    <small class="mt-0">
                      @{{ person.my_user.username }}
                    </small>
                  </NuxtLink> |
                  <small>followed {{ $dayjs(person.created_at).format('MMM D, YYYY') }}</small>
                </div>
              </div>
            </b-media>
            <b-button pill variant="success" class="follow">
              {{ person.category }}
            </b-button>
          </b-list-group-item>
        </NuxtLink>
      </b-list-group>
      <p class="lead text-center mt-5">
        Invite your townspeople
      </p>
    </div>
  </b-col>
</template>

<script>
export default {
  layout: 'user',
  async asyncData ({ app, params, $axios }) {
    const token = app.$cookies.get('userToken')
    $axios.setHeader('Authorization', `Token ${token}`)
    const people = await $axios.$get(`/town/${params.id}/people`)
    return { people }
  },
  data () {
    return {}
  }
}
</script>

<style>
.follow {
  background-color: #489B16;
  border: 0;
}
</style>

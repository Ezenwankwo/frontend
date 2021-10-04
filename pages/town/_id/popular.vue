<template>
  <b-col cols="5" class="px-0">
    <div class="border-bottom mb-0 p-3 mx-0 h6">
      <GoBack />{{ town.name }}, {{ town.state }}
    </div>
    <div class="d-flex flex-wrap p-3 mx-0">
      <b-button pill class="town-item mt-2 mr-2">
        People
      </b-button>
      <b-button pill class="town-item mt-2 mr-2">
        Businesses
      </b-button>
      <b-button pill class="town-item mt-2 mr-2">
        Public Officers
      </b-button>
      <b-button pill class="town-item mt-2 mr-2">
        Agencies
      </b-button>
      <b-button pill class="town-item mt-2 mr-2">
        Non-profit
      </b-button>
      <b-button pill class="town-item mt-2 mr-2">
        Religious
      </b-button>
      <b-button pill class="town-item mt-2 mr-2">
        Traditional
      </b-button>
    </div>
    <b-nav pills justified class="mb-3 mt-2">
      <b-nav-item to="latest">
        Latest
      </b-nav-item>
      <b-nav-item to="popular">
        Popular
      </b-nav-item>
    </b-nav>
  </b-col>
</template>

<script>
export default {
  layout: 'user',
  async asyncData ({ app, params, $axios }) {
    const token = app.$cookies.get('userToken')
    $axios.setHeader('Authorization', `Token ${token}`)
    const town = await $axios.$get(`/town/user/${params.id}`)
    return { town }
  },
  data () {
    return {}
  }
}
</script>

<style>
.town-item {
  background-color: #fff;
  border-color: #489B16;
  color: #000;
}
.nuxt-link-active {
  color: white !important;
  background-color: #489B16;
  border-radius: 0 !important;
}
</style>

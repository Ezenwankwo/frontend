<template class="page">
  <b-container>
    <b-row align-v="center" align-h="center" class="vh-100">
      <b-col cols="12" md="8" lg="5">
        <b-card title="Towns you're following">
          <b-card-text>
            You can only unfollow a town after 30days.
          </b-card-text>
          <b-list-group v-for="town in userTowns" :key="town.id">
            <b-list-group-item class="d-flex justify-content-between align-items-center">
              {{ town }}
              <b-button variant="success" size="sm">
                Following
              </b-button>
            </b-list-group-item>
          </b-list-group>
          <b-button block type="submit" class="button" variant="success" @click="toFeed">
            Go to feed
          </b-button>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data () {
    const usertowns = this.$cookies.get('userTowns')
    return {
      userTowns: usertowns
    }
  },
  methods: {
    toFeed () {
      this.$router.push('./feed')
    }
  }
}
</script>

<style>
.page {
  background-color: #E5E5E5;
}
.link {
  color: #489B16;
  text-decoration: none;
}
.button {
  background-color: #489B16;
  border: 0;
  height: 50px;
  font-weight: 400;
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
}
.input {
  display: block;
  width: 100%;
  height: 50px;
  padding: 1.1rem;
  margin: 20px 0px 20px 0px;
  color: #464a4c;
  border: 1px solid #e6ecf5;
  border-radius: 3px;
}
</style>

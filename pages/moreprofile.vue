<template class="page">
  <b-container>
    <b-row class="center" align-h="center">
      <b-col cols="12" md="8" lg="5">
        <b-card title="Create your profile">
          <b-card-text>
            Spice your profile
          </b-card-text>
          <b-form class="mt-5" @submit="onSubmit">
            <b-form-file
              id="avatar"
              v-model="avatar"
              placeholder="Choose profile photo"
            />
            <b-form-textarea
              id="bio"
              v-model="bio"
              placeholder="Bio"
              class="input"
            />
            <b-button block type="submit" class="button" variant="success">
              Continue
            </b-button>
          </b-form>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data () {
    return {
      avatar: null,
      bio: ''
    }
  },
  methods: {
    onSubmit () {}
  }
}
</script>

<style>
.page {
  background-color: #E5E5E5;
}
.center {
  margin-top: 100px;
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

<template>
  <b-form class="mt-0 mx-0 border-0">
    <b-form-textarea
      id="reply"
      v-model="text"
      placeholder="Write your reply here..."
      max-rows="8"
      class="m-0 border-0 reply"
      style="overflow:hidden"
    />
    <div class="d-flex justify-content-between my-0 py-0 mx-3">
      <b-icon icon="camera" class="mt-3 h4" />
      <b-button pill size="sm" class="button my-0" @click="onSubmit">
        Reply
      </b-button>
    </div>
  </b-form>
</template>

<script>
export default {
  props: {
    postid: { type: String, default: '' }
  },
  data () {
    return {
      text: ''
    }
  },
  methods: {
    async onSubmit () {
      const userId = this.$cookies.get('userId')
      const token = this.$cookies.get('userToken')
      this.$axios.setHeader('Authorization', `Token ${token}`)
      await this.$axios.$post(
        '/feed/replies/',
        {
          my_user: userId,
          post: this.postid,
          body: this.text
        }
      )
      this.text = ''
    }
  }
}
</script>
<style>
.button {
  background-color: #489B16;
  border: 0;
  font-size: 15px;
}
.reply:active,
.reply:hover,
.reply:focus
{
  outline:0px !important;
  -webkit-appearance:none;
  box-shadow: none !important;
}
</style>

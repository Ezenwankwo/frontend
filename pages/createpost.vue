<template>
  <b-col sm="12" md="9" class="px-0">
    <div class="border-bottom p-3 mx-0 h6 d-flex justify-content-between">
      <div class="mt-2">
        <GoBack />Create Post
      </div>
    </div>
    <div class="px-5">
      <p class="lead text-center my-5 font-weight-normal">
        Post to your town
      </p>
      <b-form @submit.prevent="createPost">
        <b-form-select
          v-model="town"
          :options="towns"
          size="lg"
          value-field="id"
          text-field="name"
          class="input"
          required
        >
          <template #first>
            <b-form-select-option :value="''" disabled>
              -- Choose town --
            </b-form-select-option>
          </template>
        </b-form-select>
        <b-form-select
          v-model="category"
          :options="categories"
          size="lg"
          class="input"
          required
        >
          <template #first>
            <b-form-select-option :value="''" disabled>
              -- Choose category --
            </b-form-select-option>
          </template>
        </b-form-select>
        <b-form-textarea
          id="textarea-large"
          v-model="body"
          size="lg"
          placeholder="Write your post here..."
          rows="6"
          class="input"
          required
        />
        <b-form-file
          v-model="file"
          placeholder="Upload image or video..."
          drop-placeholder="Drop file here..."
        />
        <b-button pill block type="submit" class="button" variant="success">
          Create Post
        </b-button>
      </b-form>
    </div>
  </b-col>
</template>

<script>
export default {
  layout: 'user',
  data () {
    return {
      town: '',
      towns: [],
      category: '',
      categories: [
        { value: 'Security', text: 'Send security alert' },
        { value: 'Recommendation', text: 'Ask for recommendation' },
        { value: 'Civic Engagement', text: 'Discuss a civic issue' },
        { value: 'Searching', text: 'Find places, apartments, jobs, etc' },
        { value: 'News', text: 'Report an incident' },
        { value: 'Used Item', text: 'Sell Used Item' }
      ],
      body: '',
      file: null
    }
  },
  async fetch () {
    this.towns = await this.$axios.$get('/town/all/')
  },
  methods: {
    async createPost () {
      const token = this.$cookies.get('userToken')
      const userId = this.$cookies.get('userId')
      this.$axios.setHeader('Authorization', `Token ${token}`)
      await this.$axios.$post(
        '/feed/posts/',
        {
          my_user: userId,
          town: this.town,
          category: this.category,
          body: this.body
        }
      )
      this.town = ''
      this.category = ''
      this.body = ''
    }
  }
}
</script>

<style>
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
  margin: 20px 0px 20px 0px;
  font-size: 16px;
  border-radius: 3px;
}
</style>

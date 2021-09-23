<template>
  <b-col cols="4" class="border-left px-5">
    <p class="lead text-center my-5">
      Post to your towns
    </p>
    <b-form @submit.prevent="createPost">
      <b-form-select
        v-model="town"
        :options="towns"
        size="lg"
        value-field="id"
        text-field="name"
        class="input"
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
  </b-col>
</template>

<script>
export default {
  data () {
    return {
      town: '',
      towns: [],
      category: '',
      categories: [
        { value: 'SEC', text: 'Send security alert' },
        { value: 'REC', text: 'Ask for recommendation' },
        { value: 'CIV', text: 'Discuss a civic issue' },
        { value: 'SEA', text: 'Find places, apartments, jobs, etc' },
        { value: 'NEW', text: 'Report an incident' },
        { value: 'USE', text: 'Sell Used Item' }
      ],
      body: '',
      file: null
    }
  },
  async fetch () {
    this.towns = await this.$http.$get('http://127.0.0.1:8000/town/all/')
  },
  methods: {
    async createPost () {
      const token = this.$cookies.get('token')
      // const user = this.$cookies.get('user_id')
      try {
        this.$http.setHeader('Authorization', `Token ${token}`)
        await this.$http.$post(
          'http://127.0.0.1:8000/feed/home/',
          {
            my_user: '2',
            town: this.town,
            category: this.category,
            body: this.body
          }
        )
        this.town = ''
        this.category = ''
        this.body = ''
      } catch {
        this.error = 'post creattion failed'
      }
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

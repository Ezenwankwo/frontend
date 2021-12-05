<template class="page">
  <b-container>
    <b-row align-v="center" align-h="center" class="vh-100">
      <b-col cols="12" md="8" lg="5">
        <b-card title="Spice up your profile">
          <b-card-text>
            Show and tell people in your town something unique about yourself.
          </b-card-text>
          <b-form class="mt-5" @submit.prevent="onSubmit">
            <no-ssr>
              <file-pond
                ref="pond"
                name="filepond"
                label-idle="upload image here..."
                :allow-multiple="false"
                accepted-file-types="image/jpeg, image/jpg, image/png"
                server="https://tmapi-test.herokuapp.com/fp/process/"
                image-crop-aspect-ratio="1:1"
                @processfile="serverResponse"
              />
            </no-ssr>
            <b-form-textarea
              id="bio"
              v-model="bio"
              size="lg"
              placeholder="Bio"
              class="input"
            />
            <b-button block type="submit" class="button" variant="success">
              Continue
            </b-button>
          </b-form>
          <hr>
          <b-card-text class="text-center">
            <NuxtLink to="/findtown" class="link">
              Skip for now
            </NuxtLink>
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import vueFilePond from 'vue-filepond'
import 'filepond/dist/filepond.min.css'

import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css'

import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import FilePondPluginImageCrop from 'filepond-plugin-image-crop'

const FilePond = vueFilePond(
  FilePondPluginFileValidateType,
  FilePondPluginImagePreview,
  FilePondPluginImageCrop
)

export default {
  components: {
    FilePond
  },
  data () {
    return {
      upload_id: '',
      bio: '',
      error: null
    }
  },
  methods: {
    serverResponse (error, file) {
      if (error) {
        return false
      } else {
        this.upload_id = file.serverId
      }
    },
    async onSubmit () {
      const username = this.$cookies.get('userName')
      const token = this.$cookies.get('userToken')
      try {
        this.$axios.setHeader('Authorization', `Token ${token}`)
        await this.$axios.patch(
          `/user/moreprofile/${username}/${this.upload_id}/`,
          {
            bio: this.bio
          }
        )
        this.$router.push('/findtown')
      } catch (e) {
        this.error = 'failed to update profile.'
      }
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
img {
  width: 128px;
  height: 128px;
  object-fit: cover;
  border-radius: 50%;
}
</style>

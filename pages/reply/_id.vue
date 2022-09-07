<template>
  <div class="grid grid-cols-10">
    <div class="col-span-10 lg:col-span-7 lg:mr-8">
      <GoBack />
      <div class="rounded-3xl bg-white p-4 sm:p-6 mt-2 sm:mt-4">
        <form @submit.prevent="createReply">
          <div class="my-4">
            <textarea
              id="Content"
              v-model="reply.body"
              maxlength="450"
              minlength="20"
              autocomplete="off"
              class="
                w-full
                p-3
                text-base
                font-normal
                text-tm-black
                bg-white bg-clip-padding
                border border-tm-black
                rounded
                m-0
                placeholder:italic
                focus:border-tm-green
                focus:outline-none
              "
              rows="5"
              placeholder="type your reply here..."
              required
            />
          </div>
          <div>
            <no-ssr>
              <file-pond
                ref="pond"
                name="filepond"
                label-idle="upload file here"
                :allow-multiple="false"
                accepted-file-types="image/*, video/*"
                max-file-size="50MB"
                server="https://townsmeet-api.herokuapp.com/api/fp/process/"
                image-crop-aspect-ratio="1:1"
                @processfile="serverResponse"
              />
            </no-ssr>
          </div>
          <button type="submit" class="px-6 py-3 bg-tm-green font-bold text-white rounded-full hover:bg-teal-600 focus:bg-teal-600">
            Reply
          </button>
        </form>
        <div class="mt-8">
          <h2 class="flex items-center text-base font-semibold text-tm-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-info-circle-fill text-tm-green mr-2"
              viewBox="0 0 16 16"
            >
              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
            </svg>
            Post Guide
          </h2>
          <ul role="list" class="marker:text-tm-green list-disc pl-5 space-y-3 text-tm-black mt-2">
            <li>only post when it benefits your townspeople</li>
            <li>ensure to post under the appropriate category</li>
            <li>no self promotion or spam</li>
            <li>be kind,</li>
          </ul>
        </div>
      </div>
    </div>
    <SideBar />
  </div>
</template>

<script>
import vueFilePond from 'vue-filepond'
// import 'filepond/dist/filepond.min.css'
// import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css'
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import FilePondPluginImageCrop from 'filepond-plugin-image-crop'
const FilePond = vueFilePond(
  FilePondPluginFileValidateType,
  FilePondPluginFileValidateSize,
  FilePondPluginImagePreview,
  FilePondPluginImageCrop
)
export default {
  name: 'CreateReply',
  components: {
    FilePond
  },
  layout: 'AuthenticatedUser',
  data () {
    const user = this.$store.state.auth.user
    return {
      user,
      reply: {
        body: '',
        upload_id: ''
      }
    }
  },
  methods: {
    serverResponse (error, file) {
      if (error) {
        return false
      } else {
        this.reply.upload_id = file.serverId
      }
    },
    async createReply () {
      const location = this.$store.state.auth.location
      try {
        this.$axios.setToken(this.user.token, 'Bearer')
        await this.$axios.post('/posts/post/create_post', {
          user: this.user.public_id,
          parent: this.$route.params.id,
          body: this.reply.body,
          upload_id: this.reply.upload_id,
          location: `Point(${location.lng} ${location.lat})`
        })
        this.$toast.success('Reply sent.', { position: 'top-center' })
        this.$router.go(-1)
      } catch (e) {
        this.$toast.error('Reply failed. Try again shortly.', { position: 'top-center' })
      }
    }
  }
}
</script>

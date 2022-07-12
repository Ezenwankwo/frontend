<template>
  <div class="container mx-auto px-4 lg:px-12 columns-10 py-8 md:py-12 grid md:grid-cols-2">
    <div>
      <div class="text-tm-black text-xl md:text-3xl lg:pb-12 pb-6 font-medium">
        Show and tell people in your town about yourself.
      </div>
      <div class="md:hidden mx-auto lg:pb-12 pb-6">
        <div>
          <img v-if="preview" :src="preview" class="w-24 h-24 border border-tm-gray rounded-full mb-6 ring-2 ring-white object-cover">
          <img v-else src="~/assets/profilepic.svg" class="w-24 h-24 border border-tm-gray rounded-full mb-6 ring-2 ring-white object-cover">
          <input id="file" type="file" accept="image/*" class="text-tm-black file:border-0 file:mr-4 file:px-6 file:py-3 file:bg-tm-gray file:text-tm-green file:text-bold file:rounded-full" @change="onFileChange">
        </div>
      </div>
      <form @submit.prevent="createProfile">
        <div class="mb-3 lg:w-96">
          <label
            for="exampleEmail0"
            class="form-label inline-block mb-2 text-tm-black"
          >Full name</label>
          <input
            id="name"
            v-model.trim="profile.name"
            type="text"
            maxlength="40"
            minlength="5"
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
                focus:border-tm-green
                focus:outline-none
              "
            required
          >
        </div>
        <div class="mb-3 lg:w-96">
          <label
            for="exampleEmail0"
            class="form-label inline-block mb-2 text-tm-black"
          >Username</label>
          <input
            id="username"
            v-model.trim="profile.username"
            type="text"
            maxlength="20"
            minlength="5"
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
                focus:border-tm-green
                focus:outline-none
              "
            required
          >
        </div>
        <div class="mb-3 lg:w-96">
          <label
            for="exampleFormControlTextarea1"
            class="form-label inline-block mb-2 text-tm-black"
          >Bio</label>
          <textarea
            id="bio"
            v-model.trim="profile.bio"
            maxlength="200"
            minlength="50"
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
                focus:border-tm-green
                focus:outline-none
              "
            rows="3"
          />
        </div>
        <button
          type="submit"
          class="
            lg:w-96
            w-full
            my-3
            py-3
            bg-tm-green
            text-white
            font-bold
            text-lg
            leading-normal
            rounded-full
            shadow-md
            hover:bg-teal-600 hover:shadow-lg
            focus:bg-teal-600 focus:shadow-lg focus:outline-none
          "
        >
          Create Profile
        </button>
      </form>
    </div>
    <div class="hidden md:block m-auto">
      <div>
        <img v-if="preview" :src="preview" class="w-60 h-60 border border-tm-gray rounded-full mb-6 ring-2 ring-white object-cover">
        <img v-else src="~/assets/profilepic.svg" class="w-60 h-60 border border-tm-gray rounded-full mb-6 ring-2 ring-white object-cover">
        <input id="file" type="file" accept="image/*" class="text-tm-black file:border-0 file:mr-4 file:px-6 file:py-3 file:bg-tm-gray file:text-tm-green file:text-bold file:rounded-full" @change="onFileChange">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CreateProfile',
  layout: 'AnonymousUser',
  // middleware: 'verify',
  data () {
    const user = this.$store.state.auth.user
    return {
      user,
      profile: {
        user: user.public_id,
        name: '',
        username: '',
        bio: '',
        image: null
      },
      preview: ''
    }
  },
  methods: {
    onFileChange (e) {
      const files = e.target.files || e.dataTransfer.files
      if (!files.length) {
        return
      }
      this.profile.image = files[0]
      this.createImage(files[0])
    },
    createImage (file) {
      const reader = new FileReader()
      const vm = this
      reader.onload = (e) => {
        vm.preview = e.target.result
      }
      reader.readAsDataURL(file)
    },
    async createProfile () {
      const config = {
        headers: { 'content-type': 'multipart/form-data' }
      }
      const formData = new FormData()
      for (const data in this.profile) {
        formData.append(data, this.profile[data])
      }
      try {
        this.$axios.setToken(this.user.token, 'Bearer')
        const res = await this.$axios.post('/users/profile/create_profile', formData, config)
        const profile = res.data.data
        this.$store.commit('auth/updateProfile', profile)
        this.$store.commit('auth/toggleAuthenticted', true)
        this.profile.image = null
        this.$router.push('/feed')
      } catch (e) {
        this.$toast.error(e.response.data.data, { position: 'top-center' })
      }
    }
  }
}
</script>

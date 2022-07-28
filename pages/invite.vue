<template>
  <div class="grid grid-cols-10">
    <div class="col-span-10 lg:col-span-7 lg:mr-8">
      <h2 class="font-bold text-2xl text-tm-black my-2">
        Invite
      </h2>
      <div class="bg-tm-green text-white items-center rounded p-4 md:p-8 mt-2 sm:mt-4">
        Inviting your townspeople to join Townsmeet is easy.
        You will be helping to strengthen connections
        between residents and help build a better community.
      </div>
      <div class="rounded-3xl bg-white py-2 px-4 md:py-4 md:px-8 mt-4">
        <form @submit.prevent="sendInvite">
          <input
            id="email"
            v-model="emails"
            type="email"
            class="
              w-full
              mt-2
              p-3
              text-base
              font-normal
              text-tm-black
              bg-white bg-clip-padding
              border border-solid border-tm-black
              rounded
              m-0
              placeholder:italic
              focus:border-tm-green
              focus:outline-none
          "
            rows="6"
            placeholder="Enter email, separate multiple emails with comas"
            multiple
            autofocus
          >
          <button
            type="submit"
            class="
            my-3
            py-3
            px-6
            bg-tm-green
            text-white
            font-medium
            leading-normal
            rounded-3xl
            shadow-md
            hover:bg-teal-600 hover:shadow-lg
            focus:bg-teal-600 focus:shadow-lg focus:outline-none
          "
          >
            Invite
          </button>
        </form>
        <div class="mt-4">
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
            Invite Guide
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
export default {
  name: 'TownInvite',
  layout: 'AuthenticatedUser',
  data () {
    const user = this.$store.state.auth.user
    return {
      user,
      emails: ''
    }
  },
  methods: {
    async sendInvite () {
      try {
        this.$axios.setToken(this.user.token, 'Bearer')
        await this.$axios.post('/users/user/invite_users', {
          user: this.user.public_id,
          emails: this.emails
        })
        this.$toast.success('Invite sent', { position: 'top-center' })
        this.emails = ''
      } catch (e) {
        this.$toast.error(e.response.data.data, { position: 'top-center' })
      }
    }
  }
}
</script>

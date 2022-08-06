<template>
  <div class="grid grid-cols-10">
    <div class="col-span-10 lg:col-span-7 rounded-3xl lg:mr-8">
      <GoBack />
      <div class="border-2 border-tm-gray bg-white rounded-3xl p-4 sm:p-6 mt-1 sm:mt-2">
        <div class="flex justify-between">
          <li class="flex pt-4 first:pt-0 last:pb-0">
            <NuxtLink :to="`/profile/${post.profile.user}/posts`">
              <img v-if="post.profile.image == null" class="h-16 w-16 rounded-full" src="~/assets/profilepic.svg" alt="">
              <img v-else class="h-16 w-16 rounded-full" :src="post.profile.image" alt="">
            </NuxtLink>
            <div class="ml-3 overflow-hidden">
              <p class="text-lg font-semibold text-tm-black truncate">
                <NuxtLink :to="`/profile/${post.profile.user}/posts`">
                  {{ post.profile.name }}
                </NuxtLink>
              </p>
              <p class="text-lg truncate">
                <NuxtLink v-if="post.category" :to="`/${post.category.toLowerCase()}`" class="text-tm-green">
                  {{ post.category }}
                </NuxtLink> <span v-if="post.category">|</span> <i class="text-slate-500">{{ $dayjs(post.created).fromNow() }}</i>
              </p>
            </div>
          </li>
          <div class="dropdown dropdown-left dropdown-hover">
            <span tabindex="0" class="text-tm-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-three-dots-vertical"
                viewBox="0 0 16 16"
              >
                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
              </svg>
            </span>
            <ul tabindex="0" class="dropdown-content menu p-1 text-lg text-tm-black shadow-md bg-base-100 rounded w-40">
              <li><label for="delete" class="modal-button">Delete</label></li>
              <li><label for="mute" class="modal-button">Mute @exalted</label></li>
              <li><label for="report" class="modal-button">Report</label></li>
            </ul>
          </div>
        </div>
        <p class="text-tm-black my-2 font-normal text-lg sm:text-lg">
          {{ post.body }}
        </p>
        <img
          v-if="post.upload"
          :src="post.upload"
          class="max-w-full h-auto mb-2 rounded-lg"
          alt="..."
        >
        <div
          class="
            mt-4
            flex
            items-center
            text-tm-black
            text-lg
            sm:text-lg
            justify-between
            md:w-2/3
            mx-auto
          "
        >
          <div class="flex items-center justify-between">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-chat"
                viewBox="0 0 16 16"
              >
                <path
                  d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"
                />
              </svg>
            </span>
            <span class="ml-1 sm:ml-2">{{ post.num_replies }}</span>
            <i class="ml-1 sm:ml-2">reply</i>
          </div>
          <div class="flex items-center justify-between">
            <span @click="toggleLike(post.public_id)">
              <svg
                v-if="post.like_status"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi"
                viewBox="0 0 16 16"
                :class="post.like_status ? activeClass:inactiveClass"
              >
                <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
              </svg>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi"
                viewBox="0 0 16 16"
                :class="post.like_status ? activeClass:inactiveClass"
              >
                <path
                  d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
                />
              </svg>
            </span>
            <span class="ml-1 sm:ml-2">{{ post.num_likes }}</span>
            <i class="ml-1 sm:ml-2">like</i>
          </div>
          <div class="flex items-center justify-between">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-share"
                viewBox="0 0 16 16"
              >
                <path
                  d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"
                />
              </svg>
            </span>
            <i class="ml-1 sm:ml-2">share</i>
          </div>
        </div>
        <div class="text-right my-4">
          <NuxtLink :to="`/reply/${post.public_id}`">
            <button
              type="button"
              class="
                    px-6
                    py-3
                    text-sm
                    text-white
                    bg-tm-green
                    rounded-full
                    shadow-md
                    hover:outline-none hover:text-white
                    focus:outline-none focus:text-white focus:bg-green-900
                  "
            >
              Reply
            </button>
          </NuxtLink>
        </div>
        <ReplyItem
          v-for="reply in replies"
          :id="reply.public_id"
          :key="reply.public_id"
          :category="reply.category"
          :user="reply.profile.user"
          :name="reply.profile.name"
          :username="reply.profile.username"
          :image="reply.profile.image"
          :body="reply.body"
          :upload="reply.upload"
          :likes="reply.num_likes"
          :liked="reply.like_status"
          :replies="reply.num_replies"
          :created="reply.created"
        />
      </div>
    </div>
    <SideBar />
    <!--modals-->
    <input id="delete" type="checkbox" class="modal-toggle">
    <label for="delete" class="modal cursor-pointer">
      <label class="modal-box relative w-72" for="">
        <h3 class="text-lg font-bold">Delete post?</h3>
        <p class="py-2">Are you sure you want to delete this post.</p>
        <span class="flex justify-end text-base mt-2">
          <button class="px-6 py-3 bg-tm-gray rounded-full mr-1 hover:bg-gray-300 focus:bg-gray-300">Cancel</button>
          <button class="px-6 py-3 bg-red-600 rounded-full text-white hover:bg-red-700 focus:bg-red-700">Delete</button>
        </span>
      </label>
    </label>

    <input id="mute" type="checkbox" class="modal-toggle">
    <label for="mute" class="modal cursor-pointer">
      <label class="modal-box relative w-72" for="">
        <h3 class="text-lg font-bold">Mute @exalted?</h3>
        <p class="py-2">You will no longer see posts by @exalted.</p>
        <span class="flex justify-end text-base mt-2">
          <button class="px-6 py-3 bg-tm-gray rounded-full mr-1 hover:bg-gray-300 focus:bg-gray-300">Cancel</button>
          <button class="px-6 py-3 bg-tm-green rounded-full text-white hover:bg-teal-600 focus:bg-teal-600">Mute</button>
        </span>
      </label>
    </label>

    <input id="report" type="checkbox" class="modal-toggle">
    <label for="report" class="modal cursor-pointer">
      <label class="modal-box relative w-72" for="">
        <h3 class="text-lg font-bold">Report post?</h3>
        <label class="flex items-center mt-2">
          <input type="checkbox" class="accent-tm-green h-4 w-4 mr-2">
          <span class="text-tm-black">It is not relevant to this town</span>
        </label>
        <label class="flex items-center mt-2">
          <input type="checkbox" class="accent-tm-green h-4 w-4 mr-2">
          <span class="text-tm-black">It is spam</span>
        </label>
        <label class="flex items-center mt-2">
          <input type="checkbox" class="accent-tm-green h-4 w-4 mr-2">
          <span class="text-tm-black">It is abusive</span>
        </label>
        <textarea
          id="Content"
          class="
                w-full
                p-1.5
                text-base
                font-normal
                text-tm-black
                bg-white bg-clip-padding
                border border-tm-black
                rounded
                mt-2
                placeholder:italic
                focus:border-tm-green
                focus:outline-none
              "
          rows="3"
          placeholder="Write here..."
        />
        <span class="flex justify-end text-base mt-2">
          <button class="px-6 py-3 bg-tm-gray rounded-full mr-1 hover:bg-gray-300 focus:bg-gray-300">Cancel</button>
          <button class="px-6 py-3 bg-tm-black rounded-full text-white hover:bg-black-900 focus:bg-black-900">Report</button>
        </span>
      </label>
    </label>
  </div>
</template>

<script>
export default {
  name: 'PostDetail',
  layout: 'AuthenticatedUser',
  async asyncData ({ params, $axios, store }) {
    const user = store.state.auth.user
    try {
      $axios.setToken(user.token, 'Bearer')
      const res = await $axios.get(`/posts/post/${params.id}/retrieve_post`)
      return { post: res.data.data.post, replies: res.data.data.replies }
    } catch (e) {
      return { post: {}, replies: [] }
    }
  },
  data () {
    return {
      post: {},
      activeClass: 'bi-heart-fill text-red-600',
      inactiveClass: 'bi-heart text-tm-black'
    }
  },
  methods: {
    async toggleLike (id) {
      this.post.like_status = !this.post.like_status
      try {
        const res = await this.$axios.get(`/posts/post/${id}/toggle_like`)
        if (res.data.code === 201) {
          this.post.num_likes++
        } else {
          this.post.num_likes--
        }
      } catch (e) {
        this.post.like_status = !this.post.like_status
      }
    }
  }
}
</script>

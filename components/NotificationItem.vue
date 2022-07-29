<template>
  <div class="border-l-4 border-tm-green bg-white rounded-r-3xl py-2 px-4 md:py-4 md:px-8 mt-2 sm:mt-4">
    <div class="flex items-center">
      <div class="flex -space-x-1">
        <img v-if="image == null" class="inline-block h-6 md:h-9 w-6 md:w-9 rounded-full" src="~/assets/profilepic.svg" alt="user">
        <img v-else class="inline-block h-6 md:h-9 w-6 md:w-9 rounded-full" :src="image" alt="user">
      </div>
      <span v-if="verb == 'liked'">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          class="bi bi-heart-fill text-red-600 ml-4"
          viewBox="0 0 16 16"
        >
          <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
        </svg>
      </span>
      <span v-if="verb == 'replied'">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          class="bi bi-chat ml-4"
          viewBox="0 0 16 16"
        >
          <path
            d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"
          />
        </svg>
      </span>
    </div>
    <div class="mt-2 text-base">
      <a href="" class="font-semibold">{{ name }}</a>
      <i>{{ verb }}</i>
      <span>your</span>
      <NuxtLink :to="`/post/${post}`" class="text-tm-green">
        post
      </NuxtLink>
      ...
      <small>{{ $dayjs(created).fromNow() }}</small>
      <NuxtLink :to="`/post/${post}`">
        <div class="rounded-3xl text-sm p-4 sm:p-6 border border-tm-gray mt-1 sm:mt-2 truncate">
          {{ body }}
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: { type: String, default: '' },
    name: { type: String, default: '' },
    image: { type: String, default: '' },
    post: { type: String, default: '' },
    body: { type: String, default: '' },
    verb: { type: String, default: '' },
    created: { type: String, default: '' }
  }
}
</script>

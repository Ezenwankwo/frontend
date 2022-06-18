<template>
  <button class="flex text-tm-black py-0.5 pr-2 pl-0.5 rounded-3xl hover:bg-gray-400" @click="goBack">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      class="bi bi-arrow-left-short"
      viewBox="0 0 16 16"
    >
      <path
        fill-rule="evenodd"
        d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
      />
    </svg>
    <span>Go back</span>
  </button>
</template>

<script>
export default {
  methods: {
    goBack () {
      return this.$router.go(-1)
    }
  }
}
</script>

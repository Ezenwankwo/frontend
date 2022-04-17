<template>
  <div class="container mx-auto px-4 lg:px-12 columns-10 py-8 md:py-12 grid md:grid-cols-2">
    <div>
      <div class="text-tm-black text-2xl md:text-3xl pb-8 font-medium">
        Reset password done
      </div>
      <div class="md:hidden mx-auto lg:pb-12 pb-6">
        <img src="~/assets/orderconfirmed.svg" class="object-contain mx-auto">
      </div>
      <NuxtLink to="/log-in">
        <button
          type="button"
          class="
          lg:w-96
          w-full
          my-3
          py-3
          bg-tm-green
          text-white
          font-medium
          text-lg
          leading-normal
          rounded
          shadow-md
          hover:bg-green-900 hover:shadow-lg
          focus:bg-green-900 focus:shadow-lg focus:outline-none
        "
        >
          Return to login
        </button>
      </NuxtLink>
    </div>
    <div class="hidden md:block m-auto">
      <img src="~/assets/orderconfirmed.svg" class="object-fit">
    </div>
  </div>
</template>

<script>
export default {
  layout: 'AnonymousUser'
}
</script>

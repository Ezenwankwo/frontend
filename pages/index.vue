<template>
  <div class="container mx-auto px-4 lg:px-12 columns-10 py-8 md:py-12 grid lg:grid-cols-2">
    <div class="text-center mt-4 md:mt-8">
      <div class="hidden lg:block text-tm-black text-3xl lg:text-6xl font-extrabold md:mt-8">
        See what's <br> happening in <br> your town.
      </div>
      <div class="lg:hidden text-tm-black text-3xl lg:text-6xl font-extrabold md:mt-8">
        See what's happening in your town.
      </div>
      <div class="lg:hidden mx-auto lg:pb-12 pb-6">
        <img src="~/assets/town.svg" class="object-contain mx-auto mt-4">
      </div>
      <p class="hidden lg:block text-tm-black text-lg my-4 md:my-8">
        We are empowering local communities to meet <br> and improve the places where they live.
      </p>
      <p class="lg:hidden text-tm-black text-lg my-4 md:my-8">
        We are empowering local communities to meet and improve the places where they live.
      </p>
      <NuxtLink to="/signup">
        <button
          type="button"
          class="
            w-full
            lg:w-2/3
            px-6
            py-3
            bg-tm-green
            text-white
            font-bold
            text-lg
            rounded-full
            shadow-md
            hover:bg-teal-600 hover:shadow-lg
            focus:bg-teal-600 focus:shadow-lg
          "
        >
          Signup
        </button>
      </NuxtLink>
    </div>
    <div class="hidden lg:block mx-auto mt-4 md:mt-12">
      <img src="~/assets/town.svg" class="object-fit">
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'AnonymousUser',
  auth: false
}
</script>

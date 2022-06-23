<template>
  <div class="grid grid-cols-10">
    <div class="col-span-10 lg:col-span-7 rounded-3xl lg:mr-8">
      <PostItem />
    </div>
    <SideBar />
  </div>
</template>

<script>
export default {
  auth: false,
  layout: 'AuthenticatedUser'
}
</script>

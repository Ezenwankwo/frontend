<template>
  <div class="grid grid-cols-10">
    <div class="col-span-10 lg:col-span-7 rounded-3xl lg:mr-8">
      <UserProfileMobile />
      <UserProfileNav />
      <PostItem />
    </div>
    <div class="col-span-3 invisible lg:visible text-tm-black">
      <UserProfile />
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserLikes',
  auth: false,
  layout: 'AuthenticatedUser'
}
</script>

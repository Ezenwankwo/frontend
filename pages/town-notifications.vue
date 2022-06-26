<template>
  <div class="grid grid-cols-10">
    <div class="col-span-10 lg:col-span-7 lg:mr-8">
      <h2 class="font-bold text-2xl text-tm-black my-2">
        Notifications
      </h2>
      <NotificationItem />
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

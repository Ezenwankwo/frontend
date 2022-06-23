<template>
  <div class="grid grid-cols-10">
    <div class="col-span-10 lg:col-span-7 rounded-3xl lg:mr-8">
      <h2 class="font-bold text-2xl text-tm-black my-2">
        Invite
      </h2>
      <div class="bg-tm-green text-white items-center rounded h-24 py-2 px-4 md:py-4 md:px-8 mt-2 sm:mt-4">
        By sharing with your town,
        you can help to strengthen connections
        between residents and help build a better community.
      </div>
      <div class="rounded-3xl bg-white py-2 px-4 md:py-4 md:px-8 mt-8">
        <textarea
          id="bio"
          class="
            w-full
            mt-3
            px-3
            py-3
            text-base
            font-normal
            text-tm-black
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            m-0
            placeholder:italic
            focus:text-tm-black
            focus:bg-white
            focus:border-tm-green
            focus:outline-none
        "
          rows="6"
          placeholder="Invite by email or phone number, separate multiple entries with comas"
        />
        <button
          type="button"
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
          hover:bg-green-900 hover:shadow-lg
          focus:bg-green-900 focus:shadow-lg focus:outline-none
        "
        >
          Send Invite
        </button>
      </div>
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

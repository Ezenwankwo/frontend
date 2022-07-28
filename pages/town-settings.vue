<template>
  <div class="grid grid-cols-10">
    <div class="col-span-10 lg:col-span-7 lg:mr-8">
      <h2 class="font-bold text-2xl text-tm-black my-2">
        Settings
      </h2>
      <div class="rounded-3xl bg-white py-2 px-4 md:py-4 md:px-8 mt-4">
        <h4 class="text-tm-black text-lg font-semibold">
          Location
        </h4>
        <div class="relative mt-2">
          <label for="customRange1" class="text-tm-black">Distance Preference</label>
          <input
            id="customRange1"
            type="range"
            min="2"
            max="100"
            value="40"
            class="w-full accent-tm-green h-1"
          >
        </div>
        <div class="mt-2">
          <label class="flex justify-between items-center">
            <span class="text-tm-black">Only show posts in this range</span>
            <input type="checkbox" class="accent-tm-green h-4 w-4" checked>
          </label>
        </div>
      </div>
      <div class="rounded-3xl bg-white py-2 px-4 md:py-4 md:px-8 mt-4">
        <h4 class="text-tm-black text-lg font-semibold">
          Notifications
        </h4>
        <div class="mt-2">
          <h6 class="text-tm-black font-semibold">
            Posts
          </h6>
          <div class="grid grid-cols-10">
            <div class="col-span-10 md:col-span-5 md:mr-4">
              <label class="flex justify-between items-center mt-2">
                <span class="text-tm-black">Safety</span>
                <input type="checkbox" class="accent-tm-green h-4 w-4" checked>
              </label>
              <label class="flex justify-between items-center mt-2">
                <span class="text-tm-black">Recommendation</span>
                <input type="checkbox" class="accent-tm-green h-4 w-4">
              </label>
              <label class="flex justify-between items-center mt-2">
                <span class="text-tm-black">Civic Engagement</span>
                <input type="checkbox" class="accent-tm-green h-4 w-4">
              </label>
              <label class="flex justify-between items-center mt-2">
                <span class="text-tm-black">News</span>
                <input type="checkbox" class="accent-tm-green h-4 w-4">
              </label>
            </div>
            <div class="col-span-10 md:col-span-5 md:ml-4">
              <label class="flex justify-between items-center mt-2">
                <span class="text-tm-black">Searching</span>
                <input type="checkbox" class="accent-tm-green h-4 w-4">
              </label>
              <label class="flex justify-between items-center mt-2">
                <span class="text-tm-black">Events</span>
                <input type="checkbox" class="accent-tm-green h-4 w-4">
              </label>
              <label class="flex justify-between items-center mt-2">
                <span class="text-tm-black">Announcement</span>
                <input type="checkbox" class="accent-tm-green h-4 w-4">
              </label>
            </div>
          </div>
        </div>
        <div class="mt-2">
          <h6 class="text-tm-black font-semibold">
            Replies
          </h6>
          <div class="grid grid-cols-10">
            <div class="col-span-10 md:col-span-5 md:mr-4">
              <label class="flex justify-between items-center mt-2">
                <span class="text-tm-black">Replies to your post</span>
                <input type="checkbox" class="accent-tm-green h-4 w-4" checked>
              </label>
            </div>
            <div class="col-span-10 md:col-span-5 md:ml-4">
              <label class="flex justify-between items-center mt-2">
                <span class="text-tm-black">Replies to your replies</span>
                <input type="checkbox" class="accent-tm-green h-4 w-4">
              </label>
            </div>
          </div>
        </div>
        <div class="mt-2">
          <h6 class="text-tm-black font-semibold">
            Townsmeet
          </h6>
          <div class="grid grid-cols-10">
            <div class="col-span-10 md:col-span-5 md:mr-4">
              <label class="flex justify-between items-center mt-2">
                <span class="text-tm-black">Weekly updates</span>
                <input type="checkbox" class="accent-tm-green h-4 w-4" checked>
              </label>
            </div>
            <div class="col-span-10 md:col-span-5 md:ml-4">
              <label class="flex justify-between items-center mt-2">
                <span class="text-tm-black">Blogs & Newsletters</span>
                <input type="checkbox" class="accent-tm-green h-4 w-4">
              </label>
            </div>
          </div>
        </div>
      </div>
      <div class="rounded-3xl bg-white py-2 px-4 md:py-4 md:px-8 mt-4">
        <h4 class="text-tm-black text-lg font-semibold">
          Display
        </h4>
        <div class="relative mt-2">
          <label for="customRange1" class="text-tm-black">Font Size</label>
          <input
            id="customRange1"
            type="range"
            min="2"
            max="100"
            value="60"
            class="w-full accent-tm-green h-1"
          >
        </div>
        <div class="mt-2">
          <div class="grid grid-cols-10">
            <div class="col-span-10 md:col-span-5 md:mr-4">
              <label class="flex justify-between items-center mt-2">
                <span class="text-tm-black">Light Mode</span>
                <input type="checkbox" class="accent-tm-green h-4 w-4" checked>
              </label>
            </div>
            <div class="col-span-10 md:col-span-5 md:ml-4">
              <label class="flex justify-between items-center mt-2">
                <span class="text-tm-black">Dark Mode</span>
                <input type="checkbox" class="accent-tm-green h-4 w-4">
              </label>
            </div>
          </div>
        </div>
      </div>
      <div class="rounded-3xl bg-white py-2 px-4 md:py-4 md:px-8 mt-4">
        <h4 class="text-tm-black text-lg font-semibold">
          Change Password
        </h4>
        <div class="relative mt-2">
          <label
            for="examplePassword0"
            class="form-label inline-block mb-2 text-tm-black"
          >Current Password</label>
          <input
            id="password1"
            type="password"
            class="
                  w-full
                  px-3
                  py-3
                  text-base
                  font-normal
                  text-tm-black
                  bg-white bg-clip-padding
                  border border-solid border-tm-gray
                  rounded
                  m-0
                  focus:text-tm-black
                  focus:bg-white
                  focus:border-tm-green
                  focus:outline-none
                "
          >
        </div>
        <div class="relative mt-2">
          <label
            for="examplePassword0"
            class="form-label inline-block mb-2 text-tm-black"
          >New Password</label>
          <input
            id="password2"
            type="password"
            class="
                  w-full
                  px-3
                  py-3
                  text-base
                  font-normal
                  text-tm-black
                  bg-white bg-clip-padding
                  border border-solid border-tm-gray
                  rounded
                  m-0
                  focus:text-tm-black
                  focus:bg-white
                  focus:border-tm-green
                  focus:outline-none
                "
          >
        </div>
        <div class="relative mt-2">
          <label
            for="examplePassword0"
            class="form-label inline-block mb-2 text-tm-black"
          >Repeat New Password</label>
          <input
            id="password3"
            type="password"
            class="
                  w-full
                  px-3
                  py-3
                  text-base
                  font-normal
                  text-tm-black
                  bg-white bg-clip-padding
                  border border-solid border-tm-gray
                  rounded
                  m-0
                  focus:text-tm-black
                  focus:bg-white
                  focus:border-tm-green
                  focus:outline-none
                "
          >
        </div>
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
          Change Password
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

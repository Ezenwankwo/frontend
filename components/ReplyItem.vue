<template>
  <NuxtLink to="/post-detail">
    <div
      class="border border-tm-gray bg-white rounded-3xl p-4 sm:p-6 mt-2 sm:mt-4"
    >
      <div class="flex items-center justify-between">
        <i class="text-tm-green">reply to post</i>
        <span class="text-tm-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-three-dots"
            viewBox="0 0 16 16"
          >
            <path
              d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
            />
          </svg>
        </span>
      </div>
      <p class="text-tm-black my-2 font-normal text-sm sm:text-base">
        It has survived not only five centuries, but also the leap into electronic
        typesetting, remaining essentially unchanged. It was popularised in the
        1960s with the release of Letraset sheets containing Lorem Ipsum passages,
        and more recently with desktop publishing software like Aldus PageMaker
        including versions of Lorem Ipsum.
      </p>
      <div class="flex items-center text-sm justify-between text-gray-400">
        <span
          class="
            rounded-full
            text-tm-black
            bg-tm-gray
            flex
            align-center
            ease
            w-max
            "
        >
          <img
            class="rounded-full w-9 h-9 max-w-none"
            alt="A"
            src="~/assets/profilepic.svg"
          >
          <span class="flex items-center px-3 py-2"> Elizabeth Esu </span>
        </span>
        <i> 4h ago </i>
      </div>
      <div
        class="
            mt-4
            flex
            items-center
            text-tm-black
            justify-between
            text-sm
            sm:text-base
            md:w-2/3
            mx-auto
        "
      >
        <div class="flex items-center justify-between">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-chat"
              viewBox="0 0 16 16"
            >
              <path
                d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"
              />
            </svg>
          </span>
          <span class="ml-1 sm:ml-2">3</span>
          <i class="ml-1 sm:ml-2">replies</i>
        </div>
        <div class="flex items-center justify-between">
          <span class="text-tm-green">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-heart-fill"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
              />
            </svg>
          </span>
          <span class="ml-1 sm:ml-2">21</span>
          <i class="ml-1 sm:ml-2">likes</i>
        </div>
        <div class="flex items-center justify-between">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
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
    </div>
  </NuxtLink>
</template>

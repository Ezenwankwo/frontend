<template>
  <b-col cols="5" class="px-0">
    <div class="border-bottom p-3 mx-0 h5">
      Home
    </div>
    <div>
      <b-media tag="li" class="px-3 py-0">
        <template #aside>
          <b-img src="/profile.png" width="42" alt="placeholder" />
        </template>
        <h6 class="my-0">
          <a class="link" href="#">Safety</a> in <a class="link" href="#">Abaji</a>, 1h ago.
        </h6>
        <small class="my-0">
          Augustus Ezenwankwo
          <b-badge class="badge" pill>
            R
          </b-badge>
          | @crassitametnibh
        </small>
        <p class="mt-2 mb-3">
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
          Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc
          ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        </p>
        <p class="d-flex justify-content-between my-0 mr-5">
          <span><b-icon icon="chat-left" /> 0</span>
          <span><b-icon icon="heart" /> 0</span>
          <span><b-icon icon="share" /></span>
          <span><b-icon icon="info-circle" /></span>
        </p>
      </b-media>
      <hr>
    </div>
  </b-col>
</template>

<script>
export default {
  layout: 'user'
}
</script>

<style>
.link {
  color: #489B16;
  text-decoration: none !important;
}
.link:hover {
  color: #489B16;
}
.badge {
  background-color: #489B16;
}
</style>

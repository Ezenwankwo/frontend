<script>
export default {
  data() {
    return {
      imageSrc: "/images/img1.jpg", // reference to the profile picture URL
    }    
  },

  methods: {
    handleImage() {
      const imageInput = this.$refs.imageInput; // reference to the file input
      const imageURL = URL.createObjectURL(imageInput.files[0]);

      this.imageSrc = imageURL;
    }
  }
}

// Initially the profile picture of the user would be fetched from an API.
// But on save (or on exit, like WhatsApp) the newly selected image would 
// be saved and the new image would replace the old one.

// I have not been able to implement the resizing of the image yet.
// All this does is preview the image 
</script>

<template>
  <div>
    <div class="profile">
      <a :href="imageSrc" class="profile__picture">
        <img :src="imageSrc" alt="user avatar" />
      </a>
      <div class="profile__icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>        
        <input type="file" ref="imageInput" accept="image/*" @change="handleImage">
      </div>
    </div>
  </div>
</template>

<style scoped>
.profile {
  margin: auto;
  display: flex;
  width: fit-content;
  position: relative;
}

.profile__picture {
  width: 200px;
  height: 200px;
  overflow: hidden;
  border-radius: 50%;
  border: 1px solid #333;
}

.profile__picture img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.profile__icon {
  z-index: 10;
  bottom: 1rem;
  right: 0.5rem;
  padding: 0.5rem;
  width: fit-content;
  position: absolute;
  border-radius: 50%;
  display: inline-flex;
  background-color: #fff;
  border: 1px solid #333;
}

.profile__icon input{
  top: 0;
  left: 0;
  opacity: 0;
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
  position: absolute;
  border-radius: 50%;
}
</style>
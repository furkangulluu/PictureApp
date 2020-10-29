<template>
  <div class="card m-1" style="width: 17rem;">
    <img class="card-img-top image" :src="photo.url" :alt="photo.title">
    <div class="overlay" @click="openModal(photo.url)">
      <div class="text">{{photo.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    photo:{
      type:Object,
      required:true
    }
  },
  methods: {
    openModal(imageUrl){
      this.$modal.show('img-modal')
      this.$store.state.modalImage=imageUrl;
    }
  },
}
</script>

<style lang="scss" scoped>

.card {
position: relative;
width: 50%;

  &:hover{
    opacity: 0.8;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    cursor: zoom-in;

    .overlay { opacity: 1; }

    img{
      filter: blur(5px);
      -webkit-filter: blur(5px);
    }
  }

  .image {
  display: block;
  width: 100%;
  height: auto;
  }

  .overlay {
   position: absolute;
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   height: 100%;
   width: 100%;
   opacity: 0;
   transition: .5s ease;

  .text {
    color: white;
    font-size: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
  }

  }
}
</style>


<template>
    <div class="card" style="width: 18rem;">
      <router-link :to="albumDetailsPath">
        <img class="card-img-top" :src="album.coverImage" alt="Card image cap">
        <div class="card-body">
          <p class="card-text">{{album.title}}</p>
        </div>
      </router-link>
    </div>
</template>

<script>
export default {
  props:{
    album:{
      type:Object,
      required:true
    }
  },
  computed: {
    albumDetailsPath(){
      return `album/${this.album.id}`
    }
  },
}
</script>

<style lang="scss" scoped>
  .card{
    transition: 0.3s;
    margin: 10px;
    cursor: pointer;
    border-radius: 15px;

    &:hover{
      box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
      opacity: 0.8;

      img{
        filter: blur(0px);
      }
    }

    .card-body{
    height:75px;
    overflow-y: scroll;
    }

    a{
      text-decoration: none;
      color: black;
    }

    img{
      border-top-left-radius: 15px;
      border-top-right-radius: 15px;
    }
  }

</style>

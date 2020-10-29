<template>
  <div class="pl-5 pr-5 mt-4">
    <Loader style="margin-bottom:700px" v-if="isLoading"/>
    <div class="row" v-if="!isLoading">
      <modal name="img-modal"
         :height="600"
         :responsive="true">
        <img :src="modalImage">
      </modal>
      <div class="col-md-8 pl-5">
        <div class="row">
          <Photo class="image" :photo="photo" v-for="photo in photos" :key="photo.id"/>
        </div>
      </div>
      <div class="col-md-4 comments">
          <h3>Comments;</h3>
          <hr>
          <Comment :comment="comment" v-for="comment in comments" :key="comment.id"/>
      </div>
    </div>
  </div>
</template>

<script>
import Photo from './Photo'
import Comment from './Comment'
import Loader from './Shared/Loader'
import {mapGetters, mapState} from 'vuex'

export default {
  components:{
    Photo,
    Comment,
    Loader
  },
  data() {
    return {
      isLoading:true,
      imageUrl:null
    }
  },
  created() {
    this.$store.dispatch('fetchPhotos',this.albumId).then(()=>{
      this.isLoading=false
    });
    this.$store.dispatch('fetchComments',this.albumId)
  },
  computed: {
    ...mapGetters({ photos:'getPhotos'}),
    ...mapGetters({ comments:'getComments'}),
    albumId(){
      return this.$route.params.id;
    },
    modalImage(){
      return this.$store.state.modalImage
    }
  },
}
</script>

<style>


.image {
  width: 400px;
  max-width: 100%;
}

</style>

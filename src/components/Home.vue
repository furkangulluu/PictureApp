<template>
  <div class="mt-3">
      <Loader style="margin-bottom:700px" v-if="isLoading"/>
      <div v-if="!isLoading">
        <div class="row hidden-md-up justify-content-center">
          <Album :album="album" v-for="album in albums" :key="album.id"/>
        </div>
      </div>
  </div>
</template>

<script>
import Album from './Album'
import Loader from './Shared/Loader'

import {mapGetters} from 'vuex'

export default {
  components:{
    Album,
    Loader
  },
  data() {
    return {
      isLoading:true
    }
  },
  computed: {
    ...mapGetters({ albums:'getAlbums'})
  },
  created(){
    this.$store.dispatch('fetchAlbums').then(()=>{
      this.isLoading=false
    });
  }
}
</script>

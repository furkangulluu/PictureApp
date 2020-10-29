import axios from 'axios'
axios.defaults.baseURL = "https://jsonplaceholder.typicode.com"

const state={
  albums:[],
  photos:[],
  comments:[],
  selectedAlbumName:null,
  modalImage:null
}

const getters={
  getAlbums(state){
    return state.albums;
  },
  getPhotos(state){
    return state.photos;
  },
  getComments(state){
    return state.comments;
  }
}

const mutations={
  setAlbums(state,payload){
    state.albums=payload
  },
  setPhotos(state,payload){
    state.photos=payload
  },
  setComments(state,payload){
    state.comments=payload
  }
}


const actions={
  fetchAlbums(context){
    axios.get("/albums").then(albums=>{
      const slicedData=albums.data.slice(0,10)
      const newData=[];
      slicedData.map((value)=>{
        axios.get(`/albums/${value.id}/photos`).then(photos=>{
          newData.push({...value, coverImage:photos.data[0].url})
        })
      })
      context.commit('setAlbums',newData)
})
  },
  fetchPhotos(context,albumId){
    const photos=[]
    axios.get(`/photos`).then(res=>{
      res.data.map(value =>{
        value.albumId==albumId ? photos.push(value):null;
      })
      context.commit('setPhotos',photos)
    })
  },
  fetchComments(context,albumId){
    const comments=[]
    axios.get(`/comments`).then(res=>{
      res.data.map(value =>{
        value.postId==albumId ? comments.push(value):null;
      })
      context.commit('setComments',comments)
    })
  }
}

export default{
  state,
  getters,
  mutations,
  actions
}

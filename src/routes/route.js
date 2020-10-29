import Home from '../components/Home'
import AlbumDetail from '../components/AlbumDetail'

export default{
  routes:[
    {path:'/', component:Home},
    {path:'/album/:id', component:AlbumDetail}
  ],
  mode:'history'
}

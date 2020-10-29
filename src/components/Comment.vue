<template>
  <div>
    <div class="comment-box">
      <h4>{{comment.name}}</h4>
      <p>{{comment.body}}</p>
      <div>
        {{comment.email}}
        <img src="../assets/user.png" width="20">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    comment:{
      type:Object,
      required:true
    }
  }
}
</script>

<style>
  .comment-box{
    width: 100%;
    height: auto;
    padding: 10px 10px 10px 10px;
    border: 1px solid #aaaaaa;
    border-radius: 15px;
    margin-bottom: 10px;
  }
  .comment-box:hover{
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    cursor: pointer;
  }
  .comment-box h4{
    font-size: 15px;
    font-weight: 600;
  }
  .comment-box p{
    font-size: 13px;
    text-align: justify;
    margin: 0 !important;
  }
  .comment-box div{
    font-size: 11px;
    text-align: right;
    margin-top: 5px;
  }
  .comment-box img{
    margin-left: 5px;
    margin-bottom: 3px;
  }
</style>

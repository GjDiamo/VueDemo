<!--这是一个子组件-->
<template>
  <div class="row" >
    <div class="col-xs-12 title">
      <div class="div-back" v-if="needback" @click="goBack">&lt;返回</div>
      {{title}}
    </div>
  </div>
</template>

<script>
  export default {
    name: "title-bar",
    //通过props来向父组件传递消息
    props: {
      title: {
        type: String
      },
      needback: {
        type: Boolean,
        default: false
      }
    },
    methods:{
      goBack(){
        this.$router.go(-1)
      }
     }
  }

</script>
<style scoped>
  .div-back{
    position: absolute;
  }
</style>

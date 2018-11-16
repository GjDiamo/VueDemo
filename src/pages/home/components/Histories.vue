<!--这是一个History的子组件-->
<template>
  <!--4.彩票历史记录-->
  <div class="row item" >
    <!--左边11个格子-->
    <div class="col-xs-11">
      <!--开奖日期-->
      <div class="row">
        <span style="font-size: 18px;">第{{data.code}}期</span>
        <span style="margin-left: 10px;">{{data.date}}</span>
      </div>
      <!--开奖号码-->
      <div class="row" style="margin-top: 10px;">
        <!--错误示范-->
        <!--<div class="ball-item ball-red" v-for="red in history.red.split(',')">{{history.red}}</div>-->
        <div class="ball-item ball-red" v-for="red in data.red.split(',')">{{red}}</div>
        <div class="ball-item ball-blue">{{data.blue}}</div>
      </div>
    </div>
    <!--右边1个格子,这个就是控制页面跳转的箭头-->
    <div class="col-xs-1 div-right" @click="goToDetail('/detail')">
      <span class="glyphicon glyphicon-chevron-right"></span>
    </div>
  </div>
</template>
<script>
  export default {
    name: "histories",
    props:['data'],
    methods:{
      goToDetail(path){
        this.$router.push(path);
      }
    }
  }
</script>
<style scoped>
  .item{
    border: 1px solid gainsboro;
    height: 80px;
    padding-top: 5px;
    padding-left:35px;
  }

  .div-right{
    padding-left: 0px;
    padding-top: 30px;
  }
</style>

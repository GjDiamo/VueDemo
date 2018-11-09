<template>
<div>
  <!--标题栏-->
  <TitleBar title="车位详情" :needback="true"> </TitleBar>
  <!--轮播图-->
  <Carousel></Carousel>
  <!--详情信息-->
  <!--开奖日期-->
  <div style="margin-top: 8px;">
    <div style="float: left;">第10期</div>
    <div style="float: right;">123</div>
  </div>
  <!--清除浮动的div-->
  <div class="clearfix"></div>

  <!--5.奖池金额-->
  <div style="margin-top: 14px;">
    <table class="table table-bordered">
      <thead>
      <tr style="background-color: gainsboro;">
        <td class="text-center">本期销量</td>
        <td class="text-center">奖池奖金</td>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td class="text-center" style="color: red;">{{history.sales}}</td>
        <td class="text-center" style="color: red;">{{history.poolmoney}}</td>
      </tr>
      </tbody>
    </table>
  </div>

  <!--6.中奖信息-->
  <div>
    <table class="table table-bordered">
      <thead>
      <tr style="background-color: gainsboro;">
        <td class="text-center">奖项</td>
        <td class="text-center">中奖注数</td>
        <td class="text-center">奖金</td>
      </tr>
      </thead>
      <tbody>
      <tr v-for="prizegrade in history.prizegrades">
        <td class="text-center">{{prizegrade.type}}</td>
        <td class="text-center">{{prizegrade.typenum}}</td>
        <td class="text-center">{{prizegrade.typemoney}}</td>
      </tr>
      </tbody>
    </table>
  </div>
  <!--底部栏-->
  <MenuBar></MenuBar>
</div>
</template>
<script>
  import TitleBar from '@/pages/common/TitleBar';
  import Carousel from '@/pages/common/Carousel';
  import MenuBar from '@/pages/common/MenuBar';
  import axios from 'axios';
    export default {
        name: "DetailPage",
      components:{
          TitleBar,
          Carousel,
          MenuBar,
      },
      //将获取的数据实例化
      data() {
        return {
          code: this.$route.query.code,
          history: {}
        }
      },
      mounted() {
        //发送请求获取 获取当前期的数据
        axios.get('/api/detail?code=' + this.code).then(resp => {
          console.log(resp.data)
          this.history = resp.data.data;
        });
      }
    }
</script>

<style scoped>

</style>

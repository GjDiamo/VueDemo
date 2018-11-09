<!--这个就是根组件-->
<template>
  <div class="hello">
    <!--标题栏-->
    <title-bar :title="title" ></title-bar>
    <!--轮播图-->
    <Carousel></Carousel>
    <!--显示数据-->
    <!--在父组件里定义一个data 属性将historyList传递给子组件-->
    <history :data="historyList"></history>
    <!--底部栏-->
    <menu-bar></menu-bar>
  </div>
</template>
<script>
  import TitleBar from '@/pages/common/TitleBar'
  import Carousel from '@/pages/common/Carousel'
  import History from '@/pages/home/components/History'
  import MenuBar  from '@/pages/common/MenuBar'
  import axios from 'axios'
export default {
  name: 'home-page',
  //注册组件
  components:{
    TitleBar,
    Carousel,
    History,
    MenuBar
  },
  // 返回数据
  data () {
    return {
      title: '小黄车首页',
      //将后台/接口文档传过来的数据进行保存
       historyList:{}
    }
  },
  mounted(){
    console.log('发送请求.....')
    //'/static/index'这个地方就是数据请求的路径。以后可以改成后台传过来的接口
    axios.get('/static/index').then(resp=>{
      this.historyList=resp.data.data
      console.log(resp.data)
    });
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
</style>




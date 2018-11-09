<!--相对于HomePage这个组件是一个子组件-->
<!--相对于Histories他是一个根组件-->
<template>
    <div>
      <Histories v-for="history in data" key="history.code" :data="history"></Histories>
    </div>
</template>

<script>
  import Histories from './Histories'
    export default {
        name: "History",
        props:['data'],
        components:{
        Histories
      }
    }
</script>

<style scoped>

</style>

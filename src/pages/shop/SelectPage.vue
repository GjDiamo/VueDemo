<template>
  <div>
    <TitleBar title="摇号平台" :needback="true"></TitleBar>
    <menu-bar index="2"></menu-bar>
  </div>

</template>

<script>
    import TitleBar from '@/pages/common/TitleBar'
    import MenuBar from '@/pages/common/MenuBar'
    export default {
        name: "SelectPage",
        components:{
          TitleBar,
          MenuBar
        }
    }
</script>

<style scoped>

</style>

<template>
  <div class="container">
    <TableList :list="menu" :actIndex="m.actIndex" @activeGroupIndex="m.chooseList"></TableList>
    <div class="line"></div>
    <div class="right"></div>
  </div>
</template>

<script setup lang="ts">
import {onMounted, reactive} from "vue";
import {menu} from "../../data/Menu"
import TableList from "@comp/TableList.vue"

const m = reactive({
  actIndex: 0,
  menu: [],
  chooseList(index){
    m.actIndex = index
  }
})
onMounted(()=>{
  m.menu = menu
})

</script>
<style lang="less" scoped>
.container{
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  .line{
    width: 1px;
    height: 100%;
    background-image: linear-gradient(180deg, rgba(35,91,174,0.00) 0%, #5BA9EB 16%, #5EBCDA 49%, #5FA8E7 78%, rgba(36,97,183,0.00) 100%);
    border-radius: 8px;
    overflow: hidden;
  }
  .right{
    flex: 1;
  }
}
</style>

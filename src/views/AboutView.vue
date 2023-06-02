<template>
  <div class="container">
    <div class="left">
      <el-collapse accordion style="width: 100%;padding-left: 10px;">
        <el-collapse-item v-for="(group, index) in GroupData" @click = changeValue(index) :title="group.name" :key="index + group.id">
          <div class="cell" v-for="(item, key) in group.list" :key="item.name + key + 'item'">
            {{item.name}}
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
    <div class="line"></div>
    <ContainerView class="right" :mode="mode"></ContainerView>
  </div>

</template>

<script setup lang="ts">
import {onMounted, reactive} from "vue";
import { GroupData } from "../../data/GroupData"
import ContainerView from "@comp/container.vue"
const mode = reactive({
  row: 0,
  index: 0
})
const changeValue = (val) =>{
  mode.row = val
}
onMounted(()=>{

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
  .left{
    display: flex;
    top: 0px;
    width: 233px;
    bottom: 0px;
    left: 0px;
    flex-direction: row;
    .cell{
      height: 35px;
      border-bottom: var(--el-color-info-light-8) solid 1px;
      &:hover{
        background: rgba(255,255,255,0.2);
      }
      &:active{
        background: rgba(255,255,255,0.5);
      }
    }
  }
  .right{
    flex: 1;
    //background: rgba(255,255,255,0.5);
  }
}
:deep(.el-collapse-item__content){
  padding-bottom: 0px;
}
</style>

<template>
<div class="group-items">
  <div class="top">
    <div class="bg" :style="{backgroundImage: `url(${BgIM})`}">
      {{menuName}}
    </div>
  </div>
  <div class="container" id="container" ref="container">
      <div class="item" @click.stop="m.chooseItem(item)" v-for="item in list"   :key="item.id">
        <span class="cam-name">{{ item }}</span>
      </div>
  </div>
</div>
</template>

<script setup lang="ts">
import BgIM from "/assets/tt_bg.png"
import {computed} from "vue";




const props = defineProps(['m'])
const m = computed(()=> props.m)
const currentMenu = computed(()=> m.value && m.value.menu[m.value.actIndex] || null)
const menuName = computed(()=> {
  return currentMenu.value && currentMenu.value.name
})
const list = computed(()=> {
  if (!m.value) return []
  const tempList = m.value.groupItems.find(item => item.mId === currentMenu.value.id)
  return tempList && tempList.list || []
})

</script>

<style lang="less" scoped>
&::-webkit-scrollbar {
  width: 8px !important;
  height: 8px !important;
  cursor: pointer;
  background-color: var(--bg) !important;
  border-radius: 8px;
}
/*定义滚动条轨道,内阴影+圆角*/
&::-webkit-scrollbar-track {
  background-color: var(--bg10) !important;
}
/*定义滑块,内阴影+圆角*/
&::-webkit-scrollbar-thumb {
  cursor: pointer;
  background-color: var(--bg-light50) !important;
  border-radius: 8px;
}
.group-items{
  display: flex;
  flex-direction: column;
  .top{
    display: flex;
    flex-direction: row;
    height: 40px;
    width: 100%;
    margin-left: 32px;
    margin-top: 39px;
    align-items: center;
    .bg{
      min-width: 300px;
      width: calc(100% - 196px);
      height: 40px;
      font-family: OPPOSans-B,serif;
      font-size: 16px;
      color: #FFFFFF;
      letter-spacing: 0.6px;
      line-height: 20px;
      text-shadow: 0 1px 2px rgba(23,47,83,0.40);
      font-weight: 700;
      padding-left: 32px;
      padding-top: 10px;
    }
    .full-screen-btn{
      left: 64px;
      width: 64px;
      height: 32px;
      line-height: 32px;
      text-align: center;
      border: 1px solid rgba(255,255,255,0.20);
      border-radius: 2px;
      font-family: OPPOSans-R,serif;
      font-size: 14px;
      color: rgba(255,255,255,0.65);
      font-weight: 400;
    }
  }
}
.container{
  overflow-y: auto;
  display: flex;
  flex-direction: row;
  align-content: start;
  flex-wrap: wrap;
  margin-left: 32px;
  margin-top: 10px;
  .item{
    position: relative;
    cursor: pointer;
    width: 25%;
    height: 128px;
    border: 1px solid var(--vt-c-text-light-1);
    margin: 10px 10px 10px 0;
    &:hover {
      border: 1px solid var(--vt-c-text-dark-1);
    }
    .cam-name {
      font-size: 12px;
      position: absolute;
      left: 6px;
      bottom: 6px;
      font-family: OPPOSans-R,serif;
      color: rgba(255,255,255,0.85);
      letter-spacing: 0.4px;
      text-align: center;
      font-weight: 400;
    }
  }
}
.pagination-bom {
  justify-self: end;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 16px;
  .el-pager li {
    margin: 0 2px;
  }
}
</style>

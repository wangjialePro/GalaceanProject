<template>
  <div class="table-list-container">
    <div class="table-list">
      <span>选择分组</span>
      <div class="container" style="overflow: auto;">
        <el-scrollbar height="100%">
          <div v-for="(item, index) in list"  @click.stop="selectedItem(index)" class="item" :key="item" :style="itemStyle(index)">{{ item.name }}</div>
        </el-scrollbar>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
import IMN from '/assets/list_ttbg2_n.png'
import IMS from '/assets/list_ttbg2_s.png'
const props = defineProps(['list', 'actIndex'])
import {computed} from "vue";
const list = computed(()=> (props && props.list) || [])
const actIndex = computed(()=> {
  return (props && props.actIndex) || 0
})
const emit = defineEmits(['activeGroupIndex'])
const itemStyle = computed(()=>(index)=>{
  const BgIM = index === actIndex.value ? IMS : IMN
  const c = index === actIndex.value ?'rgba(255,255,255,1)':'rgba(255,255,255,0.65)'
  return  {backgroundImage: `url(${BgIM})`, color: c}
})
// actions
const selectedItem = (index)=>{
  emit('activeGroupIndex', index)
}

</script>

<style lang="less" scoped>
.table-list-container{
  display: flex;
  top: 20px;
  width: 233px;
  bottom: 0px;
  left: 0px;
  flex-direction: row;
}
.table-list{
  width: 232px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  span{
    font-family: OPPOSans-M,serif;
    font-size: 14px;
    color: rgba(255,255,255,0.65);
    letter-spacing: 0.6px;
    text-align: center;
    font-weight: 500;
  }
  .container{
    flex: 1;
  }
}
.item{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 168px;
  margin: 6px;
  border: 2px solid transparent;
  text-align: center;
  border-radius: 2px;
  font-family: OPPOSans-M,serif;
  font-size: 16px;
  color: #FFFFFF;
  letter-spacing: 0;
  line-height: 20px;
  font-weight: 500;
  background-size: 100% 100%;
  &:hover {
    border: 2px solid var(--stc-primary);
  }
}
.item-n {
  background: rgba(0,0,0,0.20);
  border: 1px solid rgba(255,255,255,0.20);
  color: rgba(255,255,255,0.65);
}
.item-s {
  border: 1px solid rgba(255,255,255,0.20);
  color: rgba(255,255,255,1);
  background-image: linear-gradient(180deg, rgba(35,91,174,0.00) 0%, #5BA9EB 16%, #5EBCDA 49%, #5FA8E7 78%, rgba(36,97,183,0.00) 100%);
}
</style>

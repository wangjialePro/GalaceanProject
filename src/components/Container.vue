<template>
  <div class="container">
    <json-editor-vue class="editor" v-if="showEditor" v-model="dataFrom.remark"  @blur="remarkValidate"/>\
    <el-scrollbar v-if="!showEditor" class="form">
      <BorderList v-if="Row === 0"></BorderList>
      <DecorationList v-if="Row === 1"></DecorationList>

      <!--      <ListCell name="边框1">-->
<!--        <border-box-1></border-box-1>-->
<!--      </ListCell>-->
<!--      <ListCell name="边框2">-->
<!--        <border-box-2></border-box-2>-->
<!--      </ListCell>-->
    </el-scrollbar>
    <div class="form" v-else></div>
  </div>
</template>

<script setup lang="ts">
// 导入模块
import {computed, reactive, ref} from "vue";
// @ts-ignore
import JsonEditorVue from "json-editor-vue3";
import BorderList from "./list/BorderList.vue"
import DecorationList from "./list/DecorationList.vue"

const props = defineProps(['mode'])
const mode = computed(()=> {
  console.log()
  return props.mode
})

const Row = computed(()=> mode.value.row)
const showEditor = computed(()=> mode.value.row > 1)

const dataFrom = reactive({
  remark: {}
})
let editorFlag = ref(false)
const remarkValidate = async (editor) => {
  // if (!editor) return;
  const res = await editor.validate();
  // res 是错误列表，如果是空数组，则表示检测没有错误
  if(res.length != 0){
    editorFlag.value = false;
  }else {
    editorFlag.value = true;
  }
};
</script>

<style lang="less" scoped>
.container{
  display: flex;
  flex-direction: row;
}
.editor{
  width: 40%;
  height: 100%;
}
.form{
  flex: 1;
  position: relative;
  background: #f8f8f8;
}
</style>

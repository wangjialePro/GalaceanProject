<template>
  <el-dialog width="100%"  v-model="show" custom-class="dialog-container" :title="name" @closed="closeDialog">
     <slot></slot>
  </el-dialog>
</template>

<script setup lang="ts">
import {computed} from "vue";
const props = defineProps(["mode"])
const show = computed(()=> props.mode.show)
const name = computed(()=> props.mode.name)
const emit = defineEmits(['closeDialog'])

const closeDialog = () => {
  emit('closeDialog')
}
</script>

<style lang="less" scoped>
.dialog-container{
}
</style>

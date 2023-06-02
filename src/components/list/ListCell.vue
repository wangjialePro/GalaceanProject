<template>
<div class="cell">
  <span class="name">{{name}}</span>
  <div class="comp">
    <slot></slot>
  </div>
</div>
</template>
<script setup lang="ts">
import {computed} from "vue";

const props = withDefaults(
    defineProps<{
      name: string;
    }>(),
    {
      name: "边框1",
    }
);
const name = computed(()=> props.name)
</script>

<style lang="less" scoped>
.cell{
  margin-top: 20px;
  background:  #282c34;
  height: 300px;
  left: 20px;
  top: 20px;
  width: calc(100% - 40px);
  display: flex;
  flex-direction: column;
  .name{
    height: 40px;
    padding-left: 10px;
    color: var(--vt-c-text-dark-1);
  }
  .comp{
     left: 10%;
     width: 80%;
     height: 80%;
  }
}
</style>

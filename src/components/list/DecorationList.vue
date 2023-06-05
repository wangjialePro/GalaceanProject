<template>
<div>
  <ListCell name="装饰1">
    <dv-decoration-1 style="width: 50%;height: 50%;left: 25%;top:25%;"></dv-decoration-1>
  </ListCell>
  <ListCell name="装饰2">
    <dv-decoration-2 :reverse="true" style="width: 50%;height: 50%;left: 25%;top:25%;" />
  </ListCell>

  <ListCell name="装饰3">
    <dv-decoration-3 style="width: 50%;height: 50%;left: 25%;top:25%;" />
  </ListCell>

  <ListCell name="装饰4">
    <dv-decoration-4 :reverse="true" style="width: 50%;height: 50%;left: 25%;top:25%;" />
  </ListCell>

  <ListCell name="装饰5">
    <dv-decoration-5 style="width: 50%;height: 50%;left: 25%;top:25%;" />
  </ListCell>

  <ListCell name="装饰6">
    <dv-decoration-6 style="width: 50%;height: 50%;left: 25%;top:25%;" />
  </ListCell>
  <ListCell name="装饰7">
    <dv-decoration-7 style="width: 50%;height: 50%;left: 25%;top:25%;">Decoration</dv-decoration-7>
  </ListCell>

  <ListCell name="装饰8">
    <dv-decoration-8 :reverse="true" style="width: 50%;height: 50%;left: 25%;top:25%;" />
  </ListCell>
  <ListCell name="装饰9">
    <dv-decoration-9 style="width: 150px;height: 150px;left: calc(50% - 75px);top:10%;">
      <div color-green font-600 class="content" bg="~ dark/0">
        66%
      </div>
    </dv-decoration-9>
  </ListCell>

  <ListCell name="装饰10">
    <dv-decoration-10 style="width: 50%;height: 50%;left: 25%;top:25%;" />
  </ListCell>

  <ListCell name="装饰11">
    <dv-decoration-11 style="width: 50%;height: 50%;left: 25%;top:25%;">上海三思中央控制系统</dv-decoration-11>
  </ListCell>

  <ListCell name="装饰12">
    <dv-decoration-12 />
  </ListCell>
</div>

</template>

<script setup lang="ts">
import ListCell from "./ListCell.vue"

</script>

<style scoped>

</style>

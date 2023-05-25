<script setup lang="ts">
import { onMounted, nextTick } from "vue";
import {
  BlinnPhongMaterial,
  Camera,
  MeshRenderer,
  PrimitiveMesh,
  Vector3,
  WebGLEngine
} from "@galacean/engine";
onMounted(() => {
  nextTick(()=>{
    creatWeb3DAction()
  })
})
function creatWeb3DAction (){
  const engine = new WebGLEngine("canvas");
  engine.canvas.resizeByClientSize();
  const scene = engine.sceneManager.activeScene;
  const rootEntity = scene.createRootEntity();
  // init camera
  const cameraEntity = rootEntity.createChild("camera");
  cameraEntity.addComponent(Camera);
  const pos = cameraEntity.transform.position;
  pos.set(10, 10, 10);
  cameraEntity.transform.position = pos;
  cameraEntity.transform.lookAt(new Vector3(0, 0, 0));

  // init light
  scene.ambientLight.diffuseSolidColor.set(1, 1, 1, 1);
  scene.ambientLight.diffuseIntensity = 1.2;

  // init cube
  const cubeEntity = rootEntity.createChild("cube");
  const renderer = cubeEntity.addComponent(MeshRenderer);
  const mtl = new BlinnPhongMaterial(engine);
  const color = mtl.baseColor;
  color.r = 0.0;
  color.g = 0.8;
  color.b = 0.5;
  color.a = 1.0;
  renderer.mesh = PrimitiveMesh.createCuboid(engine);
  renderer.setMaterial(mtl);
  engine.run();
}
</script>

<template>
  <canvas style="width: 100%; height: 500px" id="canvas" />
</template>


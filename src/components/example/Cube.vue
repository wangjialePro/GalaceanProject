<script setup lang="ts">
import { onMounted, nextTick } from "vue";
import {
  BlinnPhongMaterial,
  Camera,
  MeshRenderer,
  PrimitiveMesh,
  Vector3,
  WebGLEngine,
  DirectLight,
  Color,
  Script
} from "@galacean/engine";
import { OrbitControl } from "@galacean/engine-toolkit-controls";

let  engine = null
onMounted(() => {
  nextTick(()=>{
    creatWeb3DAction()
  })
})
function creatWeb3DAction (){
  engine  = new WebGLEngine("canvas");
  engine.canvas.resizeByClientSize();
  const scene = engine.sceneManager.activeScene;
  const rootEntity = scene.createRootEntity();
  // init camera
  const cameraEntity = rootEntity.createChild("camera_entity");
  cameraEntity.transform.position = new Vector3(10, 10, 10);
  cameraEntity.transform.lookAt(new Vector3(0, 0, 0));
  cameraEntity.addComponent(Camera);
  rootEntity.addComponent(Rotate)
  scene.background.solidColor.set(1, 1, 1, 1);
  cameraEntity.addComponent(OrbitControl);
  // Create a entity to add light component
  let lightEntity = rootEntity.createChild("light");

  // Create light component
  let directLight = lightEntity.addComponent(DirectLight);
  directLight.color = new Color(1.0, 1.0, 1.0);
  directLight.intensity = 0.5;

  // Control light direction by entity's transform
  lightEntity.transform.rotation = new Vector3(45, 45, 45);

  // Create Cube
  let cubeEntity = rootEntity.createChild("cube");
  let cube = cubeEntity.addComponent(MeshRenderer);
  cube.mesh = PrimitiveMesh.createCuboid(engine, 2, 2, 2);
  cube.setMaterial(new BlinnPhongMaterial(engine));
  // Run Engine
  engine.run();
  return engine
}
class Rotate extends Script {
  private _tempVector = new Vector3(0.003, 0.001, 0.001);
  onUpdate() {
    this.entity.transform.rotate(this._tempVector);
  }
}
</script>

<template>
  <canvas style="width: 100%; height: 500px" id="canvas" />
</template>


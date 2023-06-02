<template>
  <canvas style="width: 100%; height: 800px" id="canvas1" />
</template>

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
  Script,
  GLTFResource,
} from "@galacean/engine";
import { OrbitControl } from "@galacean/engine-toolkit-controls";

let  engine = null
onMounted(() => {
  nextTick(()=>{
    creatWeb3DAction()
  })
})
function creatWeb3DAction (){
  engine  = new WebGLEngine("canvas1");
  engine.canvas.resizeByClientSize();
  const scene = engine.sceneManager.activeScene;
  const rootEntity = scene.createRootEntity();
  // init camera
  const cameraEntity = rootEntity.createChild("camera_entity");
  cameraEntity.transform.position = new Vector3(3, 3, 3);
  cameraEntity.transform.lookAt(new Vector3(0, 0, 0));
  cameraEntity.addComponent(Camera);
  scene.background.solidColor.set(255, 255, 255, 1);
  cameraEntity.addComponent(OrbitControl);
  // Create a entity to add light component
  let lightEntity = rootEntity.createChild("light");

  // Create light component
  let directLight = lightEntity.addComponent(DirectLight);
  directLight.color = new Color(1.0, 1.0, 1.0);
  directLight.intensity = 0.5;

  // Control light direction by entity's transform
  lightEntity.transform.rotation = new Vector3(45, 45, 45);
  engine.resourceManager.load<GLTFResource>("/source/seraphine/scene.gltf").then((gltf)=>{
    rootEntity.addChild(gltf.defaultSceneRoot)
    engine.run();
  }).catch(_=>{})
}
// "https://gw.alipayobjects.com/os/OasisHub/267000040/9994/%25E5%25BD%2592%25E6%25A1%25A3.gltf"

class Rotate extends Script {
  private _tempVector = new Vector3(0.003, 0.001, 0.001);
  onUpdate() {
    this.entity.transform.rotate(this._tempVector);
  }
}
</script>




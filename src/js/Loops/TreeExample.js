import * as THREE from 'three';
import tree from '../../obj/Lowpoly_tree_sample.obj';
import Lights from '../Lights/TwoDirectionals';
import * as OBJLoader from 'three-obj-loader';
OBJLoader(THREE);

export default class TreeExample {
  constructor({scene, onLoad}) {
    this.scene = scene;
    this.setupCamera();
    
    scene.renderer.shadowMap.enabled = true;
    scene.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    this.root = new THREE.Group();

    this.loadTree();
    this.setupLights();

    if (onLoad) onLoad();
  }

  loading(percentage) {    
    
  }

  setupLights() {
    const lights = new Lights({
      intensity: 1.8,
      castShadow: true,
      bias: 0.00002,
      projectionSides: 2.5,
      mapSize: 2048
    });
    lights.rotateY(Math.PI);
    this.root.add(lights);
  }

  setupCamera() {
    const frustumSize = 10;
    const aspect = this.scene.camera.aspect;
    this.scene.camera = new THREE.OrthographicCamera(
      frustumSize * aspect / -2,
      frustumSize * aspect / 2,
      frustumSize / 2,
      frustumSize / -2,
      1,
      150);
    this.scene.camera.position.copy(new THREE.Vector3(0, 3.5, 10));
    this.scene.camera.lookAt(new THREE.Vector3(0, 0, 0));
  }

  loadTree() {
    const loader = new THREE.OBJLoader();
    this.onHeadReady = this.onTreeReady.bind(this);
    this.onHeadLoading = this.onHeadLoading.bind(this);
    this.onTreeReady = this.onTreeReady.bind(this);
    loader.load(
      tree,
      this.onTreeReady,
      this.onHeadLoading,
      function (error) {
        console.log('An error happened', error);
      });
  }

  onHeadLoading(xhr) {
    const loading = xhr.loaded / xhr.total;
    console.log((loading * 100) + '% loaded');
    
    this.loading(Math.sin(loading));
  }

  onTreeReady(object) {
    for(let i = 0; i < 10; i++) {
      const newPosition = new THREE.Vector3(i * 3, 0, 0);
      this.addTree(object, newPosition);
    }
  }

  addTree(object, newPosition) {
    const newTree = object.clone();
    newTree.position.copy(newPosition);
    newTree.scale.copy(
      new THREE.Vector3(0.2, 0.2, 0.2)
    );
    newTree.children[0].material[0].color.setRGB(1, 0.6, 0);
    newTree.children[0].material[1].color.setRGB(0.8, 1, 0.2);
    this.root.add(newTree);
  }

  update(timeElapsed, delta) {
    let id = 0;
    this.root.traverse((tree) => {
      const oldScale = tree.scale.clone();
      oldScale.y = Math.abs( Math.sin(timeElapsed + id) ) + 0.2;
      tree.scale.copy(oldScale);
      id++;
    });
  }

}

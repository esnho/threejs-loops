import * as THREE from 'three';
import tree from '../../obj/Lowpoly_tree_sample.obj';
import Lights from '../Lights/TwoDirectionals';
import BasicSphere from '../Objects/BasicSphere';
import * as OBJLoader from 'three-obj-loader';
OBJLoader(THREE);

export default class TreeExample {
  constructor({scene, onLoad}) {
    this.scene = scene;
    this.setupCamera();
    
    scene.renderer.shadowMap.enabled = true;
    scene.renderer.shadowMap.type = THREE.PCFShadowMap;

    this.root = new THREE.Group();

    this.loadTree();
    this.setupLights();

    const sphereMaterial = new THREE.MeshStandardMaterial({
      emissive: 0x5e0311,
      flatShading: true
    });

    sphereMaterial.emissive.setRGB(157/255, 239/255, 247/255);

    this.sphere = new BasicSphere({
      size: 6,
      material: sphereMaterial,
      widthSegments: 20,
      heightSegments: 10,
      receiveShadow: true
    });

    this.sphere.root.rotateX(26 * (Math.PI / 180))

    console.log(this.sphere.root.geometry)

    this.root.add(this.sphere.root);

    if (onLoad) onLoad();
  }

  loading(percentage) {    
    
  }

  setupLights() {
    const lights = new Lights({
      intensity: 1.8,
      castShadow: true,
      bias: 0.00002,
      projectionSides: 6.5,
      mapSize: 1024
    });
    lights.rotateY(Math.PI);
    this.root.add(lights);
  }

  setupCamera() {
    this.scene.camera.position.copy(new THREE.Vector3(0, 4.5, 18));
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
    object.traverse((obj) => {
      obj.castShadow = true;
      obj.receiveShadow = true;
    });

    for(let i = 0; i < this.sphere.root.geometry.vertices.length; i++) {      
      this.addTree(object, this.sphere.root.geometry.vertices[i], 0.1);
    }
  }

  addTree(object, newPosition, scale) {
    const newTree = object.clone();
    // set position
    newTree.position.copy(newPosition);
    // scale
    newTree.scale.copy(
      new THREE.Vector3(scale, scale, scale)
    );

    const axis = new THREE.Vector3(0, 1, 0);
    
    newTree.quaternion.setFromUnitVectors(axis, 
      newPosition.sub(this.sphere.root.position).clone().normalize());

    newTree.children[0].material[0].color.setRGB(1, 0.6, 0);
    newTree.children[0].material[1].color.setRGB(224/255, 252/255, 1);
    newTree.children[0].material[1].emissive.setRGB(224/255*0.2, 252/255*0.2, 1*0.2);
    newTree.rotateY(Math.random() * 360);
    this.sphere.root.add(newTree);
  }

  update(timeElapsed, delta) {
    let newColor = new THREE.Color();
    this.sphere.root.material.emissive.getHSL(newColor);
    newColor.s = (Math.sin(timeElapsed + (Math.PI * 0.27)) + 1) * 0.5;
    newColor.l = (Math.cos(timeElapsed) + 1) * 0.1;
    this.sphere.root.material.emissive.setHSL(newColor.h, newColor.s, newColor.l);

    for (let conteggio = 0; conteggio < this.sphere.root.children.length; conteggio = conteggio + 1) {
      const tree = this.sphere.root.children[conteggio].children[0];
      const newPosition = tree.position;
      newPosition.y = Math.sin(timeElapsed + (conteggio * 0.05)) * 30;
      tree.position.copy(newPosition);
    }
    
    this.sphere.root.rotateY(delta * 0.35);
  }

}

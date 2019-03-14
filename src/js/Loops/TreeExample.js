import * as THREE from 'three';
import tree from '../../obj/Lowpoly_tree_sample.obj';
import Sphere from '../Objects/BasicSphere';
import Lights from '../Lights/TwoDirectionals';
import * as OBJLoader from 'three-obj-loader';
OBJLoader(THREE);

export default class TreeExample {
  constructor({scene, onLoad}) {
    this.scene = scene;
    
    scene.renderer.shadowMap.enabled = true;
    scene.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    this.root = new THREE.Group();

    this.sphereMaterial = new THREE.MeshStandardMaterial({
      color: 0xffaa00,
      flatShading: true
    })
    this.sphere = new Sphere({
      size: 3,
      material: this.sphereMaterial,
      widthSegments: 7,
      heightSegments: 6
    });
    
    this.root.add(this.sphere.root);
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
      bias: 0.2,
      projectionSides: 2.5,
      mapSize: 2048
    });
    lights.rotateY(Math.PI);
    this.root.add(lights);
  }

  loadTree() {
    const loader = new THREE.OBJLoader();
    this.onHeadReady = this.onTreeReady.bind(this);
    this.onHeadLoading = this.onHeadLoading.bind(this);
    this.onTreeReady = this.onTreeReady.bind(this);
    loader.load(
      // oggetto tridimensionale
      tree,
      // funzione da chiamare quando l'oggetto 3D è stato caricato
      this.onTreeReady,
      // funzione da chiamre durante il caricamente
      this.onHeadLoading,
      // fuzione in caso di errore
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
    console.log(this.sphere.root.geometry);
    for(let i = 0; i < this.sphere.root.geometry.vertices.length; i++) {
      this.addTree(
        object,
        this.sphere.root.geometry.vertices[i]
      );
    }
  }

  addTree(object, newPosition) {
    const newTree = object.clone();
    newTree.position.copy(newPosition);
    newTree.scale.copy(
      new THREE.Vector3(0.1, 0.1, 0.1)
    );

    const up = new THREE.Vector3(0, 1, 0);
    
    newTree.quaternion.setFromUnitVectors(
      up, 
      newPosition.clone().normalize()
    );

    newTree.children[0].material[0].color.setRGB(1, 0.6, 0);
    newTree.children[0].material[1].color.setRGB(0.8, 1, 0.2);
    this.sphere.root.add(newTree);
  }

  update(timeElapsed, delta) {
    let id = 0;
    this.sphere.root.rotateY(0.05);
    this.sphere.root.rotateZ(0.01);
  }

}

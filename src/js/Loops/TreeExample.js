import * as THREE from 'three';
import tree from '../../obj/Lowpoly_tree_sample.obj';
import Lights from '../Lights/TwoDirectionals';
import BasicTorus from '../Objects/BasicTorus';
import { OBJLoader } from 'three-obj-mtl-loader';

export default class TreeExample {
  constructor({scene, onLoad}) {
    
    this.scene = scene;
    this.setupCamera();
    
    scene.renderer.shadowMap.enabled = true;
    scene.renderer.shadowMap.type = THREE.PCFShadowMap;

    this.root = new THREE.Group();

    this.setupLights();
    this.setupTunnel();

    this.tRays = new THREE.Group();
    this.tRaysMat = new THREE.MeshBasicMaterial({
      side: THREE.DoubleSide
    });

    for (let i = 0; i < 18; i++) {
      const rayRotation = new THREE.Quaternion();
      rayRotation.setFromEuler(new THREE.Euler(Math.PI * 0.5, (Math.random() -0.5) * 0.17, Math.random()), true);
      const newRay = new BasicTorus({
        radius: 15 + ((Math.random() -0.5) * 5.5),
        tube: 0.2,
        tubularSegments: 46,
        radialSegments: 6,
        rotation: rayRotation,
        material: this.tRaysMat,
        position: new THREE.Vector3(0, 1.5 - (Math.random() * 3), 0)
      });
      newRay.geometry.faces = newRay.geometry.faces.map((value, index) => {
        if ((index%6 == 0) && (index%13 == 0)) return value;
      }).filter((value) => {
        return value != undefined;
      });
      newRay.geometry.elementsNeedUpdate = true;
      this.tRays.add(newRay.root);
    }

    this.root.add(this.tRays);

    if (onLoad) onLoad();
  }

  setupTunnel() {

    const torusMaterial = new THREE.MeshStandardMaterial({
      color: 0x5e0311,
      flatShading: true,
      side: THREE.CullFaceFront
    });
    torusMaterial.color.setRGB(157/255, 239/255, 247/255);
    this.torusRotation = new THREE.Quaternion();
    this.torusRotation.setFromEuler(new THREE.Euler(Math.PI * 0.5, 0, 0), true);

    const torusWireframe = new THREE.MeshBasicMaterial({
      wireframe: true
    })

    this.torus = new BasicTorus({
      radius: 15,
      tube: 2.8,
      material: [torusMaterial, torusWireframe],
      tubularSegments: 64,
      radialSegments: 24,
      rotation: this.torusRotation,
      materialGroups: [{start:0, count:Infinity, id:1}]
    });

    this.root.add(this.torus.root);

  }

  setupLights() {
    this.lights = new Lights({
      intensity: 0.6,
    });
    this.lights.rotateY(Math.PI);
    this.root.add(this.lights);
  }

  loading(percentage) {    
    
  }

  setupCamera() {
    this.scene.camera.position.copy(new THREE.Vector3(-14.8, 0, 0));
    this.scene.camera.near = 0.001;
    this.scene.camera.updateProjectionMatrix();
    //this.scene.camera.lookAt(new THREE.Vector3(0, 0, 0));
  }

  onHeadLoading(xhr) {
    const loading = xhr.loaded / xhr.total;
    console.log((loading * 100) + '% loaded');
    
    this.loading(Math.sin(loading));
  }

  onTreeReady(object) {
  }

  addTree(object, newPosition, scale) {
  }

  update(timeElapsed, delta) {
    this.torus.root.rotateZ(-0.5 * delta);
    for (let i = 0; i < this.tRays.children.length; i++) {
      this.tRays.children[i].rotateZ((1.4 * delta) + (i * 0.001));
    }
    this.scene.camera.rotateZ(Math.sin(timeElapsed) * (Math.cos(timeElapsed * 0.1) * -0.02))
    this.lights.rotateX(Math.sin(timeElapsed) * (Math.cos(timeElapsed * 0.1) * -0.02));
  }

}

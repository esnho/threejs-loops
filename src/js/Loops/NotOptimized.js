import * as THREE from 'three';
import Lights from '../Lights/TwoDirectionals';
import BasicSphere from '../Objects/BasicSphere';

export default class NotOptimized {
  constructor({scene, onLoad}) {
    this.scene = scene;
    this.setupCamera();
    this.root = new THREE.Group();
    this.setupLights();

    this.initScene();

    if (onLoad) onLoad();
  }

  initScene() {
    const sphereMaterial = new THREE.MeshStandardMaterial({
      flatShading: true
    });

    this.sphere = new BasicSphere({
      size: 4,
      material: sphereMaterial,
      widthSegments: 6,
      heightSegments: 4
    });

    this.root.add(this.sphere.root)

    this.startCrasy(this.sphere, 0.5, 4);
  }

  startCrasy(target, ratio, limit, totalElements, currentElement = 0) {
    totalElements = totalElements || target.root.geometry.vertices.length;
    if (currentElement < totalElements) {
      const sphere = new BasicSphere({
        size: target.geometry.parameters.radius * ratio,
        material: target.material,
        widthSegments: Math.max( target.geometry.parameters.widthSegments - 1, 1 ),
        heightSegments: Math.max(target.geometry.parameters.heightSegments - 1, 1 ),
      });
      target.root.add(sphere.root);

      const newPosition = target.root.geometry.vertices[currentElement].clone();
      sphere.root.position.copy(newPosition);
      
      const axis = new THREE.Vector3(0, 1, 0);
      sphere.root.quaternion.setFromUnitVectors(
        axis, 
        newPosition.sub(target.root.position).clone().normalize()
      );

      currentElement++;
      window.requestAnimationFrame(() => {
        this.startCrasy(target, ratio, limit, totalElements, currentElement);
        limit--;
        if (limit > 0) {
          window.requestAnimationFrame(() => {
              this.startCrasy(sphere, ratio, limit);
          });
        }
      });
    }
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


  update(timeElapsed, delta) {
    this.sphere.root.rotateY(delta * 0.5);
    this.sphere.root.rotateX(delta * 0.2);
  }

}

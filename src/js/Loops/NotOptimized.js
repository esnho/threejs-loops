import * as THREE from 'three';
import Lights from '../Lights/TwoDirectionals';
import BasicSphere from '../Objects/BasicSphere';

export default class NotOptimized {
  constructor({scene, onLoad}) {
    this.scene = scene;
    this.setupCamera();
    this.root = new THREE.Group();
    this.setupLights();

    
    const sphereMaterial = new THREE.MeshStandardMaterial({
      flatShading: true
    });

    this.sphere = new BasicSphere({
      size: 5,
      material: sphereMaterial,
      widthSegments: 5,
      heightSegments: 4
    });

    this.root.add(this.sphere.root)

    this.startCrasy(this.sphere, 0.4, 3);

    if (onLoad) onLoad();
  }

  startCrasy(target, ratio, limit) {
    limit--;
    for (let i = 0; i < target.root.geometry.vertices.length; i++) {  
      const sphere = new BasicSphere({
        size: target.geometry.parameters.radius * ratio,
        material: target.material,
        widthSegments: target.geometry.parameters.widthSegments,
        heightSegments: target.geometry.parameters.heightSegments,
      });

      target.root.add(sphere.root);
      const newPosition = target.root.geometry.vertices[i].clone();
      sphere.root.position.copy(newPosition);
      
      const axis = new THREE.Vector3(0, 1, 0);
      
      sphere.root.quaternion.setFromUnitVectors(
        axis, 
        newPosition.sub(target.root.position).clone().normalize()
      );
      
      if (limit > 0) {
        this.startCrasy(sphere, ratio, limit);
      }
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

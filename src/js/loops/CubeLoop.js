import * as THREE from 'three';
import Lights from '../objects/Lights.js';
import BasicCube from '../BasicCube.js';
import '../helpers/Math.js';

export default class CubeLoop {
  constructor(camera) {
    camera.position.copy(new THREE.Vector3(-9.5, 6, 10));
    camera.lookAt(new THREE.Vector3(0, -0.5, 0));
    camera.fov = 25;
    camera.updateProjectionMatrix();

    this.root = new THREE.Group();

    const lights = new Lights();
    this.root.add(lights);

		const cubeMat = new THREE.MeshStandardMaterial({
			color: 0xffffff,
			metalness: 0.4,
			roughness: 0.2,
		});

    this.cubes = [
      new BasicCube({
        size: 2,
        material: cubeMat,
        position: new THREE.Vector3(-1, 1, 1)
      }),
      new BasicCube({
        size: 2,
        material: cubeMat,
        position: new THREE.Vector3(1, 1, 1)
      }),
      new BasicCube({
        size: 2,
        material: cubeMat,
        position: new THREE.Vector3(-1, 1, -1)
      }),
      new BasicCube({
        size: 2,
        material: cubeMat,
        position: new THREE.Vector3(1, 1, -1)
      }),
      new BasicCube({
        size: 2,
        material: cubeMat,
        position: new THREE.Vector3(-1, -1, 1)
      }),
      new BasicCube({
        size: 2,
        material: cubeMat,
        position: new THREE.Vector3(1, -1, 1)
      }),
      new BasicCube({
        size: 2,
        material: cubeMat,
        position: new THREE.Vector3(-1, -1, -1)
      }),
      new BasicCube({
        size: 2,
        material: cubeMat,
        position: new THREE.Vector3(1, -1, -1)
      })];

    this.cubeAParent = new THREE.Group();
    for (let cube of this.cubes) {
      this.cubeAParent.add(cube.root);
    }
    this.cubeAParent.position.copy(new THREE.Vector3(1, -1, -1));
    this.root.add(this.cubeAParent);
  }

  update(timeElapsed) {
    const animationTime = timeElapsed * 1.8;
    const timeLineTime = animationTime % (Math.PI * 2);
    const sinTime = Math.sin(animationTime * 0.5);
    const cosTime = Math.cos(animationTime * 0.5);
    const absSinTime = Math.abs(sinTime);
    const absCosTime = Math.abs(cosTime);

    if (timeLineTime < Math.PI) {
      this.cubeAParent.children[7].position.copy(new THREE.Vector3(1, -1, -1));

      for (let i = 0; i < this.cubeAParent.children.length; i++) {
        const child = this.cubeAParent.children[i];
        const rota = (
          Math.clamp(
            ((1 - absSinTime) * (Math.PI * 0.5) + (i * 0.125)),
            0,
            1)
        );
        const sinScale = new THREE.Vector3( rota, rota, rota);
        child.scale.copy(sinScale)
        child.rotation.z = (rota * Math.PI);
        child.rotation.x = rota * Math.PI * 0.5;
      }
    } else {
      const child =  this.cubeAParent.children[7];
      const rota = (
        Math.clamp(
          ((1 - absSinTime) * (Math.PI * 0.5) + (7 * 0.125)) + (absCosTime),
          0,
          2)
      );
      const sinScale = new THREE.Vector3( rota, rota, rota);
      child.scale.copy(sinScale)
      child.rotation.z = (rota * Math.PI);
      child.rotation.x = rota * Math.PI * 0.5;

      const oldPos = new THREE.Vector3(1, -1, -1);
      child.position.copy(
        oldPos.lerp(
          new THREE.Vector3(0, 0, 0),
          Math.clamp(
            (1-absSinTime)*6,
            0,
            1)
          )
      );

      for (let i = 0; i < this.cubeAParent.children.length - 1; i++) {
        const child = this.cubeAParent.children[i];
        const rota = (
          Math.clamp(
            ((1 - absSinTime) * (Math.PI * 0.5) + (i * 0.125)),
            0,
            1)
        ) - absCosTime;
        const sinScale = new THREE.Vector3( rota, rota, rota);
        child.scale.copy(sinScale)
        child.rotation.z = (rota * Math.PI);
        child.rotation.x = rota * Math.PI * 0.5;
      }
    }
  }
}

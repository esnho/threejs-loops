import * as THREE from 'three';

export default class BasicCube {
  constructor() {
    this.seed = Math.random();
    const color = {r:1 ,g:1, b:1};
    this.cubeColor = new THREE.Color();
    this.cubeColor.setRGB(color.r, color.g, color.b);

    this.cubeMaterial = new THREE.MeshBasicMaterial({
      color: this.cubeColor
    });

    const cubeGeometry = new THREE.BoxGeometry(5, 5, 5);

    const cubeMesh = new THREE.Mesh(
      cubeGeometry,
      this.cubeMaterial
    );

    this.root = cubeMesh;
  }

  update(timeElapsed) {
    const red = Math.abs(Math.sin(timeElapsed));
    this.cubeColor.r = red;
    this.cubeMaterial.color = this.cubeColor;

    this.root.rotation.x = timeElapsed * (Math.PI * 0.5) + this.seed;
    this.root.rotation.y = timeElapsed * (Math.PI) + this.seed;
  }
}

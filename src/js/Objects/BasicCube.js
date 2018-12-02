import * as THREE from 'three';

export default class BasicCube {
  constructor({size = 5, material, position}) {
    this.seed = Math.random();
    const color = {r:1 ,g:1, b:1};
    this.color = new THREE.Color();
    this.color.setRGB(color.r, color.g, color.b);

    this.material = material || new THREE.MeshBasicMaterial({
      color: this.color
    });

    this.geometry = new THREE.BoxGeometry(size, size, size);

    this.mesh = new THREE.Mesh(
      this.geometry,
      this.material
    );

    if (position) {
      this.mesh.position.copy(position);
    }

    this.root = this.mesh;
  }
}

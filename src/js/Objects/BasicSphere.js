import {
  Color,
  MeshBasicMaterial,
  SphereBufferGeometry,
  SphereGeometry,
  Mesh
} from 'three';

export default class BasicSphere {
  constructor({size = 5, material, position, widthSegments, heightSegments}) {
    this.seed = Math.random();
    const color = {r:1 ,g:1, b:1};
    this.color = new Color();
    this.color.setRGB(color.r, color.g, color.b);

    this.material = material || new MeshBasicMaterial({
      color: this.color
    });
    
    const Sphere = material.length > 1 ? SphereBufferGeometry : SphereGeometry;

    this.geometry = new Sphere(
      size, 
      widthSegments || 7, 
      heightSegments || 9);
    
    if (material.length) {
      this.geometry.clearGroups();
      for (let i = 0; i < material.length; i++) {
        this.geometry.addGroup( 0, Infinity, i );
      }
    }

    this.mesh = new Mesh(
      this.geometry,
      this.material
    );

    if (position) {
      this.mesh.position.copy(position);
    }

    this.root = this.mesh;
  }
}

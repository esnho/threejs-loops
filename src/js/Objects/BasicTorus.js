import {
  Color,
  MeshBasicMaterial,
  TorusBufferGeometry,
  TorusGeometry,
  Mesh
} from 'three';

export default class BasicTorus {
  constructor({
    radius = 5,
    tube = 0.4,
    radialSegments = 8,
    tubularSegments = 6,
    arc = Math.PI * 2,
    material,
    materialGroups,
    position,
    rotation,
    castShadow,
    receiveShadow
  }) {
    this.seed = Math.random();
    const color = {r:1 ,g:1, b:1};
    this.color = new Color();
    this.color.setRGB(color.r, color.g, color.b);

    this.material = material || new MeshBasicMaterial({
      color: this.color
    });
    
    const Torus = this.material.length > 1 ? TorusBufferGeometry : TorusGeometry;

    this.geometry = new Torus(
      radius,
      tube,
      radialSegments,
      tubularSegments,
      arc
    );
    
    if (this.material.length) {
      this.geometry.clearGroups();
      if (!materialGroups) {
        for (let i = 0; i < material.length; i++) {
          this.geometry.addGroup( 0, Infinity, i );
        }
      } else {
        for (let group of materialGroups) {
          console.log(this.geometry)
          this.geometry.addGroup( group.start, group.count, group.id );
        }
      }
    }

    this.mesh = new Mesh(
      this.geometry,
      this.material
    );

    this.mesh.castShadow = castShadow;
    this.mesh.receiveShadow = receiveShadow;

    if (position) {
      this.mesh.position.copy(position);
    }
    if (rotation) {
      this.mesh.rotation.setFromQuaternion(rotation);
    }

    this.root = this.mesh;
  }
}

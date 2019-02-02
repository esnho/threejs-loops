import {
  Vector3,
  Color,
  Mesh,
  Group,
  OrthographicCamera,
  Geometry
} from 'three';
import { MeshLine, MeshLineMaterial } from 'three.meshline';

export default class Lissajoux {
  constructor({scene, onLoad}) {
    const clearColor = new Color();
    clearColor.setIntHSL(48, 90, 64);
    scene.renderer.setClearColor(clearColor);

    const frustumSize = 10;
    const aspect = scene.camera.aspect;

    scene.camera = new OrthographicCamera(
        frustumSize * aspect / - 2,
        frustumSize * aspect / 2,
        frustumSize / 2,
        frustumSize / - 2,
        1,
        150
    );
    scene.camera.position.copy(new Vector3(0, 0, 10));
    scene.camera.lookAt(new Vector3(0, 0, 0));

    this.root = new Group();

    this.lissaRatio = 0.9968; // magic number :(
    this.lissaCount = 600;
    
    const geometry = new Geometry();
    for( let j = 0; j < this.lissaCount; j++ ) {
      const v = new Vector3( Math.cos( j ) * 5, Math.cos( j * 0.8 ) * 5, 0 );
      geometry.vertices.push( v );
    }
    
    this.lineGeometry = new MeshLine();
    this.lineGeometry.setGeometry( geometry );
    
    const material = new MeshLineMaterial( {
      color: new Color('#7c6bd2'),
      sizeAttenuation: 1,
      lineWidth: 0.003
    });

    this.lineMesh = new Mesh( this.lineGeometry.geometry, material );
    this.root.add( this.lineMesh );

    if (onLoad) onLoad();
  }

  update(timeElapsed, delta) {
    const animationTime = timeElapsed * 0.3;

    const geometry = new Geometry();
    for( let j = 0; j < this.lissaCount; j++ ) {
      const v = new Vector3( Math.cos( j + animationTime ) * 3.8, Math.cos( (j + animationTime) * this.lissaRatio ) * 3.8,  Math.cos( (j + animationTime) * this.lissaRatio * this.lissaRatio ) * 3.8 );
      geometry.vertices.push( v );
    }
    this.lineGeometry.setGeometry( geometry );
    this.lineMesh.rotateY(0.2 * delta);
    this.lineMesh.rotateX(0.09 * delta);
  }

}

import * as THREE from 'three';
import { MeshLine, MeshLineMaterial } from 'three.meshline';

export default class Lissajoux {
  constructor({scene, onLoad}) {
    const clearColor = new THREE.Color();
    clearColor.setIntHSL(48, 90, 64);
    scene.renderer.setClearColor(clearColor);

    const frustumSize = 10;
    const aspect = scene.camera.aspect;

    scene.camera = new THREE.OrthographicCamera(
        frustumSize * aspect / - 2,
        frustumSize * aspect / 2,
        frustumSize / 2,
        frustumSize / - 2,
        1,
        150
    );
    scene.camera.position.copy(new THREE.Vector3(0, 0, 10));
    scene.camera.lookAt(new THREE.Vector3(0, 0, 0));

    this.root = new THREE.Group();

    this.lissaRatio = Math.random();
    this.lissaCount = 600;
    
    const geometry = new THREE.Geometry();
    for( let j = 0; j < this.lissaCount; j++ ) {
      const v = new THREE.Vector3( Math.cos( j ) * 5, Math.cos( j * 0.8 ) * 5, 0 );
      geometry.vertices.push( v );
    }
    
    this.line = new MeshLine();
    this.line.setGeometry( geometry );
    
    const material = new MeshLineMaterial( {
      color: new THREE.Color('#7c6bd2'),
      sizeAttenuation: 0,
      lineWidth: 0.0001
    });

    const mesh = new THREE.Mesh( this.line.geometry, material );
    this.root.add( mesh );

    if (onLoad) onLoad();
  }

  update(timeElapsed) {
    const animationTime = timeElapsed * 0.9;

    const geometry = new THREE.Geometry();
    for( let j = 0; j < this.lissaCount; j++ ) {
      const v = new THREE.Vector3( Math.cos( j + animationTime ) * 5, Math.cos( (j + animationTime) * this.lissaRatio ) * 5, 0 );
      geometry.vertices.push( v );
    }
    this.line.setGeometry( geometry );
  }

}

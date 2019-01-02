import * as THREE from 'three';
import noiseDisp from '../Shaders/noise-displacement.vert';
import basicuvvies from '../Shaders/noise-view-uv.frag';

export default class MorphingSphere {
  constructor({scene, onLoad}) {
    const clearColor = new THREE.Color();
    clearColor.setHSL(0.62, 0.9, 0.2);
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
    scene.camera.position.copy(new THREE.Vector3(0, 50, 50));
    scene.camera.lookAt(new THREE.Vector3(0, 0, 0));

    this.root = new THREE.Group();

    this.material = new THREE.ShaderMaterial( {
      uniforms: {
        time: {
            type: "f", 
            value: 0.0 
        }
      },
      vertexShader: noiseDisp,
      fragmentShader: basicuvvies
    });

    const mesh = new THREE.Mesh( 
        new THREE.IcosahedronGeometry( 3, 5 ), 
        this.material 
    );
    
    this.root.add( mesh );

    this.inspiredBy = document.createElement('div');
    this.inspiredBy.innerHTML = 'Edit from: https://www.clicktorelease.com/blog/vertex-displacement-noise-3d-webgl-glsl-three-js.html';
    this.inspiredBy.style.position = 'absolute';
    this.inspiredBy.style.bottom = 3;
    this.inspiredBy.style.right = 3;
    this.inspiredBy.style.color = 'darkcyan';

    document.body.appendChild(this.inspiredBy);

    if (onLoad) onLoad();
  }

  update(timeElapsed) {
    this.root.rotateY(0.0001);
    this.root.rotateX(0.0006);
    this.material.uniforms[ 'time' ].value = timeElapsed * 0.1;
  }

  onRemove() {
    document.body.removeChild(this.inspiredBy);
  }
}

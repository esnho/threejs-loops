import * as THREE from 'three';
import head from '../../obj/male.obj';
import Lights from '../Lights/TwoDirectionals';
import BasicSphere from '../Objects/BasicSphere';
import BasicCube from '../Objects/BasicCube';
import { OBJLoader } from 'three-obj-mtl-loader';

function isMobileDevice() {
  return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};

export default class OpenHead {
  constructor({scene, onLoad}) {
    this.scene = scene;
    this.setupCamera();
    
    scene.renderer.shadowMap.enabled = true;
    scene.renderer.shadowMap.type = isMobileDevice() ? THREE.BasicShadowMap : THREE.PCFSoftShadowMap;

    this.root = new THREE.Group();

    this.wireMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true
    });

    const loadingCubeMat = 
      new THREE.MeshStandardMaterial({
        emissive: 0x5e0311,
        flatShading: true
      })
    ;

    this.loadingCube = new BasicCube({
      size:6,
      material: loadingCubeMat,
    });

    this.root.add(this.loadingCube.root);

    this.loading(0.5);

    this.setupLights();

    this.createSpheres();
    
    this.loadHead();

    if (onLoad) onLoad();
  }

  loading(percentage) {    
    this.loadingCube.root.scale.copy(
      new THREE.Vector3(1, 1 - percentage, 1)
    );

    this.loadingCube.root.position.copy(
      new THREE.Vector3(0,
        -0.5 * this.loadingCube.root.geometry.parameters.height * (percentage),
        0)
    )

    var quaternion = new THREE.Quaternion();
    quaternion.setFromAxisAngle( new THREE.Vector3( 0, 1, 0 ), (Math.PI * -2) * percentage );
    this.loadingCube.root.quaternion.copy(quaternion)
  }

  setupLights() {
    const lights = new Lights({
      intensity: 1.8,
      castShadow: true,
      bias: 0.00002,
      projectionSides: 2.5,
      mapSize: 2048
    });
    lights.rotateY(Math.PI);
    this.root.add(lights);
  }

  setupCamera() {
    const frustumSize = 10;
    const aspect = this.scene.camera.aspect;
    this.scene.camera = new THREE.OrthographicCamera(
      frustumSize * aspect / -2,
      frustumSize * aspect / 2,
      frustumSize / 2,
      frustumSize / -2,
      1,
      150);
    this.scene.camera.position.copy(new THREE.Vector3(0, 3.5, 10));
    this.scene.camera.lookAt(new THREE.Vector3(0, 0, 0));
  }

  createSpheres() {
    const sphereMat = [
      new THREE.MeshStandardMaterial({
        flatShading: true,
        roughness: 0
      }),
      this.wireMat
    ];
    const sphereMat2 = [
      new THREE.MeshStandardMaterial({
        emissive: 0x5e0311,
        flatShading: true
      }),
      this.wireMat
    ];
    this.spheres = new THREE.Group();
    this.sphereA = new BasicSphere({
      size: 8,
      widthSegments: 6,
      heightSegments: 6,
      material: sphereMat,
      castShadow: true,
      receiveShadow: true,
    });
    this.sphereA.root.position.copy(
      new THREE.Vector3(2.5, 0, 3)
    );
    
    this.sphereB = new BasicSphere({
      size: 7,
      widthSegments: 7,
      heightSegments: 6,
      material: sphereMat,
      castShadow: true,
      receiveShadow: true,
    });
    this.sphereB.root.position.copy(
      new THREE.Vector3(2, 0.5, -7)
    );
    
    this.sphereC = new BasicSphere({
      size: 5,
      widthSegments: 5,
      heightSegments: 4,
      material: sphereMat2,
      castShadow: true,
      receiveShadow: true,
    });
    this.sphereC.root.position.copy(
      new THREE.Vector3(-6.5, 0.5, -1)
    );
    
    this.spheres.add(this.sphereA.root);
    this.spheres.add(this.sphereB.root);
    this.spheres.add(this.sphereC.root);
    
    this.spheres.position.copy(
      new THREE.Vector3(0, 8, 0)
    );
  }

  loadHead() {
    const loader = new OBJLoader();
    this.onHeadReady = this.onHeadReady.bind(this);
    this.onHeadLoading = this.onHeadLoading.bind(this);
    loader.load(
      head,
      this.onHeadReady,
      this.onHeadLoading,
      function (error) {
        console.log('An error happened', error);
      });
  }

  onHeadLoading(xhr) {
    const loading = xhr.loaded / xhr.total;
    console.log((loading * 100) + '% loaded');
    
    this.loading(Math.sin(loading));
  }

  onHeadReady(object) {
    this.root.remove( this.loadingCube.root );
    this.loadingCube = null;
    
    object.scale.copy(new THREE.Vector3(0.2, 0.2, 0.2));
    object.traverse((obj) => {
      obj.receiveShadow = true;
      obj.castShadow = true;
      if (obj.name && obj.name.indexOf('occhio') >= 0) {
        obj.material.color.setRGB(0, 0, 0);
        obj.material.specular.setRGB(0.1, 0.1, 0.1);
        obj.material.roughness = 0;
      }
    });
    this.root.add(object);
    this.head = object;
    this.head.rotateY(-(Math.PI * 0.25));
    this.head.add(this.spheres);
  }

  update(timeElapsed, delta) {
    if (this.head) {
      const animationTime = timeElapsed * 0.1;
      this.head.rotateY((Math.sin(animationTime)) * delta * 0.1);

      this.sphereA.root.rotateY(0.3 * delta);
      this.sphereA.root.rotateX(0.6 * delta);

      this.sphereB.root.rotateY(-0.4 * delta);
      this.sphereB.root.rotateX(-0.6 * delta);

      this.sphereC.root.rotateY(-0.4 * delta);
      this.sphereC.root.rotateX(0.6 * delta);
      this.sphereC.root.rotateZ(0.9 * delta);
    }
  }

}

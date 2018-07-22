import * as THREE from 'three';

require('../css/style.css');
import BasicScene from './BasicScene.js';
import FadingCube from './FadingCube.js';

console.log("inizio");

const basicScene = new BasicScene();
basicScene.InitScene();
const camera = basicScene.camera;

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
const plane = new THREE.Plane();
const planeNormal = new THREE.Vector3();
const point = new THREE.Vector3();
const distanceFromCamera = 50;

window.document.addEventListener("click", (e) => {
  mouse.x = (e.clientX / window.innerWidth) * 2 - 1; // 0-1 -> -1-1
  mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
  planeNormal.copy(camera.position).normalize();
  plane.set(planeNormal, distanceFromCamera);
  raycaster.setFromCamera(mouse, camera);
  raycaster.ray.intersectPlane(plane, point);

  const fadingCube = new FadingCube();
  fadingCube.life = 5;
  fadingCube.initialTime = basicScene.clock.getElapsedTime();
  fadingCube.root.position.copy(point);

  console.log(fadingCube.initialTime);
  basicScene.Add(fadingCube);
});

/*const fadingCube = new FadingCube();
basicScene.Add(fadingCube);*/

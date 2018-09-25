import * as THREE from 'three';

export default class OnClickRaycaster {
  constructor(referenceCamera, referenceFrame = window) {
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();
    this.plane = new THREE.Plane();
    this.planeNormal = new THREE.Vector3();
    this.point = new THREE.Vector3();
    this.distanceFromCamera = 50;
    this.camera = referenceCamera;
    this.referenceFrame = referenceFrame;
    this.onClickEvent = undefined;

    this.onClick = this.onClick.bind(this);
    this.referenceFrame.addEventListener("click", this.onClick)
  }

  SedDistanceFromCamera(distance){
    this.distanceFromCamera = distance;
  }

  onClick(e) {
    this.mouse.x = (e.clientX / this.referenceFrame.innerWidth) * 2 - 1; // 0-1 -> -1-1
    this.mouse.y = -(e.clientY / this.referenceFrame.innerHeight) * 2 + 1;
    this.planeNormal.copy(this.camera.position).normalize();
    this.plane.set(this.planeNormal, this.distanceFromCamera);
    this.raycaster.setFromCamera(this.mouse, this.camera);
    this.raycaster.ray.intersectPlane(this.plane, this.point);

    if (this.onClickEvent !== undefined) {
      this.onClickEvent(this.point);
    }
  }
}

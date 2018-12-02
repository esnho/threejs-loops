import * as THREE from 'three';
import '../Helpers/Math.js';
import '../Helpers/THREE-extensions.js';

export default class BasicScene {
  constructor() {
    this.updatables = [];
    this.objects = [];
    this.clock = new THREE.Clock();
  }

  InitScene() {
    this.scene = new THREE.Scene();
    this.camera = this.GetCamera();

    this.camera.position.z = 10;

    const renderObject = this.GetRenderer();
    this.clearColor = renderObject.clearColor;
    this.renderer = renderObject.renderer;
    this.canvas = document.body.appendChild(this.renderer.domElement);

    this.renderer.render(this.scene, this.camera);

    this.Update();
  }

  Destroy() {
    this.objects.map(object => this.Remove(object));
    cancelAnimationFrame(this.animationFrame);
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.canvas.remove();
  }

  GetCamera() {
    const aspectRatio = window.innerWidth / window.innerHeight;
    const camera = new THREE.PerspectiveCamera(65, aspectRatio, 1, 100);
    return camera;
  }

  GetRenderer() {
    const clearColor = new THREE.Color();
    clearColor.setRGB(0.1, 0.1, 0.1);

    const renderer = new THREE.WebGLRenderer({
      antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(clearColor);

    return {
      clearColor: clearColor,
      renderer: renderer
    }
  }

  Add(object) {
    this.objects.push(object);
    this.scene.add(object.root);
    if (object.update) {
      this.updatables.push(object);
    }
    object.OnDie = () => {
      this.Remove(object);
    };
  }

  Remove(object) {
    if (object.onRemove) {
      object.onRemove();
    }
    this.scene.remove(object.root);
    this.updatables = this.updatables.filter(
      obj => obj.root.uuid !== object.root.uuid
    );
  }

  Update() {
    const timeElapsed = this.clock.getElapsedTime();
    for (let updatable of this.updatables) {
      updatable.update(timeElapsed);
    }
    this.renderer.render(this.scene, this.camera);
    this.animationFrame = requestAnimationFrame(() => this.Update());
  }
}

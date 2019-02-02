import {
  Clock,
  Scene,
  PerspectiveCamera,
  Color,
  WebGLRenderer
} from 'three';
import '../Helpers/Math.js';
import '../Helpers/THREE-extensions.js';

export default class BasicScene {
  constructor() {
    this.updatables = [];
    this.objects = [];
    this.clock = new Clock();
    this.InitScene = this.InitScene.bind(this);
    this.Resize = this.Resize.bind(this);
  }

  InitScene() {
    this.scene = new Scene();
    this.camera = this.GetCamera();

    this.camera.position.z = 10;

    const renderObject = this.GetRenderer();
    this.clearColor = renderObject.clearColor;
    this.renderer = renderObject.renderer;
    this.canvas = document.body.appendChild(this.renderer.domElement);

    this.renderer.render(this.scene, this.camera);

    this.oldTime = this.clock.getElapsedTime();
    this.Update();
    window.addEventListener('resize', this.Resize);
  }

  Destroy() {
    this.objects.map(object => this.Remove(object));
    cancelAnimationFrame(this.animationFrame);
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.canvas.remove();
    window.removeEventListener('resize', this.Resize);
  }

  GetCamera() {
    const aspectRatio = window.innerWidth / window.innerHeight;
    const camera = new PerspectiveCamera(65, aspectRatio, 1, 100);
    return camera;
  }

  GetRenderer() {
    const clearColor = new Color();
    clearColor.setRGB(0.1, 0.1, 0.1);

    const renderer = new WebGLRenderer({
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
    console.log(this.camera);
    
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
    const delta = timeElapsed - this.oldTime;
    this.oldTime = timeElapsed;
    for (let updatable of this.updatables) {
      updatable.update(timeElapsed, delta);
    }
    this.renderer.render(this.scene, this.camera);
    this.animationFrame = requestAnimationFrame(() => this.Update());
  }

  Resize() {
    if (this.camera.aspect) {
      this.camera.aspect = window.innerWidth / window.innerHeight;
    } else if (this.camera.type === 'OrthographicCamera') {
      const aspect = window.innerWidth / window.innerHeight;
      this.camera.left = this.camera.bottom * aspect;
      this.camera.right = this.camera.top * aspect;
    }
    this.camera.updateProjectionMatrix();
    console.log(this.camera, this.renderer);
    
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }
}

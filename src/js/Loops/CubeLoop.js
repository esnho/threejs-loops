import {
  Color,
  OrthographicCamera,
  Vector3,
  Group,
  MeshStandardMaterial
} from 'three';
import Lights from '../Lights/BlueParty.js';
import BasicCube from '../Objects/BasicCube.js';

export default class CubeLoop {
  constructor({scene, onLoad}) {
    const clearColor = new Color();
    clearColor.setIntHSL(48, 90, 64);
    scene.renderer.setClearColor(clearColor);

    const frustumSize = 10;
    const aspect = scene.camera.aspect;

    scene.camera = new OrthographicCamera(
        frustumSize * aspect / -2,
        frustumSize * aspect / 2,
        frustumSize / 2,
        frustumSize / -2,
        1,
        150
    );
    scene.camera.position.copy(new Vector3(-10, 10, 10));
    scene.camera.lookAt(new Vector3(0, 0, 0));

    this.root = new Group();

    const lights = new Lights();
    this.root.add(lights);

		const cubeMat = new MeshStandardMaterial({
			color: 0xffffff,
			metalness: 0.4,
			roughness: 0.2,
		});

    this.cubes = [
      new BasicCube({
        size: 2,
        material: cubeMat,
        position: new Vector3(-1, 1, 1)
      }),
      new BasicCube({
        size: 2,
        material: cubeMat,
        position: new Vector3(1, 1, 1)
      }),
      new BasicCube({
        size: 2,
        material: cubeMat,
        position: new Vector3(-1, 1, -1)
      }),
      new BasicCube({
        size: 2,
        material: cubeMat,
        position: new Vector3(1, 1, -1)
      }),
      new BasicCube({
        size: 2,
        material: cubeMat,
        position: new Vector3(-1, -1, 1)
      }),
      new BasicCube({
        size: 2,
        material: cubeMat,
        position: new Vector3(1, -1, 1)
      }),
      new BasicCube({
        size: 2,
        material: cubeMat,
        position: new Vector3(-1, -1, -1)
      }),
      new BasicCube({
        size: 2,
        material: cubeMat,
        position: new Vector3(1, -1, -1)
      })];

    this.cubesParent = new Group();
    for (let cube of this.cubes) {
      this.cubesParent.add(cube.root);
    }
    this.cubesParent.position.copy(new Vector3(1, -1, -1));
    this.root.add(this.cubesParent);

    if (onLoad) onLoad();
  }

  update(timeElapsed) {
    const animationTime = timeElapsed * 3;
    const loopTime = animationTime % (Math.PI * 2);

    if (loopTime < Math.PI) {
      this.firstSection(animationTime);
    } else {
      this.secondSection(animationTime);
    }
  }

  firstSection(animationTime) {
    const sinTime = Math.sin(animationTime * 0.5);
    const absSinTime = Math.abs(sinTime);

    this.cubesParent
      .children[7]
      .position
      .copy(new Vector3(1, -1, -1));
    
    for (let i = 0; i < this.cubesParent.children.length; i++) {
      const child = this.cubesParent.children[i];
      const rota = (Math.clamp(((1 - absSinTime) * (Math.PI * 0.5) + (i * 0.125)), 0, 1));
      const sinScale = new Vector3(rota, rota, rota);
      child.scale.copy(sinScale);
      child.rotation.z = (rota * Math.PI);
      child.rotation.x = rota * Math.PI * 0.5;
    }
  }

  secondSection(animationTime) {
    const sinTime = Math.sin(animationTime * 0.5);
    const absSinTime = Math.abs(sinTime);

    const cosTime = Math.cos(animationTime * 0.5);
    const absCosTime = Math.abs(cosTime);

    const child = this.cubesParent.children[7];
    const rota = (Math.clamp(((1 - absSinTime) * (Math.PI * 0.5) + (7 * 0.125)) + (absCosTime), 0, 2));
    const sinScale = new Vector3(rota, rota, rota);
    child.scale.copy(sinScale);
    child.rotation.z = (rota * Math.PI);
    child.rotation.x = rota * Math.PI * 0.5;
    const oldPos = new Vector3(1, -1, -1);
    child.position.copy(oldPos.lerp(new Vector3(0, 0, 0), Math.clamp((1 - absSinTime) * 6, 0, 1)));
    for (let i = 0; i < this.cubesParent.children.length - 1; i++) {
      const child = this.cubesParent.children[i];
      const rota = Math.clamp(((Math.clamp(((1 - absSinTime) * (Math.PI * 0.5) + (i * 0.125)), 0, 1)) -
        absCosTime), 0, 1);
      const sinScale = new Vector3(rota, rota, rota);
      child.scale.copy(sinScale);
      child.rotation.z = (rota * Math.PI);
      child.rotation.x = rota * Math.PI * 0.5;
    }
  }
}

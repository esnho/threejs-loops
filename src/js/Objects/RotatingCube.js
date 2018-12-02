import BasicCube from './BasicCube.js';

export default class RotatingCube extends BasicCube {
  update(timeElapsed) {
    const red = Math.abs(Math.sin(timeElapsed));
    this.cubeColor.r = red;
    this.cubeMaterial.color = this.cubeColor;

    this.root.rotation.x = timeElapsed * (Math.PI * 0.5) + this.seed;
    this.root.rotation.y = timeElapsed * (Math.PI) + this.seed;
  }
}

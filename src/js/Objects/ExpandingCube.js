import BasicCube from './BasicCube.js';

export default class ExpandingCubef extends BasicCube{

  update(timeElapsed) {
    const red = Math.abs(Math.sin(timeElapsed));
    this.cubeColor.r = red;
    this.cubeMaterial.color = this.cubeColor;

    this.root.scale.x =  red * (Math.PI * 0.5) + this.seed;
    //this.root.rotation.y = timeElapsed * (Math.PI) + this.seed;
  }
}

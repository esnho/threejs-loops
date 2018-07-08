import BasicCube from './BasicCube.js';

export default class FadingCube extends BasicCube {
  constructor() {
    super();

    this.life = 5;
    this.initialTime = 0;

    this.mesh.material.transparent = true;
    this.mesh.material.opacity = 0.1;
  }

  update(timeElapsed) {
    const currentTime = timeElapsed - this.initialTime;
    this.mesh.material.opacity = currentTime / this.life;
  }

  // timeElapsed == secondi passati dall'inizio della scena
  // this.life == secondi che il cubo impega ad apparire
  // opacity range(0 , 1) == trasparenza del cubo
  // timeElapsed=5 opacity=1
}

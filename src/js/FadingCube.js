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
    const lifeTime = currentTime / this.life;
    this.mesh.material.opacity = 1 - lifeTime;
    this.mesh.rotation.x = currentTime;
    if (lifeTime > 1) this.OnDie();
  }

  OnDie() {}

  // timeElapsed == secondi passati dall'inizio della scena
  // this.life == secondi che il cubo impega ad apparire
  // opacity range(0 , 1) == trasparenza del cubo
  // timeElapsed=5 opacity=1
}

import BasicCube from './BasicCube.js';

export default class Spark extends BasicCube {
  constructor({size, material, position, scene, velocity}) {
    super({size, material: (material || undefined), position: (position || undefined)});

    this.life = 5;
    this.initialTime = 0;
    this.scene = scene;
    this.velocity = velocity || 1;

    this.mesh.material.transparent = true;
    this.mesh.material.opacity = 0.1;
  }

  update(timeElapsed) {
    const currentTime = timeElapsed - this.initialTime;
    const lifeTime = currentTime / this.life;
    this.mesh.material.opacity = 1 - lifeTime;
    this.mesh.translateY(currentTime * (this.seed + 0.5) * this.velocity);
    if (lifeTime > 1) this.OnDie();
  }

  OnDie() {
    this.scene.Remove(this)
  }
}

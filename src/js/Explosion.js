import Spark from './Spark.js';
import * as THREE from 'three';

export default class Explosion {
  constructor(scene, point) {
    this.life = 1;
    this.initialTime = scene.clock.getElapsedTime();
    this.createSpark = this.createSpark.bind(this);
    this.Sparks = [];
    this.basicScene = scene;
    this.root = new THREE.Group();
    for(let i = 0; i < 500; i++) {
      this.createSpark();
    }
    this.root.position.copy(point);
    scene.Add(this);
  }

  createSpark() {
    const spark = new Spark();
    spark.life = 1;
    spark.initialTime = this.basicScene.clock.getElapsedTime();
    spark.root.rotation.z = Math.random() * Math.PI * 2;
    this.root.add(spark.root);
    this.Sparks.push(spark);
  }

  update(timeElapsed) {
    for (const spark of this.Sparks) {
      spark.update(timeElapsed);
    }
    const currentTime = timeElapsed - this.initialTime;
    const lifeTime = currentTime / this.life;
    if (lifeTime > 1) this.OnDie();
  }

  OnDie() {}
}

import * as THREE from 'three';

require('../css/style.css');
import BasicScene from './BasicScene.js';
import BasicCube from './BasicCube.js';

console.log("inizio");

const basicScene = new BasicScene();
basicScene.InitScene();

const cubesNumber = 50;
const spread = 60;
for(let i = 0; i < cubesNumber; i++) {
  let basicCube = new BasicCube();
  basicCube.root.position.x = (Math.random() * spread) - (spread * 0.5);
  basicCube.root.position.y = (Math.random() * spread) - (spread * 0.5);
  basicCube.root.position.z = (Math.random() * spread) - (spread * 0.5);

  basicScene.Add(basicCube);
}

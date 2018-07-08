import * as THREE from 'three';

require('../css/style.css');
import BasicScene from './BasicScene.js';
import FadingCube from './FadingCube.js';

console.log("inizio");

const basicScene = new BasicScene();
basicScene.InitScene();

window.document.addEventListener("click", (e) => {
  const fadingCube = new FadingCube();
  fadingCube.life = 35;
  fadingCube.initialTime = basicScene.clock.getElapsedTime();
  console.log(fadingCube.initialTime);
  basicScene.Add(fadingCube);
});

/*const fadingCube = new FadingCube();
basicScene.Add(fadingCube);*/

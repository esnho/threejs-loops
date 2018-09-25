import * as THREE from 'three';

require('../css/style.css');
import BasicScene from './BasicScene.js';
import FadingCube from './FadingCube.js';
import Spark from './Spark.js';
import Explosion from './Explosion.js';
import OnClickRaycaster from './OnClickRaycaster.js';

console.log("inizio");

const basicScene = new BasicScene();
basicScene.InitScene();
const camera = basicScene.camera;

const clickRaycaster = new OnClickRaycaster(camera);
clickRaycaster.onClickEvent = newExplosion;

function newExplosion(point) {
  const explosion = new Explosion(basicScene, point);

}

/*function explosion(point) {
  for(let i = 0; i < 500; i++) {
    addSpark(point);
  }
}*/

/*function addSpark(point) {
  const spark = new Spark();
  spark.life = 1;
  spark.initialTime = basicScene.clock.getElapsedTime();
  spark.root.rotation.z = Math.random() * Math.PI * 2;
  spark.root.position.copy(point);
  basicScene.Add(spark);
}*/

/*function addFadingCube(point) {
  const fadingCube = new FadingCube();
  fadingCube.life = 1;
  fadingCube.initialTime = basicScene.clock.getElapsedTime();
  fadingCube.root.position.copy(point);
  const newScale = new THREE.Vector3(4,4,4);
  fadingCube.root.scale.copy(newScale)

  console.log(fadingCube.initialTime);
  basicScene.Add(fadingCube);
}*/

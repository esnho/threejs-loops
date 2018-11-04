import * as THREE from 'three';

require('../css/style.css');
import BasicScene from './BasicScene.js';
import BasicCube from './BasicCube.js';
import CubeLoop from './loops/CubeLoop.js';

const basicScene = new BasicScene();
basicScene.InitScene();

const cubeLoop = new CubeLoop(basicScene.camera);
basicScene.Add(cubeLoop);

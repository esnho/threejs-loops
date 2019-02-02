import {
    Vector3,
    Group,
    MeshStandardMaterial,
    OrthographicCamera
  } from 'three';
import Lights from '../Lights/MagentaParty.js';
import BasicCube from '../Objects/BasicCube.js';

export default class CubeLoop {
    constructor({scene, onLoad}) {
        const frustumSize = 7;
        const aspect = scene.camera.aspect;
        this.scene = scene;

        scene.camera = new OrthographicCamera(
            frustumSize * aspect / - 2,
            frustumSize * aspect / 2,
            frustumSize / 2,
            frustumSize / - 2,
            0.1,
            150
        );
        scene.camera.position.copy(new Vector3(10, 10, 10));
        scene.camera.lookAt(new Vector3(0, 0, 0));

        this.root = new Group();

        const lights = new Lights();
        this.root.add(lights);

        const cubeMat = new MeshStandardMaterial({
            color: 0xffffff,
            metalness: 0.4,
            roughness: 0.2,
        });

        this.cubes = [];

        const halfCount = 11;

        this.cubesParent = new Group();
        for (let x = -halfCount; x < halfCount; x++) {
            for (let z = -halfCount; z < halfCount; z++) {
                const newCube = new BasicCube({
                        size: 1,
                        material: cubeMat,
                        position: new Vector3(x, 0, z)
                    });
                newCube.root.scale.copy(new Vector3(1,2,1));
                this.cubesParent.add(newCube.root);
                this.cubes.push(newCube);
            }
        }
        
        this.root.add(this.cubesParent);

        if (onLoad) onLoad();
    }
    

    update(timeElapsed) {
        const animationTime = timeElapsed * 3;
    
        for (let i = 0; i < this.cubesParent.children.length; i++) {
            const child = this.cubesParent.children[i];
            const newPos = child.position;
            newPos.y = Math.sin((i*Math.PI*0.25)+animationTime);
            child.position.copy(newPos);
        }

        
        this.scene.camera.position.copy(new Vector3(Math.sin(timeElapsed * .5) * 10, 10, Math.cos(timeElapsed * .5) * 10));
        this.scene.camera.lookAt(new Vector3(0, 0, 0));
        this.scene.camera.updateProjectionMatrix();
    }

}
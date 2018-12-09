import * as THREE from 'three';
import Lights from '../Lights/MagentaParty.js';
import BasicCube from '../Objects/BasicCube.js';

export default class CubeLoop {
    constructor(basicScene) {
        const sunSize = 35;

        this.scene = basicScene;

        basicScene.camera.position.copy(new THREE.Vector3(0, 0, 10));
        basicScene.camera.lookAt(new THREE.Vector3(0, 0, 0));
        basicScene.camera.far = 150;
        this.scene.camera.updateProjectionMatrix();

        this.root = new THREE.Group();

        const lights = new Lights();
        this.root.add(lights);

        const cubeMat = new THREE.MeshStandardMaterial({
            color: 0xffffff,
            metalness: 0.4,
            roughness: 0.2,
        });

        this.cubes = [];

        const slideCount = 250;
        const piCount = Math.PI / slideCount * 0.5;

        this.cubesParent = new THREE.Group();
        for (let y = -slideCount; y < slideCount; y++) {
            const scaleX = Math.cos(piCount * y) * sunSize;
            const scaleY = Math.sin(piCount * y) * sunSize;
            const newCube = new BasicCube({
                size: 1,
                material: cubeMat,
                position: new THREE.Vector3(0, scaleY, -60)
            });
            newCube.root.scale.copy(
                new THREE.Vector3(
                    scaleX * 2,
                    piCount * 0.75 * scaleX,
                    1)
                );
            this.cubesParent.add(newCube.root);
            this.cubes.push(newCube);
        }
        
        this.root.add(this.cubesParent);
    }
    

    update(timeElapsed) {
        const animationTime = timeElapsed * 3;        
    
        for (let i = 0; i < this.cubesParent.children.length; i++) {
            const child = this.cubesParent.children[i];
            const newRot = child.rotation;
            newRot.setFromVector3( new THREE.Vector3(
                0,
                ( Math.sin((i*Math.PI*0.25)+animationTime) * Math.PI * 0.02 ) * Math.sin(timeElapsed * 0.2),
                0
            ));
            child.rotation.copy(newRot);
        }
    }

}
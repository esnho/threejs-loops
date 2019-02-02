import {
    Vector3,
    Group,
    MeshStandardMaterial
  } from 'three';
import Lights from '../Lights/MagentaParty.js';
import BasicCube from '../Objects/BasicCube.js';

export default class SunLoop {
    constructor({scene, onLoad}) {
        const sunSize = 35;

        this.scene = scene;

        scene.camera.position.copy(new Vector3(0, 0, 10));
        scene.camera.lookAt(new Vector3(0, 0, 0));
        scene.camera.far = 150;
        this.scene.camera.updateProjectionMatrix();

        this.root = new Group();

        const lights = new Lights();
        this.root.add(lights);

        const cubeMat = new MeshStandardMaterial({
            color: 0xffffff,
            metalness: 0.4,
            roughness: 0.2,
        });

        this.cubes = [];

        const slideCount = 15;
        const piCount = Math.PI / slideCount * 0.5;

        this.cubesParent = new Group();
        for (let y = -slideCount; y < slideCount; y++) {
            const scaleX = Math.cos(piCount * y) * sunSize;
            const scaleY = Math.sin(piCount * y) * sunSize;
            const newCube = new BasicCube({
                size: 1,
                material: cubeMat,
                position: new Vector3(0, scaleY, -60)
            });
            newCube.root.scale.copy(
                new Vector3(
                    scaleX * 2,
                    piCount * 0.75 * scaleX,
                    1)
                );
            this.cubesParent.add(newCube.root);
            this.cubes.push(newCube);
        }
        
        this.root.add(this.cubesParent);

        if (onLoad) onLoad();
    }
    

    update(timeElapsed) {
        const animationTime = timeElapsed * 3;        
    
        for (let i = 0; i < this.cubesParent.children.length; i++) {
            const child = this.cubesParent.children[i];
            const newRot = child.rotation;
            newRot.setFromVector3( new Vector3(
                0,
                ( Math.sin((i*Math.PI*0.15) + animationTime) * Math.PI * 0.07 ) *
                ( Math.sin((i*Math.PI*0.14) + animationTime) * Math.PI * 0.07 ),
                0
            ));
            child.rotation.copy(newRot);
        }
    }

}
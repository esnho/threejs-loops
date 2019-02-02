import {
    Color,
    Vector3,
    Group,
    MeshStandardMaterial,
    Fog
  } from 'three';
import Lights from '../Lights/MagentaParty.js';
import BasicCylinder from '../Objects/BasicCylinder.js';

export default class FloatingBio {
    constructor({scene, onLoad}) {
        this.scene = scene;
        
        scene.camera.far = 350;
        this.scene.camera.updateProjectionMatrix();
            
        const clearColor = new Color();
        clearColor.setIntHSL(48, 90, 64);
        scene.renderer.setClearColor(clearColor);
        scene.scene.fog = new Fog(clearColor, 0.1, 300);

        this.root = new Group();

        const lights = new Lights();
        this.root.add(lights);

        const cubeMat = new MeshStandardMaterial({
            color: 0xffffff,
            metalness: 0.4,
            roughness: 0.2,
        });

        this.amoebas = [];
        const slices = 17;
        const amebaSize = 15;
        const amebaCount = 60;

        for (let i = -amebaCount; i < amebaCount; i++) {
            const newAmeba = this.newAmeba({
                slices,
                amebaSize,
                material: cubeMat,
                xPosition: i*amebaSize*0.1
            });

            this.amoebas.push(newAmeba);
            this.root.add(newAmeba);
        }

        if (onLoad) onLoad();
    }
    

    newAmeba(params) {
        const {slices, amebaSize, material, xPosition = 0} = params;

        const piK = Math.PI / slices * 0.5;
        const ameba = new Group();
        const zDistribution = -(this.scene.camera.far - amebaSize);

        ameba.translateZ(Math.random() * zDistribution);
        for (let y = -slices; y < slices; y++) {
            const scaleX = Math.cos(piK * y) * amebaSize;
            const scaleY = Math.sin(piK * y * 0.7) * amebaSize;
            const newCube = new BasicCylinder({
                size: 1,
                material: material,
                position: new Vector3(
                    xPosition * (ameba.position.z / (amebaSize * 3)),
                    scaleY,
                    0
                )
            });
            newCube.root.scale.copy(new Vector3(
                scaleX * 0.7,
                piK * 0.6 * scaleX,
                scaleX * 0.7
            ));
            ameba.add(newCube.root);
        }
        ameba.userData = {
            'initialPosition': ameba.position.clone(),
            'randomValue': Math.random()
        };
        return ameba;
    }

    update(timeElapsed) {
        const animationTime = timeElapsed * 3;
        
        for (let a = 0; a < this.amoebas.length; a++) {
            this.updateAmeba(a, animationTime);
        }

        this.updateCamera(timeElapsed * .5);
    }

    updateAmeba(a, animationTime) {
        const ameba = this.amoebas[a];
        for (let i = 0; i < ameba.children.length; i++) {
            const child = ameba.children[i];
            const newRot = child.position;
            child.position.copy(newRot);
            child.translateY(Math.sin(animationTime + (i * 0.08 + ameba.userData.randomValue) + (a * Math.PI)) * 0.12);
            child.rotateY(0.005 + (i * 0.001));
        }
        const newPos = ameba.userData.initialPosition.clone();
        const sawTime = (animationTime * 0.01 + (a * Math.PI)) * Math.pow(Math.abs(ameba.position.z * 0.01), 0.3);
        const sawAmp = 250;
        newPos.y = (2 * (sawTime - Math.floor(0.5 + sawTime))) * sawAmp;
        ameba.position.copy(newPos);
    }

    updateCamera(timeElapsed) {
        this.scene.camera.position.copy(
            new Vector3(
                0,
                (Math.cos(timeElapsed) * 14),
                10)
            );
        this.scene.camera.lookAt(new Vector3(0, 0, -60));
        
        this.scene.camera.updateProjectionMatrix();
    }

}
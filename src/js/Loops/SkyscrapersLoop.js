import {
    Vector3,
    Color,
    BackSide,
    Group,
    OrthographicCamera,
    MeshStandardMaterial,
    MeshBasicMaterial
  } from 'three';
import TwoDirectionals from '../Lights/TwoDirectionals.js';
import WhiteHemi from '../Lights/WhiteHemi.js';
import BasicCube from '../Objects/BasicCube.js';
import BasicSphere from '../Objects/BasicSphere.js';
require('typeface-vt323');

export default class SkyscrapersLoop {
    constructor({scene, onLoad}) {
        this.scene = scene;

        this.editScene();

        this.root = new Group();

        this.addLights();

        this.addSkyscrapers();

        this.addSky();

        this.addGround();

        this.addWhereAreYou();

        if (onLoad) onLoad();
    }

    addLights() {
        const directionals = new TwoDirectionals();
        this.root.add(directionals);
        const hemi = new WhiteHemi();
        this.root.add(hemi);
    }

    editScene() {
        const frustumSize = 7;
        const aspect = this.scene.camera.aspect;
        const clearColor = new Color();
        clearColor.setIntHSL(244, 30, 8);
        this.scene.renderer.setClearColor(clearColor);
        this.scene.camera = new OrthographicCamera(frustumSize * aspect / -2, frustumSize * aspect / 2, frustumSize / 2, frustumSize / -2, 0.1, 150);
        this.scene.camera.position.copy(new Vector3(10, 10, 10));
        this.scene.camera.lookAt(new Vector3(0, 0, 0));
    }

    addSkyscrapers() {
        const skyScraperMat = new MeshStandardMaterial({
            color: 0x413f50,
            metalness: 0.3,
            roughness: 0.2
        });

        const windowOffMat = new MeshBasicMaterial({
            color: 0x231f37
        });

        const windowOnMat = new MeshBasicMaterial({
            color: 0xccccdd //0xb7a51f
        });

        this.cubes = [];

        const halfCount = 5;

        this.cubesParent = new Group();
        for (let x = -halfCount; x < halfCount; x++) {
            for (let z = -halfCount; z < halfCount; z++) {
                const newCube = new BasicCube({
                        size: 1,
                        material: skyScraperMat,
                        position: new Vector3(x*1.5 + (Math.random()-0.5), 0, z*1.5)
                    });
                for (let j = 0; j < 80; j++) {
                    const xOffset = Math.random() > 0.5 ? 0.5 : -0.5;
                    if (xOffset < 0) continue;
                    let yOffset = ((Math.random()) * 0.8) - 0.4;
                    let zOffset = Math.random() * (Math.random() > 0.5 ? 0.4 : -0.4);
                    yOffset = Math.round(yOffset * 10) * 0.1;
                    zOffset = Math.round(zOffset * 5) * 0.2;
                    const newWindow = new BasicCube({
                        size: 0.05,
                        material: Math.random() > 0.1 ? windowOffMat : windowOnMat,
                        position: new Vector3(zOffset, yOffset, xOffset)
                    })
                    newCube.root.add(newWindow.root);
                }
                newCube.root.scale.copy(new Vector3(1,2,1));
                this.cubesParent.add(newCube.root);
                this.cubes.push(newCube);
            }
        }
        
        this.root.add(this.cubesParent);
    }

    addSky() {
        const skyMat = new MeshStandardMaterial({
            color: 0x050329,
            metalness: 0.1,
            roughness: 0.9,
            side: BackSide
        });
        const starsMat = new MeshBasicMaterial({
            color: 0xccccdd,
            side: BackSide,
            wireframe: true
        });
        const sky = new BasicSphere({
            size: 5,
            position: new Vector3(-0.5, 1, 0),
            material: skyMat,
            heightSegments: 72,
            widthSegments: 128
        });
        sky.root.scale.copy(new Vector3(10, 9.25, 10));
        this.root.add(sky.root);
        for (let i = 0; i < 120; i++) {
            const phy = Math.random() * Math.PI * 2;
            const theta = Math.random() * Math.PI * 0.6;
            const newStar = new BasicSphere({
                size: 0.018,
                material: starsMat,
                position: new Vector3(Math.sin(phy) * 20, Math.cos(theta) * 8, -10)
            });
            this.root.add(newStar.root);
        }
    }

    addGround() {
        const groundMat = new MeshStandardMaterial({
            color: 0x131313,
            metalness: 0.7,
            roughness: 0.9,
            flatShading: true
        });
        const ground = new BasicSphere({
            size: 3,
            position: new Vector3(0, -1, 0),
            material: groundMat
        });
        ground.root.scale.copy(new Vector3(5, 0.5, 4));
        this.root.add(ground.root);
    }

    addWhereAreYou() {
        this.whereAreYou = document.createElement('h1');
        this.whereAreYou.innerHTML = "where are you";
        this.whereAreYou.style.margin = 'auto';
        this.whereAreYou.style.marginTop = '30vh';
        this.whereAreYou.style.verticalAlign = 'middle';
        this.whereAreYou.style.fontFamily = "'VT323', monospace";
        this.whereAreYou.style.color = 'antiquewhite';
        this.whereAreYou.style.fontWeight = 'lighter';
        this.whereAreYou.style.cursor = 'default';
        this.whereAreYou.style.letterSpacing = '0.2em';
        document.body.appendChild(this.whereAreYou);
    }
    

    update(timeElapsed) {
        const animationTime = timeElapsed * 0.2;
    
        this.updateSkyscrapers(animationTime);
        
        this.updateCamera(timeElapsed);
    }

    updateSkyscrapers(animationTime) {
        for (let i = 0; i < this.cubesParent.children.length; i++) {
            const child = this.cubesParent.children[i];
            const newPos = child.position;
            newPos.y = Math.sin((i * Math.PI * 0.25) + animationTime);
            child.position.copy(newPos);
        }
    }

    updateCamera(timeElapsed) {
        this.scene.camera.position.copy(
            new Vector3(
                Math.cos(timeElapsed * .12) * 10 + 2,
                Math.cos(timeElapsed * .2) + 1,
                30)
            );
        this.scene.camera.lookAt(new Vector3(0, 2.5, 6));
        this.scene.camera.updateProjectionMatrix();
    }

    onRemove() {
        document.body.removeChild(this.whereAreYou);
    }

}
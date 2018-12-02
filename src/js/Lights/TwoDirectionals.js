import * as THREE from 'three';
import WhiteHemi from './WhiteHemi.js';

export default class TwoDirectionals extends THREE.Group {
    constructor() {
        super();
        const whiteEmi = new WhiteHemi();
        this.add(whiteEmi);

        const directionalLight = new THREE.DirectionalLight('white', 0.65);
        const directionalLight2 = new THREE.DirectionalLight('white', 0.55);

        directionalLight.position.copy(
            new THREE.Vector3(
                9,
                3.5,
                0
            )
        );

        directionalLight2.position.copy(
            new THREE.Vector3(
                -10,
                2,
                0
            )
        );

        this.add(directionalLight, directionalLight2);
    }
}
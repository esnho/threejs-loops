import {
    Group,
    DirectionalLight,
    Vector3
  } from 'three';
import WhiteHemi from './WhiteHemi.js';

const defaultParams = {
    intensity: 1,
    castShadow: false,
    bias: 0,
    projectionSides: undefined,
    mapSize: 512,
}

export default class TwoDirectionals extends Group {
    constructor(...args) {
        super(...args);
		const {
            intensity,
            castShadow,
            bias,
            projectionSides,
            mapSize
        } = {
            ...defaultParams,
            ...args[0]
        };
        this.intensity = intensity;
        this.projectionSides = projectionSides;
        this.mapSize = mapSize;
        console.log("mapsize", this.mapSize)
        
        /* const whiteEmi = new WhiteHemi();
        this.add(whiteEmi); */

        const directionalLight = new DirectionalLight('white', 0.65 * this.intensity);
        const directionalLight2 = new DirectionalLight('white', 0.55 * this.intensity);
        directionalLight.shadow.bias = bias || 0;
        directionalLight2.shadow.bias = bias || 0;
        
        directionalLight.castShadow = castShadow;
        directionalLight2.castShadow = castShadow;

        this.updateProjection(directionalLight, this.projectionSides);
        this.updateProjection(directionalLight2, this.projectionSides);
        this.updateShadowMap(directionalLight, this.mapSize);
        this.updateShadowMap(directionalLight2, this.mapSize);

        directionalLight.position.copy(
            new Vector3(
                9,
                3.5,
                0
            )
        );

        directionalLight2.position.copy(
            new Vector3(
                -10,
                2,
                0
            )
        );

        this.add(directionalLight, directionalLight2);
    }

    updateProjection(light, projectionSides) {
        light.shadow.camera.left = -projectionSides;
        light.shadow.camera.right = projectionSides;
        light.shadow.camera.updateProjectionMatrix();
    }

    updateShadowMap(light, mapSize) {
        light.shadow.mapSize.width = mapSize;
        light.shadow.mapSize.height = mapSize;
    }
}
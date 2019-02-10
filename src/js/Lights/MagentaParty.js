import {
  Group,
	HemisphereLight
} from 'three';

const defaultParams = {
    intensity: 1
}

export default class MagentaParty extends Group {
	constructor(...args) {
		super(...args);
		this.params = {
			...defaultParams,
			...args[0]
		};

    const hemiLight = new HemisphereLight(
			0xffffff,
			0xffffff,
			1.5 * this.params.intensity
		);
		hemiLight.color.setHSL(
			NormalizeH(325), 
			0.9,
			0.94
		);
		hemiLight.groundColor.setHSL(
			NormalizeH(325), 
			0.9, 
			0.64
		);
		hemiLight.position.set( 0, 2, 0 );
		this.add( hemiLight );
	}
}
	
function NormalizeH(h) {
	return h/360.0;
}

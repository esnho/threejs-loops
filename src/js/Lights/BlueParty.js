import * as THREE from 'three';

export default class Ligths extends THREE.Group {
  constructor() {
    super();

    const hemiLight = new THREE.HemisphereLight( 0xffffff, 0xffffff, 1.5 );
		hemiLight.color.setHSL(
      NormalizeH(250),
      0.9,
      0.94,
    );
		hemiLight.groundColor.setHSL(
      NormalizeH(250),
      0.9,
      0.44,
    );
		hemiLight.position.set( 0, 2, 0 );
		this.add( hemiLight );
	}
}
	
function NormalizeH(h) {
	return h/360.0;
}

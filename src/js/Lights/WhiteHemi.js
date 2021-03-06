import {
	Group,
	HemisphereLight
} from 'three';

export default class WhiteHemi extends Group {
  constructor() {
    super();

    const hemiLight = new HemisphereLight( 0xffffff, 0xffffff, 3.0 );
		hemiLight.color.setHSL(
			Math.NormalizeHue(325), 
			0.1,
			0.94
		);
		hemiLight.groundColor.setHSL(
			Math.NormalizeHue(325), 
			0.1, 
			0.64
		);
		hemiLight.position.set( 0, 2, 0 );
		this.add( hemiLight );
	}
}

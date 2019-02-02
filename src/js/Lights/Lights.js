import {
  Group,
	HemisphereLight,
	AmbientLight,
	PointLight,
	Vector3
} from 'three';

export default class Ligths extends Group {
  constructor() {
    super();

    const hemiLight = new HemisphereLight( 0xffffff, 0xffffff, 1.5 );
		hemiLight.color.setHSL(
			NormalizeH(186), 
			0.97, 
			0.94
		);
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

		const ambient = new AmbientLight( 0x756666 );
		ambient.color.setHSL(
			NormalizeH(186), 
			0.97, 
			0.7
		);
		//this.add( ambient );

		this.pointLightA = new PointLight( 0xf7fc9a, 0.7 );
    this.pointLightA.position.copy(new Vector3(6, 3, 0));
		//this.add( this.pointLightA );

		this.pointLightB = new PointLight( 0xf7fc9a, 0.4 );
    this.pointLightB.position.copy(new Vector3(0, -2, -9));
		//this.add( this.pointLightB );
		
		/* this.pointLightHelper = new PointLightHelper(this.pointLightB, 2);
		this.add(this.pointLightHelper); */
	}
}
	
function NormalizeH(h) {
	return h/360.0;
}

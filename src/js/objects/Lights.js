import * as THREE from 'three';

export default class Ligths extends THREE.Group {
  constructor() {
    super();

    const hemiLight = new THREE.HemisphereLight( 0xffffff, 0xffffff, 1 );
		hemiLight.color.setHSL( 0.6, 1, 0.8 );
		hemiLight.groundColor.setHSL( 0.095, 1, 0.2 );
		hemiLight.position.set( 0, 2, 0 );
		this.add( hemiLight );

		const ambient = new THREE.AmbientLight( 0x756666 );
		this.add( ambient );

		this.pointLight = new THREE.PointLight( 0xffffff, 0.3 );
    this.pointLight.position.copy(new THREE.Vector3(6, 3, 0));
		this.add( this.pointLight );
  }
}

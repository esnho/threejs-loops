import * as THREE from 'three';

THREE.Color.prototype.setIntHSL = function(h, s, l) {
    THREE.Color.prototype.setHSL(
      h/360.0,
      s/100.0,
      l/100.0
    );
}
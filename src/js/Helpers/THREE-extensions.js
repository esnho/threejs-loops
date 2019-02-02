import { Color } from 'three';

Color.prototype.setIntHSL = function(h, s, l) {
    Color.prototype.setHSL(
      h/360.0,
      s/100.0,
      l/100.0
    );
}
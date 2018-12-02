Math.clamp = function(value, min, max) {
  return Math.min(Math.max(value, min), max);
};

Math.NormalizeHue = function(h) {
	return h/360.0;
};
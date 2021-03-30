(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{38:function(n,e,o){"use strict";o.r(e);var t=o(104),g='#define GLSLIFY 1\n//\n// GLSL textureless classic 3D noise "cnoise",\n// with an RSL-style periodic variant "pnoise".\n// Author:  Stefan Gustavson (stefan.gustavson@liu.se)\n// Version: 2011-10-11\n//\n// Many thanks to Ian McEwan of Ashima Arts for the\n// ideas for permutation and gradient selection.\n//\n// Copyright (c) 2011 Stefan Gustavson. All rights reserved.\n// Distributed under the MIT license. See LICENSE file.\n// https://github.com/stegu/webgl-noise\n//\n\nvec3 mod289(vec3 x)\n{\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x)\n{\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x)\n{\n  return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nvec3 fade(vec3 t) {\n  return t*t*t*(t*(t*6.0-15.0)+10.0);\n}\n\n// Classic Perlin noise\nfloat cnoise(vec3 P)\n{\n  vec3 Pi0 = floor(P); // Integer part for indexing\n  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1\n  Pi0 = mod289(Pi0);\n  Pi1 = mod289(Pi1);\n  vec3 Pf0 = fract(P); // Fractional part for interpolation\n  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\n  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n  vec4 iy = vec4(Pi0.yy, Pi1.yy);\n  vec4 iz0 = Pi0.zzzz;\n  vec4 iz1 = Pi1.zzzz;\n\n  vec4 ixy = permute(permute(ix) + iy);\n  vec4 ixy0 = permute(ixy + iz0);\n  vec4 ixy1 = permute(ixy + iz1);\n\n  vec4 gx0 = ixy0 * (1.0 / 7.0);\n  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\n  gx0 = fract(gx0);\n  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n  vec4 sz0 = step(gz0, vec4(0.0));\n  gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n  gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n\n  vec4 gx1 = ixy1 * (1.0 / 7.0);\n  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\n  gx1 = fract(gx1);\n  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n  vec4 sz1 = step(gz1, vec4(0.0));\n  gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n  gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n\n  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\n  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\n  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\n  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\n  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\n  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\n  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\n  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\n\n  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n  g000 *= norm0.x;\n  g010 *= norm0.y;\n  g100 *= norm0.z;\n  g110 *= norm0.w;\n  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n  g001 *= norm1.x;\n  g011 *= norm1.y;\n  g101 *= norm1.z;\n  g111 *= norm1.w;\n\n  float n000 = dot(g000, Pf0);\n  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n  float n111 = dot(g111, Pf1);\n\n  vec3 fade_xyz = fade(Pf0);\n  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\n  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); \n  return 2.2 * n_xyz;\n}\n\n// Classic Perlin noise, periodic variant\nfloat pnoise(vec3 P, vec3 rep)\n{\n  vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period\n  vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period\n  Pi0 = mod289(Pi0);\n  Pi1 = mod289(Pi1);\n  vec3 Pf0 = fract(P); // Fractional part for interpolation\n  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\n  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n  vec4 iy = vec4(Pi0.yy, Pi1.yy);\n  vec4 iz0 = Pi0.zzzz;\n  vec4 iz1 = Pi1.zzzz;\n\n  vec4 ixy = permute(permute(ix) + iy);\n  vec4 ixy0 = permute(ixy + iz0);\n  vec4 ixy1 = permute(ixy + iz1);\n\n  vec4 gx0 = ixy0 * (1.0 / 7.0);\n  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\n  gx0 = fract(gx0);\n  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n  vec4 sz0 = step(gz0, vec4(0.0));\n  gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n  gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n\n  vec4 gx1 = ixy1 * (1.0 / 7.0);\n  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\n  gx1 = fract(gx1);\n  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n  vec4 sz1 = step(gz1, vec4(0.0));\n  gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n  gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n\n  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\n  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\n  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\n  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\n  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\n  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\n  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\n  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\n\n  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n  g000 *= norm0.x;\n  g010 *= norm0.y;\n  g100 *= norm0.z;\n  g110 *= norm0.w;\n  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n  g001 *= norm1.x;\n  g011 *= norm1.y;\n  g101 *= norm1.z;\n  g111 *= norm1.w;\n\n  float n000 = dot(g000, Pf0);\n  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n  float n111 = dot(g111, Pf1);\n\n  vec3 fade_xyz = fade(Pf0);\n  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\n  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); \n  return 2.2 * n_xyz;\n}\n\nuniform float time;\n\nvarying vec2 vUv;\nvarying float noise;\nvarying float lowNoise;\n\nfloat turbulence( vec3 p ) {\n    float w = 100.0;\n    float t = -.5;\n    for (float f = 1.0 ; f <= 10.0 ; f++ ){\n        float power = pow( 2.0, f );\n        t += abs( pnoise( vec3( power * p ), vec3( 10.0, 10.0, 10.0 ) ) / power );\n    }\n    return t;\n}\n\nvoid main() {\n\n    vUv = uv;\n\n    // get a turbulent 3d noise using the normal, normal to high freq\n    noise = turbulence( .5 * normal );\n    // get a 3d noise using the position, low frequency\n    lowNoise = 2.0 * pnoise( 0.5 * position + time, vec3( 10.0 ) );\n    // compose both noises\n    float displacement = abs(noise + lowNoise);\n    \n    // move the position along the normal and transform it\n    vec3 newPosition = position + (normal * ((displacement * 2.0) - 1.0));\n    noise = displacement;\n    gl_Position = projectionMatrix * modelViewMatrix * vec4( newPosition, 1.0 );\n\n}',c='#define GLSLIFY 1\n//\n// GLSL textureless classic 3D noise "cnoise",\n// with an RSL-style periodic variant "pnoise".\n// Author:  Stefan Gustavson (stefan.gustavson@liu.se)\n// Version: 2011-10-11\n//\n// Many thanks to Ian McEwan of Ashima Arts for the\n// ideas for permutation and gradient selection.\n//\n// Copyright (c) 2011 Stefan Gustavson. All rights reserved.\n// Distributed under the MIT license. See LICENSE file.\n// https://github.com/stegu/webgl-noise\n//\n\nvec3 mod289(vec3 x)\n{\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x)\n{\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x)\n{\n  return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nvec3 fade(vec3 t) {\n  return t*t*t*(t*(t*6.0-15.0)+10.0);\n}\n\n// Classic Perlin noise\nfloat cnoise(vec3 P)\n{\n  vec3 Pi0 = floor(P); // Integer part for indexing\n  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1\n  Pi0 = mod289(Pi0);\n  Pi1 = mod289(Pi1);\n  vec3 Pf0 = fract(P); // Fractional part for interpolation\n  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\n  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n  vec4 iy = vec4(Pi0.yy, Pi1.yy);\n  vec4 iz0 = Pi0.zzzz;\n  vec4 iz1 = Pi1.zzzz;\n\n  vec4 ixy = permute(permute(ix) + iy);\n  vec4 ixy0 = permute(ixy + iz0);\n  vec4 ixy1 = permute(ixy + iz1);\n\n  vec4 gx0 = ixy0 * (1.0 / 7.0);\n  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\n  gx0 = fract(gx0);\n  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n  vec4 sz0 = step(gz0, vec4(0.0));\n  gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n  gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n\n  vec4 gx1 = ixy1 * (1.0 / 7.0);\n  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\n  gx1 = fract(gx1);\n  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n  vec4 sz1 = step(gz1, vec4(0.0));\n  gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n  gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n\n  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\n  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\n  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\n  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\n  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\n  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\n  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\n  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\n\n  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n  g000 *= norm0.x;\n  g010 *= norm0.y;\n  g100 *= norm0.z;\n  g110 *= norm0.w;\n  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n  g001 *= norm1.x;\n  g011 *= norm1.y;\n  g101 *= norm1.z;\n  g111 *= norm1.w;\n\n  float n000 = dot(g000, Pf0);\n  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n  float n111 = dot(g111, Pf1);\n\n  vec3 fade_xyz = fade(Pf0);\n  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\n  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); \n  return 2.2 * n_xyz;\n}\n\n// Classic Perlin noise, periodic variant\nfloat pnoise(vec3 P, vec3 rep)\n{\n  vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period\n  vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period\n  Pi0 = mod289(Pi0);\n  Pi1 = mod289(Pi1);\n  vec3 Pf0 = fract(P); // Fractional part for interpolation\n  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\n  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n  vec4 iy = vec4(Pi0.yy, Pi1.yy);\n  vec4 iz0 = Pi0.zzzz;\n  vec4 iz1 = Pi1.zzzz;\n\n  vec4 ixy = permute(permute(ix) + iy);\n  vec4 ixy0 = permute(ixy + iz0);\n  vec4 ixy1 = permute(ixy + iz1);\n\n  vec4 gx0 = ixy0 * (1.0 / 7.0);\n  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\n  gx0 = fract(gx0);\n  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n  vec4 sz0 = step(gz0, vec4(0.0));\n  gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n  gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n\n  vec4 gx1 = ixy1 * (1.0 / 7.0);\n  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\n  gx1 = fract(gx1);\n  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n  vec4 sz1 = step(gz1, vec4(0.0));\n  gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n  gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n\n  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\n  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\n  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\n  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\n  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\n  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\n  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\n  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\n\n  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n  g000 *= norm0.x;\n  g010 *= norm0.y;\n  g100 *= norm0.z;\n  g110 *= norm0.w;\n  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n  g001 *= norm1.x;\n  g011 *= norm1.y;\n  g101 *= norm1.z;\n  g111 *= norm1.w;\n\n  float n000 = dot(g000, Pf0);\n  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n  float n111 = dot(g111, Pf1);\n\n  vec3 fade_xyz = fade(Pf0);\n  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\n  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); \n  return 2.2 * n_xyz;\n}\n\nvarying vec2 vUv;\nvarying float noise;\nvarying float lowNoise;\n\nvoid main() {\n    vec3 ColorTop = vec3(1.,0.55,0);\n    vec3 ColorMid = vec3(0.226,0.000,0.615);\n    vec3 ColorBot = vec3(0,0,0);\n    float Middle = 0.85;\n\n    float k = 1.0- pow(noise, 1.4);\n    float kstep = step(k, Middle);\n    \n    vec3 color = mix(\n        ColorTop,\n        ColorMid,\n        k / Middle\n    ) * kstep;\n\n    color += mix(\n        ColorMid,\n        ColorBot,\n        (k - Middle) / (1.0 - Middle)\n    ) * (1.0 - kstep);\n\n    //color = vec3( pnoise( vec3( vUv.xy * 10.0, 1 ), vec3( 10.0, 10.0, 10.0 ) ) );\n    //color = vec3(abs(noise*1.0));\n    gl_FragColor = vec4( color, 1.0 );\n\n}';function i(n,e){for(var o=0;o<e.length;o++){var t=e[o];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}o.d(e,"default",function(){return r});var r=function(){function n(e){var o=e.scene,i=e.onLoad;!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n);var r=new t.Color;r.setHSL(.62,.9,.2),o.renderer.setClearColor(r);var v=o.camera.aspect;o.camera=new t.OrthographicCamera(10*v/-2,10*v/2,5,-5,1,150),o.camera.position.copy(new t.Vector3(0,50,50)),o.camera.lookAt(new t.Vector3(0,0,0)),this.root=new t.Group,this.material=new t.ShaderMaterial({uniforms:{time:{type:"f",value:0}},vertexShader:g,fragmentShader:c});var a=new t.Mesh(new t.IcosahedronGeometry(3,5),this.material);this.root.add(a),this.inspiredBy=document.createElement("div"),this.inspiredBy.innerHTML="Edit from: https://www.clicktorelease.com/blog/vertex-displacement-noise-3d-webgl-glsl-three-js.html",this.inspiredBy.style.position="absolute",this.inspiredBy.style.bottom=3,this.inspiredBy.style.right=3,this.inspiredBy.style.color="darkcyan",document.body.appendChild(this.inspiredBy),i&&i()}var e,o,r;return e=n,(o=[{key:"update",value:function(n){this.root.rotateY(1e-4),this.root.rotateX(6e-4),this.material.uniforms.time.value=.1*n}},{key:"onRemove",value:function(){document.body.removeChild(this.inspiredBy)}}])&&i(e.prototype,o),r&&i(e,r),n}()}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvU2hhZGVycy9ub2lzZS1kaXNwbGFjZW1lbnQudmVydCIsIndlYnBhY2s6Ly8vLi9zcmMvanMvU2hhZGVycy9ub2lzZS12aWV3LXV2LmZyYWciLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0xvb3BzL01vcnBoaW5nU3BoZXJlLmpzIl0sIm5hbWVzIjpbIm5vaXNlX2Rpc3BsYWNlbWVudCIsIm5vaXNlX3ZpZXdfdXYiLCJNb3JwaGluZ1NwaGVyZSIsIl9yZWYiLCJzY2VuZSIsIm9uTG9hZCIsIl9jbGFzc0NhbGxDaGVjayIsInRoaXMiLCJjbGVhckNvbG9yIiwiQ29sb3IiLCJzZXRIU0wiLCJyZW5kZXJlciIsInNldENsZWFyQ29sb3IiLCJhc3BlY3QiLCJjYW1lcmEiLCJPcnRob2dyYXBoaWNDYW1lcmEiLCJmcnVzdHVtU2l6ZSIsInBvc2l0aW9uIiwiY29weSIsIlZlY3RvcjMiLCJsb29rQXQiLCJyb290IiwiR3JvdXAiLCJtYXRlcmlhbCIsIlNoYWRlck1hdGVyaWFsIiwidW5pZm9ybXMiLCJ0aW1lIiwidHlwZSIsInZhbHVlIiwidmVydGV4U2hhZGVyIiwibm9pc2VEaXNwIiwiZnJhZ21lbnRTaGFkZXIiLCJiYXNpY3V2dmllcyIsIm1lc2giLCJNZXNoIiwiSWNvc2FoZWRyb25HZW9tZXRyeSIsImFkZCIsImluc3BpcmVkQnkiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJzdHlsZSIsImJvdHRvbSIsInJpZ2h0IiwiY29sb3IiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJ0aW1lRWxhcHNlZCIsInJvdGF0ZVkiLCJyb3RhdGVYIiwicmVtb3ZlQ2hpbGQiXSwibWFwcGluZ3MiOiI2R0FBZUEsRUFBQSw2aU5DQUFDLEVBQUEsby9NQ1lNQyxhQUNuQixTQUFBQSxFQUFBQyxHQUE2QixJQUFoQkMsRUFBZ0JELEVBQWhCQyxNQUFPQyxFQUFTRixFQUFURSxvR0FBU0MsQ0FBQUMsS0FBQUwsR0FDM0IsSUFBTU0sRUFBYSxJQUFJQyxRQUN2QkQsRUFBV0UsT0FBTyxJQUFNLEdBQUssSUFDN0JOLEVBQU1PLFNBQVNDLGNBQWNKLEdBRTdCLElBQ01LLEVBQVNULEVBQU1VLE9BQU9ELE9BRTVCVCxFQUFNVSxPQUFTLElBQUlDLHFCQUhDLEdBSUZGLEdBQVcsRUFKVCxHQUtGQSxFQUFTLEVBQ3ZCRyxHQUNBQSxFQUNBLEVBQ0EsS0FFSlosRUFBTVUsT0FBT0csU0FBU0MsS0FBSyxJQUFJQyxVQUFRLEVBQUcsR0FBSSxLQUM5Q2YsRUFBTVUsT0FBT00sT0FBTyxJQUFJRCxVQUFRLEVBQUcsRUFBRyxJQUV0Q1osS0FBS2MsS0FBTyxJQUFJQyxRQUVoQmYsS0FBS2dCLFNBQVcsSUFBSUMsaUJBQWdCLENBQ2xDQyxTQUFVLENBQ1JDLEtBQU0sQ0FDRkMsS0FBTSxJQUNOQyxNQUFPLElBR2JDLGFBQWNDLEVBQ2RDLGVBQWdCQyxJQUdsQixJQUFNQyxFQUFPLElBQUlDLE9BQ2IsSUFBSUMsc0JBQXFCLEVBQUcsR0FDNUI1QixLQUFLZ0IsVUFHVGhCLEtBQUtjLEtBQUtlLElBQUtILEdBRWYxQixLQUFLOEIsV0FBYUMsU0FBU0MsY0FBYyxPQUN6Q2hDLEtBQUs4QixXQUFXRyxVQUFZLHVHQUM1QmpDLEtBQUs4QixXQUFXSSxNQUFNeEIsU0FBVyxXQUNqQ1YsS0FBSzhCLFdBQVdJLE1BQU1DLE9BQVMsRUFDL0JuQyxLQUFLOEIsV0FBV0ksTUFBTUUsTUFBUSxFQUM5QnBDLEtBQUs4QixXQUFXSSxNQUFNRyxNQUFRLFdBRTlCTixTQUFTTyxLQUFLQyxZQUFZdkMsS0FBSzhCLFlBRTNCaEMsR0FBUUEsMERBR1AwQyxHQUNMeEMsS0FBS2MsS0FBSzJCLFFBQVEsTUFDbEJ6QyxLQUFLYyxLQUFLNEIsUUFBUSxNQUNsQjFDLEtBQUtnQixTQUFTRSxTQUFkLEtBQWlDRyxNQUFzQixHQUFkbUIscUNBSXpDVCxTQUFTTyxLQUFLSyxZQUFZM0MsS0FBSzhCIiwiZmlsZSI6Ii4vanMvTW9ycGhpbmdTcGhlcmUuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCIjZGVmaW5lIEdMU0xJRlkgMVxcbi8vXFxuLy8gR0xTTCB0ZXh0dXJlbGVzcyBjbGFzc2ljIDNEIG5vaXNlIFxcXCJjbm9pc2VcXFwiLFxcbi8vIHdpdGggYW4gUlNMLXN0eWxlIHBlcmlvZGljIHZhcmlhbnQgXFxcInBub2lzZVxcXCIuXFxuLy8gQXV0aG9yOiAgU3RlZmFuIEd1c3RhdnNvbiAoc3RlZmFuLmd1c3RhdnNvbkBsaXUuc2UpXFxuLy8gVmVyc2lvbjogMjAxMS0xMC0xMVxcbi8vXFxuLy8gTWFueSB0aGFua3MgdG8gSWFuIE1jRXdhbiBvZiBBc2hpbWEgQXJ0cyBmb3IgdGhlXFxuLy8gaWRlYXMgZm9yIHBlcm11dGF0aW9uIGFuZCBncmFkaWVudCBzZWxlY3Rpb24uXFxuLy9cXG4vLyBDb3B5cmlnaHQgKGMpIDIwMTEgU3RlZmFuIEd1c3RhdnNvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4vLyBEaXN0cmlidXRlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuIFNlZSBMSUNFTlNFIGZpbGUuXFxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3N0ZWd1L3dlYmdsLW5vaXNlXFxuLy9cXG5cXG52ZWMzIG1vZDI4OSh2ZWMzIHgpXFxue1xcbiAgcmV0dXJuIHggLSBmbG9vcih4ICogKDEuMCAvIDI4OS4wKSkgKiAyODkuMDtcXG59XFxuXFxudmVjNCBtb2QyODkodmVjNCB4KVxcbntcXG4gIHJldHVybiB4IC0gZmxvb3IoeCAqICgxLjAgLyAyODkuMCkpICogMjg5LjA7XFxufVxcblxcbnZlYzQgcGVybXV0ZSh2ZWM0IHgpXFxue1xcbiAgcmV0dXJuIG1vZDI4OSgoKHgqMzQuMCkrMS4wKSp4KTtcXG59XFxuXFxudmVjNCB0YXlsb3JJbnZTcXJ0KHZlYzQgcilcXG57XFxuICByZXR1cm4gMS43OTI4NDI5MTQwMDE1OSAtIDAuODUzNzM0NzIwOTUzMTQgKiByO1xcbn1cXG5cXG52ZWMzIGZhZGUodmVjMyB0KSB7XFxuICByZXR1cm4gdCp0KnQqKHQqKHQqNi4wLTE1LjApKzEwLjApO1xcbn1cXG5cXG4vLyBDbGFzc2ljIFBlcmxpbiBub2lzZVxcbmZsb2F0IGNub2lzZSh2ZWMzIFApXFxue1xcbiAgdmVjMyBQaTAgPSBmbG9vcihQKTsgLy8gSW50ZWdlciBwYXJ0IGZvciBpbmRleGluZ1xcbiAgdmVjMyBQaTEgPSBQaTAgKyB2ZWMzKDEuMCk7IC8vIEludGVnZXIgcGFydCArIDFcXG4gIFBpMCA9IG1vZDI4OShQaTApO1xcbiAgUGkxID0gbW9kMjg5KFBpMSk7XFxuICB2ZWMzIFBmMCA9IGZyYWN0KFApOyAvLyBGcmFjdGlvbmFsIHBhcnQgZm9yIGludGVycG9sYXRpb25cXG4gIHZlYzMgUGYxID0gUGYwIC0gdmVjMygxLjApOyAvLyBGcmFjdGlvbmFsIHBhcnQgLSAxLjBcXG4gIHZlYzQgaXggPSB2ZWM0KFBpMC54LCBQaTEueCwgUGkwLngsIFBpMS54KTtcXG4gIHZlYzQgaXkgPSB2ZWM0KFBpMC55eSwgUGkxLnl5KTtcXG4gIHZlYzQgaXowID0gUGkwLnp6eno7XFxuICB2ZWM0IGl6MSA9IFBpMS56enp6O1xcblxcbiAgdmVjNCBpeHkgPSBwZXJtdXRlKHBlcm11dGUoaXgpICsgaXkpO1xcbiAgdmVjNCBpeHkwID0gcGVybXV0ZShpeHkgKyBpejApO1xcbiAgdmVjNCBpeHkxID0gcGVybXV0ZShpeHkgKyBpejEpO1xcblxcbiAgdmVjNCBneDAgPSBpeHkwICogKDEuMCAvIDcuMCk7XFxuICB2ZWM0IGd5MCA9IGZyYWN0KGZsb29yKGd4MCkgKiAoMS4wIC8gNy4wKSkgLSAwLjU7XFxuICBneDAgPSBmcmFjdChneDApO1xcbiAgdmVjNCBnejAgPSB2ZWM0KDAuNSkgLSBhYnMoZ3gwKSAtIGFicyhneTApO1xcbiAgdmVjNCBzejAgPSBzdGVwKGd6MCwgdmVjNCgwLjApKTtcXG4gIGd4MCAtPSBzejAgKiAoc3RlcCgwLjAsIGd4MCkgLSAwLjUpO1xcbiAgZ3kwIC09IHN6MCAqIChzdGVwKDAuMCwgZ3kwKSAtIDAuNSk7XFxuXFxuICB2ZWM0IGd4MSA9IGl4eTEgKiAoMS4wIC8gNy4wKTtcXG4gIHZlYzQgZ3kxID0gZnJhY3QoZmxvb3IoZ3gxKSAqICgxLjAgLyA3LjApKSAtIDAuNTtcXG4gIGd4MSA9IGZyYWN0KGd4MSk7XFxuICB2ZWM0IGd6MSA9IHZlYzQoMC41KSAtIGFicyhneDEpIC0gYWJzKGd5MSk7XFxuICB2ZWM0IHN6MSA9IHN0ZXAoZ3oxLCB2ZWM0KDAuMCkpO1xcbiAgZ3gxIC09IHN6MSAqIChzdGVwKDAuMCwgZ3gxKSAtIDAuNSk7XFxuICBneTEgLT0gc3oxICogKHN0ZXAoMC4wLCBneTEpIC0gMC41KTtcXG5cXG4gIHZlYzMgZzAwMCA9IHZlYzMoZ3gwLngsZ3kwLngsZ3owLngpO1xcbiAgdmVjMyBnMTAwID0gdmVjMyhneDAueSxneTAueSxnejAueSk7XFxuICB2ZWMzIGcwMTAgPSB2ZWMzKGd4MC56LGd5MC56LGd6MC56KTtcXG4gIHZlYzMgZzExMCA9IHZlYzMoZ3gwLncsZ3kwLncsZ3owLncpO1xcbiAgdmVjMyBnMDAxID0gdmVjMyhneDEueCxneTEueCxnejEueCk7XFxuICB2ZWMzIGcxMDEgPSB2ZWMzKGd4MS55LGd5MS55LGd6MS55KTtcXG4gIHZlYzMgZzAxMSA9IHZlYzMoZ3gxLnosZ3kxLnosZ3oxLnopO1xcbiAgdmVjMyBnMTExID0gdmVjMyhneDEudyxneTEudyxnejEudyk7XFxuXFxuICB2ZWM0IG5vcm0wID0gdGF5bG9ySW52U3FydCh2ZWM0KGRvdChnMDAwLCBnMDAwKSwgZG90KGcwMTAsIGcwMTApLCBkb3QoZzEwMCwgZzEwMCksIGRvdChnMTEwLCBnMTEwKSkpO1xcbiAgZzAwMCAqPSBub3JtMC54O1xcbiAgZzAxMCAqPSBub3JtMC55O1xcbiAgZzEwMCAqPSBub3JtMC56O1xcbiAgZzExMCAqPSBub3JtMC53O1xcbiAgdmVjNCBub3JtMSA9IHRheWxvckludlNxcnQodmVjNChkb3QoZzAwMSwgZzAwMSksIGRvdChnMDExLCBnMDExKSwgZG90KGcxMDEsIGcxMDEpLCBkb3QoZzExMSwgZzExMSkpKTtcXG4gIGcwMDEgKj0gbm9ybTEueDtcXG4gIGcwMTEgKj0gbm9ybTEueTtcXG4gIGcxMDEgKj0gbm9ybTEuejtcXG4gIGcxMTEgKj0gbm9ybTEudztcXG5cXG4gIGZsb2F0IG4wMDAgPSBkb3QoZzAwMCwgUGYwKTtcXG4gIGZsb2F0IG4xMDAgPSBkb3QoZzEwMCwgdmVjMyhQZjEueCwgUGYwLnl6KSk7XFxuICBmbG9hdCBuMDEwID0gZG90KGcwMTAsIHZlYzMoUGYwLngsIFBmMS55LCBQZjAueikpO1xcbiAgZmxvYXQgbjExMCA9IGRvdChnMTEwLCB2ZWMzKFBmMS54eSwgUGYwLnopKTtcXG4gIGZsb2F0IG4wMDEgPSBkb3QoZzAwMSwgdmVjMyhQZjAueHksIFBmMS56KSk7XFxuICBmbG9hdCBuMTAxID0gZG90KGcxMDEsIHZlYzMoUGYxLngsIFBmMC55LCBQZjEueikpO1xcbiAgZmxvYXQgbjAxMSA9IGRvdChnMDExLCB2ZWMzKFBmMC54LCBQZjEueXopKTtcXG4gIGZsb2F0IG4xMTEgPSBkb3QoZzExMSwgUGYxKTtcXG5cXG4gIHZlYzMgZmFkZV94eXogPSBmYWRlKFBmMCk7XFxuICB2ZWM0IG5feiA9IG1peCh2ZWM0KG4wMDAsIG4xMDAsIG4wMTAsIG4xMTApLCB2ZWM0KG4wMDEsIG4xMDEsIG4wMTEsIG4xMTEpLCBmYWRlX3h5ei56KTtcXG4gIHZlYzIgbl95eiA9IG1peChuX3oueHksIG5fei56dywgZmFkZV94eXoueSk7XFxuICBmbG9hdCBuX3h5eiA9IG1peChuX3l6LngsIG5feXoueSwgZmFkZV94eXoueCk7IFxcbiAgcmV0dXJuIDIuMiAqIG5feHl6O1xcbn1cXG5cXG4vLyBDbGFzc2ljIFBlcmxpbiBub2lzZSwgcGVyaW9kaWMgdmFyaWFudFxcbmZsb2F0IHBub2lzZSh2ZWMzIFAsIHZlYzMgcmVwKVxcbntcXG4gIHZlYzMgUGkwID0gbW9kKGZsb29yKFApLCByZXApOyAvLyBJbnRlZ2VyIHBhcnQsIG1vZHVsbyBwZXJpb2RcXG4gIHZlYzMgUGkxID0gbW9kKFBpMCArIHZlYzMoMS4wKSwgcmVwKTsgLy8gSW50ZWdlciBwYXJ0ICsgMSwgbW9kIHBlcmlvZFxcbiAgUGkwID0gbW9kMjg5KFBpMCk7XFxuICBQaTEgPSBtb2QyODkoUGkxKTtcXG4gIHZlYzMgUGYwID0gZnJhY3QoUCk7IC8vIEZyYWN0aW9uYWwgcGFydCBmb3IgaW50ZXJwb2xhdGlvblxcbiAgdmVjMyBQZjEgPSBQZjAgLSB2ZWMzKDEuMCk7IC8vIEZyYWN0aW9uYWwgcGFydCAtIDEuMFxcbiAgdmVjNCBpeCA9IHZlYzQoUGkwLngsIFBpMS54LCBQaTAueCwgUGkxLngpO1xcbiAgdmVjNCBpeSA9IHZlYzQoUGkwLnl5LCBQaTEueXkpO1xcbiAgdmVjNCBpejAgPSBQaTAuenp6ejtcXG4gIHZlYzQgaXoxID0gUGkxLnp6eno7XFxuXFxuICB2ZWM0IGl4eSA9IHBlcm11dGUocGVybXV0ZShpeCkgKyBpeSk7XFxuICB2ZWM0IGl4eTAgPSBwZXJtdXRlKGl4eSArIGl6MCk7XFxuICB2ZWM0IGl4eTEgPSBwZXJtdXRlKGl4eSArIGl6MSk7XFxuXFxuICB2ZWM0IGd4MCA9IGl4eTAgKiAoMS4wIC8gNy4wKTtcXG4gIHZlYzQgZ3kwID0gZnJhY3QoZmxvb3IoZ3gwKSAqICgxLjAgLyA3LjApKSAtIDAuNTtcXG4gIGd4MCA9IGZyYWN0KGd4MCk7XFxuICB2ZWM0IGd6MCA9IHZlYzQoMC41KSAtIGFicyhneDApIC0gYWJzKGd5MCk7XFxuICB2ZWM0IHN6MCA9IHN0ZXAoZ3owLCB2ZWM0KDAuMCkpO1xcbiAgZ3gwIC09IHN6MCAqIChzdGVwKDAuMCwgZ3gwKSAtIDAuNSk7XFxuICBneTAgLT0gc3owICogKHN0ZXAoMC4wLCBneTApIC0gMC41KTtcXG5cXG4gIHZlYzQgZ3gxID0gaXh5MSAqICgxLjAgLyA3LjApO1xcbiAgdmVjNCBneTEgPSBmcmFjdChmbG9vcihneDEpICogKDEuMCAvIDcuMCkpIC0gMC41O1xcbiAgZ3gxID0gZnJhY3QoZ3gxKTtcXG4gIHZlYzQgZ3oxID0gdmVjNCgwLjUpIC0gYWJzKGd4MSkgLSBhYnMoZ3kxKTtcXG4gIHZlYzQgc3oxID0gc3RlcChnejEsIHZlYzQoMC4wKSk7XFxuICBneDEgLT0gc3oxICogKHN0ZXAoMC4wLCBneDEpIC0gMC41KTtcXG4gIGd5MSAtPSBzejEgKiAoc3RlcCgwLjAsIGd5MSkgLSAwLjUpO1xcblxcbiAgdmVjMyBnMDAwID0gdmVjMyhneDAueCxneTAueCxnejAueCk7XFxuICB2ZWMzIGcxMDAgPSB2ZWMzKGd4MC55LGd5MC55LGd6MC55KTtcXG4gIHZlYzMgZzAxMCA9IHZlYzMoZ3gwLnosZ3kwLnosZ3owLnopO1xcbiAgdmVjMyBnMTEwID0gdmVjMyhneDAudyxneTAudyxnejAudyk7XFxuICB2ZWMzIGcwMDEgPSB2ZWMzKGd4MS54LGd5MS54LGd6MS54KTtcXG4gIHZlYzMgZzEwMSA9IHZlYzMoZ3gxLnksZ3kxLnksZ3oxLnkpO1xcbiAgdmVjMyBnMDExID0gdmVjMyhneDEueixneTEueixnejEueik7XFxuICB2ZWMzIGcxMTEgPSB2ZWMzKGd4MS53LGd5MS53LGd6MS53KTtcXG5cXG4gIHZlYzQgbm9ybTAgPSB0YXlsb3JJbnZTcXJ0KHZlYzQoZG90KGcwMDAsIGcwMDApLCBkb3QoZzAxMCwgZzAxMCksIGRvdChnMTAwLCBnMTAwKSwgZG90KGcxMTAsIGcxMTApKSk7XFxuICBnMDAwICo9IG5vcm0wLng7XFxuICBnMDEwICo9IG5vcm0wLnk7XFxuICBnMTAwICo9IG5vcm0wLno7XFxuICBnMTEwICo9IG5vcm0wLnc7XFxuICB2ZWM0IG5vcm0xID0gdGF5bG9ySW52U3FydCh2ZWM0KGRvdChnMDAxLCBnMDAxKSwgZG90KGcwMTEsIGcwMTEpLCBkb3QoZzEwMSwgZzEwMSksIGRvdChnMTExLCBnMTExKSkpO1xcbiAgZzAwMSAqPSBub3JtMS54O1xcbiAgZzAxMSAqPSBub3JtMS55O1xcbiAgZzEwMSAqPSBub3JtMS56O1xcbiAgZzExMSAqPSBub3JtMS53O1xcblxcbiAgZmxvYXQgbjAwMCA9IGRvdChnMDAwLCBQZjApO1xcbiAgZmxvYXQgbjEwMCA9IGRvdChnMTAwLCB2ZWMzKFBmMS54LCBQZjAueXopKTtcXG4gIGZsb2F0IG4wMTAgPSBkb3QoZzAxMCwgdmVjMyhQZjAueCwgUGYxLnksIFBmMC56KSk7XFxuICBmbG9hdCBuMTEwID0gZG90KGcxMTAsIHZlYzMoUGYxLnh5LCBQZjAueikpO1xcbiAgZmxvYXQgbjAwMSA9IGRvdChnMDAxLCB2ZWMzKFBmMC54eSwgUGYxLnopKTtcXG4gIGZsb2F0IG4xMDEgPSBkb3QoZzEwMSwgdmVjMyhQZjEueCwgUGYwLnksIFBmMS56KSk7XFxuICBmbG9hdCBuMDExID0gZG90KGcwMTEsIHZlYzMoUGYwLngsIFBmMS55eikpO1xcbiAgZmxvYXQgbjExMSA9IGRvdChnMTExLCBQZjEpO1xcblxcbiAgdmVjMyBmYWRlX3h5eiA9IGZhZGUoUGYwKTtcXG4gIHZlYzQgbl96ID0gbWl4KHZlYzQobjAwMCwgbjEwMCwgbjAxMCwgbjExMCksIHZlYzQobjAwMSwgbjEwMSwgbjAxMSwgbjExMSksIGZhZGVfeHl6LnopO1xcbiAgdmVjMiBuX3l6ID0gbWl4KG5fei54eSwgbl96Lnp3LCBmYWRlX3h5ei55KTtcXG4gIGZsb2F0IG5feHl6ID0gbWl4KG5feXoueCwgbl95ei55LCBmYWRlX3h5ei54KTsgXFxuICByZXR1cm4gMi4yICogbl94eXo7XFxufVxcblxcbnVuaWZvcm0gZmxvYXQgdGltZTtcXG5cXG52YXJ5aW5nIHZlYzIgdlV2O1xcbnZhcnlpbmcgZmxvYXQgbm9pc2U7XFxudmFyeWluZyBmbG9hdCBsb3dOb2lzZTtcXG5cXG5mbG9hdCB0dXJidWxlbmNlKCB2ZWMzIHAgKSB7XFxuICAgIGZsb2F0IHcgPSAxMDAuMDtcXG4gICAgZmxvYXQgdCA9IC0uNTtcXG4gICAgZm9yIChmbG9hdCBmID0gMS4wIDsgZiA8PSAxMC4wIDsgZisrICl7XFxuICAgICAgICBmbG9hdCBwb3dlciA9IHBvdyggMi4wLCBmICk7XFxuICAgICAgICB0ICs9IGFicyggcG5vaXNlKCB2ZWMzKCBwb3dlciAqIHAgKSwgdmVjMyggMTAuMCwgMTAuMCwgMTAuMCApICkgLyBwb3dlciApO1xcbiAgICB9XFxuICAgIHJldHVybiB0O1xcbn1cXG5cXG52b2lkIG1haW4oKSB7XFxuXFxuICAgIHZVdiA9IHV2O1xcblxcbiAgICAvLyBnZXQgYSB0dXJidWxlbnQgM2Qgbm9pc2UgdXNpbmcgdGhlIG5vcm1hbCwgbm9ybWFsIHRvIGhpZ2ggZnJlcVxcbiAgICBub2lzZSA9IHR1cmJ1bGVuY2UoIC41ICogbm9ybWFsICk7XFxuICAgIC8vIGdldCBhIDNkIG5vaXNlIHVzaW5nIHRoZSBwb3NpdGlvbiwgbG93IGZyZXF1ZW5jeVxcbiAgICBsb3dOb2lzZSA9IDIuMCAqIHBub2lzZSggMC41ICogcG9zaXRpb24gKyB0aW1lLCB2ZWMzKCAxMC4wICkgKTtcXG4gICAgLy8gY29tcG9zZSBib3RoIG5vaXNlc1xcbiAgICBmbG9hdCBkaXNwbGFjZW1lbnQgPSBhYnMobm9pc2UgKyBsb3dOb2lzZSk7XFxuICAgIFxcbiAgICAvLyBtb3ZlIHRoZSBwb3NpdGlvbiBhbG9uZyB0aGUgbm9ybWFsIGFuZCB0cmFuc2Zvcm0gaXRcXG4gICAgdmVjMyBuZXdQb3NpdGlvbiA9IHBvc2l0aW9uICsgKG5vcm1hbCAqICgoZGlzcGxhY2VtZW50ICogMi4wKSAtIDEuMCkpO1xcbiAgICBub2lzZSA9IGRpc3BsYWNlbWVudDtcXG4gICAgZ2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uTWF0cml4ICogbW9kZWxWaWV3TWF0cml4ICogdmVjNCggbmV3UG9zaXRpb24sIDEuMCApO1xcblxcbn1cIiIsImV4cG9ydCBkZWZhdWx0IFwiI2RlZmluZSBHTFNMSUZZIDFcXG4vL1xcbi8vIEdMU0wgdGV4dHVyZWxlc3MgY2xhc3NpYyAzRCBub2lzZSBcXFwiY25vaXNlXFxcIixcXG4vLyB3aXRoIGFuIFJTTC1zdHlsZSBwZXJpb2RpYyB2YXJpYW50IFxcXCJwbm9pc2VcXFwiLlxcbi8vIEF1dGhvcjogIFN0ZWZhbiBHdXN0YXZzb24gKHN0ZWZhbi5ndXN0YXZzb25AbGl1LnNlKVxcbi8vIFZlcnNpb246IDIwMTEtMTAtMTFcXG4vL1xcbi8vIE1hbnkgdGhhbmtzIHRvIElhbiBNY0V3YW4gb2YgQXNoaW1hIEFydHMgZm9yIHRoZVxcbi8vIGlkZWFzIGZvciBwZXJtdXRhdGlvbiBhbmQgZ3JhZGllbnQgc2VsZWN0aW9uLlxcbi8vXFxuLy8gQ29weXJpZ2h0IChjKSAyMDExIFN0ZWZhbiBHdXN0YXZzb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXFxuLy8gRGlzdHJpYnV0ZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLiBTZWUgTElDRU5TRSBmaWxlLlxcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9zdGVndS93ZWJnbC1ub2lzZVxcbi8vXFxuXFxudmVjMyBtb2QyODkodmVjMyB4KVxcbntcXG4gIHJldHVybiB4IC0gZmxvb3IoeCAqICgxLjAgLyAyODkuMCkpICogMjg5LjA7XFxufVxcblxcbnZlYzQgbW9kMjg5KHZlYzQgeClcXG57XFxuICByZXR1cm4geCAtIGZsb29yKHggKiAoMS4wIC8gMjg5LjApKSAqIDI4OS4wO1xcbn1cXG5cXG52ZWM0IHBlcm11dGUodmVjNCB4KVxcbntcXG4gIHJldHVybiBtb2QyODkoKCh4KjM0LjApKzEuMCkqeCk7XFxufVxcblxcbnZlYzQgdGF5bG9ySW52U3FydCh2ZWM0IHIpXFxue1xcbiAgcmV0dXJuIDEuNzkyODQyOTE0MDAxNTkgLSAwLjg1MzczNDcyMDk1MzE0ICogcjtcXG59XFxuXFxudmVjMyBmYWRlKHZlYzMgdCkge1xcbiAgcmV0dXJuIHQqdCp0Kih0Kih0KjYuMC0xNS4wKSsxMC4wKTtcXG59XFxuXFxuLy8gQ2xhc3NpYyBQZXJsaW4gbm9pc2VcXG5mbG9hdCBjbm9pc2UodmVjMyBQKVxcbntcXG4gIHZlYzMgUGkwID0gZmxvb3IoUCk7IC8vIEludGVnZXIgcGFydCBmb3IgaW5kZXhpbmdcXG4gIHZlYzMgUGkxID0gUGkwICsgdmVjMygxLjApOyAvLyBJbnRlZ2VyIHBhcnQgKyAxXFxuICBQaTAgPSBtb2QyODkoUGkwKTtcXG4gIFBpMSA9IG1vZDI4OShQaTEpO1xcbiAgdmVjMyBQZjAgPSBmcmFjdChQKTsgLy8gRnJhY3Rpb25hbCBwYXJ0IGZvciBpbnRlcnBvbGF0aW9uXFxuICB2ZWMzIFBmMSA9IFBmMCAtIHZlYzMoMS4wKTsgLy8gRnJhY3Rpb25hbCBwYXJ0IC0gMS4wXFxuICB2ZWM0IGl4ID0gdmVjNChQaTAueCwgUGkxLngsIFBpMC54LCBQaTEueCk7XFxuICB2ZWM0IGl5ID0gdmVjNChQaTAueXksIFBpMS55eSk7XFxuICB2ZWM0IGl6MCA9IFBpMC56enp6O1xcbiAgdmVjNCBpejEgPSBQaTEuenp6ejtcXG5cXG4gIHZlYzQgaXh5ID0gcGVybXV0ZShwZXJtdXRlKGl4KSArIGl5KTtcXG4gIHZlYzQgaXh5MCA9IHBlcm11dGUoaXh5ICsgaXowKTtcXG4gIHZlYzQgaXh5MSA9IHBlcm11dGUoaXh5ICsgaXoxKTtcXG5cXG4gIHZlYzQgZ3gwID0gaXh5MCAqICgxLjAgLyA3LjApO1xcbiAgdmVjNCBneTAgPSBmcmFjdChmbG9vcihneDApICogKDEuMCAvIDcuMCkpIC0gMC41O1xcbiAgZ3gwID0gZnJhY3QoZ3gwKTtcXG4gIHZlYzQgZ3owID0gdmVjNCgwLjUpIC0gYWJzKGd4MCkgLSBhYnMoZ3kwKTtcXG4gIHZlYzQgc3owID0gc3RlcChnejAsIHZlYzQoMC4wKSk7XFxuICBneDAgLT0gc3owICogKHN0ZXAoMC4wLCBneDApIC0gMC41KTtcXG4gIGd5MCAtPSBzejAgKiAoc3RlcCgwLjAsIGd5MCkgLSAwLjUpO1xcblxcbiAgdmVjNCBneDEgPSBpeHkxICogKDEuMCAvIDcuMCk7XFxuICB2ZWM0IGd5MSA9IGZyYWN0KGZsb29yKGd4MSkgKiAoMS4wIC8gNy4wKSkgLSAwLjU7XFxuICBneDEgPSBmcmFjdChneDEpO1xcbiAgdmVjNCBnejEgPSB2ZWM0KDAuNSkgLSBhYnMoZ3gxKSAtIGFicyhneTEpO1xcbiAgdmVjNCBzejEgPSBzdGVwKGd6MSwgdmVjNCgwLjApKTtcXG4gIGd4MSAtPSBzejEgKiAoc3RlcCgwLjAsIGd4MSkgLSAwLjUpO1xcbiAgZ3kxIC09IHN6MSAqIChzdGVwKDAuMCwgZ3kxKSAtIDAuNSk7XFxuXFxuICB2ZWMzIGcwMDAgPSB2ZWMzKGd4MC54LGd5MC54LGd6MC54KTtcXG4gIHZlYzMgZzEwMCA9IHZlYzMoZ3gwLnksZ3kwLnksZ3owLnkpO1xcbiAgdmVjMyBnMDEwID0gdmVjMyhneDAueixneTAueixnejAueik7XFxuICB2ZWMzIGcxMTAgPSB2ZWMzKGd4MC53LGd5MC53LGd6MC53KTtcXG4gIHZlYzMgZzAwMSA9IHZlYzMoZ3gxLngsZ3kxLngsZ3oxLngpO1xcbiAgdmVjMyBnMTAxID0gdmVjMyhneDEueSxneTEueSxnejEueSk7XFxuICB2ZWMzIGcwMTEgPSB2ZWMzKGd4MS56LGd5MS56LGd6MS56KTtcXG4gIHZlYzMgZzExMSA9IHZlYzMoZ3gxLncsZ3kxLncsZ3oxLncpO1xcblxcbiAgdmVjNCBub3JtMCA9IHRheWxvckludlNxcnQodmVjNChkb3QoZzAwMCwgZzAwMCksIGRvdChnMDEwLCBnMDEwKSwgZG90KGcxMDAsIGcxMDApLCBkb3QoZzExMCwgZzExMCkpKTtcXG4gIGcwMDAgKj0gbm9ybTAueDtcXG4gIGcwMTAgKj0gbm9ybTAueTtcXG4gIGcxMDAgKj0gbm9ybTAuejtcXG4gIGcxMTAgKj0gbm9ybTAudztcXG4gIHZlYzQgbm9ybTEgPSB0YXlsb3JJbnZTcXJ0KHZlYzQoZG90KGcwMDEsIGcwMDEpLCBkb3QoZzAxMSwgZzAxMSksIGRvdChnMTAxLCBnMTAxKSwgZG90KGcxMTEsIGcxMTEpKSk7XFxuICBnMDAxICo9IG5vcm0xLng7XFxuICBnMDExICo9IG5vcm0xLnk7XFxuICBnMTAxICo9IG5vcm0xLno7XFxuICBnMTExICo9IG5vcm0xLnc7XFxuXFxuICBmbG9hdCBuMDAwID0gZG90KGcwMDAsIFBmMCk7XFxuICBmbG9hdCBuMTAwID0gZG90KGcxMDAsIHZlYzMoUGYxLngsIFBmMC55eikpO1xcbiAgZmxvYXQgbjAxMCA9IGRvdChnMDEwLCB2ZWMzKFBmMC54LCBQZjEueSwgUGYwLnopKTtcXG4gIGZsb2F0IG4xMTAgPSBkb3QoZzExMCwgdmVjMyhQZjEueHksIFBmMC56KSk7XFxuICBmbG9hdCBuMDAxID0gZG90KGcwMDEsIHZlYzMoUGYwLnh5LCBQZjEueikpO1xcbiAgZmxvYXQgbjEwMSA9IGRvdChnMTAxLCB2ZWMzKFBmMS54LCBQZjAueSwgUGYxLnopKTtcXG4gIGZsb2F0IG4wMTEgPSBkb3QoZzAxMSwgdmVjMyhQZjAueCwgUGYxLnl6KSk7XFxuICBmbG9hdCBuMTExID0gZG90KGcxMTEsIFBmMSk7XFxuXFxuICB2ZWMzIGZhZGVfeHl6ID0gZmFkZShQZjApO1xcbiAgdmVjNCBuX3ogPSBtaXgodmVjNChuMDAwLCBuMTAwLCBuMDEwLCBuMTEwKSwgdmVjNChuMDAxLCBuMTAxLCBuMDExLCBuMTExKSwgZmFkZV94eXoueik7XFxuICB2ZWMyIG5feXogPSBtaXgobl96Lnh5LCBuX3ouencsIGZhZGVfeHl6LnkpO1xcbiAgZmxvYXQgbl94eXogPSBtaXgobl95ei54LCBuX3l6LnksIGZhZGVfeHl6LngpOyBcXG4gIHJldHVybiAyLjIgKiBuX3h5ejtcXG59XFxuXFxuLy8gQ2xhc3NpYyBQZXJsaW4gbm9pc2UsIHBlcmlvZGljIHZhcmlhbnRcXG5mbG9hdCBwbm9pc2UodmVjMyBQLCB2ZWMzIHJlcClcXG57XFxuICB2ZWMzIFBpMCA9IG1vZChmbG9vcihQKSwgcmVwKTsgLy8gSW50ZWdlciBwYXJ0LCBtb2R1bG8gcGVyaW9kXFxuICB2ZWMzIFBpMSA9IG1vZChQaTAgKyB2ZWMzKDEuMCksIHJlcCk7IC8vIEludGVnZXIgcGFydCArIDEsIG1vZCBwZXJpb2RcXG4gIFBpMCA9IG1vZDI4OShQaTApO1xcbiAgUGkxID0gbW9kMjg5KFBpMSk7XFxuICB2ZWMzIFBmMCA9IGZyYWN0KFApOyAvLyBGcmFjdGlvbmFsIHBhcnQgZm9yIGludGVycG9sYXRpb25cXG4gIHZlYzMgUGYxID0gUGYwIC0gdmVjMygxLjApOyAvLyBGcmFjdGlvbmFsIHBhcnQgLSAxLjBcXG4gIHZlYzQgaXggPSB2ZWM0KFBpMC54LCBQaTEueCwgUGkwLngsIFBpMS54KTtcXG4gIHZlYzQgaXkgPSB2ZWM0KFBpMC55eSwgUGkxLnl5KTtcXG4gIHZlYzQgaXowID0gUGkwLnp6eno7XFxuICB2ZWM0IGl6MSA9IFBpMS56enp6O1xcblxcbiAgdmVjNCBpeHkgPSBwZXJtdXRlKHBlcm11dGUoaXgpICsgaXkpO1xcbiAgdmVjNCBpeHkwID0gcGVybXV0ZShpeHkgKyBpejApO1xcbiAgdmVjNCBpeHkxID0gcGVybXV0ZShpeHkgKyBpejEpO1xcblxcbiAgdmVjNCBneDAgPSBpeHkwICogKDEuMCAvIDcuMCk7XFxuICB2ZWM0IGd5MCA9IGZyYWN0KGZsb29yKGd4MCkgKiAoMS4wIC8gNy4wKSkgLSAwLjU7XFxuICBneDAgPSBmcmFjdChneDApO1xcbiAgdmVjNCBnejAgPSB2ZWM0KDAuNSkgLSBhYnMoZ3gwKSAtIGFicyhneTApO1xcbiAgdmVjNCBzejAgPSBzdGVwKGd6MCwgdmVjNCgwLjApKTtcXG4gIGd4MCAtPSBzejAgKiAoc3RlcCgwLjAsIGd4MCkgLSAwLjUpO1xcbiAgZ3kwIC09IHN6MCAqIChzdGVwKDAuMCwgZ3kwKSAtIDAuNSk7XFxuXFxuICB2ZWM0IGd4MSA9IGl4eTEgKiAoMS4wIC8gNy4wKTtcXG4gIHZlYzQgZ3kxID0gZnJhY3QoZmxvb3IoZ3gxKSAqICgxLjAgLyA3LjApKSAtIDAuNTtcXG4gIGd4MSA9IGZyYWN0KGd4MSk7XFxuICB2ZWM0IGd6MSA9IHZlYzQoMC41KSAtIGFicyhneDEpIC0gYWJzKGd5MSk7XFxuICB2ZWM0IHN6MSA9IHN0ZXAoZ3oxLCB2ZWM0KDAuMCkpO1xcbiAgZ3gxIC09IHN6MSAqIChzdGVwKDAuMCwgZ3gxKSAtIDAuNSk7XFxuICBneTEgLT0gc3oxICogKHN0ZXAoMC4wLCBneTEpIC0gMC41KTtcXG5cXG4gIHZlYzMgZzAwMCA9IHZlYzMoZ3gwLngsZ3kwLngsZ3owLngpO1xcbiAgdmVjMyBnMTAwID0gdmVjMyhneDAueSxneTAueSxnejAueSk7XFxuICB2ZWMzIGcwMTAgPSB2ZWMzKGd4MC56LGd5MC56LGd6MC56KTtcXG4gIHZlYzMgZzExMCA9IHZlYzMoZ3gwLncsZ3kwLncsZ3owLncpO1xcbiAgdmVjMyBnMDAxID0gdmVjMyhneDEueCxneTEueCxnejEueCk7XFxuICB2ZWMzIGcxMDEgPSB2ZWMzKGd4MS55LGd5MS55LGd6MS55KTtcXG4gIHZlYzMgZzAxMSA9IHZlYzMoZ3gxLnosZ3kxLnosZ3oxLnopO1xcbiAgdmVjMyBnMTExID0gdmVjMyhneDEudyxneTEudyxnejEudyk7XFxuXFxuICB2ZWM0IG5vcm0wID0gdGF5bG9ySW52U3FydCh2ZWM0KGRvdChnMDAwLCBnMDAwKSwgZG90KGcwMTAsIGcwMTApLCBkb3QoZzEwMCwgZzEwMCksIGRvdChnMTEwLCBnMTEwKSkpO1xcbiAgZzAwMCAqPSBub3JtMC54O1xcbiAgZzAxMCAqPSBub3JtMC55O1xcbiAgZzEwMCAqPSBub3JtMC56O1xcbiAgZzExMCAqPSBub3JtMC53O1xcbiAgdmVjNCBub3JtMSA9IHRheWxvckludlNxcnQodmVjNChkb3QoZzAwMSwgZzAwMSksIGRvdChnMDExLCBnMDExKSwgZG90KGcxMDEsIGcxMDEpLCBkb3QoZzExMSwgZzExMSkpKTtcXG4gIGcwMDEgKj0gbm9ybTEueDtcXG4gIGcwMTEgKj0gbm9ybTEueTtcXG4gIGcxMDEgKj0gbm9ybTEuejtcXG4gIGcxMTEgKj0gbm9ybTEudztcXG5cXG4gIGZsb2F0IG4wMDAgPSBkb3QoZzAwMCwgUGYwKTtcXG4gIGZsb2F0IG4xMDAgPSBkb3QoZzEwMCwgdmVjMyhQZjEueCwgUGYwLnl6KSk7XFxuICBmbG9hdCBuMDEwID0gZG90KGcwMTAsIHZlYzMoUGYwLngsIFBmMS55LCBQZjAueikpO1xcbiAgZmxvYXQgbjExMCA9IGRvdChnMTEwLCB2ZWMzKFBmMS54eSwgUGYwLnopKTtcXG4gIGZsb2F0IG4wMDEgPSBkb3QoZzAwMSwgdmVjMyhQZjAueHksIFBmMS56KSk7XFxuICBmbG9hdCBuMTAxID0gZG90KGcxMDEsIHZlYzMoUGYxLngsIFBmMC55LCBQZjEueikpO1xcbiAgZmxvYXQgbjAxMSA9IGRvdChnMDExLCB2ZWMzKFBmMC54LCBQZjEueXopKTtcXG4gIGZsb2F0IG4xMTEgPSBkb3QoZzExMSwgUGYxKTtcXG5cXG4gIHZlYzMgZmFkZV94eXogPSBmYWRlKFBmMCk7XFxuICB2ZWM0IG5feiA9IG1peCh2ZWM0KG4wMDAsIG4xMDAsIG4wMTAsIG4xMTApLCB2ZWM0KG4wMDEsIG4xMDEsIG4wMTEsIG4xMTEpLCBmYWRlX3h5ei56KTtcXG4gIHZlYzIgbl95eiA9IG1peChuX3oueHksIG5fei56dywgZmFkZV94eXoueSk7XFxuICBmbG9hdCBuX3h5eiA9IG1peChuX3l6LngsIG5feXoueSwgZmFkZV94eXoueCk7IFxcbiAgcmV0dXJuIDIuMiAqIG5feHl6O1xcbn1cXG5cXG52YXJ5aW5nIHZlYzIgdlV2O1xcbnZhcnlpbmcgZmxvYXQgbm9pc2U7XFxudmFyeWluZyBmbG9hdCBsb3dOb2lzZTtcXG5cXG52b2lkIG1haW4oKSB7XFxuICAgIHZlYzMgQ29sb3JUb3AgPSB2ZWMzKDEuLDAuNTUsMCk7XFxuICAgIHZlYzMgQ29sb3JNaWQgPSB2ZWMzKDAuMjI2LDAuMDAwLDAuNjE1KTtcXG4gICAgdmVjMyBDb2xvckJvdCA9IHZlYzMoMCwwLDApO1xcbiAgICBmbG9hdCBNaWRkbGUgPSAwLjg1O1xcblxcbiAgICBmbG9hdCBrID0gMS4wLSBwb3cobm9pc2UsIDEuNCk7XFxuICAgIGZsb2F0IGtzdGVwID0gc3RlcChrLCBNaWRkbGUpO1xcbiAgICBcXG4gICAgdmVjMyBjb2xvciA9IG1peChcXG4gICAgICAgIENvbG9yVG9wLFxcbiAgICAgICAgQ29sb3JNaWQsXFxuICAgICAgICBrIC8gTWlkZGxlXFxuICAgICkgKiBrc3RlcDtcXG5cXG4gICAgY29sb3IgKz0gbWl4KFxcbiAgICAgICAgQ29sb3JNaWQsXFxuICAgICAgICBDb2xvckJvdCxcXG4gICAgICAgIChrIC0gTWlkZGxlKSAvICgxLjAgLSBNaWRkbGUpXFxuICAgICkgKiAoMS4wIC0ga3N0ZXApO1xcblxcbiAgICAvL2NvbG9yID0gdmVjMyggcG5vaXNlKCB2ZWMzKCB2VXYueHkgKiAxMC4wLCAxICksIHZlYzMoIDEwLjAsIDEwLjAsIDEwLjAgKSApICk7XFxuICAgIC8vY29sb3IgPSB2ZWMzKGFicyhub2lzZSoxLjApKTtcXG4gICAgZ2xfRnJhZ0NvbG9yID0gdmVjNCggY29sb3IsIDEuMCApO1xcblxcbn1cIiIsImltcG9ydCB7XG4gIFZlY3RvcjMsXG4gIENvbG9yLFxuICBNZXNoLFxuICBHcm91cCxcbiAgT3J0aG9ncmFwaGljQ2FtZXJhLFxuICBTaGFkZXJNYXRlcmlhbCxcbiAgSWNvc2FoZWRyb25HZW9tZXRyeVxufSBmcm9tICd0aHJlZSc7XG5pbXBvcnQgbm9pc2VEaXNwIGZyb20gJy4uL1NoYWRlcnMvbm9pc2UtZGlzcGxhY2VtZW50LnZlcnQnO1xuaW1wb3J0IGJhc2ljdXZ2aWVzIGZyb20gJy4uL1NoYWRlcnMvbm9pc2Utdmlldy11di5mcmFnJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9ycGhpbmdTcGhlcmUge1xuICBjb25zdHJ1Y3Rvcih7c2NlbmUsIG9uTG9hZH0pIHtcbiAgICBjb25zdCBjbGVhckNvbG9yID0gbmV3IENvbG9yKCk7XG4gICAgY2xlYXJDb2xvci5zZXRIU0woMC42MiwgMC45LCAwLjIpO1xuICAgIHNjZW5lLnJlbmRlcmVyLnNldENsZWFyQ29sb3IoY2xlYXJDb2xvcik7XG5cbiAgICBjb25zdCBmcnVzdHVtU2l6ZSA9IDEwO1xuICAgIGNvbnN0IGFzcGVjdCA9IHNjZW5lLmNhbWVyYS5hc3BlY3Q7XG5cbiAgICBzY2VuZS5jYW1lcmEgPSBuZXcgT3J0aG9ncmFwaGljQ2FtZXJhKFxuICAgICAgICBmcnVzdHVtU2l6ZSAqIGFzcGVjdCAvIC0gMixcbiAgICAgICAgZnJ1c3R1bVNpemUgKiBhc3BlY3QgLyAyLFxuICAgICAgICBmcnVzdHVtU2l6ZSAvIDIsXG4gICAgICAgIGZydXN0dW1TaXplIC8gLSAyLFxuICAgICAgICAxLFxuICAgICAgICAxNTBcbiAgICApO1xuICAgIHNjZW5lLmNhbWVyYS5wb3NpdGlvbi5jb3B5KG5ldyBWZWN0b3IzKDAsIDUwLCA1MCkpO1xuICAgIHNjZW5lLmNhbWVyYS5sb29rQXQobmV3IFZlY3RvcjMoMCwgMCwgMCkpO1xuXG4gICAgdGhpcy5yb290ID0gbmV3IEdyb3VwKCk7XG5cbiAgICB0aGlzLm1hdGVyaWFsID0gbmV3IFNoYWRlck1hdGVyaWFsKCB7XG4gICAgICB1bmlmb3Jtczoge1xuICAgICAgICB0aW1lOiB7XG4gICAgICAgICAgICB0eXBlOiBcImZcIiwgXG4gICAgICAgICAgICB2YWx1ZTogMC4wIFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgdmVydGV4U2hhZGVyOiBub2lzZURpc3AsXG4gICAgICBmcmFnbWVudFNoYWRlcjogYmFzaWN1dnZpZXNcbiAgICB9KTtcblxuICAgIGNvbnN0IG1lc2ggPSBuZXcgTWVzaCggXG4gICAgICAgIG5ldyBJY29zYWhlZHJvbkdlb21ldHJ5KCAzLCA1ICksIFxuICAgICAgICB0aGlzLm1hdGVyaWFsIFxuICAgICk7XG4gICAgXG4gICAgdGhpcy5yb290LmFkZCggbWVzaCApO1xuXG4gICAgdGhpcy5pbnNwaXJlZEJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5pbnNwaXJlZEJ5LmlubmVySFRNTCA9ICdFZGl0IGZyb206IGh0dHBzOi8vd3d3LmNsaWNrdG9yZWxlYXNlLmNvbS9ibG9nL3ZlcnRleC1kaXNwbGFjZW1lbnQtbm9pc2UtM2Qtd2ViZ2wtZ2xzbC10aHJlZS1qcy5odG1sJztcbiAgICB0aGlzLmluc3BpcmVkQnkuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgIHRoaXMuaW5zcGlyZWRCeS5zdHlsZS5ib3R0b20gPSAzO1xuICAgIHRoaXMuaW5zcGlyZWRCeS5zdHlsZS5yaWdodCA9IDM7XG4gICAgdGhpcy5pbnNwaXJlZEJ5LnN0eWxlLmNvbG9yID0gJ2RhcmtjeWFuJztcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5pbnNwaXJlZEJ5KTtcblxuICAgIGlmIChvbkxvYWQpIG9uTG9hZCgpO1xuICB9XG5cbiAgdXBkYXRlKHRpbWVFbGFwc2VkKSB7XG4gICAgdGhpcy5yb290LnJvdGF0ZVkoMC4wMDAxKTtcbiAgICB0aGlzLnJvb3Qucm90YXRlWCgwLjAwMDYpO1xuICAgIHRoaXMubWF0ZXJpYWwudW5pZm9ybXNbICd0aW1lJyBdLnZhbHVlID0gdGltZUVsYXBzZWQgKiAwLjE7XG4gIH1cblxuICBvblJlbW92ZSgpIHtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMuaW5zcGlyZWRCeSk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{18:function(t,e,o){"use strict";o.d(e,"a",function(){return r});var n=o(17);var r=function t(e){var o=e.size,r=void 0===o?5:o,a=e.material,i=e.position;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.seed=Math.random();var c=1,s=1,u=1;this.color=new n.Color,this.color.setRGB(c,s,u),this.material=a||new n.MeshBasicMaterial({color:this.color}),this.geometry=new n.BoxGeometry(r,r,r),this.mesh=new n.Mesh(this.geometry,this.material),i&&this.mesh.position.copy(i),this.root=this.mesh}},9:function(t,e,o){"use strict";o.r(e);var n=o(17);function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function i(t){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var s=function(t){function e(){var t;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),t=a(this,i(e).call(this));var o=new n.HemisphereLight(16777215,16777215,1.5);return o.color.setHSL(u(250),.9,.94),o.groundColor.setHSL(u(250),.9,.44),o.position.set(0,2,0),t.add(o),t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}(e,n["Group"]),e}();function u(t){return t/360}var h=o(18);function l(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}o.d(e,"default",function(){return p});var p=function(){function t(e){var o=e.scene,r=e.onLoad;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var a=new n.Color;a.setIntHSL(48,90,64),o.renderer.setClearColor(a);var i=o.camera.aspect;o.camera=new n.OrthographicCamera(10*i/-2,10*i/2,5,-5,1,150),o.camera.position.copy(new n.Vector3(-10,10,10)),o.camera.lookAt(new n.Vector3(0,0,0)),this.root=new n.Group;var c=new s;this.root.add(c);var u=new n.MeshStandardMaterial({color:16777215,metalness:.4,roughness:.2});this.cubes=[new h.a({size:2,material:u,position:new n.Vector3(-1,1,1)}),new h.a({size:2,material:u,position:new n.Vector3(1,1,1)}),new h.a({size:2,material:u,position:new n.Vector3(-1,1,-1)}),new h.a({size:2,material:u,position:new n.Vector3(1,1,-1)}),new h.a({size:2,material:u,position:new n.Vector3(-1,-1,1)}),new h.a({size:2,material:u,position:new n.Vector3(1,-1,1)}),new h.a({size:2,material:u,position:new n.Vector3(-1,-1,-1)}),new h.a({size:2,material:u,position:new n.Vector3(1,-1,-1)})],this.cubesParent=new n.Group;var l=!0,p=!1,f=void 0;try{for(var w,y=this.cubes[Symbol.iterator]();!(l=(w=y.next()).done);l=!0){var b=w.value;this.cubesParent.add(b.root)}}catch(t){p=!0,f=t}finally{try{l||null==y.return||y.return()}finally{if(p)throw f}}this.cubesParent.position.copy(new n.Vector3(1,-1,-1)),this.root.add(this.cubesParent),r&&r()}var e,o,r;return e=t,(o=[{key:"update",value:function(t){var e=3*t;e%(2*Math.PI)<Math.PI?this.firstSection(e):this.secondSection(e)}},{key:"firstSection",value:function(t){var e=Math.sin(.5*t),o=Math.abs(e);this.cubesParent.children[7].position.copy(new n.Vector3(1,-1,-1));for(var r=0;r<this.cubesParent.children.length;r++){var a=this.cubesParent.children[r],i=Math.clamp((1-o)*(.5*Math.PI)+.125*r,0,1),c=new n.Vector3(i,i,i);a.scale.copy(c),a.rotation.z=i*Math.PI,a.rotation.x=i*Math.PI*.5}}},{key:"secondSection",value:function(t){var e=Math.sin(.5*t),o=Math.abs(e),r=Math.cos(.5*t),a=Math.abs(r),i=this.cubesParent.children[7],c=Math.clamp((1-o)*(.5*Math.PI)+.875+a,0,2),s=new n.Vector3(c,c,c);i.scale.copy(s),i.rotation.z=c*Math.PI,i.rotation.x=c*Math.PI*.5;var u=new n.Vector3(1,-1,-1);i.position.copy(u.lerp(new n.Vector3(0,0,0),Math.clamp(6*(1-o),0,1)));for(var h=0;h<this.cubesParent.children.length-1;h++){var l=this.cubesParent.children[h],p=Math.clamp(Math.clamp((1-o)*(.5*Math.PI)+.125*h,0,1)-a,0,1),f=new n.Vector3(p,p,p);l.scale.copy(f),l.rotation.z=p*Math.PI,l.rotation.x=p*Math.PI*.5}}}])&&l(e.prototype,o),r&&l(e,r),t}()}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvT2JqZWN0cy9CYXNpY0N1YmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0xpZ2h0cy9CbHVlUGFydHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0xvb3BzL0N1YmVMb29wLmpzIl0sIm5hbWVzIjpbIkJhc2ljQ3ViZSIsIl9yZWYiLCJfcmVmJHNpemUiLCJzaXplIiwibWF0ZXJpYWwiLCJwb3NpdGlvbiIsIl9jbGFzc0NhbGxDaGVjayIsInRoaXMiLCJzZWVkIiwiTWF0aCIsInJhbmRvbSIsImNvbG9yIiwiQ29sb3IiLCJzZXRSR0IiLCJNZXNoQmFzaWNNYXRlcmlhbCIsImdlb21ldHJ5IiwiQm94R2VvbWV0cnkiLCJtZXNoIiwiTWVzaCIsImNvcHkiLCJyb290IiwiTGlndGhzIiwiX3RoaXMiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiIsIl9nZXRQcm90b3R5cGVPZiIsImNhbGwiLCJoZW1pTGlnaHQiLCJIZW1pc3BoZXJlTGlnaHQiLCJzZXRIU0wiLCJOb3JtYWxpemVIIiwiZ3JvdW5kQ29sb3IiLCJzZXQiLCJhZGQiLCJHcm91cCIsImgiLCJDdWJlTG9vcCIsInNjZW5lIiwib25Mb2FkIiwiQ3ViZUxvb3BfY2xhc3NDYWxsQ2hlY2siLCJjbGVhckNvbG9yIiwic2V0SW50SFNMIiwicmVuZGVyZXIiLCJzZXRDbGVhckNvbG9yIiwiYXNwZWN0IiwiY2FtZXJhIiwiT3J0aG9ncmFwaGljQ2FtZXJhIiwiZnJ1c3R1bVNpemUiLCJWZWN0b3IzIiwibG9va0F0IiwibGlnaHRzIiwiTGlnaHRzIiwiY3ViZU1hdCIsIk1lc2hTdGFuZGFyZE1hdGVyaWFsIiwibWV0YWxuZXNzIiwicm91Z2huZXNzIiwiY3ViZXMiLCJjdWJlc1BhcmVudCIsIl9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24iLCJfZGlkSXRlcmF0b3JFcnJvciIsIl9pdGVyYXRvckVycm9yIiwidW5kZWZpbmVkIiwiX3N0ZXAiLCJfaXRlcmF0b3IiLCJTeW1ib2wiLCJpdGVyYXRvciIsIm5leHQiLCJkb25lIiwiY3ViZSIsInZhbHVlIiwiZXJyIiwicmV0dXJuIiwidGltZUVsYXBzZWQiLCJhbmltYXRpb25UaW1lIiwiUEkiLCJmaXJzdFNlY3Rpb24iLCJzZWNvbmRTZWN0aW9uIiwic2luVGltZSIsInNpbiIsImFic1NpblRpbWUiLCJhYnMiLCJjaGlsZHJlbiIsImkiLCJsZW5ndGgiLCJjaGlsZCIsInJvdGEiLCJjbGFtcCIsInNpblNjYWxlIiwic2NhbGUiLCJyb3RhdGlvbiIsInoiLCJ4IiwiY29zVGltZSIsImNvcyIsImFic0Nvc1RpbWUiLCJvbGRQb3MiLCJsZXJwIl0sIm1hcHBpbmdzIjoieUlBT3FCQSxFQUNuQixTQUFBQSxFQUFBQyxHQUE0QyxJQUFBQyxFQUFBRCxFQUEvQkUsWUFBK0IsSUFBQUQsRUFBeEIsRUFBd0JBLEVBQXJCRSxFQUFxQkgsRUFBckJHLFNBQVVDLEVBQVdKLEVBQVhJLHNHQUFXQyxDQUFBQyxLQUFBUCxHQUMxQ08sS0FBS0MsS0FBT0MsS0FBS0MsU0FDakIsSUFBTUMsRUFBVyxFQUFYQSxFQUFnQixFQUFoQkEsRUFBcUIsRUFDM0JKLEtBQUtJLE1BQVEsSUFBSUMsUUFDakJMLEtBQUtJLE1BQU1FLE9BQU9GLEVBQVNBLEVBQVNBLEdBRXBDSixLQUFLSCxTQUFXQSxHQUFZLElBQUlVLG9CQUFrQixDQUNoREgsTUFBT0osS0FBS0ksUUFHZEosS0FBS1EsU0FBVyxJQUFJQyxjQUFZYixFQUFNQSxFQUFNQSxHQUU1Q0ksS0FBS1UsS0FBTyxJQUFJQyxPQUNkWCxLQUFLUSxTQUNMUixLQUFLSCxVQUdIQyxHQUNGRSxLQUFLVSxLQUFLWixTQUFTYyxLQUFLZCxHQUcxQkUsS0FBS2EsS0FBT2IsS0FBS1UsOHJCQ3hCQUksY0FDbkIsU0FBQUEsSUFBYyxJQUFBQywrRkFBQWhCLENBQUFDLEtBQUFjLEdBQ1pDLEVBQUFDLEVBQUFoQixLQUFBaUIsRUFBQUgsR0FBQUksS0FBQWxCLE9BRUEsSUFBTW1CLEVBQVksSUFBSUMsa0JBQWlC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QUtnRSxHQUNoQ1UsRUFBTUssU0FBU0UsRUFBSU4sRUFBTzNFLEtBQUtnRSxHQUFLLEdBQ3BDLElBQU1xQixFQUFTLElBQUkvQyxVQUFRLEdBQUksR0FBSSxHQUNuQ29DLEVBQU05RSxTQUFTYyxLQUFLMkUsRUFBT0MsS0FBSyxJQUFJaEQsVUFBUSxFQUFHLEVBQUcsR0FBSXRDLEtBQUs0RSxNQUF5QixHQUFsQixFQUFJUCxHQUFpQixFQUFHLEtBQzFGLElBQUssSUFBSUcsRUFBSSxFQUFHQSxFQUFJMUUsS0FBS2lELFlBQVl3QixTQUFTRSxPQUFTLEVBQUdELElBQUssQ0FDN0QsSUFBTUUsRUFBUTVFLEtBQUtpRCxZQUFZd0IsU0FBU0MsR0FDbENHLEVBQU8zRSxLQUFLNEUsTUFBUTVFLEtBQUs0RSxPQUFRLEVBQUlQLElBQXlCLEdBQVZyRSxLQUFLZ0UsSUFBaUIsS0FBSlEsRUFBYSxFQUFHLEdBQzFGWSxFQUFhLEVBQUcsR0FDWlAsRUFBVyxJQUFJdkMsVUFBUXFDLEVBQU1BLEVBQU1BLEdBQ3pDRCxFQUFNSSxNQUFNcEUsS0FBS21FLEdBQ2pCSCxFQUFNSyxTQUFTQyxFQUFLTCxFQUFPM0UsS0FBS2dFLEdBQ2hDVSxFQUFNSyxTQUFTRSxFQUFJTixFQUFPM0UsS0FBS2dFLEdBQUsiLCJmaWxlIjoiLi9qcy9DdWJlTG9vcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb2xvcixcbiAgTWVzaEJhc2ljTWF0ZXJpYWwsXG4gIEJveEdlb21ldHJ5LFxuICBNZXNoXG59IGZyb20gJ3RocmVlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzaWNDdWJlIHtcbiAgY29uc3RydWN0b3Ioe3NpemUgPSA1LCBtYXRlcmlhbCwgcG9zaXRpb259KSB7XG4gICAgdGhpcy5zZWVkID0gTWF0aC5yYW5kb20oKTtcbiAgICBjb25zdCBjb2xvciA9IHtyOjEgLGc6MSwgYjoxfTtcbiAgICB0aGlzLmNvbG9yID0gbmV3IENvbG9yKCk7XG4gICAgdGhpcy5jb2xvci5zZXRSR0IoY29sb3IuciwgY29sb3IuZywgY29sb3IuYik7XG5cbiAgICB0aGlzLm1hdGVyaWFsID0gbWF0ZXJpYWwgfHwgbmV3IE1lc2hCYXNpY01hdGVyaWFsKHtcbiAgICAgIGNvbG9yOiB0aGlzLmNvbG9yXG4gICAgfSk7XG5cbiAgICB0aGlzLmdlb21ldHJ5ID0gbmV3IEJveEdlb21ldHJ5KHNpemUsIHNpemUsIHNpemUpO1xuXG4gICAgdGhpcy5tZXNoID0gbmV3IE1lc2goXG4gICAgICB0aGlzLmdlb21ldHJ5LFxuICAgICAgdGhpcy5tYXRlcmlhbFxuICAgICk7XG5cbiAgICBpZiAocG9zaXRpb24pIHtcbiAgICAgIHRoaXMubWVzaC5wb3NpdGlvbi5jb3B5KHBvc2l0aW9uKTtcbiAgICB9XG5cbiAgICB0aGlzLnJvb3QgPSB0aGlzLm1lc2g7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIEdyb3VwLFxuICBIZW1pc3BoZXJlTGlnaHRcbn0gZnJvbSAndGhyZWUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaWd0aHMgZXh0ZW5kcyBHcm91cCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICBjb25zdCBoZW1pTGlnaHQgPSBuZXcgSGVtaXNwaGVyZUxpZ2h0KCAweGZmZmZmZiwgMHhmZmZmZmYsIDEuNSApO1xuXHRcdGhlbWlMaWdodC5jb2xvci5zZXRIU0woXG4gICAgICBOb3JtYWxpemVIKDI1MCksXG4gICAgICAwLjksXG4gICAgICAwLjk0LFxuICAgICk7XG5cdFx0aGVtaUxpZ2h0Lmdyb3VuZENvbG9yLnNldEhTTChcbiAgICAgIE5vcm1hbGl6ZUgoMjUwKSxcbiAgICAgIDAuOSxcbiAgICAgIDAuNDQsXG4gICAgKTtcblx0XHRoZW1pTGlnaHQucG9zaXRpb24uc2V0KCAwLCAyLCAwICk7XG5cdFx0dGhpcy5hZGQoIGhlbWlMaWdodCApO1xuXHR9XG59XG5cdFxuZnVuY3Rpb24gTm9ybWFsaXplSChoKSB7XG5cdHJldHVybiBoLzM2MC4wO1xufVxuIiwiaW1wb3J0IHtcbiAgQ29sb3IsXG4gIE9ydGhvZ3JhcGhpY0NhbWVyYSxcbiAgVmVjdG9yMyxcbiAgR3JvdXAsXG4gIE1lc2hTdGFuZGFyZE1hdGVyaWFsXG59IGZyb20gJ3RocmVlJztcbmltcG9ydCBMaWdodHMgZnJvbSAnLi4vTGlnaHRzL0JsdWVQYXJ0eS5qcyc7XG5pbXBvcnQgQmFzaWNDdWJlIGZyb20gJy4uL09iamVjdHMvQmFzaWNDdWJlLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3ViZUxvb3Age1xuICBjb25zdHJ1Y3Rvcih7c2NlbmUsIG9uTG9hZH0pIHtcbiAgICBjb25zdCBjbGVhckNvbG9yID0gbmV3IENvbG9yKCk7XG4gICAgY2xlYXJDb2xvci5zZXRJbnRIU0woNDgsIDkwLCA2NCk7XG4gICAgc2NlbmUucmVuZGVyZXIuc2V0Q2xlYXJDb2xvcihjbGVhckNvbG9yKTtcblxuICAgIGNvbnN0IGZydXN0dW1TaXplID0gMTA7XG4gICAgY29uc3QgYXNwZWN0ID0gc2NlbmUuY2FtZXJhLmFzcGVjdDtcblxuICAgIHNjZW5lLmNhbWVyYSA9IG5ldyBPcnRob2dyYXBoaWNDYW1lcmEoXG4gICAgICAgIGZydXN0dW1TaXplICogYXNwZWN0IC8gLTIsXG4gICAgICAgIGZydXN0dW1TaXplICogYXNwZWN0IC8gMixcbiAgICAgICAgZnJ1c3R1bVNpemUgLyAyLFxuICAgICAgICBmcnVzdHVtU2l6ZSAvIC0yLFxuICAgICAgICAxLFxuICAgICAgICAxNTBcbiAgICApO1xuICAgIHNjZW5lLmNhbWVyYS5wb3NpdGlvbi5jb3B5KG5ldyBWZWN0b3IzKC0xMCwgMTAsIDEwKSk7XG4gICAgc2NlbmUuY2FtZXJhLmxvb2tBdChuZXcgVmVjdG9yMygwLCAwLCAwKSk7XG5cbiAgICB0aGlzLnJvb3QgPSBuZXcgR3JvdXAoKTtcblxuICAgIGNvbnN0IGxpZ2h0cyA9IG5ldyBMaWdodHMoKTtcbiAgICB0aGlzLnJvb3QuYWRkKGxpZ2h0cyk7XG5cblx0XHRjb25zdCBjdWJlTWF0ID0gbmV3IE1lc2hTdGFuZGFyZE1hdGVyaWFsKHtcblx0XHRcdGNvbG9yOiAweGZmZmZmZixcblx0XHRcdG1ldGFsbmVzczogMC40LFxuXHRcdFx0cm91Z2huZXNzOiAwLjIsXG5cdFx0fSk7XG5cbiAgICB0aGlzLmN1YmVzID0gW1xuICAgICAgbmV3IEJhc2ljQ3ViZSh7XG4gICAgICAgIHNpemU6IDIsXG4gICAgICAgIG1hdGVyaWFsOiBjdWJlTWF0LFxuICAgICAgICBwb3NpdGlvbjogbmV3IFZlY3RvcjMoLTEsIDEsIDEpXG4gICAgICB9KSxcbiAgICAgIG5ldyBCYXNpY0N1YmUoe1xuICAgICAgICBzaXplOiAyLFxuICAgICAgICBtYXRlcmlhbDogY3ViZU1hdCxcbiAgICAgICAgcG9zaXRpb246IG5ldyBWZWN0b3IzKDEsIDEsIDEpXG4gICAgICB9KSxcbiAgICAgIG5ldyBCYXNpY0N1YmUoe1xuICAgICAgICBzaXplOiAyLFxuICAgICAgICBtYXRlcmlhbDogY3ViZU1hdCxcbiAgICAgICAgcG9zaXRpb246IG5ldyBWZWN0b3IzKC0xLCAxLCAtMSlcbiAgICAgIH0pLFxuICAgICAgbmV3IEJhc2ljQ3ViZSh7XG4gICAgICAgIHNpemU6IDIsXG4gICAgICAgIG1hdGVyaWFsOiBjdWJlTWF0LFxuICAgICAgICBwb3NpdGlvbjogbmV3IFZlY3RvcjMoMSwgMSwgLTEpXG4gICAgICB9KSxcbiAgICAgIG5ldyBCYXNpY0N1YmUoe1xuICAgICAgICBzaXplOiAyLFxuICAgICAgICBtYXRlcmlhbDogY3ViZU1hdCxcbiAgICAgICAgcG9zaXRpb246IG5ldyBWZWN0b3IzKC0xLCAtMSwgMSlcbiAgICAgIH0pLFxuICAgICAgbmV3IEJhc2ljQ3ViZSh7XG4gICAgICAgIHNpemU6IDIsXG4gICAgICAgIG1hdGVyaWFsOiBjdWJlTWF0LFxuICAgICAgICBwb3NpdGlvbjogbmV3IFZlY3RvcjMoMSwgLTEsIDEpXG4gICAgICB9KSxcbiAgICAgIG5ldyBCYXNpY0N1YmUoe1xuICAgICAgICBzaXplOiAyLFxuICAgICAgICBtYXRlcmlhbDogY3ViZU1hdCxcbiAgICAgICAgcG9zaXRpb246IG5ldyBWZWN0b3IzKC0xLCAtMSwgLTEpXG4gICAgICB9KSxcbiAgICAgIG5ldyBCYXNpY0N1YmUoe1xuICAgICAgICBzaXplOiAyLFxuICAgICAgICBtYXRlcmlhbDogY3ViZU1hdCxcbiAgICAgICAgcG9zaXRpb246IG5ldyBWZWN0b3IzKDEsIC0xLCAtMSlcbiAgICAgIH0pXTtcblxuICAgIHRoaXMuY3ViZXNQYXJlbnQgPSBuZXcgR3JvdXAoKTtcbiAgICBmb3IgKGxldCBjdWJlIG9mIHRoaXMuY3ViZXMpIHtcbiAgICAgIHRoaXMuY3ViZXNQYXJlbnQuYWRkKGN1YmUucm9vdCk7XG4gICAgfVxuICAgIHRoaXMuY3ViZXNQYXJlbnQucG9zaXRpb24uY29weShuZXcgVmVjdG9yMygxLCAtMSwgLTEpKTtcbiAgICB0aGlzLnJvb3QuYWRkKHRoaXMuY3ViZXNQYXJlbnQpO1xuXG4gICAgaWYgKG9uTG9hZCkgb25Mb2FkKCk7XG4gIH1cblxuICB1cGRhdGUodGltZUVsYXBzZWQpIHtcbiAgICBjb25zdCBhbmltYXRpb25UaW1lID0gdGltZUVsYXBzZWQgKiAzO1xuICAgIGNvbnN0IGxvb3BUaW1lID0gYW5pbWF0aW9uVGltZSAlIChNYXRoLlBJICogMik7XG5cbiAgICBpZiAobG9vcFRpbWUgPCBNYXRoLlBJKSB7XG4gICAgICB0aGlzLmZpcnN0U2VjdGlvbihhbmltYXRpb25UaW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZWNvbmRTZWN0aW9uKGFuaW1hdGlvblRpbWUpO1xuICAgIH1cbiAgfVxuXG4gIGZpcnN0U2VjdGlvbihhbmltYXRpb25UaW1lKSB7XG4gICAgY29uc3Qgc2luVGltZSA9IE1hdGguc2luKGFuaW1hdGlvblRpbWUgKiAwLjUpO1xuICAgIGNvbnN0IGFic1NpblRpbWUgPSBNYXRoLmFicyhzaW5UaW1lKTtcblxuICAgIHRoaXMuY3ViZXNQYXJlbnRcbiAgICAgIC5jaGlsZHJlbls3XVxuICAgICAgLnBvc2l0aW9uXG4gICAgICAuY29weShuZXcgVmVjdG9yMygxLCAtMSwgLTEpKTtcbiAgICBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY3ViZXNQYXJlbnQuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGNoaWxkID0gdGhpcy5jdWJlc1BhcmVudC5jaGlsZHJlbltpXTtcbiAgICAgIGNvbnN0IHJvdGEgPSAoTWF0aC5jbGFtcCgoKDEgLSBhYnNTaW5UaW1lKSAqIChNYXRoLlBJICogMC41KSArIChpICogMC4xMjUpKSwgMCwgMSkpO1xuICAgICAgY29uc3Qgc2luU2NhbGUgPSBuZXcgVmVjdG9yMyhyb3RhLCByb3RhLCByb3RhKTtcbiAgICAgIGNoaWxkLnNjYWxlLmNvcHkoc2luU2NhbGUpO1xuICAgICAgY2hpbGQucm90YXRpb24ueiA9IChyb3RhICogTWF0aC5QSSk7XG4gICAgICBjaGlsZC5yb3RhdGlvbi54ID0gcm90YSAqIE1hdGguUEkgKiAwLjU7XG4gICAgfVxuICB9XG5cbiAgc2Vjb25kU2VjdGlvbihhbmltYXRpb25UaW1lKSB7XG4gICAgY29uc3Qgc2luVGltZSA9IE1hdGguc2luKGFuaW1hdGlvblRpbWUgKiAwLjUpO1xuICAgIGNvbnN0IGFic1NpblRpbWUgPSBNYXRoLmFicyhzaW5UaW1lKTtcblxuICAgIGNvbnN0IGNvc1RpbWUgPSBNYXRoLmNvcyhhbmltYXRpb25UaW1lICogMC41KTtcbiAgICBjb25zdCBhYnNDb3NUaW1lID0gTWF0aC5hYnMoY29zVGltZSk7XG5cbiAgICBjb25zdCBjaGlsZCA9IHRoaXMuY3ViZXNQYXJlbnQuY2hpbGRyZW5bN107XG4gICAgY29uc3Qgcm90YSA9IChNYXRoLmNsYW1wKCgoMSAtIGFic1NpblRpbWUpICogKE1hdGguUEkgKiAwLjUpICsgKDcgKiAwLjEyNSkpICsgKGFic0Nvc1RpbWUpLCAwLCAyKSk7XG4gICAgY29uc3Qgc2luU2NhbGUgPSBuZXcgVmVjdG9yMyhyb3RhLCByb3RhLCByb3RhKTtcbiAgICBjaGlsZC5zY2FsZS5jb3B5KHNpblNjYWxlKTtcbiAgICBjaGlsZC5yb3RhdGlvbi56ID0gKHJvdGEgKiBNYXRoLlBJKTtcbiAgICBjaGlsZC5yb3RhdGlvbi54ID0gcm90YSAqIE1hdGguUEkgKiAwLjU7XG4gICAgY29uc3Qgb2xkUG9zID0gbmV3IFZlY3RvcjMoMSwgLTEsIC0xKTtcbiAgICBjaGlsZC5wb3NpdGlvbi5jb3B5KG9sZFBvcy5sZXJwKG5ldyBWZWN0b3IzKDAsIDAsIDApLCBNYXRoLmNsYW1wKCgxIC0gYWJzU2luVGltZSkgKiA2LCAwLCAxKSkpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jdWJlc1BhcmVudC5jaGlsZHJlbi5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgIGNvbnN0IGNoaWxkID0gdGhpcy5jdWJlc1BhcmVudC5jaGlsZHJlbltpXTtcbiAgICAgIGNvbnN0IHJvdGEgPSBNYXRoLmNsYW1wKCgoTWF0aC5jbGFtcCgoKDEgLSBhYnNTaW5UaW1lKSAqIChNYXRoLlBJICogMC41KSArIChpICogMC4xMjUpKSwgMCwgMSkpIC1cbiAgICAgICAgYWJzQ29zVGltZSksIDAsIDEpO1xuICAgICAgY29uc3Qgc2luU2NhbGUgPSBuZXcgVmVjdG9yMyhyb3RhLCByb3RhLCByb3RhKTtcbiAgICAgIGNoaWxkLnNjYWxlLmNvcHkoc2luU2NhbGUpO1xuICAgICAgY2hpbGQucm90YXRpb24ueiA9IChyb3RhICogTWF0aC5QSSk7XG4gICAgICBjaGlsZC5yb3RhdGlvbi54ID0gcm90YSAqIE1hdGguUEkgKiAwLjU7XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9
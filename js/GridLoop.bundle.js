(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{16:function(t,e,o){"use strict";o.d(e,"a",function(){return r});var n=o(15);var r=function t(e){var o=e.size,r=void 0===o?5:o,i=e.material,a=e.position;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.seed=Math.random();var s=1,c=1,u=1;this.color=new n.Color,this.color.setRGB(s,c,u),this.material=i||new n.MeshBasicMaterial({color:this.color}),this.geometry=new n.BoxGeometry(r,r,r),this.mesh=new n.Mesh(this.geometry,this.material),a&&this.mesh.position.copy(a),this.root=this.mesh}},17:function(t,e,o){"use strict";o.d(e,"a",function(){return c});var n=o(15);function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var c=function(t){function e(){var t;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),t=i(this,a(e).call(this));var o=new n.HemisphereLight(16777215,16777215,1.5);return o.color.setHSL(u(325),.9,.94),o.groundColor.setHSL(u(325),.9,.64),o.position.set(0,2,0),t.add(o),t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(e,n["Group"]),e}();function u(t){return t/360}},2:function(t,e,o){"use strict";o.r(e),o.d(e,"default",function(){return s});var n=o(15),r=o(17),i=o(16);function a(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var s=function(){function t(e){var o=e.scene,a=e.onLoad;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var s=o.camera.aspect;this.scene=o,o.camera=new n.OrthographicCamera(7*s/-2,7*s/2,3.5,-3.5,.1,150),o.camera.position.copy(new n.Vector3(10,10,10)),o.camera.lookAt(new n.Vector3(0,0,0)),this.root=new n.Group;var c=new r.a;this.root.add(c);var u=new n.MeshStandardMaterial({color:16777215,metalness:.4,roughness:.2});this.cubes=[];this.cubesParent=new n.Group;for(var f=-11;f<11;f++)for(var h=-11;h<11;h++){var l=new i.a({size:1,material:u,position:new n.Vector3(f,0,h)});l.root.scale.copy(new n.Vector3(1,2,1)),this.cubesParent.add(l.root),this.cubes.push(l)}this.root.add(this.cubesParent),a&&a()}var e,o,s;return e=t,(o=[{key:"update",value:function(t){for(var e=3*t,o=0;o<this.cubesParent.children.length;o++){var r=this.cubesParent.children[o],i=r.position;i.y=Math.sin(o*Math.PI*.25+e),r.position.copy(i)}this.scene.camera.position.copy(new n.Vector3(10*Math.sin(.5*t),10,10*Math.cos(.5*t))),this.scene.camera.lookAt(new n.Vector3(0,0,0)),this.scene.camera.updateProjectionMatrix()}}])&&a(e.prototype,o),s&&a(e,s),t}()}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvT2JqZWN0cy9CYXNpY0N1YmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0xpZ2h0cy9NYWdlbnRhUGFydHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0xvb3BzL0dyaWRMb29wLmpzIl0sIm5hbWVzIjpbIkJhc2ljQ3ViZSIsIl9yZWYiLCJfcmVmJHNpemUiLCJzaXplIiwibWF0ZXJpYWwiLCJwb3NpdGlvbiIsIl9jbGFzc0NhbGxDaGVjayIsInRoaXMiLCJzZWVkIiwiTWF0aCIsInJhbmRvbSIsImNvbG9yIiwiVEhSRUUiLCJzZXRSR0IiLCJnZW9tZXRyeSIsIm1lc2giLCJjb3B5Iiwicm9vdCIsIk1hZ2VudGFQYXJ0eSIsIl90aGlzIiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4iLCJfZ2V0UHJvdG90eXBlT2YiLCJjYWxsIiwiaGVtaUxpZ2h0Iiwic2V0SFNMIiwiTm9ybWFsaXplSCIsImdyb3VuZENvbG9yIiwic2V0IiwiYWRkIiwiaCIsIkN1YmVMb29wIiwic2NlbmUiLCJvbkxvYWQiLCJhc3BlY3QiLCJjYW1lcmEiLCJmcnVzdHVtU2l6ZSIsImxvb2tBdCIsImxpZ2h0cyIsIkxpZ2h0cyIsImN1YmVNYXQiLCJtZXRhbG5lc3MiLCJyb3VnaG5lc3MiLCJjdWJlcyIsImN1YmVzUGFyZW50IiwieCIsInoiLCJuZXdDdWJlIiwic2NhbGUiLCJwdXNoIiwidGltZUVsYXBzZWQiLCJhbmltYXRpb25UaW1lIiwiaSIsImNoaWxkcmVuIiwibGVuZ3RoIiwiY2hpbGQiLCJuZXdQb3MiLCJ5Iiwic2luIiwiUEkiLCJjb3MiLCJ1cGRhdGVQcm9qZWN0aW9uTWF0cml4Il0sIm1hcHBpbmdzIjoieUlBRXFCQSxFQUNuQixTQUFBQSxFQUFBQyxHQUE0QyxJQUFBQyxFQUFBRCxFQUEvQkUsWUFBK0IsSUFBQUQsRUFBeEIsRUFBd0JBLEVBQXJCRSxFQUFxQkgsRUFBckJHLFNBQVVDLEVBQVdKLEVBQVhJLHNHQUFXQyxDQUFB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QUE3QkgsS0FBS2dELElBQWtCLEdBQWRSLEdBQXdCLEdBQWlDLEdBQTdCeEMsS0FBS2tELElBQWtCLEdBQWRWLEtBQ2hHMUMsS0FBS3dCLE1BQU1HLE9BQU9FLE9BQU8sSUFBSXhCLFVBQWMsRUFBRyxFQUFHLElBQ2pETCxLQUFLd0IsTUFBTUcsT0FBTzBCIiwiZmlsZSI6Ii4vanMvR3JpZExvb3AuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNpY0N1YmUge1xuICBjb25zdHJ1Y3Rvcih7c2l6ZSA9IDUsIG1hdGVyaWFsLCBwb3NpdGlvbn0pIHtcbiAgICB0aGlzLnNlZWQgPSBNYXRoLnJhbmRvbSgpO1xuICAgIGNvbnN0IGNvbG9yID0ge3I6MSAsZzoxLCBiOjF9O1xuICAgIHRoaXMuY29sb3IgPSBuZXcgVEhSRUUuQ29sb3IoKTtcbiAgICB0aGlzLmNvbG9yLnNldFJHQihjb2xvci5yLCBjb2xvci5nLCBjb2xvci5iKTtcblxuICAgIHRoaXMubWF0ZXJpYWwgPSBtYXRlcmlhbCB8fCBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoe1xuICAgICAgY29sb3I6IHRoaXMuY29sb3JcbiAgICB9KTtcblxuICAgIHRoaXMuZ2VvbWV0cnkgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoc2l6ZSwgc2l6ZSwgc2l6ZSk7XG5cbiAgICB0aGlzLm1lc2ggPSBuZXcgVEhSRUUuTWVzaChcbiAgICAgIHRoaXMuZ2VvbWV0cnksXG4gICAgICB0aGlzLm1hdGVyaWFsXG4gICAgKTtcblxuICAgIGlmIChwb3NpdGlvbikge1xuICAgICAgdGhpcy5tZXNoLnBvc2l0aW9uLmNvcHkocG9zaXRpb24pO1xuICAgIH1cblxuICAgIHRoaXMucm9vdCA9IHRoaXMubWVzaDtcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWdlbnRhUGFydHkgZXh0ZW5kcyBUSFJFRS5Hcm91cCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICBjb25zdCBoZW1pTGlnaHQgPSBuZXcgVEhSRUUuSGVtaXNwaGVyZUxpZ2h0KCAweGZmZmZmZiwgMHhmZmZmZmYsIDEuNSApO1xuXHRcdGhlbWlMaWdodC5jb2xvci5zZXRIU0woXG5cdFx0XHROb3JtYWxpemVIKDMyNSksIFxuXHRcdFx0MC45LFxuXHRcdFx0MC45NFxuXHRcdCk7XG5cdFx0aGVtaUxpZ2h0Lmdyb3VuZENvbG9yLnNldEhTTChcblx0XHRcdE5vcm1hbGl6ZUgoMzI1KSwgXG5cdFx0XHQwLjksIFxuXHRcdFx0MC42NFxuXHRcdCk7XG5cdFx0aGVtaUxpZ2h0LnBvc2l0aW9uLnNldCggMCwgMiwgMCApO1xuXHRcdHRoaXMuYWRkKCBoZW1pTGlnaHQgKTtcblx0fVxufVxuXHRcbmZ1bmN0aW9uIE5vcm1hbGl6ZUgoaCkge1xuXHRyZXR1cm4gaC8zNjAuMDtcbn1cbiIsImltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcbmltcG9ydCBMaWdodHMgZnJvbSAnLi4vTGlnaHRzL01hZ2VudGFQYXJ0eS5qcyc7XG5pbXBvcnQgQmFzaWNDdWJlIGZyb20gJy4uL09iamVjdHMvQmFzaWNDdWJlLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3ViZUxvb3Age1xuICAgIGNvbnN0cnVjdG9yKHtzY2VuZSwgb25Mb2FkfSkge1xuICAgICAgICBjb25zdCBmcnVzdHVtU2l6ZSA9IDc7XG4gICAgICAgIGNvbnN0IGFzcGVjdCA9IHNjZW5lLmNhbWVyYS5hc3BlY3Q7XG4gICAgICAgIHRoaXMuc2NlbmUgPSBzY2VuZTtcblxuICAgICAgICBzY2VuZS5jYW1lcmEgPSBuZXcgVEhSRUUuT3J0aG9ncmFwaGljQ2FtZXJhKFxuICAgICAgICAgICAgZnJ1c3R1bVNpemUgKiBhc3BlY3QgLyAtIDIsXG4gICAgICAgICAgICBmcnVzdHVtU2l6ZSAqIGFzcGVjdCAvIDIsXG4gICAgICAgICAgICBmcnVzdHVtU2l6ZSAvIDIsXG4gICAgICAgICAgICBmcnVzdHVtU2l6ZSAvIC0gMixcbiAgICAgICAgICAgIDAuMSxcbiAgICAgICAgICAgIDE1MFxuICAgICAgICApO1xuICAgICAgICBzY2VuZS5jYW1lcmEucG9zaXRpb24uY29weShuZXcgVEhSRUUuVmVjdG9yMygxMCwgMTAsIDEwKSk7XG4gICAgICAgIHNjZW5lLmNhbWVyYS5sb29rQXQobmV3IFRIUkVFLlZlY3RvcjMoMCwgMCwgMCkpO1xuXG4gICAgICAgIHRoaXMucm9vdCA9IG5ldyBUSFJFRS5Hcm91cCgpO1xuXG4gICAgICAgIGNvbnN0IGxpZ2h0cyA9IG5ldyBMaWdodHMoKTtcbiAgICAgICAgdGhpcy5yb290LmFkZChsaWdodHMpO1xuXG4gICAgICAgIGNvbnN0IGN1YmVNYXQgPSBuZXcgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwoe1xuICAgICAgICAgICAgY29sb3I6IDB4ZmZmZmZmLFxuICAgICAgICAgICAgbWV0YWxuZXNzOiAwLjQsXG4gICAgICAgICAgICByb3VnaG5lc3M6IDAuMixcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5jdWJlcyA9IFtdO1xuXG4gICAgICAgIGNvbnN0IGhhbGZDb3VudCA9IDExO1xuXG4gICAgICAgIHRoaXMuY3ViZXNQYXJlbnQgPSBuZXcgVEhSRUUuR3JvdXAoKTtcbiAgICAgICAgZm9yIChsZXQgeCA9IC1oYWxmQ291bnQ7IHggPCBoYWxmQ291bnQ7IHgrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgeiA9IC1oYWxmQ291bnQ7IHogPCBoYWxmQ291bnQ7IHorKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0N1YmUgPSBuZXcgQmFzaWNDdWJlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXRlcmlhbDogY3ViZU1hdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBuZXcgVEhSRUUuVmVjdG9yMyh4LCAwLCB6KVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBuZXdDdWJlLnJvb3Quc2NhbGUuY29weShuZXcgVEhSRUUuVmVjdG9yMygxLDIsMSkpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3ViZXNQYXJlbnQuYWRkKG5ld0N1YmUucm9vdCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdWJlcy5wdXNoKG5ld0N1YmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLnJvb3QuYWRkKHRoaXMuY3ViZXNQYXJlbnQpO1xuXG4gICAgICAgIGlmIChvbkxvYWQpIG9uTG9hZCgpO1xuICAgIH1cbiAgICBcblxuICAgIHVwZGF0ZSh0aW1lRWxhcHNlZCkge1xuICAgICAgICBjb25zdCBhbmltYXRpb25UaW1lID0gdGltZUVsYXBzZWQgKiAzO1xuICAgIFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY3ViZXNQYXJlbnQuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkID0gdGhpcy5jdWJlc1BhcmVudC5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgIGNvbnN0IG5ld1BvcyA9IGNoaWxkLnBvc2l0aW9uO1xuICAgICAgICAgICAgbmV3UG9zLnkgPSBNYXRoLnNpbigoaSpNYXRoLlBJKjAuMjUpK2FuaW1hdGlvblRpbWUpO1xuICAgICAgICAgICAgY2hpbGQucG9zaXRpb24uY29weShuZXdQb3MpO1xuICAgICAgICB9XG5cbiAgICAgICAgXG4gICAgICAgIHRoaXMuc2NlbmUuY2FtZXJhLnBvc2l0aW9uLmNvcHkobmV3IFRIUkVFLlZlY3RvcjMoTWF0aC5zaW4odGltZUVsYXBzZWQgKiAuNSkgKiAxMCwgMTAsIE1hdGguY29zKHRpbWVFbGFwc2VkICogLjUpICogMTApKTtcbiAgICAgICAgdGhpcy5zY2VuZS5jYW1lcmEubG9va0F0KG5ldyBUSFJFRS5WZWN0b3IzKDAsIDAsIDApKTtcbiAgICAgICAgdGhpcy5zY2VuZS5jYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuICAgIH1cblxufSJdLCJzb3VyY2VSb290IjoiIn0=
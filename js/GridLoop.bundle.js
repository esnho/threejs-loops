(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{2:function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return c});var o=n(28),r=n(30),i=n(29);function a(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var c=function(){function t(e){var n=e.scene,a=e.onLoad;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var c=n.camera.aspect;this.scene=n,n.camera=new o.OrthographicCamera(7*c/-2,7*c/2,3.5,-3.5,.1,150),n.camera.position.copy(new o.Vector3(10,10,10)),n.camera.lookAt(new o.Vector3(0,0,0)),this.root=new o.Group;var s=new r.a;this.root.add(s);var u=new o.MeshStandardMaterial({color:16777215,metalness:.4,roughness:.2});this.cubes=[];this.cubesParent=new o.Group;for(var f=-11;f<11;f++)for(var l=-11;l<11;l++){var p=new i.a({size:1,material:u,position:new o.Vector3(f,0,l)});p.root.scale.copy(new o.Vector3(1,2,1)),this.cubesParent.add(p.root),this.cubes.push(p)}this.root.add(this.cubesParent),a&&a()}var e,n,c;return e=t,(n=[{key:"update",value:function(t){for(var e=3*t,n=0;n<this.cubesParent.children.length;n++){var r=this.cubesParent.children[n],i=r.position;i.y=Math.sin(n*Math.PI*.25+e),r.position.copy(i)}this.scene.camera.position.copy(new o.Vector3(10*Math.sin(.5*t),10,10*Math.cos(.5*t))),this.scene.camera.lookAt(new o.Vector3(0,0,0)),this.scene.camera.updateProjectionMatrix()}}])&&a(e.prototype,n),c&&a(e,c),t}()},29:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var o=n(28);var r=function t(e){var n=e.size,r=void 0===n?5:n,i=e.material,a=e.position;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.seed=Math.random();var c=1,s=1,u=1;this.color=new o.Color,this.color.setRGB(c,s,u),this.material=i||new o.MeshBasicMaterial({color:this.color}),this.geometry=new o.BoxGeometry(r,r,r),this.mesh=new o.Mesh(this.geometry,this.material),a&&this.mesh.position.copy(a),this.root=this.mesh}},30:function(t,e,n){"use strict";n.d(e,"a",function(){return f});var o=n(28);function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var u={intensity:1},f=function(t){function e(){var t,n;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var r=arguments.length,s=new Array(r),f=0;f<r;f++)s[f]=arguments[f];(n=a(this,(t=c(e)).call.apply(t,[this].concat(s)))).params=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){i(t,e,n[e])})}return t}({},u,s[0]);var p=new o.HemisphereLight(16777215,16777215,1.5*n.params.intensity);return p.color.setHSL(l(325),.9,.94),p.groundColor.setHSL(l(325),.9,.64),p.position.set(0,2,0),n.add(p),n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(e,o["Group"]),e}();function l(t){return t/360}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvTG9vcHMvR3JpZExvb3AuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL09iamVjdHMvQmFzaWNDdWJlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9MaWdodHMvTWFnZW50YVBhcnR5LmpzIl0sIm5hbWVzIjpbIkN1YmVMb29wIiwiX3JlZiIsInNjZW5lIiwib25Mb2FkIiwiX2NsYXNzQ2FsbENoZWNrIiwidGhpcyIsImFzcGVjdCIsImNhbWVyYSIsIk9ydGhvZ3JhcGhpY0NhbWVyYSIsImZydXN0dW1TaXplIiwicG9zaXRpb24iLCJjb3B5IiwiVmVjdG9yMyIsImxvb2tBdCIsInJvb3QiLCJHcm91cCIsImxpZ2h0cyIsIkxpZ2h0cyIsImFkZCIsImN1YmVNYXQiLCJNZXNoU3RhbmRhcmRNYXRlcmlhbCIsImNvbG9yIiwibWV0YWxuZXNzIiwicm91Z2huZXNzIiwiY3ViZXMiLCJjdWJlc1BhcmVudCIsIngiLCJ6IiwibmV3Q3ViZSIsIkJhc2ljQ3ViZSIsInNpemUiLCJtYXRlcmlhbCIsInNjYWxlIiwicHVzaCIsInRpbWVFbGFwc2VkIiwiYW5pbWF0aW9uVGltZSIsImkiLCJjaGlsZHJlbiIsImxlbmd0aCIsImNoaWxkIiwibmV3UG9zIiwieSIsIk1hdGgiLCJzaW4iLCJQSSIsImNvcyIsInVwZGF0ZVByb2plY3Rpb25NYXRyaXgiLCJfcmVmJHNpemUiLCJzZWVkIiwicmFuZG9tIiwiQ29sb3IiLCJzZXRSR0IiLCJNZXNoQmFzaWNNYXRlcmlhbCIsImdlb21ldHJ5IiwiQm94R2VvbWV0cnkiLCJtZXNoIiwiTWVzaCIsImRlZmF1bHRQYXJhbXMiLCJpbnRlbnNpdHkiLCJNYWdlbnRhUGFydHkiLCJfZ2V0UHJvdG90eXBlT2YyIiwiX3RoaXMiLCJfbGVuIiwiYXJndW1lbnRzIiwiYXJncyIsIkFycmF5IiwiX2tleSIsIl9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIiwiX2dldFByb3RvdHlwZU9mIiwiY2FsbCIsImFwcGx5IiwiY29uY2F0IiwicGFyYW1zIiwiX29iamVjdFNwcmVhZCIsImhlbWlMaWdodCIsIkhlbWlzcGhlcmVMaWdodCIsInNldEhTTCIsIk5vcm1hbGl6ZUgiLCJncm91bmRDb2xvciIsInNldCIsImgiXSwibWFwcGluZ3MiOiIyVUFTcUJBLGFBQ2pCLFNBQUFBLEVBQUFDLEdBQTZCLElBQWhCQyxFQUFnQkQsRUFBaEJDLE1BQU9DLEVBQVNGLEVBQVRFLG9HQUFTQyxDQUFBQyxLQUFBTCxHQUN6QixJQUNNTSxFQUFTSixFQUFNSyxPQUFPRCxPQUM1QkQsS0FBS0gsTUFBUUEsRUFFYkEsRUFBTUssT0FBUyxJQUFJQyxxQkFKQyxFQUtGRixHQUFXLEVBTFQsRUFNRkEsRUFBUyxFQUN2QkcsS0FDQUEsSUFDQSxHQUNBLEtBRUpQLEVBQU1LLE9BQU9HLFNBQVNDLEtBQUssSUFBSUMsVUFBUSxHQUFJLEdBQUksS0FDL0NWLEVBQU1LLE9BQU9NLE9BQU8sSUFBSUQsVUFBUSxFQUFHLEVBQUcsSUFFdENQLEtBQUtTLEtBQU8sSUFBSUMsUUFFaEIsSUFBTUMsRUFBUyxJQUFJQyxJQUNuQlosS0FBS1MsS0FBS0ksSUFBSUYsR0FFZCxJQUFNRyxFQUFVLElBQUlDLHVCQUFxQixDQUNyQ0MsTUFBTyxTQUNQQyxVQUFXLEdBQ1hDLFVBQVcsS0FHZmxCLEtBQUttQixNQUFRLEdBSWJuQixLQUFLb0IsWUFBYyxJQUFJVixRQUN2QixJQUFLLElBQUlXLEdBSFMsR0FHT0EsRUFIUCxHQUdzQkEsSUFDcEMsSUFBSyxJQUFJQyxHQUpLLEdBSVdBLEVBSlgsR0FJMEJBLElBQUssQ0FDekMsSUFBTUMsRUFBVSxJQUFJQyxJQUFVLENBQ3RCQyxLQUFNLEVBQ05DLFNBQVVaLEVBQ1ZULFNBQVUsSUFBSUUsVUFBUWMsRUFBRyxFQUFHQyxLQUVwQ0MsRUFBUWQsS0FBS2tCLE1BQU1yQixLQUFLLElBQUlDLFVBQVEsRUFBRSxFQUFFLElBQ3hDUCxLQUFLb0IsWUFBWVAsSUFBSVUsRUFBUWQsTUFDN0JULEtBQUttQixNQUFNUyxLQUFLTCxHQUl4QnZCLEtBQUtTLEtBQUtJLElBQUliLEtBQUtvQixhQUVmdEIsR0FBUUEsMERBSVQrQixHQUdILElBRkEsSUFBTUMsRUFBOEIsRUFBZEQsRUFFYkUsRUFBSSxFQUFHQSxFQUFJL0IsS0FBS29CLFlBQVlZLFNBQVNDLE9BQVFGLElBQUssQ0FDdkQsSUFBTUcsRUFBUWxDLEtBQUtvQixZQUFZWSxTQUFTRCxHQUNsQ0ksRUFBU0QsRUFBTTdCLFNBQ3JCOEIsRUFBT0MsRUFBSUMsS0FBS0MsSUFBS1AsRUFBRU0sS0FBS0UsR0FBRyxJQUFNVCxHQUNyQ0ksRUFBTTdCLFNBQVNDLEtBQUs2QixHQUl4Qm5DLEtBQUtILE1BQU1LLE9BQU9HLFNBQVNDLEtBQUssSUFBSUMsVUFBcUMsR0FBN0I4QixLQUFLQyxJQUFrQixHQUFkVCxHQUF3QixHQUFpQyxHQUE3QlEsS0FBS0csSUFBa0IsR0FBZFgsS0FDMUY3QixLQUFLSCxNQUFNSyxPQUFPTSxPQUFPLElBQUlELFVBQVEsRUFBRyxFQUFHLElBQzNDUCxLQUFLSCxNQUFNSyxPQUFPdUMsK0lDbkVMakIsRUFDbkIsU0FBQUEsRUFBQTVCLEdBQTRDLElBQUE4QyxFQUFBOUMsRUFBL0I2QixZQUErQixJQUFBaUIsRUFBeEIsRUFBd0JBLEVBQXJCaEIsRUFBcUI5QixFQUFyQjhCLFNBQVVyQixFQUFXVCxFQUFYUyxzR0FBV04sQ0FBQUMsS0FBQXdCLEdBQzFDeEIsS0FBSzJDLEtBQU9OLEtBQUtPLFNBQ2pCLElBQU01QixFQUFXLEVBQVhBLEVBQWdCLEVBQWhCQSxFQUFxQixFQUMzQmhCLEtBQUtnQixNQUFRLElBQUk2QixRQUNqQjdDLEtBQUtnQixNQUFNOEIsT0FBTzlCLEVBQVNBLEVBQVNBLEdBRXBDaEIsS0FBSzBCLFNBQVdBLEdBQVksSUFBSXFCLG9CQUFrQixDQUNoRC9CLE1BQU9oQixLQUFLZ0IsUUFHZGhCLEtBQUtnRCxTQUFXLElBQUlDLGNBQVl4QixFQUFNQSxFQUFNQSxHQUU1Q3pCLEtBQUtrRCxLQUFPLElBQUlDLE9BQ2RuRCxLQUFLZ0QsU0FDTGhELEtBQUswQixVQUdIckIsR0FDRkwsS0FBS2tELEtBQUs3QyxTQUFTQyxLQUFLRCxHQUcxQkwsS0FBS1MsS0FBT1QsS0FBS2tELDQwQkN4QnJCLElBQU1FLEVBQWdCLENBQ2xCQyxVQUFXLEdBR01DLGNBQ3BCLFNBQUFBLElBQXFCLElBQUFDLEVBQUFDLCtGQUFBekQsQ0FBQUMsS0FBQXNELEdBQUEsUUFBQUcsRUFBQUMsVUFBQXpCLE9BQU4wQixFQUFNLElBQUFDLE1BQUFILEdBQUFJLEVBQUEsRUFBQUEsRUFBQUosRUFBQUksSUFBTkYsRUFBTUUsR0FBQUgsVUFBQUcsSUFDcEJMLEVBQUFNLEVBQUE5RCxNQUFBdUQsRUFBQVEsRUFBQVQsSUFBQVUsS0FBQUMsTUFBQVYsRUFBQSxDQUFBdkQsTUFBQWtFLE9BQVNQLE1BQ0pRLHlVQUFMQyxDQUFBLEdBQ0loQixFQUNBTyxFQUFLLElBR1AsSUFBTVUsRUFBWSxJQUFJQyxrQkFDdkIsU0FDQSxTQUNBLElBQU1kLEVBQUtXLE9BQU9kLFdBVkMsT0FZcEJnQixFQUFVckQsTUFBTXVELE9BQ2ZDLEVBQVcsS0FDWCxHQUNBLEtBRURILEVBQVVJLFlBQVlGLE9BQ3JCQyxFQUFXLEtBQ1gsR0FDQSxLQUVESCxFQUFVaEUsU0FBU3FFLElBQUssRUFBRyxFQUFHLEdBQzlCbEIsRUFBSzNDLElBQUt3RCxHQXZCVWIsOE9BRG9COUMsaUJBNEIxQyxTQUFTOEQsRUFBV0csR0FDbkIsT0FBT0EsRUFBRSIsImZpbGUiOiIuL2pzL0dyaWRMb29wLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgVmVjdG9yMyxcbiAgICBHcm91cCxcbiAgICBNZXNoU3RhbmRhcmRNYXRlcmlhbCxcbiAgICBPcnRob2dyYXBoaWNDYW1lcmFcbiAgfSBmcm9tICd0aHJlZSc7XG5pbXBvcnQgTGlnaHRzIGZyb20gJy4uL0xpZ2h0cy9NYWdlbnRhUGFydHkuanMnO1xuaW1wb3J0IEJhc2ljQ3ViZSBmcm9tICcuLi9PYmplY3RzL0Jhc2ljQ3ViZS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1YmVMb29wIHtcbiAgICBjb25zdHJ1Y3Rvcih7c2NlbmUsIG9uTG9hZH0pIHtcbiAgICAgICAgY29uc3QgZnJ1c3R1bVNpemUgPSA3O1xuICAgICAgICBjb25zdCBhc3BlY3QgPSBzY2VuZS5jYW1lcmEuYXNwZWN0O1xuICAgICAgICB0aGlzLnNjZW5lID0gc2NlbmU7XG5cbiAgICAgICAgc2NlbmUuY2FtZXJhID0gbmV3IE9ydGhvZ3JhcGhpY0NhbWVyYShcbiAgICAgICAgICAgIGZydXN0dW1TaXplICogYXNwZWN0IC8gLSAyLFxuICAgICAgICAgICAgZnJ1c3R1bVNpemUgKiBhc3BlY3QgLyAyLFxuICAgICAgICAgICAgZnJ1c3R1bVNpemUgLyAyLFxuICAgICAgICAgICAgZnJ1c3R1bVNpemUgLyAtIDIsXG4gICAgICAgICAgICAwLjEsXG4gICAgICAgICAgICAxNTBcbiAgICAgICAgKTtcbiAgICAgICAgc2NlbmUuY2FtZXJhLnBvc2l0aW9uLmNvcHkobmV3IFZlY3RvcjMoMTAsIDEwLCAxMCkpO1xuICAgICAgICBzY2VuZS5jYW1lcmEubG9va0F0KG5ldyBWZWN0b3IzKDAsIDAsIDApKTtcblxuICAgICAgICB0aGlzLnJvb3QgPSBuZXcgR3JvdXAoKTtcblxuICAgICAgICBjb25zdCBsaWdodHMgPSBuZXcgTGlnaHRzKCk7XG4gICAgICAgIHRoaXMucm9vdC5hZGQobGlnaHRzKTtcblxuICAgICAgICBjb25zdCBjdWJlTWF0ID0gbmV3IE1lc2hTdGFuZGFyZE1hdGVyaWFsKHtcbiAgICAgICAgICAgIGNvbG9yOiAweGZmZmZmZixcbiAgICAgICAgICAgIG1ldGFsbmVzczogMC40LFxuICAgICAgICAgICAgcm91Z2huZXNzOiAwLjIsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuY3ViZXMgPSBbXTtcblxuICAgICAgICBjb25zdCBoYWxmQ291bnQgPSAxMTtcblxuICAgICAgICB0aGlzLmN1YmVzUGFyZW50ID0gbmV3IEdyb3VwKCk7XG4gICAgICAgIGZvciAobGV0IHggPSAtaGFsZkNvdW50OyB4IDwgaGFsZkNvdW50OyB4KyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IHogPSAtaGFsZkNvdW50OyB6IDwgaGFsZkNvdW50OyB6KyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdDdWJlID0gbmV3IEJhc2ljQ3ViZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWF0ZXJpYWw6IGN1YmVNYXQsXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogbmV3IFZlY3RvcjMoeCwgMCwgeilcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgbmV3Q3ViZS5yb290LnNjYWxlLmNvcHkobmV3IFZlY3RvcjMoMSwyLDEpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN1YmVzUGFyZW50LmFkZChuZXdDdWJlLnJvb3QpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3ViZXMucHVzaChuZXdDdWJlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5yb290LmFkZCh0aGlzLmN1YmVzUGFyZW50KTtcblxuICAgICAgICBpZiAob25Mb2FkKSBvbkxvYWQoKTtcbiAgICB9XG4gICAgXG5cbiAgICB1cGRhdGUodGltZUVsYXBzZWQpIHtcbiAgICAgICAgY29uc3QgYW5pbWF0aW9uVGltZSA9IHRpbWVFbGFwc2VkICogMztcbiAgICBcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmN1YmVzUGFyZW50LmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBjaGlsZCA9IHRoaXMuY3ViZXNQYXJlbnQuY2hpbGRyZW5baV07XG4gICAgICAgICAgICBjb25zdCBuZXdQb3MgPSBjaGlsZC5wb3NpdGlvbjtcbiAgICAgICAgICAgIG5ld1Bvcy55ID0gTWF0aC5zaW4oKGkqTWF0aC5QSSowLjI1KSthbmltYXRpb25UaW1lKTtcbiAgICAgICAgICAgIGNoaWxkLnBvc2l0aW9uLmNvcHkobmV3UG9zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIFxuICAgICAgICB0aGlzLnNjZW5lLmNhbWVyYS5wb3NpdGlvbi5jb3B5KG5ldyBWZWN0b3IzKE1hdGguc2luKHRpbWVFbGFwc2VkICogLjUpICogMTAsIDEwLCBNYXRoLmNvcyh0aW1lRWxhcHNlZCAqIC41KSAqIDEwKSk7XG4gICAgICAgIHRoaXMuc2NlbmUuY2FtZXJhLmxvb2tBdChuZXcgVmVjdG9yMygwLCAwLCAwKSk7XG4gICAgICAgIHRoaXMuc2NlbmUuY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcbiAgICB9XG5cbn0iLCJpbXBvcnQge1xuICBDb2xvcixcbiAgTWVzaEJhc2ljTWF0ZXJpYWwsXG4gIEJveEdlb21ldHJ5LFxuICBNZXNoXG59IGZyb20gJ3RocmVlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzaWNDdWJlIHtcbiAgY29uc3RydWN0b3Ioe3NpemUgPSA1LCBtYXRlcmlhbCwgcG9zaXRpb259KSB7XG4gICAgdGhpcy5zZWVkID0gTWF0aC5yYW5kb20oKTtcbiAgICBjb25zdCBjb2xvciA9IHtyOjEgLGc6MSwgYjoxfTtcbiAgICB0aGlzLmNvbG9yID0gbmV3IENvbG9yKCk7XG4gICAgdGhpcy5jb2xvci5zZXRSR0IoY29sb3IuciwgY29sb3IuZywgY29sb3IuYik7XG5cbiAgICB0aGlzLm1hdGVyaWFsID0gbWF0ZXJpYWwgfHwgbmV3IE1lc2hCYXNpY01hdGVyaWFsKHtcbiAgICAgIGNvbG9yOiB0aGlzLmNvbG9yXG4gICAgfSk7XG5cbiAgICB0aGlzLmdlb21ldHJ5ID0gbmV3IEJveEdlb21ldHJ5KHNpemUsIHNpemUsIHNpemUpO1xuXG4gICAgdGhpcy5tZXNoID0gbmV3IE1lc2goXG4gICAgICB0aGlzLmdlb21ldHJ5LFxuICAgICAgdGhpcy5tYXRlcmlhbFxuICAgICk7XG5cbiAgICBpZiAocG9zaXRpb24pIHtcbiAgICAgIHRoaXMubWVzaC5wb3NpdGlvbi5jb3B5KHBvc2l0aW9uKTtcbiAgICB9XG5cbiAgICB0aGlzLnJvb3QgPSB0aGlzLm1lc2g7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIEdyb3VwLFxuXHRIZW1pc3BoZXJlTGlnaHRcbn0gZnJvbSAndGhyZWUnO1xuXG5jb25zdCBkZWZhdWx0UGFyYW1zID0ge1xuICAgIGludGVuc2l0eTogMVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWdlbnRhUGFydHkgZXh0ZW5kcyBHcm91cCB7XG5cdGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcblx0XHRzdXBlciguLi5hcmdzKTtcblx0XHR0aGlzLnBhcmFtcyA9IHtcblx0XHRcdC4uLmRlZmF1bHRQYXJhbXMsXG5cdFx0XHQuLi5hcmdzWzBdXG5cdFx0fTtcblxuICAgIGNvbnN0IGhlbWlMaWdodCA9IG5ldyBIZW1pc3BoZXJlTGlnaHQoXG5cdFx0XHQweGZmZmZmZixcblx0XHRcdDB4ZmZmZmZmLFxuXHRcdFx0MS41ICogdGhpcy5wYXJhbXMuaW50ZW5zaXR5XG5cdFx0KTtcblx0XHRoZW1pTGlnaHQuY29sb3Iuc2V0SFNMKFxuXHRcdFx0Tm9ybWFsaXplSCgzMjUpLCBcblx0XHRcdDAuOSxcblx0XHRcdDAuOTRcblx0XHQpO1xuXHRcdGhlbWlMaWdodC5ncm91bmRDb2xvci5zZXRIU0woXG5cdFx0XHROb3JtYWxpemVIKDMyNSksIFxuXHRcdFx0MC45LCBcblx0XHRcdDAuNjRcblx0XHQpO1xuXHRcdGhlbWlMaWdodC5wb3NpdGlvbi5zZXQoIDAsIDIsIDAgKTtcblx0XHR0aGlzLmFkZCggaGVtaUxpZ2h0ICk7XG5cdH1cbn1cblx0XG5mdW5jdGlvbiBOb3JtYWxpemVIKGgpIHtcblx0cmV0dXJuIGgvMzYwLjA7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9
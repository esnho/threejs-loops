(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{18:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var o=n(17);var r=function t(e){var n=e.size,r=void 0===n?5:n,i=e.material,a=e.position;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.seed=Math.random();var c=1,s=1,u=1;this.color=new o.Color,this.color.setRGB(c,s,u),this.material=i||new o.MeshBasicMaterial({color:this.color}),this.geometry=new o.BoxGeometry(r,r,r),this.mesh=new o.Mesh(this.geometry,this.material),a&&this.mesh.position.copy(a),this.root=this.mesh}},2:function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return c});var o=n(17),r=n(20),i=n(18);function a(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var c=function(){function t(e){var n=e.scene,a=e.onLoad;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var c=n.camera.aspect;this.scene=n,n.camera=new o.OrthographicCamera(7*c/-2,7*c/2,3.5,-3.5,.1,150),n.camera.position.copy(new o.Vector3(10,10,10)),n.camera.lookAt(new o.Vector3(0,0,0)),this.root=new o.Group;var s=new r.a;this.root.add(s);var u=new o.MeshStandardMaterial({color:16777215,metalness:.4,roughness:.2});this.cubes=[];this.cubesParent=new o.Group;for(var f=-11;f<11;f++)for(var l=-11;l<11;l++){var p=new i.a({size:1,material:u,position:new o.Vector3(f,0,l)});p.root.scale.copy(new o.Vector3(1,2,1)),this.cubesParent.add(p.root),this.cubes.push(p)}this.root.add(this.cubesParent),a&&a()}var e,n,c;return e=t,(n=[{key:"update",value:function(t){for(var e=3*t,n=0;n<this.cubesParent.children.length;n++){var r=this.cubesParent.children[n],i=r.position;i.y=Math.sin(n*Math.PI*.25+e),r.position.copy(i)}this.scene.camera.position.copy(new o.Vector3(10*Math.sin(.5*t),10,10*Math.cos(.5*t))),this.scene.camera.lookAt(new o.Vector3(0,0,0)),this.scene.camera.updateProjectionMatrix()}}])&&a(e.prototype,n),c&&a(e,c),t}()},20:function(t,e,n){"use strict";n.d(e,"a",function(){return f});var o=n(17);function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var u={intensity:1},f=function(t){function e(){var t,n;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var r=arguments.length,s=new Array(r),f=0;f<r;f++)s[f]=arguments[f];(n=a(this,(t=c(e)).call.apply(t,[this].concat(s)))).params=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){i(t,e,n[e])})}return t}({},u,s[0]);var p=new o.HemisphereLight(16777215,16777215,1.5*n.params.intensity);return p.color.setHSL(l(325),.9,.94),p.groundColor.setHSL(l(325),.9,.64),p.position.set(0,2,0),n.add(p),n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(e,o["Group"]),e}();function l(t){return t/360}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvT2JqZWN0cy9CYXNpY0N1YmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0xvb3BzL0dyaWRMb29wLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9MaWdodHMvTWFnZW50YVBhcnR5LmpzIl0sIm5hbWVzIjpbIkJhc2ljQ3ViZSIsIl9yZWYiLCJfcmVmJHNpemUiLCJzaXplIiwibWF0ZXJpYWwiLCJwb3NpdGlvbiIsIl9jbGFzc0NhbGxDaGVjayIsInRoaXMiLCJzZWVkIiwiTWF0aCIsInJhbmRvbSIsImNvbG9yIiwiQ29sb3IiLCJzZXRSR0IiLCJNZXNoQmFzaWNNYXRlcmlhbCIsImdlb21ldHJ5IiwiQm94R2VvbWV0cnkiLCJtZXNoIiwiTWVzaCIsImNvcHkiLCJyb290IiwiQ3ViZUxvb3AiLCJzY2VuZSIsIm9uTG9hZCIsImFzcGVjdCIsImNhbWVyYSIsIk9ydGhvZ3JhcGhpY0NhbWVyYSIsImZydXN0dW1TaXplIiwiVmVjdG9yMyIsImxvb2tBdCIsIkdyb3VwIiwibGlnaHRzIiwiTGlnaHRzIiwiYWRkIiwiY3ViZU1hdCIsIk1lc2hTdGFuZGFyZE1hdGVyaWFsIiwibWV0YWxuZXNzIiwicm91Z2huZXNzIiwiY3ViZXMiLCJjdWJlc1BhcmVudCIsIngiLCJ6IiwibmV3Q3ViZSIsInNjYWxlIiwicHVzaCIsInRpbWVFbGFwc2VkIiwiYW5pbWF0aW9uVGltZSIsImkiLCJjaGlsZHJlbiIsImxlbmd0aCIsImNoaWxkIiwibmV3UG9zIiwieSIsInNpbiIsIlBJIiwiY29zIiwidXBkYXRlUHJvamVjdGlvbk1hdHJpeCIsImRlZmF1bHRQYXJhbXMiLCJpbnRlbnNpdHkiLCJNYWdlbnRhUGFydHkiLCJfZ2V0UHJvdG90eXBlT2YyIiwiX3RoaXMiLCJfbGVuIiwiYXJndW1lbnRzIiwiYXJncyIsIkFycmF5IiwiX2tleSIsIl9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIiwiX2dldFByb3RvdHlwZU9mIiwiY2FsbCIsImFwcGx5IiwiY29uY2F0IiwicGFyYW1zIiwiX29iamVjdFNwcmVhZCIsImhlbWlMaWdodCIsIkhlbWlzcGhlcmVMaWdodCIsInNldEhTTCIsIk5vcm1hbGl6ZUgiLCJncm91bmRDb2xvciIsInNldCIsImgiXSwibWFwcGluZ3MiOiJ5SUFPcUJBLEVBQ25CLFNBQUFBLEVBQUFDLEdBQTRDLElBQUFDLEVBQUFELEVBQS9CRSxZQUErQixJQUFBRCxFQUF4QixFQUF3QkEsRUFBckJFLEVBQXFCSCxFQUFyQkcsU0FBVUMsRUFBV0osRUFBWEksc0dBQVdDLENBQUFDLEtBQUFQLEdBQzFDTyxLQUFLQyxLQUFPQyxLQUFLQyxTQUNqQixJQUFNQyxFQUFXLEVBQVhBLEVBQWdCLEVBQWhCQSxFQUFxQixFQUMzQkosS0FBS0ksTUFBUSxJQUFJQyxRQUNqQkwsS0FBS0ksTUFBTUUsT0FBT0YsRUFBU0EsRUFBU0EsR0FFcENKLEtBQUtILFNBQVdBLEdBQVksSUFBSVUsb0JBQWtCLENBQ2hESCxNQUFPSixLQUFLSSxRQUdkSixLQUFLUSxTQUFXLElBQUlDLGNBQVliLEVBQU1BLEVBQU1BLEdBRTVDSSxLQUFLVSxLQUFPLElBQUlDLE9BQ2RYLEtBQUtRLFNBQ0xSLEtBQUtILFVBR0hDLEdBQ0ZFLEtBQUtVLEtBQUtaLFNBQVNjLEtBQUtkLEdBRzFCRSxLQUFLYSxLQUFPYixLQUFLVSx5UkNwQkFJLGFBQ2pCLFNBQUFBLEVBQUFwQixHQUE2QixJQUFoQnFCLEVBQWdCckIsRUFBaEJxQixNQUFPQyxFQUFTdEIsRUFBVHNCLG9HQUFTakIsQ0FBQUMsS0FBQWMsR0FDekIsSUFDTUcsRUFBU0YsRUFBTUcsT0FBT0QsT0FDNUJqQixLQUFLZSxNQUFRQSxFQUViQSxFQUFNRyxPQUFTLElBQUlDLHFCQUpDLEVBS0ZGLEdBQVcsRUFMVCxFQU1GQSxFQUFTLEVBQ3ZCRyxLQUNBQSxJQUNBLEdBQ0EsS0FFSkwsRUFBTUcsT0FBT3BCLFNBQVNjLEtBQUssSUFBSVMsVUFBUSxHQUFJLEdBQUksS0FDL0NOLEVBQU1HLE9BQU9JLE9BQU8sSUFBSUQsVUFBUSxFQUFHLEVBQUcsSUFFdENyQixLQUFLYSxLQUFPLElBQUlVLFFBRWhCLElBQU1DLEVBQVMsSUFBSUMsSUFDbkJ6QixLQUFLYSxLQUFLYSxJQUFJRixHQUVkLElBQU1HLEVBQVUsSUFBSUMsdUJBQXFCLENBQ3JDeEIsTUFBTyxTQUNQeUIsVUFBVyxHQUNYQyxVQUFXLEtBR2Y5QixLQUFLK0IsTUFBUSxHQUliL0IsS0FBS2dDLFlBQWMsSUFBSVQsUUFDdkIsSUFBSyxJQUFJVSxHQUhTLEdBR09BLEVBSFAsR0FHc0JBLElBQ3BDLElBQUssSUFBSUMsR0FKSyxHQUlXQSxFQUpYLEdBSTBCQSxJQUFLLENBQ3pDLElBQU1DLEVBQVUsSUFBSTFDLElBQVUsQ0FDdEJHLEtBQU0sRUFDTkMsU0FBVThCLEVBQ1Y3QixTQUFVLElBQUl1QixVQUFRWSxFQUFHLEVBQUdDLEtBRXBDQyxFQUFRdEIsS0FBS3VCLE1BQU14QixLQUFLLElBQUlTLFVBQVEsRUFBRSxFQUFFLElBQ3hDckIsS0FBS2dDLFlBQVlOLElBQUlTLEVBQVF0QixNQUM3QmIsS0FBSytCLE1BQU1NLEtBQUtGLEdBSXhCbkMsS0FBS2EsS0FBS2EsSUFBSTFCLEtBQUtnQyxhQUVmaEIsR0FBUUEsMERBSVRzQixHQUdILElBRkEsSUFBTUMsRUFBOEIsRUFBZEQsRUFFYkUsRUFBSSxFQUFHQSxFQUFJeEMsS0FBS2dDLFlBQVlTLFNBQVNDLE9BQVFGLElBQUssQ0FDdkQsSUFBTUcsRUFBUTNDLEtBQUtnQyxZQUFZUyxTQUFTRCxHQUNsQ0ksRUFBU0QsRUFBTTdDLFNBQ3JCOEMsRUFBT0MsRUFBSTNDLEtBQUs0QyxJQUFLTixFQUFFdEMsS0FBSzZDLEdBQUcsSUFBTVIsR0FDckNJLEVBQU03QyxTQUFTYyxLQUFLZ0MsR0FJeEI1QyxLQUFLZSxNQUFNRyxPQUFPcEIsU0FBU2MsS0FBSyxJQUFJUyxVQUFxQyxHQUE3Qm5CLEtBQUs0QyxJQUFrQixHQUFkUixHQUF3QixHQUFpQyxHQUE3QnBDLEtBQUs4QyxJQUFrQixHQUFkVixLQUMxRnRDLEtBQUtlLE1BQU1HLE9BQU9JLE9BQU8sSUFBSUQsVUFBUSxFQUFHLEVBQUcsSUFDM0NyQixLQUFLZSxNQUFNRyxPQUFPK0IsbzRCQ3JFMUIsSUFBTUMsRUFBZ0IsQ0FDbEJDLFVBQVcsR0FHTUMsY0FDcEIsU0FBQUEsSUFBcUIsSUFBQUMsRUFBQUMsK0ZBQUF2RCxDQUFBQyxLQUFBb0QsR0FBQSxRQUFBRyxFQUFBQyxVQUFBZCxPQUFOZSxFQUFNLElBQUFDLE1BQUFILEdBQUFJLEVBQUEsRUFBQUEsRUFBQUosRUFBQUksSUFBTkYsRUFBTUUsR0FBQUgsVUFBQUcsSUFDcEJMLEVBQUFNLEVBQUE1RCxNQUFBcUQsRUFBQVEsRUFBQVQsSUFBQVUsS0FBQUMsTUFBQVYsRUFBQSxDQUFBckQsTUFBQWdFLE9BQVNQLE1BQ0pRLHlVQUFMQyxDQUFBLEdBQ0loQixFQUNBTyxFQUFLLElBR1AsSUFBTVUsRUFBWSxJQUFJQyxrQkFDdkIsU0FDQSxTQUNBLElBQU1kLEVBQUtXLE9BQU9kLFdBVkMsT0FZcEJnQixFQUFVL0QsTUFBTWlFLE9BQ2ZDLEVBQVcsS0FDWCxHQUNBLEtBRURILEVBQVVJLFlBQVlGLE9BQ3JCQyxFQUFXLEtBQ1gsR0FDQSxLQUVESCxFQUFVckUsU0FBUzBFLElBQUssRUFBRyxFQUFHLEdBQzlCbEIsRUFBSzVCLElBQUt5QyxHQXZCVWIsOE9BRG9CL0IsaUJBNEIxQyxTQUFTK0MsRUFBV0csR0FDbkIsT0FBT0EsRUFBRSIsImZpbGUiOiIuL2pzL0dyaWRMb29wLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbG9yLFxuICBNZXNoQmFzaWNNYXRlcmlhbCxcbiAgQm94R2VvbWV0cnksXG4gIE1lc2hcbn0gZnJvbSAndGhyZWUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNpY0N1YmUge1xuICBjb25zdHJ1Y3Rvcih7c2l6ZSA9IDUsIG1hdGVyaWFsLCBwb3NpdGlvbn0pIHtcbiAgICB0aGlzLnNlZWQgPSBNYXRoLnJhbmRvbSgpO1xuICAgIGNvbnN0IGNvbG9yID0ge3I6MSAsZzoxLCBiOjF9O1xuICAgIHRoaXMuY29sb3IgPSBuZXcgQ29sb3IoKTtcbiAgICB0aGlzLmNvbG9yLnNldFJHQihjb2xvci5yLCBjb2xvci5nLCBjb2xvci5iKTtcblxuICAgIHRoaXMubWF0ZXJpYWwgPSBtYXRlcmlhbCB8fCBuZXcgTWVzaEJhc2ljTWF0ZXJpYWwoe1xuICAgICAgY29sb3I6IHRoaXMuY29sb3JcbiAgICB9KTtcblxuICAgIHRoaXMuZ2VvbWV0cnkgPSBuZXcgQm94R2VvbWV0cnkoc2l6ZSwgc2l6ZSwgc2l6ZSk7XG5cbiAgICB0aGlzLm1lc2ggPSBuZXcgTWVzaChcbiAgICAgIHRoaXMuZ2VvbWV0cnksXG4gICAgICB0aGlzLm1hdGVyaWFsXG4gICAgKTtcblxuICAgIGlmIChwb3NpdGlvbikge1xuICAgICAgdGhpcy5tZXNoLnBvc2l0aW9uLmNvcHkocG9zaXRpb24pO1xuICAgIH1cblxuICAgIHRoaXMucm9vdCA9IHRoaXMubWVzaDtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgICBWZWN0b3IzLFxuICAgIEdyb3VwLFxuICAgIE1lc2hTdGFuZGFyZE1hdGVyaWFsLFxuICAgIE9ydGhvZ3JhcGhpY0NhbWVyYVxuICB9IGZyb20gJ3RocmVlJztcbmltcG9ydCBMaWdodHMgZnJvbSAnLi4vTGlnaHRzL01hZ2VudGFQYXJ0eS5qcyc7XG5pbXBvcnQgQmFzaWNDdWJlIGZyb20gJy4uL09iamVjdHMvQmFzaWNDdWJlLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3ViZUxvb3Age1xuICAgIGNvbnN0cnVjdG9yKHtzY2VuZSwgb25Mb2FkfSkge1xuICAgICAgICBjb25zdCBmcnVzdHVtU2l6ZSA9IDc7XG4gICAgICAgIGNvbnN0IGFzcGVjdCA9IHNjZW5lLmNhbWVyYS5hc3BlY3Q7XG4gICAgICAgIHRoaXMuc2NlbmUgPSBzY2VuZTtcblxuICAgICAgICBzY2VuZS5jYW1lcmEgPSBuZXcgT3J0aG9ncmFwaGljQ2FtZXJhKFxuICAgICAgICAgICAgZnJ1c3R1bVNpemUgKiBhc3BlY3QgLyAtIDIsXG4gICAgICAgICAgICBmcnVzdHVtU2l6ZSAqIGFzcGVjdCAvIDIsXG4gICAgICAgICAgICBmcnVzdHVtU2l6ZSAvIDIsXG4gICAgICAgICAgICBmcnVzdHVtU2l6ZSAvIC0gMixcbiAgICAgICAgICAgIDAuMSxcbiAgICAgICAgICAgIDE1MFxuICAgICAgICApO1xuICAgICAgICBzY2VuZS5jYW1lcmEucG9zaXRpb24uY29weShuZXcgVmVjdG9yMygxMCwgMTAsIDEwKSk7XG4gICAgICAgIHNjZW5lLmNhbWVyYS5sb29rQXQobmV3IFZlY3RvcjMoMCwgMCwgMCkpO1xuXG4gICAgICAgIHRoaXMucm9vdCA9IG5ldyBHcm91cCgpO1xuXG4gICAgICAgIGNvbnN0IGxpZ2h0cyA9IG5ldyBMaWdodHMoKTtcbiAgICAgICAgdGhpcy5yb290LmFkZChsaWdodHMpO1xuXG4gICAgICAgIGNvbnN0IGN1YmVNYXQgPSBuZXcgTWVzaFN0YW5kYXJkTWF0ZXJpYWwoe1xuICAgICAgICAgICAgY29sb3I6IDB4ZmZmZmZmLFxuICAgICAgICAgICAgbWV0YWxuZXNzOiAwLjQsXG4gICAgICAgICAgICByb3VnaG5lc3M6IDAuMixcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5jdWJlcyA9IFtdO1xuXG4gICAgICAgIGNvbnN0IGhhbGZDb3VudCA9IDExO1xuXG4gICAgICAgIHRoaXMuY3ViZXNQYXJlbnQgPSBuZXcgR3JvdXAoKTtcbiAgICAgICAgZm9yIChsZXQgeCA9IC1oYWxmQ291bnQ7IHggPCBoYWxmQ291bnQ7IHgrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgeiA9IC1oYWxmQ291bnQ7IHogPCBoYWxmQ291bnQ7IHorKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0N1YmUgPSBuZXcgQmFzaWNDdWJlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXRlcmlhbDogY3ViZU1hdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBuZXcgVmVjdG9yMyh4LCAwLCB6KVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBuZXdDdWJlLnJvb3Quc2NhbGUuY29weShuZXcgVmVjdG9yMygxLDIsMSkpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3ViZXNQYXJlbnQuYWRkKG5ld0N1YmUucm9vdCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdWJlcy5wdXNoKG5ld0N1YmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLnJvb3QuYWRkKHRoaXMuY3ViZXNQYXJlbnQpO1xuXG4gICAgICAgIGlmIChvbkxvYWQpIG9uTG9hZCgpO1xuICAgIH1cbiAgICBcblxuICAgIHVwZGF0ZSh0aW1lRWxhcHNlZCkge1xuICAgICAgICBjb25zdCBhbmltYXRpb25UaW1lID0gdGltZUVsYXBzZWQgKiAzO1xuICAgIFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY3ViZXNQYXJlbnQuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkID0gdGhpcy5jdWJlc1BhcmVudC5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgIGNvbnN0IG5ld1BvcyA9IGNoaWxkLnBvc2l0aW9uO1xuICAgICAgICAgICAgbmV3UG9zLnkgPSBNYXRoLnNpbigoaSpNYXRoLlBJKjAuMjUpK2FuaW1hdGlvblRpbWUpO1xuICAgICAgICAgICAgY2hpbGQucG9zaXRpb24uY29weShuZXdQb3MpO1xuICAgICAgICB9XG5cbiAgICAgICAgXG4gICAgICAgIHRoaXMuc2NlbmUuY2FtZXJhLnBvc2l0aW9uLmNvcHkobmV3IFZlY3RvcjMoTWF0aC5zaW4odGltZUVsYXBzZWQgKiAuNSkgKiAxMCwgMTAsIE1hdGguY29zKHRpbWVFbGFwc2VkICogLjUpICogMTApKTtcbiAgICAgICAgdGhpcy5zY2VuZS5jYW1lcmEubG9va0F0KG5ldyBWZWN0b3IzKDAsIDAsIDApKTtcbiAgICAgICAgdGhpcy5zY2VuZS5jYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuICAgIH1cblxufSIsImltcG9ydCB7XG4gIEdyb3VwLFxuXHRIZW1pc3BoZXJlTGlnaHRcbn0gZnJvbSAndGhyZWUnO1xuXG5jb25zdCBkZWZhdWx0UGFyYW1zID0ge1xuICAgIGludGVuc2l0eTogMVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWdlbnRhUGFydHkgZXh0ZW5kcyBHcm91cCB7XG5cdGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcblx0XHRzdXBlciguLi5hcmdzKTtcblx0XHR0aGlzLnBhcmFtcyA9IHtcblx0XHRcdC4uLmRlZmF1bHRQYXJhbXMsXG5cdFx0XHQuLi5hcmdzWzBdXG5cdFx0fTtcblxuICAgIGNvbnN0IGhlbWlMaWdodCA9IG5ldyBIZW1pc3BoZXJlTGlnaHQoXG5cdFx0XHQweGZmZmZmZixcblx0XHRcdDB4ZmZmZmZmLFxuXHRcdFx0MS41ICogdGhpcy5wYXJhbXMuaW50ZW5zaXR5XG5cdFx0KTtcblx0XHRoZW1pTGlnaHQuY29sb3Iuc2V0SFNMKFxuXHRcdFx0Tm9ybWFsaXplSCgzMjUpLCBcblx0XHRcdDAuOSxcblx0XHRcdDAuOTRcblx0XHQpO1xuXHRcdGhlbWlMaWdodC5ncm91bmRDb2xvci5zZXRIU0woXG5cdFx0XHROb3JtYWxpemVIKDMyNSksIFxuXHRcdFx0MC45LCBcblx0XHRcdDAuNjRcblx0XHQpO1xuXHRcdGhlbWlMaWdodC5wb3NpdGlvbi5zZXQoIDAsIDIsIDAgKTtcblx0XHR0aGlzLmFkZCggaGVtaUxpZ2h0ICk7XG5cdH1cbn1cblx0XG5mdW5jdGlvbiBOb3JtYWxpemVIKGgpIHtcblx0cmV0dXJuIGgvMzYwLjA7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9
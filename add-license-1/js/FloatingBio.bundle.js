(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{10:function(t,e,o){"use strict";o.r(e);var n=o(28),r=o(31);var a=function t(e){var o=e.size,r=void 0===o?5:o,a=e.material,i=e.position;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.seed=Math.random();var s=1,c=1,u=1;this.color=new n.Color,this.color.setRGB(s,c,u),this.material=a||new n.MeshBasicMaterial({color:this.color}),this.geometry=new n.CylinderGeometry(r,r,r),this.mesh=new n.Mesh(this.geometry,this.material),i&&this.mesh.position.copy(i),this.root=this.mesh};function i(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}o.d(e,"default",function(){return s});var s=function(){function t(e){var o=e.scene,a=e.onLoad;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.scene=o,o.camera.far=350,this.scene.camera.updateProjectionMatrix();var i=new n.Color;i.setIntHSL(48,90,64),o.renderer.setClearColor(i),o.scene.fog=new n.Fog(i,.1,300),this.root=new n.Group;var s=new r.a;this.root.add(s);var c=new n.MeshStandardMaterial({color:16777215,metalness:.4,roughness:.2});this.amoebas=[];for(var u=-60;u<60;u++){var l=this.newAmeba({slices:17,amebaSize:15,material:c,xPosition:15*u*.1});this.amoebas.push(l),this.root.add(l)}a&&a()}var e,o,s;return e=t,(o=[{key:"newAmeba",value:function(t){var e=t.slices,o=t.amebaSize,r=t.material,i=t.xPosition,s=void 0===i?0:i,c=Math.PI/e*.5,u=new n.Group,l=-(this.scene.camera.far-o);u.translateZ(Math.random()*l);for(var f=-e;f<e;f++){var h=Math.cos(c*f)*o,p=Math.sin(c*f*.7)*o,y=new a({size:1,material:r,position:new n.Vector3(s*(u.position.z/(3*o)),p,0)});y.root.scale.copy(new n.Vector3(.7*h,.6*c*h,.7*h)),u.add(y.root)}return u.userData={initialPosition:u.position.clone(),randomValue:Math.random()},u}},{key:"update",value:function(t){for(var e=3*t,o=0;o<this.amoebas.length;o++)this.updateAmeba(o,e);this.updateCamera(.5*t)}},{key:"updateAmeba",value:function(t,e){for(var o=this.amoebas[t],n=0;n<o.children.length;n++){var r=o.children[n],a=r.position;r.position.copy(a),r.translateY(.12*Math.sin(e+(.08*n+o.userData.randomValue)+t*Math.PI)),r.rotateY(.005+.001*n)}var i=o.userData.initialPosition.clone(),s=(.01*e+t*Math.PI)*Math.pow(Math.abs(.01*o.position.z),.3);i.y=2*(s-Math.floor(.5+s))*250,o.position.copy(i)}},{key:"updateCamera",value:function(t){this.scene.camera.position.copy(new n.Vector3(0,14*Math.cos(t),10)),this.scene.camera.lookAt(new n.Vector3(0,0,-60)),this.scene.camera.updateProjectionMatrix()}}])&&i(e.prototype,o),s&&i(e,s),t}()},31:function(t,e,o){"use strict";o.d(e,"a",function(){return l});var n=o(28);function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function i(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var u={intensity:1},l=function(t){function e(){var t,o;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];(o=i(this,(t=s(e)).call.apply(t,[this].concat(c)))).params=function(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{},n=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(o).filter(function(t){return Object.getOwnPropertyDescriptor(o,t).enumerable}))),n.forEach(function(e){a(t,e,o[e])})}return t}({},u,c[0]);var h=new n.HemisphereLight(16777215,16777215,1.5*o.params.intensity);return h.color.setHSL(f(325),.9,.94),h.groundColor.setHSL(f(325),.9,.64),h.position.set(0,2,0),o.add(h),o}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}(e,n["Group"]),e}();function f(t){return t/360}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvT2JqZWN0cy9CYXNpY0N5bGluZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9Mb29wcy9GbG9hdGluZ0Jpby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvTGlnaHRzL01hZ2VudGFQYXJ0eS5qcyJdLCJuYW1lcyI6WyJCYXNpY0N5bGluZGVyIiwiX3JlZiIsIl9yZWYkc2l6ZSIsInNpemUiLCJtYXRlcmlhbCIsInBvc2l0aW9uIiwiX2NsYXNzQ2FsbENoZWNrIiwidGhpcyIsInNlZWQiLCJNYXRoIiwicmFuZG9tIiwiY29sb3IiLCJDb2xvciIsInNldFJHQiIsIk1lc2hCYXNpY01hdGVyaWFsIiwiZ2VvbWV0cnkiLCJDeWxpbmRlckdlb21ldHJ5IiwibWVzaCIsIk1lc2giLCJjb3B5Iiwicm9vdCIsIkZsb2F0aW5nQmlvIiwic2NlbmUiLCJvbkxvYWQiLCJGbG9hdGluZ0Jpb19jbGFzc0NhbGxDaGVjayIsImNhbWVyYSIsImZhciIsInVwZGF0ZVByb2plY3Rpb25NYXRyaXgiLCJjbGVhckNvbG9yIiwic2V0SW50SFNMIiwicmVuZGVyZXIiLCJzZXRDbGVhckNvbG9yIiwiZm9nIiwiRm9nIiwiR3JvdXAiLCJsaWdodHMiLCJMaWdodHMiLCJhZGQiLCJjdWJlTWF0IiwiTWVzaFN0YW5kYXJkTWF0ZXJpYWwiLCJtZXRhbG5lc3MiLCJyb3VnaG5lc3MiLCJhbW9lYmFzIiwiaSIsIm5ld0FtZWJhIiwic2xpY2VzIiwiYW1lYmFTaXplIiwieFBvc2l0aW9uIiwicHVzaCIsInBhcmFtcyIsIl9wYXJhbXMkeFBvc2l0aW9uIiwicGlLIiwiUEkiLCJhbWViYSIsInpEaXN0cmlidXRpb24iLCJ0cmFuc2xhdGVaIiwieSIsInNjYWxlWCIsImNvcyIsInNjYWxlWSIsInNpbiIsIm5ld0N1YmUiLCJWZWN0b3IzIiwieiIsInNjYWxlIiwidXNlckRhdGEiLCJpbml0aWFsUG9zaXRpb24iLCJjbG9uZSIsInJhbmRvbVZhbHVlIiwidGltZUVsYXBzZWQiLCJhbmltYXRpb25UaW1lIiwiYSIsImxlbmd0aCIsInVwZGF0ZUFtZWJhIiwidXBkYXRlQ2FtZXJhIiwiY2hpbGRyZW4iLCJjaGlsZCIsIm5ld1JvdCIsInRyYW5zbGF0ZVkiLCJyb3RhdGVZIiwibmV3UG9zIiwic2F3VGltZSIsInBvdyIsImFicyIsImZsb29yIiwibG9va0F0IiwiZGVmYXVsdFBhcmFtcyIsImludGVuc2l0eSIsIk1hZ2VudGFQYXJ0eSIsIl9nZXRQcm90b3R5cGVPZjIiLCJfdGhpcyIsIl9sZW4iLCJhcmd1bWVudHMiLCJhcmdzIiwiQXJyYXkiLCJfa2V5IiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4iLCJfZ2V0UHJvdG90eXBlT2YiLCJjYWxsIiwiYXBwbHkiLCJjb25jYXQiLCJfb2JqZWN0U3ByZWFkIiwiaGVtaUxpZ2h0IiwiSGVtaXNwaGVyZUxpZ2h0Iiwic2V0SFNMIiwiTm9ybWFsaXplSCIsImdyb3VuZENvbG9yIiwic2V0IiwiaCJdLCJtYXBwaW5ncyI6IndIQU9xQkEsRUFDbkIsU0FBQUEsRUFBQUMsR0FBNEMsSUFBQUMsRUFBQUQsRUFBL0JFLFlBQStCLElBQUFELEVBQXhCLEVBQXdCQSxFQUFyQkUsRUFBcUJILEVBQXJCRyxTQUFVQyxFQUFXSixFQUFYSSxzR0FBV0MsQ0FBQUMsS0FBQVAsR0FDMUNPLEtBQUtDLEtBQU9DLEtBQUtDLFNBQ2pCLElBQU1DLEVBQVcsRUFBWEEsRUFBZ0IsRUFBaEJBLEVBQXFCLEVBQzNCSixLQUFLSSxNQUFRLElBQUlDLFFBQ2pCTCxLQUFLSSxNQUFNRSxPQUFPRixFQUFTQSxFQUFTQSxHQUVwQ0osS0FBS0gsU0FBV0EsR0FBWSxJQUFJVSxvQkFBa0IsQ0FDaERILE1BQU9KLEtBQUtJLFFBR2RKLEtBQUtRLFNBQVcsSUFBSUMsbUJBQWlCYixFQUFNQSxFQUFNQSxHQUVqREksS0FBS1UsS0FBTyxJQUFJQyxPQUNkWCxLQUFLUSxTQUNMUixLQUFLSCxVQUdIQyxHQUNGRSxLQUFLVSxLQUFLWixTQUFTYyxLQUFLZCxH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QUFLaUUsR0F2QlVaLDhPQURvQnhELGlCQTRCMUMsU0FBU3VFLEVBQVdHLEdBQ25CLE9BQU9BLEVBQUUiLCJmaWxlIjoiLi9qcy9GbG9hdGluZ0Jpby5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb2xvcixcbiAgTWVzaEJhc2ljTWF0ZXJpYWwsXG4gIEN5bGluZGVyR2VvbWV0cnksXG4gIE1lc2hcbn0gZnJvbSAndGhyZWUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNpY0N5bGluZGVyIHtcbiAgY29uc3RydWN0b3Ioe3NpemUgPSA1LCBtYXRlcmlhbCwgcG9zaXRpb259KSB7XG4gICAgdGhpcy5zZWVkID0gTWF0aC5yYW5kb20oKTtcbiAgICBjb25zdCBjb2xvciA9IHtyOjEgLGc6MSwgYjoxfTtcbiAgICB0aGlzLmNvbG9yID0gbmV3IENvbG9yKCk7XG4gICAgdGhpcy5jb2xvci5zZXRSR0IoY29sb3IuciwgY29sb3IuZywgY29sb3IuYik7XG5cbiAgICB0aGlzLm1hdGVyaWFsID0gbWF0ZXJpYWwgfHwgbmV3IE1lc2hCYXNpY01hdGVyaWFsKHtcbiAgICAgIGNvbG9yOiB0aGlzLmNvbG9yXG4gICAgfSk7XG5cbiAgICB0aGlzLmdlb21ldHJ5ID0gbmV3IEN5bGluZGVyR2VvbWV0cnkoc2l6ZSwgc2l6ZSwgc2l6ZSk7XG5cbiAgICB0aGlzLm1lc2ggPSBuZXcgTWVzaChcbiAgICAgIHRoaXMuZ2VvbWV0cnksXG4gICAgICB0aGlzLm1hdGVyaWFsXG4gICAgKTtcblxuICAgIGlmIChwb3NpdGlvbikge1xuICAgICAgdGhpcy5tZXNoLnBvc2l0aW9uLmNvcHkocG9zaXRpb24pO1xuICAgIH1cblxuICAgIHRoaXMucm9vdCA9IHRoaXMubWVzaDtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgICBDb2xvcixcbiAgICBWZWN0b3IzLFxuICAgIEdyb3VwLFxuICAgIE1lc2hTdGFuZGFyZE1hdGVyaWFsLFxuICAgIEZvZ1xuICB9IGZyb20gJ3RocmVlJztcbmltcG9ydCBMaWdodHMgZnJvbSAnLi4vTGlnaHRzL01hZ2VudGFQYXJ0eS5qcyc7XG5pbXBvcnQgQmFzaWNDeWxpbmRlciBmcm9tICcuLi9PYmplY3RzL0Jhc2ljQ3lsaW5kZXIuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGbG9hdGluZ0JpbyB7XG4gICAgY29uc3RydWN0b3Ioe3NjZW5lLCBvbkxvYWR9KSB7XG4gICAgICAgIHRoaXMuc2NlbmUgPSBzY2VuZTtcbiAgICAgICAgXG4gICAgICAgIHNjZW5lLmNhbWVyYS5mYXIgPSAzNTA7XG4gICAgICAgIHRoaXMuc2NlbmUuY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcbiAgICAgICAgICAgIFxuICAgICAgICBjb25zdCBjbGVhckNvbG9yID0gbmV3IENvbG9yKCk7XG4gICAgICAgIGNsZWFyQ29sb3Iuc2V0SW50SFNMKDQ4LCA5MCwgNjQpO1xuICAgICAgICBzY2VuZS5yZW5kZXJlci5zZXRDbGVhckNvbG9yKGNsZWFyQ29sb3IpO1xuICAgICAgICBzY2VuZS5zY2VuZS5mb2cgPSBuZXcgRm9nKGNsZWFyQ29sb3IsIDAuMSwgMzAwKTtcblxuICAgICAgICB0aGlzLnJvb3QgPSBuZXcgR3JvdXAoKTtcblxuICAgICAgICBjb25zdCBsaWdodHMgPSBuZXcgTGlnaHRzKCk7XG4gICAgICAgIHRoaXMucm9vdC5hZGQobGlnaHRzKTtcblxuICAgICAgICBjb25zdCBjdWJlTWF0ID0gbmV3IE1lc2hTdGFuZGFyZE1hdGVyaWFsKHtcbiAgICAgICAgICAgIGNvbG9yOiAweGZmZmZmZixcbiAgICAgICAgICAgIG1ldGFsbmVzczogMC40LFxuICAgICAgICAgICAgcm91Z2huZXNzOiAwLjIsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYW1vZWJhcyA9IFtdO1xuICAgICAgICBjb25zdCBzbGljZXMgPSAxNztcbiAgICAgICAgY29uc3QgYW1lYmFTaXplID0gMTU7XG4gICAgICAgIGNvbnN0IGFtZWJhQ291bnQgPSA2MDtcblxuICAgICAgICBmb3IgKGxldCBpID0gLWFtZWJhQ291bnQ7IGkgPCBhbWViYUNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld0FtZWJhID0gdGhpcy5uZXdBbWViYSh7XG4gICAgICAgICAgICAgICAgc2xpY2VzLFxuICAgICAgICAgICAgICAgIGFtZWJhU2l6ZSxcbiAgICAgICAgICAgICAgICBtYXRlcmlhbDogY3ViZU1hdCxcbiAgICAgICAgICAgICAgICB4UG9zaXRpb246IGkqYW1lYmFTaXplKjAuMVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRoaXMuYW1vZWJhcy5wdXNoKG5ld0FtZWJhKTtcbiAgICAgICAgICAgIHRoaXMucm9vdC5hZGQobmV3QW1lYmEpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9uTG9hZCkgb25Mb2FkKCk7XG4gICAgfVxuICAgIFxuXG4gICAgbmV3QW1lYmEocGFyYW1zKSB7XG4gICAgICAgIGNvbnN0IHtzbGljZXMsIGFtZWJhU2l6ZSwgbWF0ZXJpYWwsIHhQb3NpdGlvbiA9IDB9ID0gcGFyYW1zO1xuXG4gICAgICAgIGNvbnN0IHBpSyA9IE1hdGguUEkgLyBzbGljZXMgKiAwLjU7XG4gICAgICAgIGNvbnN0IGFtZWJhID0gbmV3IEdyb3VwKCk7XG4gICAgICAgIGNvbnN0IHpEaXN0cmlidXRpb24gPSAtKHRoaXMuc2NlbmUuY2FtZXJhLmZhciAtIGFtZWJhU2l6ZSk7XG5cbiAgICAgICAgYW1lYmEudHJhbnNsYXRlWihNYXRoLnJhbmRvbSgpICogekRpc3RyaWJ1dGlvbik7XG4gICAgICAgIGZvciAobGV0IHkgPSAtc2xpY2VzOyB5IDwgc2xpY2VzOyB5KyspIHtcbiAgICAgICAgICAgIGNvbnN0IHNjYWxlWCA9IE1hdGguY29zKHBpSyAqIHkpICogYW1lYmFTaXplO1xuICAgICAgICAgICAgY29uc3Qgc2NhbGVZID0gTWF0aC5zaW4ocGlLICogeSAqIDAuNykgKiBhbWViYVNpemU7XG4gICAgICAgICAgICBjb25zdCBuZXdDdWJlID0gbmV3IEJhc2ljQ3lsaW5kZXIoe1xuICAgICAgICAgICAgICAgIHNpemU6IDEsXG4gICAgICAgICAgICAgICAgbWF0ZXJpYWw6IG1hdGVyaWFsLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBuZXcgVmVjdG9yMyhcbiAgICAgICAgICAgICAgICAgICAgeFBvc2l0aW9uICogKGFtZWJhLnBvc2l0aW9uLnogLyAoYW1lYmFTaXplICogMykpLFxuICAgICAgICAgICAgICAgICAgICBzY2FsZVksXG4gICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIG5ld0N1YmUucm9vdC5zY2FsZS5jb3B5KG5ldyBWZWN0b3IzKFxuICAgICAgICAgICAgICAgIHNjYWxlWCAqIDAuNyxcbiAgICAgICAgICAgICAgICBwaUsgKiAwLjYgKiBzY2FsZVgsXG4gICAgICAgICAgICAgICAgc2NhbGVYICogMC43XG4gICAgICAgICAgICApKTtcbiAgICAgICAgICAgIGFtZWJhLmFkZChuZXdDdWJlLnJvb3QpO1xuICAgICAgICB9XG4gICAgICAgIGFtZWJhLnVzZXJEYXRhID0ge1xuICAgICAgICAgICAgJ2luaXRpYWxQb3NpdGlvbic6IGFtZWJhLnBvc2l0aW9uLmNsb25lKCksXG4gICAgICAgICAgICAncmFuZG9tVmFsdWUnOiBNYXRoLnJhbmRvbSgpXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBhbWViYTtcbiAgICB9XG5cbiAgICB1cGRhdGUodGltZUVsYXBzZWQpIHtcbiAgICAgICAgY29uc3QgYW5pbWF0aW9uVGltZSA9IHRpbWVFbGFwc2VkICogMztcbiAgICAgICAgXG4gICAgICAgIGZvciAobGV0IGEgPSAwOyBhIDwgdGhpcy5hbW9lYmFzLmxlbmd0aDsgYSsrKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUFtZWJhKGEsIGFuaW1hdGlvblRpbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51cGRhdGVDYW1lcmEodGltZUVsYXBzZWQgKiAuNSk7XG4gICAgfVxuXG4gICAgdXBkYXRlQW1lYmEoYSwgYW5pbWF0aW9uVGltZSkge1xuICAgICAgICBjb25zdCBhbWViYSA9IHRoaXMuYW1vZWJhc1thXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbWViYS5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY2hpbGQgPSBhbWViYS5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgIGNvbnN0IG5ld1JvdCA9IGNoaWxkLnBvc2l0aW9uO1xuICAgICAgICAgICAgY2hpbGQucG9zaXRpb24uY29weShuZXdSb3QpO1xuICAgICAgICAgICAgY2hpbGQudHJhbnNsYXRlWShNYXRoLnNpbihhbmltYXRpb25UaW1lICsgKGkgKiAwLjA4ICsgYW1lYmEudXNlckRhdGEucmFuZG9tVmFsdWUpICsgKGEgKiBNYXRoLlBJKSkgKiAwLjEyKTtcbiAgICAgICAgICAgIGNoaWxkLnJvdGF0ZVkoMC4wMDUgKyAoaSAqIDAuMDAxKSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmV3UG9zID0gYW1lYmEudXNlckRhdGEuaW5pdGlhbFBvc2l0aW9uLmNsb25lKCk7XG4gICAgICAgIGNvbnN0IHNhd1RpbWUgPSAoYW5pbWF0aW9uVGltZSAqIDAuMDEgKyAoYSAqIE1hdGguUEkpKSAqIE1hdGgucG93KE1hdGguYWJzKGFtZWJhLnBvc2l0aW9uLnogKiAwLjAxKSwgMC4zKTtcbiAgICAgICAgY29uc3Qgc2F3QW1wID0gMjUwO1xuICAgICAgICBuZXdQb3MueSA9ICgyICogKHNhd1RpbWUgLSBNYXRoLmZsb29yKDAuNSArIHNhd1RpbWUpKSkgKiBzYXdBbXA7XG4gICAgICAgIGFtZWJhLnBvc2l0aW9uLmNvcHkobmV3UG9zKTtcbiAgICB9XG5cbiAgICB1cGRhdGVDYW1lcmEodGltZUVsYXBzZWQpIHtcbiAgICAgICAgdGhpcy5zY2VuZS5jYW1lcmEucG9zaXRpb24uY29weShcbiAgICAgICAgICAgIG5ldyBWZWN0b3IzKFxuICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgKE1hdGguY29zKHRpbWVFbGFwc2VkKSAqIDE0KSxcbiAgICAgICAgICAgICAgICAxMClcbiAgICAgICAgICAgICk7XG4gICAgICAgIHRoaXMuc2NlbmUuY2FtZXJhLmxvb2tBdChuZXcgVmVjdG9yMygwLCAwLCAtNjApKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc2NlbmUuY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcbiAgICB9XG5cbn0iLCJpbXBvcnQge1xuICBHcm91cCxcblx0SGVtaXNwaGVyZUxpZ2h0XG59IGZyb20gJ3RocmVlJztcblxuY29uc3QgZGVmYXVsdFBhcmFtcyA9IHtcbiAgICBpbnRlbnNpdHk6IDFcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFnZW50YVBhcnR5IGV4dGVuZHMgR3JvdXAge1xuXHRjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG5cdFx0c3VwZXIoLi4uYXJncyk7XG5cdFx0dGhpcy5wYXJhbXMgPSB7XG5cdFx0XHQuLi5kZWZhdWx0UGFyYW1zLFxuXHRcdFx0Li4uYXJnc1swXVxuXHRcdH07XG5cbiAgICBjb25zdCBoZW1pTGlnaHQgPSBuZXcgSGVtaXNwaGVyZUxpZ2h0KFxuXHRcdFx0MHhmZmZmZmYsXG5cdFx0XHQweGZmZmZmZixcblx0XHRcdDEuNSAqIHRoaXMucGFyYW1zLmludGVuc2l0eVxuXHRcdCk7XG5cdFx0aGVtaUxpZ2h0LmNvbG9yLnNldEhTTChcblx0XHRcdE5vcm1hbGl6ZUgoMzI1KSwgXG5cdFx0XHQwLjksXG5cdFx0XHQwLjk0XG5cdFx0KTtcblx0XHRoZW1pTGlnaHQuZ3JvdW5kQ29sb3Iuc2V0SFNMKFxuXHRcdFx0Tm9ybWFsaXplSCgzMjUpLCBcblx0XHRcdDAuOSwgXG5cdFx0XHQwLjY0XG5cdFx0KTtcblx0XHRoZW1pTGlnaHQucG9zaXRpb24uc2V0KCAwLCAyLCAwICk7XG5cdFx0dGhpcy5hZGQoIGhlbWlMaWdodCApO1xuXHR9XG59XG5cdFxuZnVuY3Rpb24gTm9ybWFsaXplSChoKSB7XG5cdHJldHVybiBoLzM2MC4wO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==
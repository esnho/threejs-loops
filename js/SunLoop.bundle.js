(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{15:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var o=n(14);var r=function t(e){var n=e.size,r=void 0===n?5:n,i=e.material,a=e.position;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.seed=Math.random();var s=1,c=1,u=1;this.color=new o.d,this.color.setRGB(s,c,u),this.material=i||new o.l({color:this.color}),this.geometry=new o.b(r,r,r),this.mesh=new o.k(this.geometry,this.material),a&&this.mesh.position.copy(a),this.root=this.mesh}},16:function(t,e,n){"use strict";n.d(e,"a",function(){return c});var o=n(14);function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var c=function(t){function e(){var t;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),t=i(this,a(e).call(this));var n=new o.i(16777215,16777215,1.5);return n.color.setHSL(u(325),.9,.94),n.groundColor.setHSL(u(325),.9,.64),n.position.set(0,2,0),t.add(n),t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(e,o["h"]),e}();function u(t){return t/360}},4:function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return s});var o=n(14),r=n(16),i=n(15);function a(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var s=function(){function t(e){var n=e.scene,a=e.onLoad;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);this.scene=n,n.camera.position.copy(new o.t(0,0,10)),n.camera.lookAt(new o.t(0,0,0)),n.camera.far=150,this.scene.camera.updateProjectionMatrix(),this.root=new o.h;var s=new r.a;this.root.add(s);var c=new o.m({color:16777215,metalness:.4,roughness:.2});this.cubes=[];var u=Math.PI/15*.5;this.cubesParent=new o.h;for(var f=-15;f<15;f++){var h=35*Math.cos(u*f),l=35*Math.sin(u*f),p=new i.a({size:1,material:c,position:new o.t(0,l,-60)});p.root.scale.copy(new o.t(2*h,.75*u*h,1)),this.cubesParent.add(p.root),this.cubes.push(p)}this.root.add(this.cubesParent),a&&a()}var e,n,s;return e=t,(n=[{key:"update",value:function(t){for(var e=3*t,n=0;n<this.cubesParent.children.length;n++){var r=this.cubesParent.children[n],i=r.rotation;i.setFromVector3(new o.t(0,Math.sin(n*Math.PI*.15+e)*Math.PI*.07*(Math.sin(n*Math.PI*.14+e)*Math.PI*.07),0)),r.rotation.copy(i)}}}])&&a(e.prototype,n),s&&a(e,s),t}()}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvT2JqZWN0cy9CYXNpY0N1YmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0xpZ2h0cy9NYWdlbnRhUGFydHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0xvb3BzL1N1bkxvb3AuanMiXSwibmFtZXMiOlsiQmFzaWNDdWJlIiwiX3JlZiIsIl9yZWYkc2l6ZSIsInNpemUiLCJtYXRlcmlhbCIsInBvc2l0aW9uIiwiX2NsYXNzQ2FsbENoZWNrIiwidGhpcyIsInNlZWQiLCJNYXRoIiwicmFuZG9tIiwiY29sb3IiLCJUSFJFRSIsInNldFJHQiIsImdlb21ldHJ5IiwibWVzaCIsImNvcHkiLCJyb290IiwiTWFnZW50YVBhcnR5IiwiX3RoaXMiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiIsIl9nZXRQcm90b3R5cGVPZiIsImNhbGwiLCJoZW1pTGlnaHQiLCJzZXRIU0wiLCJOb3JtYWxpemVIIiwiZ3JvdW5kQ29sb3IiLCJzZXQiLCJhZGQiLCJoIiwiU3VuTG9vcCIsInNjZW5lIiwib25Mb2FkIiwiY2FtZXJhIiwibG9va0F0IiwiZmFyIiwidXBkYXRlUHJvamVjdGlvbk1hdHJpeCIsImxpZ2h0cyIsIkxpZ2h0cyIsImN1YmVNYXQiLCJtZXRhbG5lc3MiLCJyb3VnaG5lc3MiLCJjdWJlcyIsInBpQ291bnQiLCJQSSIsImN1YmVzUGFyZW50IiwieSIsInNjYWxlWCIsImNvcyIsInNjYWxlWSIsInNpbiIsIm5ld0N1YmUiLCJzY2FsZSIsInB1c2giLCJ0aW1lRWxhcHNlZCIsImFuaW1hdGlvblRpbWUiLCJpIiwiY2hpbGRyZW4iLCJsZW5ndGgiLCJjaGlsZCIsIm5ld1JvdCIsInJvdGF0aW9uIiwic2V0RnJvbVZlY3RvcjMiXSwibWFwcGluZ3MiOiJ5SUFFcUJBLEVBQ25CLFNBQUFBLEVBQUFDLEdBQTRDLElBQUFDLEVBQUFELEVBQS9CRSxZQUErQixJQUFBRCxFQUF4QixFQUF3QkEsRUFBckJFLEVBQXFCSCxFQUFyQkcs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UVcsR0FBaUI5QyxLQUFLbUMsR0FBSyxLQUN2RG5DLEtBQUt5QyxJQUFLTSxFQUFFL0MsS0FBS21DLEdBQUcsSUFBUVcsR0FBaUI5QyxLQUFLbUMsR0FBSyxLQUN6RCxJQUVKZSxFQUFNRSxTQUFTN0MsS0FBSzRDIiwiZmlsZSI6Ii4vanMvU3VuTG9vcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2ljQ3ViZSB7XG4gIGNvbnN0cnVjdG9yKHtzaXplID0gNSwgbWF0ZXJpYWwsIHBvc2l0aW9ufSkge1xuICAgIHRoaXMuc2VlZCA9IE1hdGgucmFuZG9tKCk7XG4gICAgY29uc3QgY29sb3IgPSB7cjoxICxnOjEsIGI6MX07XG4gICAgdGhpcy5jb2xvciA9IG5ldyBUSFJFRS5Db2xvcigpO1xuICAgIHRoaXMuY29sb3Iuc2V0UkdCKGNvbG9yLnIsIGNvbG9yLmcsIGNvbG9yLmIpO1xuXG4gICAgdGhpcy5tYXRlcmlhbCA9IG1hdGVyaWFsIHx8IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7XG4gICAgICBjb2xvcjogdGhpcy5jb2xvclxuICAgIH0pO1xuXG4gICAgdGhpcy5nZW9tZXRyeSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeShzaXplLCBzaXplLCBzaXplKTtcblxuICAgIHRoaXMubWVzaCA9IG5ldyBUSFJFRS5NZXNoKFxuICAgICAgdGhpcy5nZW9tZXRyeSxcbiAgICAgIHRoaXMubWF0ZXJpYWxcbiAgICApO1xuXG4gICAgaWYgKHBvc2l0aW9uKSB7XG4gICAgICB0aGlzLm1lc2gucG9zaXRpb24uY29weShwb3NpdGlvbik7XG4gICAgfVxuXG4gICAgdGhpcy5yb290ID0gdGhpcy5tZXNoO1xuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hZ2VudGFQYXJ0eSBleHRlbmRzIFRIUkVFLkdyb3VwIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIGNvbnN0IGhlbWlMaWdodCA9IG5ldyBUSFJFRS5IZW1pc3BoZXJlTGlnaHQoIDB4ZmZmZmZmLCAweGZmZmZmZiwgMS41ICk7XG5cdFx0aGVtaUxpZ2h0LmNvbG9yLnNldEhTTChcblx0XHRcdE5vcm1hbGl6ZUgoMzI1KSwgXG5cdFx0XHQwLjksXG5cdFx0XHQwLjk0XG5cdFx0KTtcblx0XHRoZW1pTGlnaHQuZ3JvdW5kQ29sb3Iuc2V0SFNMKFxuXHRcdFx0Tm9ybWFsaXplSCgzMjUpLCBcblx0XHRcdDAuOSwgXG5cdFx0XHQwLjY0XG5cdFx0KTtcblx0XHRoZW1pTGlnaHQucG9zaXRpb24uc2V0KCAwLCAyLCAwICk7XG5cdFx0dGhpcy5hZGQoIGhlbWlMaWdodCApO1xuXHR9XG59XG5cdFxuZnVuY3Rpb24gTm9ybWFsaXplSChoKSB7XG5cdHJldHVybiBoLzM2MC4wO1xufVxuIiwiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuaW1wb3J0IExpZ2h0cyBmcm9tICcuLi9MaWdodHMvTWFnZW50YVBhcnR5LmpzJztcbmltcG9ydCBCYXNpY0N1YmUgZnJvbSAnLi4vT2JqZWN0cy9CYXNpY0N1YmUuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdW5Mb29wIHtcbiAgICBjb25zdHJ1Y3Rvcih7c2NlbmUsIG9uTG9hZH0pIHtcbiAgICAgICAgY29uc3Qgc3VuU2l6ZSA9IDM1O1xuXG4gICAgICAgIHRoaXMuc2NlbmUgPSBzY2VuZTtcblxuICAgICAgICBzY2VuZS5jYW1lcmEucG9zaXRpb24uY29weShuZXcgVEhSRUUuVmVjdG9yMygwLCAwLCAxMCkpO1xuICAgICAgICBzY2VuZS5jYW1lcmEubG9va0F0KG5ldyBUSFJFRS5WZWN0b3IzKDAsIDAsIDApKTtcbiAgICAgICAgc2NlbmUuY2FtZXJhLmZhciA9IDE1MDtcbiAgICAgICAgdGhpcy5zY2VuZS5jYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuXG4gICAgICAgIHRoaXMucm9vdCA9IG5ldyBUSFJFRS5Hcm91cCgpO1xuXG4gICAgICAgIGNvbnN0IGxpZ2h0cyA9IG5ldyBMaWdodHMoKTtcbiAgICAgICAgdGhpcy5yb290LmFkZChsaWdodHMpO1xuXG4gICAgICAgIGNvbnN0IGN1YmVNYXQgPSBuZXcgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwoe1xuICAgICAgICAgICAgY29sb3I6IDB4ZmZmZmZmLFxuICAgICAgICAgICAgbWV0YWxuZXNzOiAwLjQsXG4gICAgICAgICAgICByb3VnaG5lc3M6IDAuMixcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5jdWJlcyA9IFtdO1xuXG4gICAgICAgIGNvbnN0IHNsaWRlQ291bnQgPSAxNTtcbiAgICAgICAgY29uc3QgcGlDb3VudCA9IE1hdGguUEkgLyBzbGlkZUNvdW50ICogMC41O1xuXG4gICAgICAgIHRoaXMuY3ViZXNQYXJlbnQgPSBuZXcgVEhSRUUuR3JvdXAoKTtcbiAgICAgICAgZm9yIChsZXQgeSA9IC1zbGlkZUNvdW50OyB5IDwgc2xpZGVDb3VudDsgeSsrKSB7XG4gICAgICAgICAgICBjb25zdCBzY2FsZVggPSBNYXRoLmNvcyhwaUNvdW50ICogeSkgKiBzdW5TaXplO1xuICAgICAgICAgICAgY29uc3Qgc2NhbGVZID0gTWF0aC5zaW4ocGlDb3VudCAqIHkpICogc3VuU2l6ZTtcbiAgICAgICAgICAgIGNvbnN0IG5ld0N1YmUgPSBuZXcgQmFzaWNDdWJlKHtcbiAgICAgICAgICAgICAgICBzaXplOiAxLFxuICAgICAgICAgICAgICAgIG1hdGVyaWFsOiBjdWJlTWF0LFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBuZXcgVEhSRUUuVmVjdG9yMygwLCBzY2FsZVksIC02MClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbmV3Q3ViZS5yb290LnNjYWxlLmNvcHkoXG4gICAgICAgICAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoXG4gICAgICAgICAgICAgICAgICAgIHNjYWxlWCAqIDIsXG4gICAgICAgICAgICAgICAgICAgIHBpQ291bnQgKiAwLjc1ICogc2NhbGVYLFxuICAgICAgICAgICAgICAgICAgICAxKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0aGlzLmN1YmVzUGFyZW50LmFkZChuZXdDdWJlLnJvb3QpO1xuICAgICAgICAgICAgdGhpcy5jdWJlcy5wdXNoKG5ld0N1YmUpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLnJvb3QuYWRkKHRoaXMuY3ViZXNQYXJlbnQpO1xuXG4gICAgICAgIGlmIChvbkxvYWQpIG9uTG9hZCgpO1xuICAgIH1cbiAgICBcblxuICAgIHVwZGF0ZSh0aW1lRWxhcHNlZCkge1xuICAgICAgICBjb25zdCBhbmltYXRpb25UaW1lID0gdGltZUVsYXBzZWQgKiAzOyAgICAgICAgXG4gICAgXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jdWJlc1BhcmVudC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY2hpbGQgPSB0aGlzLmN1YmVzUGFyZW50LmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgY29uc3QgbmV3Um90ID0gY2hpbGQucm90YXRpb247XG4gICAgICAgICAgICBuZXdSb3Quc2V0RnJvbVZlY3RvcjMoIG5ldyBUSFJFRS5WZWN0b3IzKFxuICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgKCBNYXRoLnNpbigoaSpNYXRoLlBJKjAuMTUpICsgYW5pbWF0aW9uVGltZSkgKiBNYXRoLlBJICogMC4wNyApICpcbiAgICAgICAgICAgICAgICAoIE1hdGguc2luKChpKk1hdGguUEkqMC4xNCkgKyBhbmltYXRpb25UaW1lKSAqIE1hdGguUEkgKiAwLjA3ICksXG4gICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgKSk7XG4gICAgICAgICAgICBjaGlsZC5yb3RhdGlvbi5jb3B5KG5ld1JvdCk7XG4gICAgICAgIH1cbiAgICB9XG5cbn0iXSwic291cmNlUm9vdCI6IiJ9
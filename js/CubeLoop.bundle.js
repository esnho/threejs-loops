(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{13:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var o=n(12);var r=function t(e){var n=e.size,r=void 0===n?5:n,a=e.material,i=e.position;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.seed=Math.random();var s=1,c=1,u=1;this.color=new o.d,this.color.setRGB(s,c,u),this.material=a||new o.i({color:this.color}),this.geometry=new o.b(r,r,r),this.mesh=new o.h(this.geometry,this.material),i&&this.mesh.position.copy(i),this.root=this.mesh}},5:function(t,e,n){"use strict";n.r(e);var o=n(12);function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function i(t){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var c=function(t){function e(){var t;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),t=a(this,i(e).call(this));var n=new o.g(16777215,16777215,1.5);return n.color.setHSL(u(250),.9,.94),n.groundColor.setHSL(u(250),.9,.44),n.position.set(0,2,0),t.add(n),t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(e,o["f"]),e}();function u(t){return t/360}var l=n(13);function h(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}n.d(e,"default",function(){return p});var p=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var n=new o.d;n.setIntHSL(48,90,64),e.renderer.setClearColor(n);var r=e.camera.aspect;e.camera=new o.k(10*r/-2,10*r/2,5,-5,1,150),e.camera.position.copy(new o.p(-10,10,10)),e.camera.lookAt(new o.p(0,0,0)),this.root=new o.f;var a=new c;this.root.add(a);var i=new o.j({color:16777215,metalness:.4,roughness:.2});this.cubes=[new l.a({size:2,material:i,position:new o.p(-1,1,1)}),new l.a({size:2,material:i,position:new o.p(1,1,1)}),new l.a({size:2,material:i,position:new o.p(-1,1,-1)}),new l.a({size:2,material:i,position:new o.p(1,1,-1)}),new l.a({size:2,material:i,position:new o.p(-1,-1,1)}),new l.a({size:2,material:i,position:new o.p(1,-1,1)}),new l.a({size:2,material:i,position:new o.p(-1,-1,-1)}),new l.a({size:2,material:i,position:new o.p(1,-1,-1)})],this.cubesParent=new o.f;var s=!0,u=!1,h=void 0;try{for(var p,f=this.cubes[Symbol.iterator]();!(s=(p=f.next()).done);s=!0){var w=p.value;this.cubesParent.add(w.root)}}catch(t){u=!0,h=t}finally{try{s||null==f.return||f.return()}finally{if(u)throw h}}this.cubesParent.position.copy(new o.p(1,-1,-1)),this.root.add(this.cubesParent)}var e,n,r;return e=t,(n=[{key:"update",value:function(t){var e=3*t;e%(2*Math.PI)<Math.PI?this.firstSection(e):this.secondSection(e)}},{key:"firstSection",value:function(t){var e=Math.sin(.5*t),n=Math.abs(e);this.cubesParent.children[7].position.copy(new o.p(1,-1,-1));for(var r=0;r<this.cubesParent.children.length;r++){var a=this.cubesParent.children[r],i=Math.clamp((1-n)*(.5*Math.PI)+.125*r,0,1),s=new o.p(i,i,i);a.scale.copy(s),a.rotation.z=i*Math.PI,a.rotation.x=i*Math.PI*.5}}},{key:"secondSection",value:function(t){var e=Math.sin(.5*t),n=Math.abs(e),r=Math.cos(.5*t),a=Math.abs(r),i=this.cubesParent.children[7],s=Math.clamp((1-n)*(.5*Math.PI)+.875+a,0,2),c=new o.p(s,s,s);i.scale.copy(c),i.rotation.z=s*Math.PI,i.rotation.x=s*Math.PI*.5;var u=new o.p(1,-1,-1);i.position.copy(u.lerp(new o.p(0,0,0),Math.clamp(6*(1-n),0,1)));for(var l=0;l<this.cubesParent.children.length-1;l++){var h=this.cubesParent.children[l],p=Math.clamp(Math.clamp((1-n)*(.5*Math.PI)+.125*l,0,1)-a,0,1),f=new o.p(p,p,p);h.scale.copy(f),h.rotation.z=p*Math.PI,h.rotation.x=p*Math.PI*.5}}}])&&h(e.prototype,n),r&&h(e,r),t}()}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvT2JqZWN0cy9CYXNpY0N1YmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0xpZ2h0cy9CbHVlUGFydHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0xvb3BzL0N1YmVMb29wLmpzIl0sIm5hbWVzIjpbIkJhc2ljQ3ViZSIsIl9yZWYiLCJfcmVmJHNpemUiLCJzaXplIiwibWF0ZXJpYWwiLCJwb3NpdGlvbiIsIl9jbGFzc0NhbGxDaGVjayIsInRoaXMiLCJzZWVkIiwiTWF0aCIsInJhbmRvbSIsImNvbG9yIiwiVEhSRUUiLCJzZXRSR0IiLCJnZW9tZXRyeSIsIm1lc2giLCJjb3B5Iiwicm9vdCIsIkxpZ3RocyIsIl90aGlzIiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4iLCJfZ2V0UHJvdG90eXBlT2YiLCJjYWxsIiwiaGVtaUxpZ2h0Iiwic2V0SFNMIiwiTm9ybWFsaXplSCIsImdyb3VuZENvbG9yIiwic2V0IiwiYWRkIiwiaCIsIkN1YmVMb29wIiwiYmFzaWNTY2VuZSIsIkN1YmVMb29wX2NsYXNzQ2FsbENoZWNrIiwiY2xlYXJDb2xvciIsInNldEludEhTTCIsInJlbmRlcmVyIiwic2V0Q2xlYXJDb2xvciIsImFzcGVjdCIsImNhbWVyYSIsImZydXN0dW1TaXplIiwibG9va0F0IiwibGlnaHRzIiwiTGlnaHRzIiwiY3ViZU1hdCIsIm1ldGFsbmVzcyIsInJvdWdobmVzcyIsImN1YmVzIiwiY3ViZXNQYXJlbnQiLCJfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uIiwiX2RpZEl0ZXJhdG9yRXJyb3IiLCJfaXRlcmF0b3JFcnJvciIsInVuZGVmaW5lZCIsIl9zdGVwIiwiX2l0ZXJhdG9yIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJuZXh0IiwiZG9uZSIsImN1YmUiLCJ2YWx1ZSIsImVyciIsInJldHVybiIsInRpbWVFbGFwc2VkIiwiYW5pbWF0aW9uVGltZSIsIlBJIiwiZmlyc3RTZWN0aW9uIiwic2Vjb25kU2VjdGlvbiIsInNpblRpbWUiLCJzaW4iLCJhYnNTaW5UaW1lIiwiYWJzIiwiY2hpbGRyZW4iLCJpIiwibGVuZ3RoIiwiY2hpbGQiLCJyb3RhIiwiY2xhbXAiLCJzaW5TY2FsZSIsInNjYWxlIiwicm90YXRpb24iLCJ6IiwieCIsImNvc1RpbWUiLCJjb3MiLCJhYnNDb3NUaW1lIiwib2xkUG9zIiwibGVycCJdLCJtYXBwaW5ncyI6InlJQUVxQkEsRUFDbkIsU0FBQUEsRUFBQUMsR0FBNEMsSUFBQUMsRUFBQUQsRUFBL0JFLFlBQStCLElBQUFELEVBQXhCLEVBQXdCQSxFQUFyQkUsRUFBcUJILEVBQXJCRyxTQUFVQyxFQUFXSixFQUFYSSxzR0FBV0MsQ0FBQUMsS0FBQVAsR0FDMUNPLEtBQUtDLEtBQU9DLEtBQUtDLFNBQ2pCLElBQU1DLEVBQVcsRUFBWEEsRUFBZ0IsRUFBaEJBLEVBQXFCLEVBQzNCSixLQUFLSSxNQUFRLElBQUlDLElBQ2pCTCxLQUFLSSxNQUFNRSxPQUFPRixFQUFTQSxFQUFTQSxHQUVwQ0osS0FBS0gsU0FBV0EsR0FBWSxJQUFJUSxJQUF3QixDQUN0REQsTUFBT0osS0FBS0ksUUFHZEosS0FBS08sU0FBVyxJQUFJRixJQUFrQlQsRUFBTUEsRUFBTUEsR0FFbERJLEtBQUtRLEtBQU8sSUFBSUgsSUFDZEwsS0FBS08sU0FDTFAsS0FBS0gsVUFHSEMsR0FDRkUsS0FBS1EsS0FBS1YsU0FBU1csS0FBS1gsR0FHMUJFLEtBQUtVLEtBQU9WLEtBQUtRLDhyQkN0QkFHLGNBQ25CLFNBQUFBLElBQWMsSUFBQUMsK0ZBQUFiLENBQUFDLEtBQUFXLEdBQ1pDLEVBQUFDLEVBQUFiLEtBQUFjLEVBQUFILEdBQUFJLEtBQUFmLE9BRUEsSUFBTWdCLEVBQVksSUFBSVgsSUFBdUIsU0FBVSxTQUFVLEtBSHJELE9BSWRXLEVBQVVaLE1BQU1hLE9BQ1pDLEVBQVcsS0FDWCxHQUNBLEtBRUpGLEVBQVVHLFlBQVlGLE9BQ2xCQyxFQUFXLEtBQ1gsR0FDQSxLQUVKRixFQUFVbEIsU0FBU3NCLElBQUssRUFBRyxFQUFH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R0EsRUFBSWpFLEtBQUt3QyxZQUFZd0IsU0FBU0UsT0FBUyxFQUFHRCxJQUFLLENBQzdELElBQU1FLEVBQVFuRSxLQUFLd0MsWUFBWXdCLFNBQVNDLEdBQ2xDRyxFQUFPbEUsS0FBS21FLE1BQVFuRSxLQUFLbUUsT0FBUSxFQUFJUCxJQUF5QixHQUFWNUQsS0FBS3VELElBQWlCLEtBQUpRLEVBQWEsRUFBRyxHQUMxRlksRUFBYSxFQUFHLEdBQ1pQLEVBQVcsSUFBSWpFLElBQWMrRCxFQUFNQSxFQUFNQSxHQUMvQ0QsRUFBTUksTUFBTTlELEtBQUs2RCxHQUNqQkgsRUFBTUssU0FBU0MsRUFBS0wsRUFBT2xFLEtBQUt1RCxHQUNoQ1UsRUFBTUssU0FBU0UsRUFBSU4sRUFBT2xFLEtBQUt1RCxHQUFLIiwiZmlsZSI6Ii4vanMvQ3ViZUxvb3AuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzaWNDdWJlIHtcclxuICBjb25zdHJ1Y3Rvcih7c2l6ZSA9IDUsIG1hdGVyaWFsLCBwb3NpdGlvbn0pIHtcclxuICAgIHRoaXMuc2VlZCA9IE1hdGgucmFuZG9tKCk7XHJcbiAgICBjb25zdCBjb2xvciA9IHtyOjEgLGc6MSwgYjoxfTtcclxuICAgIHRoaXMuY29sb3IgPSBuZXcgVEhSRUUuQ29sb3IoKTtcclxuICAgIHRoaXMuY29sb3Iuc2V0UkdCKGNvbG9yLnIsIGNvbG9yLmcsIGNvbG9yLmIpO1xyXG5cclxuICAgIHRoaXMubWF0ZXJpYWwgPSBtYXRlcmlhbCB8fCBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoe1xyXG4gICAgICBjb2xvcjogdGhpcy5jb2xvclxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5nZW9tZXRyeSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeShzaXplLCBzaXplLCBzaXplKTtcclxuXHJcbiAgICB0aGlzLm1lc2ggPSBuZXcgVEhSRUUuTWVzaChcclxuICAgICAgdGhpcy5nZW9tZXRyeSxcclxuICAgICAgdGhpcy5tYXRlcmlhbFxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAocG9zaXRpb24pIHtcclxuICAgICAgdGhpcy5tZXNoLnBvc2l0aW9uLmNvcHkocG9zaXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucm9vdCA9IHRoaXMubWVzaDtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlndGhzIGV4dGVuZHMgVEhSRUUuR3JvdXAge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICBjb25zdCBoZW1pTGlnaHQgPSBuZXcgVEhSRUUuSGVtaXNwaGVyZUxpZ2h0KCAweGZmZmZmZiwgMHhmZmZmZmYsIDEuNSApO1xyXG5cdFx0aGVtaUxpZ2h0LmNvbG9yLnNldEhTTChcclxuICAgICAgTm9ybWFsaXplSCgyNTApLFxyXG4gICAgICAwLjksXHJcbiAgICAgIDAuOTQsXHJcbiAgICApO1xyXG5cdFx0aGVtaUxpZ2h0Lmdyb3VuZENvbG9yLnNldEhTTChcclxuICAgICAgTm9ybWFsaXplSCgyNTApLFxyXG4gICAgICAwLjksXHJcbiAgICAgIDAuNDQsXHJcbiAgICApO1xyXG5cdFx0aGVtaUxpZ2h0LnBvc2l0aW9uLnNldCggMCwgMiwgMCApO1xyXG5cdFx0dGhpcy5hZGQoIGhlbWlMaWdodCApO1xyXG5cdH1cclxufVxyXG5cdFxyXG5mdW5jdGlvbiBOb3JtYWxpemVIKGgpIHtcclxuXHRyZXR1cm4gaC8zNjAuMDtcclxufVxyXG4iLCJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XHJcbmltcG9ydCBMaWdodHMgZnJvbSAnLi4vTGlnaHRzL0JsdWVQYXJ0eS5qcyc7XHJcbmltcG9ydCBCYXNpY0N1YmUgZnJvbSAnLi4vT2JqZWN0cy9CYXNpY0N1YmUuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3ViZUxvb3Age1xyXG4gIGNvbnN0cnVjdG9yKGJhc2ljU2NlbmUpIHtcclxuICAgIGNvbnN0IGNsZWFyQ29sb3IgPSBuZXcgVEhSRUUuQ29sb3IoKTtcclxuICAgIGNsZWFyQ29sb3Iuc2V0SW50SFNMKDQ4LCA5MCwgNjQpO1xyXG4gICAgYmFzaWNTY2VuZS5yZW5kZXJlci5zZXRDbGVhckNvbG9yKGNsZWFyQ29sb3IpO1xyXG5cclxuICAgIGNvbnN0IGZydXN0dW1TaXplID0gMTA7XHJcbiAgICBjb25zdCBhc3BlY3QgPSBiYXNpY1NjZW5lLmNhbWVyYS5hc3BlY3Q7XHJcblxyXG4gICAgYmFzaWNTY2VuZS5jYW1lcmEgPSBuZXcgVEhSRUUuT3J0aG9ncmFwaGljQ2FtZXJhKFxyXG4gICAgICAgIGZydXN0dW1TaXplICogYXNwZWN0IC8gLSAyLFxyXG4gICAgICAgIGZydXN0dW1TaXplICogYXNwZWN0IC8gMixcclxuICAgICAgICBmcnVzdHVtU2l6ZSAvIDIsXHJcbiAgICAgICAgZnJ1c3R1bVNpemUgLyAtIDIsXHJcbiAgICAgICAgMSxcclxuICAgICAgICAxNTBcclxuICAgICk7XHJcbiAgICBiYXNpY1NjZW5lLmNhbWVyYS5wb3NpdGlvbi5jb3B5KG5ldyBUSFJFRS5WZWN0b3IzKC0xMCwgMTAsIDEwKSk7XHJcbiAgICBiYXNpY1NjZW5lLmNhbWVyYS5sb29rQXQobmV3IFRIUkVFLlZlY3RvcjMoMCwgMCwgMCkpO1xyXG5cclxuICAgIHRoaXMucm9vdCA9IG5ldyBUSFJFRS5Hcm91cCgpO1xyXG5cclxuICAgIGNvbnN0IGxpZ2h0cyA9IG5ldyBMaWdodHMoKTtcclxuICAgIHRoaXMucm9vdC5hZGQobGlnaHRzKTtcclxuXHJcblx0XHRjb25zdCBjdWJlTWF0ID0gbmV3IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsKHtcclxuXHRcdFx0Y29sb3I6IDB4ZmZmZmZmLFxyXG5cdFx0XHRtZXRhbG5lc3M6IDAuNCxcclxuXHRcdFx0cm91Z2huZXNzOiAwLjIsXHJcblx0XHR9KTtcclxuXHJcbiAgICB0aGlzLmN1YmVzID0gW1xyXG4gICAgICBuZXcgQmFzaWNDdWJlKHtcclxuICAgICAgICBzaXplOiAyLFxyXG4gICAgICAgIG1hdGVyaWFsOiBjdWJlTWF0LFxyXG4gICAgICAgIHBvc2l0aW9uOiBuZXcgVEhSRUUuVmVjdG9yMygtMSwgMSwgMSlcclxuICAgICAgfSksXHJcbiAgICAgIG5ldyBCYXNpY0N1YmUoe1xyXG4gICAgICAgIHNpemU6IDIsXHJcbiAgICAgICAgbWF0ZXJpYWw6IGN1YmVNYXQsXHJcbiAgICAgICAgcG9zaXRpb246IG5ldyBUSFJFRS5WZWN0b3IzKDEsIDEsIDEpXHJcbiAgICAgIH0pLFxyXG4gICAgICBuZXcgQmFzaWNDdWJlKHtcclxuICAgICAgICBzaXplOiAyLFxyXG4gICAgICAgIG1hdGVyaWFsOiBjdWJlTWF0LFxyXG4gICAgICAgIHBvc2l0aW9uOiBuZXcgVEhSRUUuVmVjdG9yMygtMSwgMSwgLTEpXHJcbiAgICAgIH0pLFxyXG4gICAgICBuZXcgQmFzaWNDdWJlKHtcclxuICAgICAgICBzaXplOiAyLFxyXG4gICAgICAgIG1hdGVyaWFsOiBjdWJlTWF0LFxyXG4gICAgICAgIHBvc2l0aW9uOiBuZXcgVEhSRUUuVmVjdG9yMygxLCAxLCAtMSlcclxuICAgICAgfSksXHJcbiAgICAgIG5ldyBCYXNpY0N1YmUoe1xyXG4gICAgICAgIHNpemU6IDIsXHJcbiAgICAgICAgbWF0ZXJpYWw6IGN1YmVNYXQsXHJcbiAgICAgICAgcG9zaXRpb246IG5ldyBUSFJFRS5WZWN0b3IzKC0xLCAtMSwgMSlcclxuICAgICAgfSksXHJcbiAgICAgIG5ldyBCYXNpY0N1YmUoe1xyXG4gICAgICAgIHNpemU6IDIsXHJcbiAgICAgICAgbWF0ZXJpYWw6IGN1YmVNYXQsXHJcbiAgICAgICAgcG9zaXRpb246IG5ldyBUSFJFRS5WZWN0b3IzKDEsIC0xLCAxKVxyXG4gICAgICB9KSxcclxuICAgICAgbmV3IEJhc2ljQ3ViZSh7XHJcbiAgICAgICAgc2l6ZTogMixcclxuICAgICAgICBtYXRlcmlhbDogY3ViZU1hdCxcclxuICAgICAgICBwb3NpdGlvbjogbmV3IFRIUkVFLlZlY3RvcjMoLTEsIC0xLCAtMSlcclxuICAgICAgfSksXHJcbiAgICAgIG5ldyBCYXNpY0N1YmUoe1xyXG4gICAgICAgIHNpemU6IDIsXHJcbiAgICAgICAgbWF0ZXJpYWw6IGN1YmVNYXQsXHJcbiAgICAgICAgcG9zaXRpb246IG5ldyBUSFJFRS5WZWN0b3IzKDEsIC0xLCAtMSlcclxuICAgICAgfSldO1xyXG5cclxuICAgIHRoaXMuY3ViZXNQYXJlbnQgPSBuZXcgVEhSRUUuR3JvdXAoKTtcclxuICAgIGZvciAobGV0IGN1YmUgb2YgdGhpcy5jdWJlcykge1xyXG4gICAgICB0aGlzLmN1YmVzUGFyZW50LmFkZChjdWJlLnJvb3QpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jdWJlc1BhcmVudC5wb3NpdGlvbi5jb3B5KG5ldyBUSFJFRS5WZWN0b3IzKDEsIC0xLCAtMSkpO1xyXG4gICAgdGhpcy5yb290LmFkZCh0aGlzLmN1YmVzUGFyZW50KTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSh0aW1lRWxhcHNlZCkge1xyXG4gICAgY29uc3QgYW5pbWF0aW9uVGltZSA9IHRpbWVFbGFwc2VkICogMztcclxuICAgIGNvbnN0IGxvb3BUaW1lID0gYW5pbWF0aW9uVGltZSAlIChNYXRoLlBJICogMik7XHJcblxyXG4gICAgaWYgKGxvb3BUaW1lIDwgTWF0aC5QSSkge1xyXG4gICAgICB0aGlzLmZpcnN0U2VjdGlvbihhbmltYXRpb25UaW1lKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2Vjb25kU2VjdGlvbihhbmltYXRpb25UaW1lKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZpcnN0U2VjdGlvbihhbmltYXRpb25UaW1lKSB7XHJcbiAgICBjb25zdCBzaW5UaW1lID0gTWF0aC5zaW4oYW5pbWF0aW9uVGltZSAqIDAuNSk7XHJcbiAgICBjb25zdCBhYnNTaW5UaW1lID0gTWF0aC5hYnMoc2luVGltZSk7XHJcblxyXG4gICAgdGhpcy5jdWJlc1BhcmVudFxyXG4gICAgICAuY2hpbGRyZW5bN11cclxuICAgICAgLnBvc2l0aW9uXHJcbiAgICAgIC5jb3B5KG5ldyBUSFJFRS5WZWN0b3IzKDEsIC0xLCAtMSkpO1xyXG4gICAgXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY3ViZXNQYXJlbnQuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgY2hpbGQgPSB0aGlzLmN1YmVzUGFyZW50LmNoaWxkcmVuW2ldO1xyXG4gICAgICBjb25zdCByb3RhID0gKE1hdGguY2xhbXAoKCgxIC0gYWJzU2luVGltZSkgKiAoTWF0aC5QSSAqIDAuNSkgKyAoaSAqIDAuMTI1KSksIDAsIDEpKTtcclxuICAgICAgY29uc3Qgc2luU2NhbGUgPSBuZXcgVEhSRUUuVmVjdG9yMyhyb3RhLCByb3RhLCByb3RhKTtcclxuICAgICAgY2hpbGQuc2NhbGUuY29weShzaW5TY2FsZSk7XHJcbiAgICAgIGNoaWxkLnJvdGF0aW9uLnogPSAocm90YSAqIE1hdGguUEkpO1xyXG4gICAgICBjaGlsZC5yb3RhdGlvbi54ID0gcm90YSAqIE1hdGguUEkgKiAwLjU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZWNvbmRTZWN0aW9uKGFuaW1hdGlvblRpbWUpIHtcclxuICAgIGNvbnN0IHNpblRpbWUgPSBNYXRoLnNpbihhbmltYXRpb25UaW1lICogMC41KTtcclxuICAgIGNvbnN0IGFic1NpblRpbWUgPSBNYXRoLmFicyhzaW5UaW1lKTtcclxuXHJcbiAgICBjb25zdCBjb3NUaW1lID0gTWF0aC5jb3MoYW5pbWF0aW9uVGltZSAqIDAuNSk7XHJcbiAgICBjb25zdCBhYnNDb3NUaW1lID0gTWF0aC5hYnMoY29zVGltZSk7XHJcblxyXG4gICAgY29uc3QgY2hpbGQgPSB0aGlzLmN1YmVzUGFyZW50LmNoaWxkcmVuWzddO1xyXG4gICAgY29uc3Qgcm90YSA9IChNYXRoLmNsYW1wKCgoMSAtIGFic1NpblRpbWUpICogKE1hdGguUEkgKiAwLjUpICsgKDcgKiAwLjEyNSkpICsgKGFic0Nvc1RpbWUpLCAwLCAyKSk7XHJcbiAgICBjb25zdCBzaW5TY2FsZSA9IG5ldyBUSFJFRS5WZWN0b3IzKHJvdGEsIHJvdGEsIHJvdGEpO1xyXG4gICAgY2hpbGQuc2NhbGUuY29weShzaW5TY2FsZSk7XHJcbiAgICBjaGlsZC5yb3RhdGlvbi56ID0gKHJvdGEgKiBNYXRoLlBJKTtcclxuICAgIGNoaWxkLnJvdGF0aW9uLnggPSByb3RhICogTWF0aC5QSSAqIDAuNTtcclxuICAgIGNvbnN0IG9sZFBvcyA9IG5ldyBUSFJFRS5WZWN0b3IzKDEsIC0xLCAtMSk7XHJcbiAgICBjaGlsZC5wb3NpdGlvbi5jb3B5KG9sZFBvcy5sZXJwKG5ldyBUSFJFRS5WZWN0b3IzKDAsIDAsIDApLCBNYXRoLmNsYW1wKCgxIC0gYWJzU2luVGltZSkgKiA2LCAwLCAxKSkpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmN1YmVzUGFyZW50LmNoaWxkcmVuLmxlbmd0aCAtIDE7IGkrKykge1xyXG4gICAgICBjb25zdCBjaGlsZCA9IHRoaXMuY3ViZXNQYXJlbnQuY2hpbGRyZW5baV07XHJcbiAgICAgIGNvbnN0IHJvdGEgPSBNYXRoLmNsYW1wKCgoTWF0aC5jbGFtcCgoKDEgLSBhYnNTaW5UaW1lKSAqIChNYXRoLlBJICogMC41KSArIChpICogMC4xMjUpKSwgMCwgMSkpIC1cclxuICAgICAgICBhYnNDb3NUaW1lKSwgMCwgMSk7XHJcbiAgICAgIGNvbnN0IHNpblNjYWxlID0gbmV3IFRIUkVFLlZlY3RvcjMocm90YSwgcm90YSwgcm90YSk7XHJcbiAgICAgIGNoaWxkLnNjYWxlLmNvcHkoc2luU2NhbGUpO1xyXG4gICAgICBjaGlsZC5yb3RhdGlvbi56ID0gKHJvdGEgKiBNYXRoLlBJKTtcclxuICAgICAgY2hpbGQucm90YXRpb24ueCA9IHJvdGEgKiBNYXRoLlBJICogMC41O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9
(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{18:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var r=n(17);var o=function t(e){var n=e.size,o=void 0===n?5:n,i=e.material,a=e.position;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.seed=Math.random();var c=1,s=1,u=1;this.color=new r.Color,this.color.setRGB(c,s,u),this.material=i||new r.MeshBasicMaterial({color:this.color}),this.geometry=new r.BoxGeometry(o,o,o),this.mesh=new r.Mesh(this.geometry,this.material),a&&this.mesh.position.copy(a),this.root=this.mesh}},19:function(t,e,n){"use strict";n.d(e,"a",function(){return f});var r=n(17);function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var u={intensity:1},f=function(t){function e(){var t,n;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var o=arguments.length,s=new Array(o),f=0;f<o;f++)s[f]=arguments[f];(n=a(this,(t=c(e)).call.apply(t,[this].concat(s)))).params=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){i(t,e,n[e])})}return t}({},u,s[0]);var h=new r.HemisphereLight(16777215,16777215,1.5*n.params.intensity);return h.color.setHSL(l(325),.9,.94),h.groundColor.setHSL(l(325),.9,.64),h.position.set(0,2,0),n.add(h),n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(e,r["Group"]),e}();function l(t){return t/360}},7:function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return c});var r=n(17),o=n(19),i=n(18);function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var c=function(){function t(e){var n=e.scene,a=e.onLoad;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);this.scene=n,n.camera.position.copy(new r.Vector3(0,0,10)),n.camera.lookAt(new r.Vector3(0,0,0)),n.camera.far=150,this.scene.camera.updateProjectionMatrix(),this.root=new r.Group;var c=new o.a;this.root.add(c);var s=new r.MeshStandardMaterial({color:16777215,metalness:.4,roughness:.2});this.cubes=[];var u=Math.PI/15*.5;this.cubesParent=new r.Group;for(var f=-15;f<15;f++){var l=35*Math.cos(u*f),h=35*Math.sin(u*f),p=new i.a({size:1,material:s,position:new r.Vector3(0,h,-60)});p.root.scale.copy(new r.Vector3(2*l,.75*u*l,1)),this.cubesParent.add(p.root),this.cubes.push(p)}this.root.add(this.cubesParent),a&&a()}var e,n,c;return e=t,(n=[{key:"update",value:function(t){for(var e=3*t,n=0;n<this.cubesParent.children.length;n++){var o=this.cubesParent.children[n],i=o.rotation;i.setFromVector3(new r.Vector3(0,Math.sin(n*Math.PI*.15+e)*Math.PI*.07*(Math.sin(n*Math.PI*.14+e)*Math.PI*.07),0)),o.rotation.copy(i)}}}])&&a(e.prototype,n),c&&a(e,c),t}()}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvT2JqZWN0cy9CYXNpY0N1YmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0xpZ2h0cy9NYWdlbnRhUGFydHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0xvb3BzL1N1bkxvb3AuanMiXSwibmFtZXMiOlsiQmFzaWNDdWJlIiwiX3JlZiIsIl9yZWYkc2l6ZSIsInNpemUiLCJtYXRlcmlhbCIsInBvc2l0aW9uIiwiX2NsYXNzQ2FsbENoZWNrIiwidGhpcyIsInNlZWQiLCJNYXRoIiwicmFuZG9tIiwiY29sb3IiLCJDb2xvciIsInNldFJHQiIsIk1lc2hCYXNpY01hdGVyaWFsIiwiZ2VvbWV0cnkiLCJCb3hHZW9tZXRyeSIsIm1lc2giLCJNZXNoIiwiY29weSIsInJvb3QiLCJkZWZhdWx0UGFyYW1zIiwiaW50ZW5zaXR5IiwiTWFnZW50YVBhcnR5IiwiX2dldFByb3RvdHlwZU9mMiIsIl90aGlzIiwiX2xlbiIsImFyZ3VtZW50cyIsImxlbmd0aCIsImFyZ3MiLCJBcnJheSIsIl9rZXkiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiIsIl9nZXRQcm90b3R5cGVPZiIsImNhbGwiLCJhcHBseSIsImNvbmNhdCIsInBhcmFtcyIsIl9vYmplY3RTcHJlYWQiLCJoZW1pTGlnaHQiLCJIZW1pc3BoZXJlTGlnaHQiLCJzZXRIU0wiLCJOb3JtYWxpemVIIiwiZ3JvdW5kQ29sb3IiLCJzZXQiLCJhZGQiLCJHcm91cCIsImgiLCJTdW5Mb29wIiwic2NlbmUiLCJvbkxvYWQiLCJjYW1lcmEiLCJWZWN0b3IzIiwibG9va0F0IiwiZmFyIiwidXBkYXRlUHJvamVjdGlvbk1hdHJpeCIsImxpZ2h0cyIsIkxpZ2h0cyIsImN1YmVNYXQiLCJNZXNoU3RhbmRhcmRNYXRlcmlhbCIsIm1ldGFsbmVzcyIsInJvdWdobmVzcyIsImN1YmVzIiwicGlDb3VudCIsIlBJIiwiY3ViZXNQYXJlbnQiLCJ5Iiwic2NhbGVYIiwiY29zIiwic2NhbGVZIiwic2luIiwibmV3Q3ViZSIsInNjYWxlIiwicHVzaCIsInRpbWVFbGFwc2VkIiwiYW5pbWF0aW9uVGltZSIsImkiLCJjaGlsZHJlbiIsImNoaWxkIiwibmV3Um90Iiwicm90YXRpb24iLCJzZXRGcm9tVmVjdG9yMyJdLCJtYXBwaW5ncyI6InlJQU9xQkEsRUFDbkIsU0FBQUEsRUFBQUMsR0FBNEMsSUFBQUMsRUFBQUQsRUFBL0JFLFlBQStCLElBQUFELEVBQXhCLEVBQXdCQSxFQUFyQkUsRUFBcUJILEVBQXJCRyxTQUFVQyxFQUFXSixFQUFYSSxzR0FBV0MsQ0FBQUMsS0FBQVAsR0FDMUNPLEtBQUtDLEtBQU9DLEtBQUtDLFNBQ2pCLElBQU1DLEVBQVcsRUFBWEEsRUFBZ0IsRUFBaEJBLEVBQXFCLEVBQzNCSixLQUFLSSxNQUFRLElBQUlDLFFBQ2pCTCxLQUFLSSxNQUFNRSxPQUFPRixFQUFTQSxFQUFTQSxHQUVwQ0osS0FBS0gsU0FBV0EsR0FBWSxJQUFJVSxvQkFBa0IsQ0FDaERILE1BQU9KLEtBQUtJLFFBR2RKLEtBQUtRLFNBQVcsSUFBSUMsY0FBWWIsRUFBTUEsRUFBTUEsR0FFNUNJLEtBQUtVLEtBQU8sSUFBSUMsT0FDZFgsS0FBS1EsU0FDTFIsS0FBS0gsVUFHSEMsR0FDRkUsS0FBS1UsS0FBS1osU0FBU2MsS0FBS2QsR0FHMUJFLEtBQUthLEtBQU9iLEtBQUtVLDQwQkN4QnJCLElBQU1JLEVBQWdCLENBQ2xCQyxVQUFXLEdBR01DLGNBQ3BCLFNBQUFBLElBQXFCLElBQUFDLEVBQUFDLCtGQUFBbkIsQ0FBQUMsS0FBQWdCLEdBQUEsUUFBQUcsRUFBQUMsVUFBQUMsT0FBTkMsRUFBTSxJQUFBQyxNQUFBSixHQUFBSyxFQUFBLEVBQUFBLEVBQUFMLEVBQUFLLElBQU5GLEVBQU1FLEdBQUFKLFVBQUFJLElBQ3BCTixFQUFBTyxFQUFBekIsTUFBQWlCLEVBQUFTLEVBQUFWLElBQUFXLEtBQUFDLE1BQUFYLEVBQUEsQ0FBQWpCLE1BQUE2QixPQUFTUCxNQUNKUSx5VUFBTEMsQ0FBQSxHQUNJakIsRUFDQVEsRUFBSyxJQUdQLElBQU1VLEVBQVksSUFBSUMsa0JBQ3ZCLFNBQ0EsU0FDQSxJQUFNZixFQUFLWSxPQUFPZixXQVZDLE9BWXBCaUIsRUFBVTVCLE1BQU04QixPQUNmQyxFQUFXLEtBQ1gsR0FDQSxLQUVESCxFQUFVSSxZQUFZRixPQUNyQkMsRUFBVyxLQUNYLEdBQ0EsS0FFREgsRUFBVWxDLFNBQVN1QyxJQUFLLEVBQUcsRUFBRyxHQUM5Qm5CLEVBQUtvQixJQUFLTixHQXZCVWQsOE9BRG9CcUIsaUJBNEIxQyxTQUFTSixFQUFXSyxHQUNuQixPQUFPQSxFQUFFLHdSQzlCV0MsYUFDakIsU0FBQUEsRUFBQS9DLEdBQTZCLElBQWhCZ0QsRUFBZ0JoRCxFQUFoQmdELE1BQU9DLEVBQVNqRCxFQUFUaUQsb0dBQVM1QyxDQUFBQyxLQUFBeUMsR0FHekJ6QyxLQUFLMEMsTUFBUUEsRUFFYkEsRUFBTUUsT0FBTzlDLFNBQVNjLEtBQUssSUFBSWlDLFVBQVEsRUFBRyxFQUFHLEtBQzdDSCxFQUFNRSxPQUFPRSxPQUFPLElBQUlELFVBQVEsRUFBRyxFQUFHLElBQ3RDSCxFQUFNRSxPQUFPRyxJQUFNLElBQ25CL0MsS0FBSzBDLE1BQU1FLE9BQU9JLHlCQUVsQmhELEtBQUthLEtBQU8sSUFBSTBCLFFBRWhCLElBQU1VLEVBQVMsSUFBSUMsSUFDbkJsRCxLQUFLYSxLQUFLeUIsSUFBSVcsR0FFZCxJQUFNRSxFQUFVLElBQUlDLHVCQUFxQixDQUNyQ2hELE1BQU8sU0FDUGlELFVBQVcsR0FDWEMsVUFBVyxLQUdmdEQsS0FBS3VELE1BQVEsR0FFYixJQUNNQyxFQUFVdEQsS0FBS3VELEdBREYsR0FDb0IsR0FFdkN6RCxLQUFLMEQsWUFBYyxJQUFJbkIsUUFDdkIsSUFBSyxJQUFJb0IsR0FKVSxHQUlPQSxFQUpQLEdBSXVCQSxJQUFLLENBQzNDLElBQU1DLEVBM0JNLEdBMkJHMUQsS0FBSzJELElBQUlMLEVBQVVHLEdBQzVCRyxFQTVCTSxHQTRCRzVELEtBQUs2RCxJQUFJUCxFQUFVRyxHQUM1QkssRUFBVSxJQUFJdkUsSUFBVSxDQUMxQkcsS0FBTSxFQUNOQyxTQUFVc0QsRUFDVnJELFNBQVUsSUFBSStDLFVBQVEsRUFBR2lCLEdBQVMsTUFFdENFLEVBQVFuRCxLQUFLb0QsTUFBTXJELEtBQ2YsSUFBSWlDLFVBQ1MsRUFBVGUsRUFDVSxJQUFWSixFQUFpQkksRUFDakIsSUFFUjVELEtBQUswRCxZQUFZcEIsSUFBSTBCLEVBQVFuRCxNQUM3QmIsS0FBS3VELE1BQU1XLEtBQUtGLEdBR3BCaEUsS0FBS2EsS0FBS3lCLElBQUl0QyxLQUFLMEQsYUFFZmYsR0FBUUEsMERBSVR3QixHQUdILElBRkEsSUFBTUMsRUFBOEIsRUFBZEQsRUFFYkUsRUFBSSxFQUFHQSxFQUFJckUsS0FBSzBELFlBQVlZLFNBQVNqRCxPQUFRZ0QsSUFBSyxDQUN2RCxJQUFNRSxFQUFRdkUsS0FBSzBELFlBQVlZLFNBQVNELEdBQ2xDRyxFQUFTRCxFQUFNRSxTQUNyQkQsRUFBT0UsZUFBZ0IsSUFBSTdCLFVBQ3ZCLEVBQ0UzQyxLQUFLNkQsSUFBS00sRUFBRW5FLEtBQUt1RCxHQUFHLElBQVFXLEdBQWlCbEUsS0FBS3VELEdBQUssS0FDdkR2RCxLQUFLNkQsSUFBS00sRUFBRW5FLEtBQUt1RCxHQUFHLElBQVFXLEdBQWlCbEUsS0FBS3VELEdBQUssS0FDekQsSUFFSmMsRUFBTUUsU0FBUzdELEtBQUs0RCIsImZpbGUiOiIuL2pzL1N1bkxvb3AuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29sb3IsXG4gIE1lc2hCYXNpY01hdGVyaWFsLFxuICBCb3hHZW9tZXRyeSxcbiAgTWVzaFxufSBmcm9tICd0aHJlZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2ljQ3ViZSB7XG4gIGNvbnN0cnVjdG9yKHtzaXplID0gNSwgbWF0ZXJpYWwsIHBvc2l0aW9ufSkge1xuICAgIHRoaXMuc2VlZCA9IE1hdGgucmFuZG9tKCk7XG4gICAgY29uc3QgY29sb3IgPSB7cjoxICxnOjEsIGI6MX07XG4gICAgdGhpcy5jb2xvciA9IG5ldyBDb2xvcigpO1xuICAgIHRoaXMuY29sb3Iuc2V0UkdCKGNvbG9yLnIsIGNvbG9yLmcsIGNvbG9yLmIpO1xuXG4gICAgdGhpcy5tYXRlcmlhbCA9IG1hdGVyaWFsIHx8IG5ldyBNZXNoQmFzaWNNYXRlcmlhbCh7XG4gICAgICBjb2xvcjogdGhpcy5jb2xvclxuICAgIH0pO1xuXG4gICAgdGhpcy5nZW9tZXRyeSA9IG5ldyBCb3hHZW9tZXRyeShzaXplLCBzaXplLCBzaXplKTtcblxuICAgIHRoaXMubWVzaCA9IG5ldyBNZXNoKFxuICAgICAgdGhpcy5nZW9tZXRyeSxcbiAgICAgIHRoaXMubWF0ZXJpYWxcbiAgICApO1xuXG4gICAgaWYgKHBvc2l0aW9uKSB7XG4gICAgICB0aGlzLm1lc2gucG9zaXRpb24uY29weShwb3NpdGlvbik7XG4gICAgfVxuXG4gICAgdGhpcy5yb290ID0gdGhpcy5tZXNoO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBHcm91cCxcblx0SGVtaXNwaGVyZUxpZ2h0XG59IGZyb20gJ3RocmVlJztcblxuY29uc3QgZGVmYXVsdFBhcmFtcyA9IHtcbiAgICBpbnRlbnNpdHk6IDFcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFnZW50YVBhcnR5IGV4dGVuZHMgR3JvdXAge1xuXHRjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG5cdFx0c3VwZXIoLi4uYXJncyk7XG5cdFx0dGhpcy5wYXJhbXMgPSB7XG5cdFx0XHQuLi5kZWZhdWx0UGFyYW1zLFxuXHRcdFx0Li4uYXJnc1swXVxuXHRcdH07XG5cbiAgICBjb25zdCBoZW1pTGlnaHQgPSBuZXcgSGVtaXNwaGVyZUxpZ2h0KFxuXHRcdFx0MHhmZmZmZmYsXG5cdFx0XHQweGZmZmZmZixcblx0XHRcdDEuNSAqIHRoaXMucGFyYW1zLmludGVuc2l0eVxuXHRcdCk7XG5cdFx0aGVtaUxpZ2h0LmNvbG9yLnNldEhTTChcblx0XHRcdE5vcm1hbGl6ZUgoMzI1KSwgXG5cdFx0XHQwLjksXG5cdFx0XHQwLjk0XG5cdFx0KTtcblx0XHRoZW1pTGlnaHQuZ3JvdW5kQ29sb3Iuc2V0SFNMKFxuXHRcdFx0Tm9ybWFsaXplSCgzMjUpLCBcblx0XHRcdDAuOSwgXG5cdFx0XHQwLjY0XG5cdFx0KTtcblx0XHRoZW1pTGlnaHQucG9zaXRpb24uc2V0KCAwLCAyLCAwICk7XG5cdFx0dGhpcy5hZGQoIGhlbWlMaWdodCApO1xuXHR9XG59XG5cdFxuZnVuY3Rpb24gTm9ybWFsaXplSChoKSB7XG5cdHJldHVybiBoLzM2MC4wO1xufVxuIiwiaW1wb3J0IHtcbiAgICBWZWN0b3IzLFxuICAgIEdyb3VwLFxuICAgIE1lc2hTdGFuZGFyZE1hdGVyaWFsXG4gIH0gZnJvbSAndGhyZWUnO1xuaW1wb3J0IExpZ2h0cyBmcm9tICcuLi9MaWdodHMvTWFnZW50YVBhcnR5LmpzJztcbmltcG9ydCBCYXNpY0N1YmUgZnJvbSAnLi4vT2JqZWN0cy9CYXNpY0N1YmUuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdW5Mb29wIHtcbiAgICBjb25zdHJ1Y3Rvcih7c2NlbmUsIG9uTG9hZH0pIHtcbiAgICAgICAgY29uc3Qgc3VuU2l6ZSA9IDM1O1xuXG4gICAgICAgIHRoaXMuc2NlbmUgPSBzY2VuZTtcblxuICAgICAgICBzY2VuZS5jYW1lcmEucG9zaXRpb24uY29weShuZXcgVmVjdG9yMygwLCAwLCAxMCkpO1xuICAgICAgICBzY2VuZS5jYW1lcmEubG9va0F0KG5ldyBWZWN0b3IzKDAsIDAsIDApKTtcbiAgICAgICAgc2NlbmUuY2FtZXJhLmZhciA9IDE1MDtcbiAgICAgICAgdGhpcy5zY2VuZS5jYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuXG4gICAgICAgIHRoaXMucm9vdCA9IG5ldyBHcm91cCgpO1xuXG4gICAgICAgIGNvbnN0IGxpZ2h0cyA9IG5ldyBMaWdodHMoKTtcbiAgICAgICAgdGhpcy5yb290LmFkZChsaWdodHMpO1xuXG4gICAgICAgIGNvbnN0IGN1YmVNYXQgPSBuZXcgTWVzaFN0YW5kYXJkTWF0ZXJpYWwoe1xuICAgICAgICAgICAgY29sb3I6IDB4ZmZmZmZmLFxuICAgICAgICAgICAgbWV0YWxuZXNzOiAwLjQsXG4gICAgICAgICAgICByb3VnaG5lc3M6IDAuMixcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5jdWJlcyA9IFtdO1xuXG4gICAgICAgIGNvbnN0IHNsaWRlQ291bnQgPSAxNTtcbiAgICAgICAgY29uc3QgcGlDb3VudCA9IE1hdGguUEkgLyBzbGlkZUNvdW50ICogMC41O1xuXG4gICAgICAgIHRoaXMuY3ViZXNQYXJlbnQgPSBuZXcgR3JvdXAoKTtcbiAgICAgICAgZm9yIChsZXQgeSA9IC1zbGlkZUNvdW50OyB5IDwgc2xpZGVDb3VudDsgeSsrKSB7XG4gICAgICAgICAgICBjb25zdCBzY2FsZVggPSBNYXRoLmNvcyhwaUNvdW50ICogeSkgKiBzdW5TaXplO1xuICAgICAgICAgICAgY29uc3Qgc2NhbGVZID0gTWF0aC5zaW4ocGlDb3VudCAqIHkpICogc3VuU2l6ZTtcbiAgICAgICAgICAgIGNvbnN0IG5ld0N1YmUgPSBuZXcgQmFzaWNDdWJlKHtcbiAgICAgICAgICAgICAgICBzaXplOiAxLFxuICAgICAgICAgICAgICAgIG1hdGVyaWFsOiBjdWJlTWF0LFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBuZXcgVmVjdG9yMygwLCBzY2FsZVksIC02MClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbmV3Q3ViZS5yb290LnNjYWxlLmNvcHkoXG4gICAgICAgICAgICAgICAgbmV3IFZlY3RvcjMoXG4gICAgICAgICAgICAgICAgICAgIHNjYWxlWCAqIDIsXG4gICAgICAgICAgICAgICAgICAgIHBpQ291bnQgKiAwLjc1ICogc2NhbGVYLFxuICAgICAgICAgICAgICAgICAgICAxKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0aGlzLmN1YmVzUGFyZW50LmFkZChuZXdDdWJlLnJvb3QpO1xuICAgICAgICAgICAgdGhpcy5jdWJlcy5wdXNoKG5ld0N1YmUpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLnJvb3QuYWRkKHRoaXMuY3ViZXNQYXJlbnQpO1xuXG4gICAgICAgIGlmIChvbkxvYWQpIG9uTG9hZCgpO1xuICAgIH1cbiAgICBcblxuICAgIHVwZGF0ZSh0aW1lRWxhcHNlZCkge1xuICAgICAgICBjb25zdCBhbmltYXRpb25UaW1lID0gdGltZUVsYXBzZWQgKiAzOyAgICAgICAgXG4gICAgXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jdWJlc1BhcmVudC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY2hpbGQgPSB0aGlzLmN1YmVzUGFyZW50LmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgY29uc3QgbmV3Um90ID0gY2hpbGQucm90YXRpb247XG4gICAgICAgICAgICBuZXdSb3Quc2V0RnJvbVZlY3RvcjMoIG5ldyBWZWN0b3IzKFxuICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgKCBNYXRoLnNpbigoaSpNYXRoLlBJKjAuMTUpICsgYW5pbWF0aW9uVGltZSkgKiBNYXRoLlBJICogMC4wNyApICpcbiAgICAgICAgICAgICAgICAoIE1hdGguc2luKChpKk1hdGguUEkqMC4xNCkgKyBhbmltYXRpb25UaW1lKSAqIE1hdGguUEkgKiAwLjA3ICksXG4gICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgKSk7XG4gICAgICAgICAgICBjaGlsZC5yb3RhdGlvbi5jb3B5KG5ld1JvdCk7XG4gICAgICAgIH1cbiAgICB9XG5cbn0iXSwic291cmNlUm9vdCI6IiJ9
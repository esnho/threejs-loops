(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{106:function(e,t,o){"use strict";o.d(t,"a",function(){return c});var n=o(104);function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var c=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),e=i(this,a(t).call(this));var o=new n.HemisphereLight(16777215,16777215,3);return o.color.setHSL(Math.NormalizeHue(325),.1,.94),o.groundColor.setHSL(Math.NormalizeHue(325),.1,.64),o.position.set(0,2,0),e.add(o),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,n["Group"]),t}()},107:function(e,t,o){"use strict";o.d(t,"a",function(){return l});var n=o(104);o(106);function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var u={intensity:1,castShadow:!1,bias:0,projectionSides:void 0,mapSize:512},l=function(e){function t(){var e,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,a=new Array(r),h=0;h<r;h++)a[h]=arguments[h];o=s(this,(e=c(t)).call.apply(e,[this].concat(a)));var l=function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},n=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),n.forEach(function(t){i(e,t,o[t])})}return e}({},u,a[0]),p=l.intensity,f=l.castShadow,d=l.bias,y=l.projectionSides,m=l.mapSize;o.intensity=p,o.projectionSides=y,o.mapSize=m,console.log("mapsize",o.mapSize);var w=new n.DirectionalLight("white",.65*o.intensity),b=new n.DirectionalLight("white",.55*o.intensity);return w.shadow.bias=d||0,b.shadow.bias=d||0,w.castShadow=f,b.castShadow=f,o.updateProjection(w,o.projectionSides),o.updateProjection(b,o.projectionSides),o.updateShadowMap(w,o.mapSize),o.updateShadowMap(b,o.mapSize),w.position.copy(new n.Vector3(9,3.5,0)),b.position.copy(new n.Vector3(-10,2,0)),o.add(w,b),o}var o,r,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,n["Group"]),o=t,(r=[{key:"updateProjection",value:function(e,t){e.shadow.camera.left=-t,e.shadow.camera.right=t,e.shadow.camera.updateProjectionMatrix()}},{key:"updateShadowMap",value:function(e,t){e.shadow.mapSize.width=t,e.shadow.mapSize.height=t}}])&&a(o.prototype,r),l&&a(o,l),t}()},108:function(e,t,o){"use strict";o.d(t,"a",function(){return r});var n=o(104);var r=function e(t){var o=t.size,r=void 0===o?5:o,i=t.material,a=t.position,s=t.widthSegments,c=t.heightSegments,h=t.castShadow,u=t.receiveShadow;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.seed=Math.random();var l=1,p=1,f=1;this.color=new n.Color,this.color.setRGB(l,p,f),this.material=i||new n.MeshBasicMaterial({color:this.color});var d=this.material.length>1?n.SphereBufferGeometry:n.SphereGeometry;if(this.geometry=new d(r,s||7,c||9),this.material.length){this.geometry.clearGroups();for(var y=0;y<i.length;y++)this.geometry.addGroup(0,1/0,y)}this.mesh=new n.Mesh(this.geometry,this.material),this.mesh.castShadow=h,this.mesh.receiveShadow=u,a&&this.mesh.position.copy(a),this.root=this.mesh}},119:function(e,t,o){e.exports=o.p+"obj/Lowpoly_tree_sample.obj"},37:function(e,t,o){"use strict";o.r(t),o.d(t,"default",function(){return u});var n=o(104),r=o(119),i=o.n(r),a=o(107),s=o(108),c=o(110);function h(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var u=function(){function e(t){var o=t.scene,r=t.onLoad;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.scene=o,this.setupCamera(),o.renderer.shadowMap.enabled=!0,o.renderer.shadowMap.type=n.PCFShadowMap,this.root=new n.Group,this.loadTree(),this.setupLights();var i=new n.MeshStandardMaterial({emissive:6161169,flatShading:!0});i.emissive.setRGB(157/255,239/255,247/255),this.sphere=new s.a({size:6,material:i,widthSegments:20,heightSegments:10,receiveShadow:!0}),this.sphere.root.rotateX(Math.PI/180*26),console.log(this.sphere.root.geometry),this.root.add(this.sphere.root),r&&r()}var t,o,r;return t=e,(o=[{key:"loading",value:function(e){}},{key:"setupLights",value:function(){var e=new a.a({intensity:1.8,castShadow:!0,bias:2e-5,projectionSides:6.5,mapSize:1024});e.rotateY(Math.PI),this.root.add(e)}},{key:"setupCamera",value:function(){this.scene.camera.position.copy(new n.Vector3(0,4.5,18)),this.scene.camera.lookAt(new n.Vector3(0,0,0))}},{key:"loadTree",value:function(){var e=new c.OBJLoader;this.onHeadReady=this.onTreeReady.bind(this),this.onHeadLoading=this.onHeadLoading.bind(this),this.onTreeReady=this.onTreeReady.bind(this),e.load(i.a,this.onTreeReady,this.onHeadLoading,function(e){console.log("An error happened",e)})}},{key:"onHeadLoading",value:function(e){var t=e.loaded/e.total;console.log(100*t+"% loaded"),this.loading(Math.sin(t))}},{key:"onTreeReady",value:function(e){e.traverse(function(e){e.castShadow=!0,e.receiveShadow=!0});for(var t=0;t<this.sphere.root.geometry.vertices.length;t++)this.addTree(e,this.sphere.root.geometry.vertices[t],.1)}},{key:"addTree",value:function(e,t,o){var r=e.clone();r.position.copy(t),r.scale.copy(new n.Vector3(o,o,o));var i=new n.Vector3(0,1,0);r.quaternion.setFromUnitVectors(i,t.sub(this.sphere.root.position).clone().normalize()),r.children[0].material[0].color.setRGB(1,.6,0),r.children[0].material[1].color.setRGB(224/255,252/255,1),r.children[0].material[1].emissive.setRGB(224/255*.2,252/255*.2,.2),r.rotateY(360*Math.random()),this.sphere.root.add(r)}},{key:"update",value:function(e,t){var o=new n.Color;this.sphere.root.material.emissive.getHSL(o),o.s=.5*(Math.sin(e+.27*Math.PI)+1),o.l=.1*(Math.cos(e)+1),this.sphere.root.material.emissive.setHSL(o.h,o.s,o.l);for(var r=0;r<this.sphere.root.children.length;r+=1){var i=this.sphere.root.children[r].children[0],a=i.position;a.y=30*Math.sin(e+.05*r),i.position.copy(a)}this.sphere.root.rotateY(.35*t)}}])&&h(t.prototype,o),r&&h(t,r),e}()}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvTGlnaHRzL1doaXRlSGVtaS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvTGlnaHRzL1R3b0RpcmVjdGlvbmFscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvT2JqZWN0cy9CYXNpY1NwaGVyZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvb2JqL0xvd3BvbHlfdHJlZV9zYW1wbGUub2JqIiwid2VicGFjazovLy8uL3NyYy9qcy9Mb29wcy9UcmVlRXhhbXBsZS5qcyJdLCJuYW1lcyI6WyJXaGl0ZUhlbWkiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjayIsInRoaXMiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiIsIl9nZXRQcm90b3R5cGVPZiIsImNhbGwiLCJoZW1pTGlnaHQiLCJIZW1pc3BoZXJlTGlnaHQiLCJjb2xvciIsInNldEhTTCIsIk1hdGgiLCJOb3JtYWxpemVIdWUiLCJncm91bmRDb2xvciIsInBvc2l0aW9uIiwic2V0IiwiYWRkIiwiR3JvdXAiLCJkZWZhdWx0UGFyYW1zIiwiaW50ZW5zaXR5IiwiY2FzdFNoYWRvdyIsImJpYXMiLCJwcm9qZWN0aW9uU2lkZXMiLCJ1bmRlZmluZWQiLCJtYXBTaXplIiwiVHdvRGlyZWN0aW9uYWxzIiwiX2dldFByb3RvdHlwZU9mMiIsIl9sZW4iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJhcmdzIiwiQXJyYXkiLCJfa2V5IiwiYXBwbHkiLCJjb25jYXQiLCJfZGVmYXVsdFBhcmFtcyRhcmdzJCIsIl9vYmplY3RTcHJlYWQiLCJjb25zb2xlIiwibG9nIiwiZGlyZWN0aW9uYWxMaWdodCIsIkRpcmVjdGlvbmFsTGlnaHQiLCJkaXJlY3Rpb25hbExpZ2h0MiIsInNoYWRvdyIsInVwZGF0ZVByb2plY3Rpb24iLCJ1cGRhdGVTaGFkb3dNYXAiLCJjb3B5IiwiVmVjdG9yMyIsImxpZ2h0IiwiY2FtZXJhIiwibGVmdCIsInJpZ2h0IiwidXBkYXRlUHJvamVjdGlvbk1hdHJpeCIsIndpZHRoIiwiaGVpZ2h0IiwiQmFzaWNTcGhlcmUiLCJfcmVmIiwiX3JlZiRzaXplIiwic2l6ZSIsIm1hdGVyaWFsIiwid2lkdGhTZWdtZW50cyIsImhlaWdodFNlZ21lbnRzIiwicmVjZWl2ZVNoYWRvdyIsInNlZWQiLCJyYW5kb20iLCJDb2xvciIsInNldFJHQiIsIk1lc2hCYXNpY01hdGVyaWFsIiwiU3BoZXJlIiwiU3BoZXJlQnVmZmVyR2VvbWV0cnkiLCJTcGhlcmVHZW9tZXRyeSIsImdlb21ldHJ5IiwiY2xlYXJHcm91cHMiLCJpIiwiYWRkR3JvdXAiLCJJbmZpbml0eSIsIm1lc2giLCJNZXNoIiwicm9vdCIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwicCIsIlRyZWVFeGFtcGxlIiwic2NlbmUiLCJvbkxvYWQiLCJzZXR1cENhbWVyYSIsInJlbmRlcmVyIiwic2hhZG93TWFwIiwiZW5hYmxlZCIsInR5cGUiLCJUSFJFRSIsImxvYWRUcmVlIiwic2V0dXBMaWdodHMiLCJzcGhlcmVNYXRlcmlhbCIsImVtaXNzaXZlIiwiZmxhdFNoYWRpbmciLCJzcGhlcmUiLCJyb3RhdGVYIiwiUEkiLCJwZXJjZW50YWdlIiwibGlnaHRzIiwiTGlnaHRzIiwicm90YXRlWSIsImxvb2tBdCIsImxvYWRlciIsIk9CSkxvYWRlciIsIm9uSGVhZFJlYWR5Iiwib25UcmVlUmVhZHkiLCJiaW5kIiwib25IZWFkTG9hZGluZyIsImxvYWQiLCJ0cmVlIiwiZXJyb3IiLCJ4aHIiLCJsb2FkaW5nIiwibG9hZGVkIiwidG90YWwiLCJzaW4iLCJvYmplY3QiLCJ0cmF2ZXJzZSIsIm9iaiIsInZlcnRpY2VzIiwiYWRkVHJlZSIsIm5ld1Bvc2l0aW9uIiwic2NhbGUiLCJuZXdUcmVlIiwiY2xvbmUiLCJheGlzIiwicXVhdGVybmlvbiIsInNldEZyb21Vbml0VmVjdG9ycyIsInN1YiIsIm5vcm1hbGl6ZSIsImNoaWxkcmVuIiwidGltZUVsYXBzZWQiLCJkZWx0YSIsIm5ld0NvbG9yIiwiZ2V0SFNMIiwi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Q0EsRUFBU0UsRUFBcUQsSUFBaEQ5SCxLQUFLMEcsSUFBSWdCLEVBQXlCLElBQVYxSCxLQUFLdUYsSUFBYyxHQUN6RHFDLEVBQVNHLEVBQWtDLElBQTdCL0gsS0FBS2dJLElBQUlOLEdBQWUsR0FDdENsSSxLQUFLNkYsT0FBT25CLEtBQUtuQixTQUFTb0MsU0FBU3BGLE9BQU82SCxFQUFTSyxFQUFHTCxFQUFTRSxFQUFHRixFQUFTRyxHQUUzRSxJQUFLLElBQUlHLEVBQVksRUFBR0EsRUFBWTFJLEtBQUs2RixPQUFPbkIsS0FBS3VELFNBQVN2RyxPQUFRZ0gsR0FBd0IsRUFBRyxDQUMvRixJQUFNOUIsRUFBTzVHLEtBQUs2RixPQUFPbkIsS0FBS3VELFNBQVNTLEdBQVdULFNBQVMsR0FDckRULEVBQWNaLEVBQUtqRyxTQUN6QjZHLEVBQVltQixFQUFpRCxHQUE3Q25JLEtBQUswRyxJQUFJZ0IsRUFBMkIsSUFBWlEsR0FDeEM5QixFQUFLakcsU0FBUytCLEtBQUs4RSxHQUdyQnhILEtBQUs2RixPQUFPbkIsS0FBS3lCLFFBQWdCLElBQVJnQyIsImZpbGUiOiIuL2pzL1RyZWVFeGFtcGxlLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdEdyb3VwLFxuXHRIZW1pc3BoZXJlTGlnaHRcbn0gZnJvbSAndGhyZWUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXaGl0ZUhlbWkgZXh0ZW5kcyBHcm91cCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICBjb25zdCBoZW1pTGlnaHQgPSBuZXcgSGVtaXNwaGVyZUxpZ2h0KCAweGZmZmZmZiwgMHhmZmZmZmYsIDMuMCApO1xuXHRcdGhlbWlMaWdodC5jb2xvci5zZXRIU0woXG5cdFx0XHRNYXRoLk5vcm1hbGl6ZUh1ZSgzMjUpLCBcblx0XHRcdDAuMSxcblx0XHRcdDAuOTRcblx0XHQpO1xuXHRcdGhlbWlMaWdodC5ncm91bmRDb2xvci5zZXRIU0woXG5cdFx0XHRNYXRoLk5vcm1hbGl6ZUh1ZSgzMjUpLCBcblx0XHRcdDAuMSwgXG5cdFx0XHQwLjY0XG5cdFx0KTtcblx0XHRoZW1pTGlnaHQucG9zaXRpb24uc2V0KCAwLCAyLCAwICk7XG5cdFx0dGhpcy5hZGQoIGhlbWlMaWdodCApO1xuXHR9XG59XG4iLCJpbXBvcnQge1xuICAgIEdyb3VwLFxuICAgIERpcmVjdGlvbmFsTGlnaHQsXG4gICAgVmVjdG9yM1xuICB9IGZyb20gJ3RocmVlJztcbmltcG9ydCBXaGl0ZUhlbWkgZnJvbSAnLi9XaGl0ZUhlbWkuanMnO1xuXG5jb25zdCBkZWZhdWx0UGFyYW1zID0ge1xuICAgIGludGVuc2l0eTogMSxcbiAgICBjYXN0U2hhZG93OiBmYWxzZSxcbiAgICBiaWFzOiAwLFxuICAgIHByb2plY3Rpb25TaWRlczogdW5kZWZpbmVkLFxuICAgIG1hcFNpemU6IDUxMixcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHdvRGlyZWN0aW9uYWxzIGV4dGVuZHMgR3JvdXAge1xuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJncyk7XG5cdFx0Y29uc3Qge1xuICAgICAgICAgICAgaW50ZW5zaXR5LFxuICAgICAgICAgICAgY2FzdFNoYWRvdyxcbiAgICAgICAgICAgIGJpYXMsXG4gICAgICAgICAgICBwcm9qZWN0aW9uU2lkZXMsXG4gICAgICAgICAgICBtYXBTaXplXG4gICAgICAgIH0gPSB7XG4gICAgICAgICAgICAuLi5kZWZhdWx0UGFyYW1zLFxuICAgICAgICAgICAgLi4uYXJnc1swXVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmludGVuc2l0eSA9IGludGVuc2l0eTtcbiAgICAgICAgdGhpcy5wcm9qZWN0aW9uU2lkZXMgPSBwcm9qZWN0aW9uU2lkZXM7XG4gICAgICAgIHRoaXMubWFwU2l6ZSA9IG1hcFNpemU7XG4gICAgICAgIGNvbnNvbGUubG9nKFwibWFwc2l6ZVwiLCB0aGlzLm1hcFNpemUpXG4gICAgICAgIFxuICAgICAgICAvKiBjb25zdCB3aGl0ZUVtaSA9IG5ldyBXaGl0ZUhlbWkoKTtcbiAgICAgICAgdGhpcy5hZGQod2hpdGVFbWkpOyAqL1xuXG4gICAgICAgIGNvbnN0IGRpcmVjdGlvbmFsTGlnaHQgPSBuZXcgRGlyZWN0aW9uYWxMaWdodCgnd2hpdGUnLCAwLjY1ICogdGhpcy5pbnRlbnNpdHkpO1xuICAgICAgICBjb25zdCBkaXJlY3Rpb25hbExpZ2h0MiA9IG5ldyBEaXJlY3Rpb25hbExpZ2h0KCd3aGl0ZScsIDAuNTUgKiB0aGlzLmludGVuc2l0eSk7XG4gICAgICAgIGRpcmVjdGlvbmFsTGlnaHQuc2hhZG93LmJpYXMgPSBiaWFzIHx8IDA7XG4gICAgICAgIGRpcmVjdGlvbmFsTGlnaHQyLnNoYWRvdy5iaWFzID0gYmlhcyB8fCAwO1xuICAgICAgICBcbiAgICAgICAgZGlyZWN0aW9uYWxMaWdodC5jYXN0U2hhZG93ID0gY2FzdFNoYWRvdztcbiAgICAgICAgZGlyZWN0aW9uYWxMaWdodDIuY2FzdFNoYWRvdyA9IGNhc3RTaGFkb3c7XG5cbiAgICAgICAgdGhpcy51cGRhdGVQcm9qZWN0aW9uKGRpcmVjdGlvbmFsTGlnaHQsIHRoaXMucHJvamVjdGlvblNpZGVzKTtcbiAgICAgICAgdGhpcy51cGRhdGVQcm9qZWN0aW9uKGRpcmVjdGlvbmFsTGlnaHQyLCB0aGlzLnByb2plY3Rpb25TaWRlcyk7XG4gICAgICAgIHRoaXMudXBkYXRlU2hhZG93TWFwKGRpcmVjdGlvbmFsTGlnaHQsIHRoaXMubWFwU2l6ZSk7XG4gICAgICAgIHRoaXMudXBkYXRlU2hhZG93TWFwKGRpcmVjdGlvbmFsTGlnaHQyLCB0aGlzLm1hcFNpemUpO1xuXG4gICAgICAgIGRpcmVjdGlvbmFsTGlnaHQucG9zaXRpb24uY29weShcbiAgICAgICAgICAgIG5ldyBWZWN0b3IzKFxuICAgICAgICAgICAgICAgIDksXG4gICAgICAgICAgICAgICAgMy41LFxuICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgIClcbiAgICAgICAgKTtcblxuICAgICAgICBkaXJlY3Rpb25hbExpZ2h0Mi5wb3NpdGlvbi5jb3B5KFxuICAgICAgICAgICAgbmV3IFZlY3RvcjMoXG4gICAgICAgICAgICAgICAgLTEwLFxuICAgICAgICAgICAgICAgIDIsXG4gICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgKVxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuYWRkKGRpcmVjdGlvbmFsTGlnaHQsIGRpcmVjdGlvbmFsTGlnaHQyKTtcbiAgICB9XG5cbiAgICB1cGRhdGVQcm9qZWN0aW9uKGxpZ2h0LCBwcm9qZWN0aW9uU2lkZXMpIHtcbiAgICAgICAgbGlnaHQuc2hhZG93LmNhbWVyYS5sZWZ0ID0gLXByb2plY3Rpb25TaWRlcztcbiAgICAgICAgbGlnaHQuc2hhZG93LmNhbWVyYS5yaWdodCA9IHByb2plY3Rpb25TaWRlcztcbiAgICAgICAgbGlnaHQuc2hhZG93LmNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG4gICAgfVxuXG4gICAgdXBkYXRlU2hhZG93TWFwKGxpZ2h0LCBtYXBTaXplKSB7XG4gICAgICAgIGxpZ2h0LnNoYWRvdy5tYXBTaXplLndpZHRoID0gbWFwU2l6ZTtcbiAgICAgICAgbGlnaHQuc2hhZG93Lm1hcFNpemUuaGVpZ2h0ID0gbWFwU2l6ZTtcbiAgICB9XG59IiwiaW1wb3J0IHtcbiAgQ29sb3IsXG4gIE1lc2hCYXNpY01hdGVyaWFsLFxuICBTcGhlcmVCdWZmZXJHZW9tZXRyeSxcbiAgU3BoZXJlR2VvbWV0cnksXG4gIE1lc2hcbn0gZnJvbSAndGhyZWUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNpY1NwaGVyZSB7XG4gIGNvbnN0cnVjdG9yKHtcbiAgICBzaXplID0gNSxcbiAgICBtYXRlcmlhbCxcbiAgICBwb3NpdGlvbixcbiAgICB3aWR0aFNlZ21lbnRzLFxuICAgIGhlaWdodFNlZ21lbnRzLFxuICAgIGNhc3RTaGFkb3csXG4gICAgcmVjZWl2ZVNoYWRvd1xuICB9KSB7XG4gICAgdGhpcy5zZWVkID0gTWF0aC5yYW5kb20oKTtcbiAgICBjb25zdCBjb2xvciA9IHtyOjEgLGc6MSwgYjoxfTtcbiAgICB0aGlzLmNvbG9yID0gbmV3IENvbG9yKCk7XG4gICAgdGhpcy5jb2xvci5zZXRSR0IoY29sb3IuciwgY29sb3IuZywgY29sb3IuYik7XG5cbiAgICB0aGlzLm1hdGVyaWFsID0gbWF0ZXJpYWwgfHwgbmV3IE1lc2hCYXNpY01hdGVyaWFsKHtcbiAgICAgIGNvbG9yOiB0aGlzLmNvbG9yXG4gICAgfSk7XG4gICAgXG4gICAgY29uc3QgU3BoZXJlID0gdGhpcy5tYXRlcmlhbC5sZW5ndGggPiAxID8gU3BoZXJlQnVmZmVyR2VvbWV0cnkgOiBTcGhlcmVHZW9tZXRyeTtcblxuICAgIHRoaXMuZ2VvbWV0cnkgPSBuZXcgU3BoZXJlKFxuICAgICAgc2l6ZSwgXG4gICAgICB3aWR0aFNlZ21lbnRzIHx8IDcsIFxuICAgICAgaGVpZ2h0U2VnbWVudHMgfHwgOSk7XG4gICAgXG4gICAgaWYgKHRoaXMubWF0ZXJpYWwubGVuZ3RoKSB7XG4gICAgICB0aGlzLmdlb21ldHJ5LmNsZWFyR3JvdXBzKCk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1hdGVyaWFsLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRoaXMuZ2VvbWV0cnkuYWRkR3JvdXAoIDAsIEluZmluaXR5LCBpICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5tZXNoID0gbmV3IE1lc2goXG4gICAgICB0aGlzLmdlb21ldHJ5LFxuICAgICAgdGhpcy5tYXRlcmlhbFxuICAgICk7XG5cbiAgICB0aGlzLm1lc2guY2FzdFNoYWRvdyA9IGNhc3RTaGFkb3c7XG4gICAgdGhpcy5tZXNoLnJlY2VpdmVTaGFkb3cgPSByZWNlaXZlU2hhZG93O1xuXG4gICAgaWYgKHBvc2l0aW9uKSB7XG4gICAgICB0aGlzLm1lc2gucG9zaXRpb24uY29weShwb3NpdGlvbik7XG4gICAgfVxuXG4gICAgdGhpcy5yb290ID0gdGhpcy5tZXNoO1xuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJvYmovTG93cG9seV90cmVlX3NhbXBsZS5vYmpcIjsiLCJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5pbXBvcnQgdHJlZSBmcm9tICcuLi8uLi9vYmovTG93cG9seV90cmVlX3NhbXBsZS5vYmonO1xuaW1wb3J0IExpZ2h0cyBmcm9tICcuLi9MaWdodHMvVHdvRGlyZWN0aW9uYWxzJztcbmltcG9ydCBCYXNpY1NwaGVyZSBmcm9tICcuLi9PYmplY3RzL0Jhc2ljU3BoZXJlJztcbmltcG9ydCB7IE9CSkxvYWRlciB9IGZyb20gJ3RocmVlLW9iai1tdGwtbG9hZGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJlZUV4YW1wbGUge1xuICBjb25zdHJ1Y3Rvcih7c2NlbmUsIG9uTG9hZH0pIHtcbiAgICBcbiAgICB0aGlzLnNjZW5lID0gc2NlbmU7XG4gICAgdGhpcy5zZXR1cENhbWVyYSgpO1xuICAgIFxuICAgIHNjZW5lLnJlbmRlcmVyLnNoYWRvd01hcC5lbmFibGVkID0gdHJ1ZTtcbiAgICBzY2VuZS5yZW5kZXJlci5zaGFkb3dNYXAudHlwZSA9IFRIUkVFLlBDRlNoYWRvd01hcDtcblxuICAgIHRoaXMucm9vdCA9IG5ldyBUSFJFRS5Hcm91cCgpO1xuXG4gICAgdGhpcy5sb2FkVHJlZSgpO1xuICAgIHRoaXMuc2V0dXBMaWdodHMoKTtcblxuICAgIGNvbnN0IHNwaGVyZU1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsKHtcbiAgICAgIGVtaXNzaXZlOiAweDVlMDMxMSxcbiAgICAgIGZsYXRTaGFkaW5nOiB0cnVlXG4gICAgfSk7XG5cbiAgICBzcGhlcmVNYXRlcmlhbC5lbWlzc2l2ZS5zZXRSR0IoMTU3LzI1NSwgMjM5LzI1NSwgMjQ3LzI1NSk7XG5cbiAgICB0aGlzLnNwaGVyZSA9IG5ldyBCYXNpY1NwaGVyZSh7XG4gICAgICBzaXplOiA2LFxuICAgICAgbWF0ZXJpYWw6IHNwaGVyZU1hdGVyaWFsLFxuICAgICAgd2lkdGhTZWdtZW50czogMjAsXG4gICAgICBoZWlnaHRTZWdtZW50czogMTAsXG4gICAgICByZWNlaXZlU2hhZG93OiB0cnVlXG4gICAgfSk7XG5cbiAgICB0aGlzLnNwaGVyZS5yb290LnJvdGF0ZVgoMjYgKiAoTWF0aC5QSSAvIDE4MCkpXG5cbiAgICBjb25zb2xlLmxvZyh0aGlzLnNwaGVyZS5yb290Lmdlb21ldHJ5KVxuXG4gICAgdGhpcy5yb290LmFkZCh0aGlzLnNwaGVyZS5yb290KTtcblxuICAgIGlmIChvbkxvYWQpIG9uTG9hZCgpO1xuICB9XG5cbiAgbG9hZGluZyhwZXJjZW50YWdlKSB7ICAgIFxuICAgIFxuICB9XG5cbiAgc2V0dXBMaWdodHMoKSB7XG4gICAgY29uc3QgbGlnaHRzID0gbmV3IExpZ2h0cyh7XG4gICAgICBpbnRlbnNpdHk6IDEuOCxcbiAgICAgIGNhc3RTaGFkb3c6IHRydWUsXG4gICAgICBiaWFzOiAwLjAwMDAyLFxuICAgICAgcHJvamVjdGlvblNpZGVzOiA2LjUsXG4gICAgICBtYXBTaXplOiAxMDI0XG4gICAgfSk7XG4gICAgbGlnaHRzLnJvdGF0ZVkoTWF0aC5QSSk7XG4gICAgdGhpcy5yb290LmFkZChsaWdodHMpO1xuICB9XG5cbiAgc2V0dXBDYW1lcmEoKSB7XG4gICAgdGhpcy5zY2VuZS5jYW1lcmEucG9zaXRpb24uY29weShuZXcgVEhSRUUuVmVjdG9yMygwLCA0LjUsIDE4KSk7XG4gICAgdGhpcy5zY2VuZS5jYW1lcmEubG9va0F0KG5ldyBUSFJFRS5WZWN0b3IzKDAsIDAsIDApKTtcbiAgfVxuXG4gIGxvYWRUcmVlKCkge1xuICAgIGNvbnN0IGxvYWRlciA9IG5ldyBPQkpMb2FkZXIoKTtcbiAgICB0aGlzLm9uSGVhZFJlYWR5ID0gdGhpcy5vblRyZWVSZWFkeS5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25IZWFkTG9hZGluZyA9IHRoaXMub25IZWFkTG9hZGluZy5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25UcmVlUmVhZHkgPSB0aGlzLm9uVHJlZVJlYWR5LmJpbmQodGhpcyk7XG4gICAgbG9hZGVyLmxvYWQoXG4gICAgICB0cmVlLFxuICAgICAgdGhpcy5vblRyZWVSZWFkeSxcbiAgICAgIHRoaXMub25IZWFkTG9hZGluZyxcbiAgICAgIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZygnQW4gZXJyb3IgaGFwcGVuZWQnLCBlcnJvcik7XG4gICAgICB9KTtcbiAgfVxuXG4gIG9uSGVhZExvYWRpbmcoeGhyKSB7XG4gICAgY29uc3QgbG9hZGluZyA9IHhoci5sb2FkZWQgLyB4aHIudG90YWw7XG4gICAgY29uc29sZS5sb2coKGxvYWRpbmcgKiAxMDApICsgJyUgbG9hZGVkJyk7XG4gICAgXG4gICAgdGhpcy5sb2FkaW5nKE1hdGguc2luKGxvYWRpbmcpKTtcbiAgfVxuXG4gIG9uVHJlZVJlYWR5KG9iamVjdCkge1xuICAgIG9iamVjdC50cmF2ZXJzZSgob2JqKSA9PiB7XG4gICAgICBvYmouY2FzdFNoYWRvdyA9IHRydWU7XG4gICAgICBvYmoucmVjZWl2ZVNoYWRvdyA9IHRydWU7XG4gICAgfSk7XG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5zcGhlcmUucm9vdC5nZW9tZXRyeS52ZXJ0aWNlcy5sZW5ndGg7IGkrKykgeyAgICAgIFxuICAgICAgdGhpcy5hZGRUcmVlKG9iamVjdCwgdGhpcy5zcGhlcmUucm9vdC5nZW9tZXRyeS52ZXJ0aWNlc1tpXSwgMC4xKTtcbiAgICB9XG4gIH1cblxuICBhZGRUcmVlKG9iamVjdCwgbmV3UG9zaXRpb24sIHNjYWxlKSB7XG4gICAgY29uc3QgbmV3VHJlZSA9IG9iamVjdC5jbG9uZSgpO1xuICAgIC8vIHNldCBwb3NpdGlvblxuICAgIG5ld1RyZWUucG9zaXRpb24uY29weShuZXdQb3NpdGlvbik7XG4gICAgLy8gc2NhbGVcbiAgICBuZXdUcmVlLnNjYWxlLmNvcHkoXG4gICAgICBuZXcgVEhSRUUuVmVjdG9yMyhzY2FsZSwgc2NhbGUsIHNjYWxlKVxuICAgICk7XG5cbiAgICBjb25zdCBheGlzID0gbmV3IFRIUkVFLlZlY3RvcjMoMCwgMSwgMCk7XG4gICAgXG4gICAgbmV3VHJlZS5xdWF0ZXJuaW9uLnNldEZyb21Vbml0VmVjdG9ycyhheGlzLCBcbiAgICAgIG5ld1Bvc2l0aW9uLnN1Yih0aGlzLnNwaGVyZS5yb290LnBvc2l0aW9uKS5jbG9uZSgpLm5vcm1hbGl6ZSgpKTtcblxuICAgIG5ld1RyZWUuY2hpbGRyZW5bMF0ubWF0ZXJpYWxbMF0uY29sb3Iuc2V0UkdCKDEsIDAuNiwgMCk7XG4gICAgbmV3VHJlZS5jaGlsZHJlblswXS5tYXRlcmlhbFsxXS5jb2xvci5zZXRSR0IoMjI0LzI1NSwgMjUyLzI1NSwgMSk7XG4gICAgbmV3VHJlZS5jaGlsZHJlblswXS5tYXRlcmlhbFsxXS5lbWlzc2l2ZS5zZXRSR0IoMjI0LzI1NSowLjIsIDI1Mi8yNTUqMC4yLCAxKjAuMik7XG4gICAgbmV3VHJlZS5yb3RhdGVZKE1hdGgucmFuZG9tKCkgKiAzNjApO1xuICAgIHRoaXMuc3BoZXJlLnJvb3QuYWRkKG5ld1RyZWUpO1xuICB9XG5cbiAgdXBkYXRlKHRpbWVFbGFwc2VkLCBkZWx0YSkge1xuICAgIGxldCBuZXdDb2xvciA9IG5ldyBUSFJFRS5Db2xvcigpO1xuICAgIHRoaXMuc3BoZXJlLnJvb3QubWF0ZXJpYWwuZW1pc3NpdmUuZ2V0SFNMKG5ld0NvbG9yKTtcbiAgICBuZXdDb2xvci5zID0gKE1hdGguc2luKHRpbWVFbGFwc2VkICsgKE1hdGguUEkgKiAwLjI3KSkgKyAxKSAqIDAuNTtcbiAgICBuZXdDb2xvci5sID0gKE1hdGguY29zKHRpbWVFbGFwc2VkKSArIDEpICogMC4xO1xuICAgIHRoaXMuc3BoZXJlLnJvb3QubWF0ZXJpYWwuZW1pc3NpdmUuc2V0SFNMKG5ld0NvbG9yLmgsIG5ld0NvbG9yLnMsIG5ld0NvbG9yLmwpO1xuXG4gICAgZm9yIChsZXQgY29udGVnZ2lvID0gMDsgY29udGVnZ2lvIDwgdGhpcy5zcGhlcmUucm9vdC5jaGlsZHJlbi5sZW5ndGg7IGNvbnRlZ2dpbyA9IGNvbnRlZ2dpbyArIDEpIHtcbiAgICAgIGNvbnN0IHRyZWUgPSB0aGlzLnNwaGVyZS5yb290LmNoaWxkcmVuW2NvbnRlZ2dpb10uY2hpbGRyZW5bMF07XG4gICAgICBjb25zdCBuZXdQb3NpdGlvbiA9IHRyZWUucG9zaXRpb247XG4gICAgICBuZXdQb3NpdGlvbi55ID0gTWF0aC5zaW4odGltZUVsYXBzZWQgKyAoY29udGVnZ2lvICogMC4wNSkpICogMzA7XG4gICAgICB0cmVlLnBvc2l0aW9uLmNvcHkobmV3UG9zaXRpb24pO1xuICAgIH1cbiAgICBcbiAgICB0aGlzLnNwaGVyZS5yb290LnJvdGF0ZVkoZGVsdGEgKiAwLjM1KTtcbiAgfVxuXG59XG4iXSwic291cmNlUm9vdCI6IiJ9
(window.webpackJsonp=window.webpackJsonp||[]).push([[4],[,,,,function(e,t,o){"use strict";o.r(t);var n=o(13);function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var c=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),e=i(this,a(t).call(this));var o=new n.i(16777215,16777215,3);return o.color.setHSL(Math.NormalizeHue(325),.1,.94),o.groundColor.setHSL(Math.NormalizeHue(325),.1,.64),o.position.set(0,2,0),e.add(o),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,n["h"]),t}();function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),e=h(this,l(t).call(this));var o=new c;e.add(o);var r=new n.f("white",.65),i=new n.f("white",.55);return r.position.copy(new n.r(9,3.5,0)),i.position.copy(new n.r(-10,2,0)),e.add(r,i),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,n["h"]),t}(),d=o(14);var y=function e(t){var o=t.size,r=void 0===o?5:o,i=t.material,a=t.position,s=t.widthSegments,c=t.heightSegments;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.seed=Math.random();var u=1,h=1,l=1;this.color=new n.d,this.color.setRGB(u,h,l),this.material=i||new n.k({color:this.color});var f=i.length>1?n.p:n.q;if(this.geometry=new f(r,s||7,c||9),i.length){this.geometry.clearGroups();for(var p=0;p<i.length;p++)this.geometry.addGroup(0,1/0,p)}this.mesh=new n.j(this.geometry,this.material),a&&this.mesh.position.copy(a),this.root=this.mesh};function w(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}o.d(t,"default",function(){return m}),o(17);var m=function(){function e(t){var o=t.scene,r=t.onLoad;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.scene=o,this.editScene(),this.root=new n.h;var i=new p;this.root.add(i),this.addSkyscrapers(),this.addSky(),this.addGround(),this.addWhereAreYou(),r&&r()}var t,o,r;return t=e,(o=[{key:"editScene",value:function(){var e=this.scene.camera.aspect,t=new n.d;t.setIntHSL(244,30,8),this.scene.renderer.setClearColor(t),this.scene.camera=new n.m(7*e/-2,7*e/2,3.5,-3.5,.1,150),this.scene.camera.position.copy(new n.r(10,10,10)),this.scene.camera.lookAt(new n.r(0,0,0))}},{key:"addSkyscrapers",value:function(){var e=new n.l({color:4276048,metalness:.3,roughness:.2}),t=new n.k({color:2301751}),o=new n.k({color:13421789});this.cubes=[];this.cubesParent=new n.h;for(var r=-5;r<5;r++)for(var i=-5;i<5;i++){for(var a=new d.a({size:1,material:e,position:new n.r(1.5*r+(Math.random()-.5),0,1.5*i)}),s=0;s<80;s++){var c=Math.random()>.5?.5:-.5;if(!(c<0)){var u=.8*Math.random()-.4,h=Math.random()*(Math.random()>.5?.4:-.4);u=.1*Math.round(10*u),h=.2*Math.round(5*h);var l=new d.a({size:.05,material:Math.random()>.1?t:o,position:new n.r(h,u,c)});a.root.add(l.root)}}a.root.scale.copy(new n.r(1,2,1)),this.cubesParent.add(a.root),this.cubes.push(a)}this.root.add(this.cubesParent)}},{key:"addSky",value:function(){var e=new n.l({color:328489,metalness:.1,roughness:.9,side:n.a}),t=new n.k({color:13421789,side:n.a,wireframe:!0}),o=new y({size:5,position:new n.r(-.5,1,0),material:e,heightSegments:72,widthSegments:128});o.root.scale.copy(new n.r(10,9.25,10)),this.root.add(o.root);for(var r=0;r<120;r++){var i=Math.random()*Math.PI*2,a=Math.random()*Math.PI*.6,s=new y({size:.018,material:t,position:new n.r(20*Math.sin(i),8*Math.cos(a),-10)});this.root.add(s.root)}}},{key:"addGround",value:function(){var e=new n.l({color:1250067,metalness:.7,roughness:.9,flatShading:!0}),t=new y({size:3,position:new n.r(0,-1,0),material:e});t.root.scale.copy(new n.r(5,.5,4)),this.root.add(t.root)}},{key:"addWhereAreYou",value:function(){this.whereAreYou=document.createElement("h1"),this.whereAreYou.innerHTML="where are you",this.whereAreYou.style.margin="auto",this.whereAreYou.style.marginTop="30vh",this.whereAreYou.style.verticalAlign="middle",this.whereAreYou.style.fontFamily="'VT323', monospace",this.whereAreYou.style.color="antiquewhite",this.whereAreYou.style.fontWeight="lighter",this.whereAreYou.style.cursor="default",this.whereAreYou.style.letterSpacing="0.2em",document.body.appendChild(this.whereAreYou)}},{key:"update",value:function(e){var t=.2*e;this.updateSkyscrapers(t),this.updateCamera(e)}},{key:"updateSkyscrapers",value:function(e){for(var t=0;t<this.cubesParent.children.length;t++){var o=this.cubesParent.children[t],n=o.position;n.y=Math.sin(t*Math.PI*.25+e),o.position.copy(n)}}},{key:"updateCamera",value:function(e){this.scene.camera.position.copy(new n.r(10*Math.cos(.12*e)+2,Math.cos(.2*e)+1,30)),this.scene.camera.lookAt(new n.r(0,2.5,6)),this.scene.camera.updateProjectionMatrix()}},{key:"onRemove",value:function(){document.body.removeChild(this.whereAreYou)}}])&&w(t.prototype,o),r&&w(t,r),e}()},,,,,,,,,,function(e,t,o){"use strict";o.d(t,"a",function(){return r});var n=o(13);var r=function e(t){var o=t.size,r=void 0===o?5:o,i=t.material,a=t.position;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.seed=Math.random();var s=1,c=1,u=1;this.color=new n.d,this.color.setRGB(s,c,u),this.material=i||new n.k({color:this.color}),this.geometry=new n.b(r,r,r),this.mesh=new n.j(this.geometry,this.material),a&&this.mesh.position.copy(a),this.root=this.mesh}},,,function(e,t,o){var n=o(18);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0};o(1)(n,r);n.locals&&(e.exports=n.locals)},function(e,t,o){(e.exports=o(0)(void 0)).push([e.i,"/* vt323-400normal - latin */\n@font-face {\n  font-family: 'VT323';\n  font-style: normal;\n  font-display: swap;\n  font-weight: 400;\n  src:\n    local('VT323 Regular '),\n    local('VT323-Regular'),\n    url("+o(19)+") format('woff2'), \n    url("+o(20)+") format('woff'); /* Modern Browsers */\n}\n\n",""])},function(e,t,o){e.exports=o.p+"fonts/vt323-latin-400.woff2"},function(e,t,o){e.exports=o.p+"fonts/vt323-latin-400.woff"}]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvTGlnaHRzL1doaXRlSGVtaS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvTGlnaHRzL1R3b0RpcmVjdGlvbmFscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvT2JqZWN0cy9CYXNpY1NwaGVyZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvTG9vcHMvU2t5c2NyYXBlcnNMb29wLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9PYmplY3RzL0Jhc2ljQ3ViZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdHlwZWZhY2UtdnQzMjMvaW5kZXguY3NzPzgwODMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3R5cGVmYWNlLXZ0MzIzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdHlwZWZhY2UtdnQzMjMvZmlsZXMvdnQzMjMtbGF0aW4tNDAwLndvZmYyIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90eXBlZmFjZS12dDMyMy9maWxlcy92dDMyMy1sYXRpbi00MDAud29mZiJdLCJuYW1lcyI6WyJXaGl0ZUhlbWkiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjayIsInRoaXMiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiIsIl9nZXRQcm90b3R5cGVPZiIsImNhbGwiLCJoZW1pTGlnaHQiLCJUSFJFRSIsImNvbG9yIiwic2V0SFNMIiwiTWF0aCIsIk5vcm1hbGl6ZUh1ZSIsImdyb3VuZENvbG9yIiwicG9zaXRpb24iLCJzZXQiLCJhZGQiLCJUd29EaXJlY3Rpb25hbHMiLCJUd29EaXJlY3Rpb25hbHNfY2xhc3NDYWxsQ2hlY2siLCJUd29EaXJlY3Rpb25hbHNfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiIsIlR3b0RpcmVjdGlvbmFsc19nZXRQcm90b3R5cGVPZiIsIndoaXRlRW1pIiwiZGlyZWN0aW9uYWxMaWdodCIsImRpcmVjdGlvbmFsTGlnaHQyIiwiY29weSIsIkJhc2ljU3BoZXJlIiwiX3JlZiIsIl9yZWYkc2l6ZSIsInNpemUiLCJtYXRlcmlhbCIsIndpZHRoU2VnbWVudHMiLCJoZWlnaHRTZWdtZW50cyIsIkJhc2ljU3BoZXJlX2NsYXNzQ2FsbENoZWNrIiwic2VlZCIsInJhbmRvbSIsInNldFJHQiIsIlNwaGVyZSIsImxlbmd0aCIsImdlb21ldHJ5IiwiY2xlYXJHcm91cHMiLCJpIiwiYWRkR3JvdXAiLCJJbmZpbml0eSIsIm1lc2giLCJyb290IiwicmVxdWlyZSIsIlNreXNjcmFwZXJzTG9vcCIsInNjZW5lIiwib25Mb2FkIiwiU2t5c2NyYXBlcnNMb29wX2NsYXNzQ2FsbENoZWNrIiwiZWRpdFNjZW5lIiwibGlnaHRzIiwiTGlnaHRzIiwiYWRkU2t5c2NyYXBlcnMiLCJhZGRTa3kiLCJhZGRHcm91bmQiLCJhZGRXaGVyZUFyZVlvdSIsImFzcGVjdCIsImNhbWVyYSIsImNsZWFyQ29sb3IiLCJzZXRJbnRIU0wiLCJyZW5kZXJlciIsInNldENsZWFyQ29sb3IiLCJmcnVzdHVtU2l6ZSIsImxvb2tBdCIsInNreVNjcmFwZXJNYXQiLCJtZXRhbG5lc3MiLCJyb3VnaG5lc3MiLCJ3aW5kb3dPZmZNYXQiLCJ3aW5kb3dPbk1hdCIsImN1YmVzIiwiY3ViZXNQYXJlbnQiLCJ4IiwieiIsIm5ld0N1YmUiLCJCYXNpY0N1YmUiLCJqIiwieE9mZnNldCIsInlPZmZzZXQiLCJ6T2Zmc2V0Iiwicm91bmQiLCJuZXdXaW5kb3ciLCJzY2FsZSIsInB1c2giLCJza3lNYXQiLCJzaWRlIiwic3RhcnNNYXQiLCJ3aXJlZnJhbWUiLCJza3kiLCJwaHkiLCJQSSIsInRoZXRhIiwibmV3U3RhciIsInNpbiIsImNvcyIsImdyb3VuZE1hdCIsImZsYXRTaGFkaW5nIiwiZ3JvdW5kIiwid2hlcmVBcmVZb3UiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJzdHlsZSIsIm1hcmdpbiIsIm1hcmdpblRvcCIsInZlcnRpY2FsQWxpZ24iLCJmb250RmFtaWx5IiwiZm9udFdlaWdodCIsImN1cnNvciIsImxldHRlclNwYWNpbmciLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJ0aW1lRWxhcHNlZCIsImFuaW1hdGlvblRpbWUiLCJ1cGRhdGVTa3lzY3JhcGVycyIsInVwZGF0ZUNhbWVyYSIsImNoaWxkcmVuIiwiY2hpbGQiLCJuZXdQb3MiLCJ5IiwidXBkYXRlUHJvamVjdGlvbk1hdHJpeCIsInJlbW92ZUNoaWxkIiwiY29udGVudCIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGUiLCJvcHRpb25zIiwiaG1yIiwidHJhbnNmb3JtIiwibG9jYWxzIiwiZXhwb3J0cyIsInVuZGVmaW5lZCIsInAiXSwibWFwcGluZ3MiOiJrdkJBRXFCQSxjQUNuQixTQUFBQSxJQUFjLElBQUFDLCtGQUFBQyxDQUFBQyxLQUFBSCxHQUNaQyxFQUFBRyxFQUFBRCxLQUFBRSxFQUFBTCxHQUFBTSxLQUFBSCxPQUVBLElBQU1JLEVBQVksSUFBSUMsSUFBdUIsU0FBVSxTQUFVLEdBSHJELE9BSWRELEVBQVVFLE1BQU1DLE9BQ2ZDLEtBQUtDLGFBQWEsS0FDbEIsR0FDQSxLQUVETCxFQUFVTSxZQUFZSCxPQUNyQkMsS0FBS0MsYUFBYSxLQUNsQixHQUNBLEtBRURMLEVBQVVPLFNBQVNDLElBQUssRUFBRyxFQUFHLEdBQzlCZCxFQUFLZSxJQUFLVCxHQWZJTiw4T0FEdUJPLGtwQkNDbEJTLGNBQ2pCLFNBQUFBLElBQWMsSUFBQWhCLCtGQUFBaUIsQ0FBQWYsS0FBQWMsR0FDVmhCLEVBQUFrQixFQUFBaEIsS0FBQWlCLEVBQUFILEdBQUFYLEtBQUFILE9BQ0EsSUFBTWtCLEVBQVcsSUFBSXJCLEVBQ3JCQyxFQUFLZSxJQUFJSyxHQUVULElBQU1DLEVBQW1CLElBQUlkLElBQXVCLFFBQVMsS0FDdkRlLEVBQW9CLElBQUlmLElBQXVCLFFBQVMsS0FOcEQsT0FRVmMsRUFBaUJSLFNBQVNVLEtBQ3RCLElBQUloQixJQUNBLEVBQ0EsSUFDQSxJQUlSZSxFQUFrQlQsU0FBU1UsS0FDdkIsSUFBSWhCLEtBQ0MsR0FDRCxFQUNBLElBSVJQLEVBQUtlLElBQUlNLEVBQWtCQyxHQXhCakJ0Qiw4T0FEMkJPLHlCQ0R4QmlCLEVBQ25CLFNBQUFBLEVBQUFDLEdBQTJFLElBQUFDLEVBQUFELEVBQTlERSxZQUE4RCxJQUFBRCxFQUF2RCxFQUF1REEsRUFBcERFLEVBQW9ESCxFQUFwREcsU0FBVWYsRUFBMENZLEVBQTFDWixTQUFVZ0IsRUFBZ0NKLEVBQWhDSSxjQUFlQyxFQUFpQkwsRUFBakJLLDRHQUFpQkMsQ0FBQTdCLEtBQUFzQixHQUN6RXRCLEtBQUs4QixLQUFPdEIsS0FBS3VCLFNBQ2pCLElBQU16QixFQUFXLEVBQVhBLEVBQWdCLEVBQWhCQSxFQUFxQixFQUMzQk4sS0FBS00sTUFBUSxJQUFJRCxJQUNqQkwsS0FBS00sTUFBTTBCLE9BQU8xQixFQUFTQSxFQUFTQSxHQUVwQ04sS0FBSzBCLFNBQVdBLEdBQVksSUFBSXJCLElBQXdCLENBQ3REQyxNQUFPTixLQUFLTSxRQUdkLElBQU0yQixFQUFTUCxFQUFTUSxPQUFTLEVBQUk3QixJQUE2QkEsSUFPbEUsR0FMQUwsS0FBS21DLFNBQVcsSUFBSUYsRUFDbEJSLEVBQ0FFLEdBQWlCLEVBQ2pCQyxHQUFrQixHQUVoQkYsRUFBU1EsT0FBUSxDQUNuQmxDLEtBQUttQyxTQUFTQyxjQUNkLElBQUssSUFBSUMsRUFBSSxFQUFHQSxFQUFJWCxFQUFTUSxPQUFRRyxJQUNuQ3JDLEtBQUttQyxTQUFTRyxTQUFVLEVBQUdDLElBQVVGLEdBSXpDckMsS0FBS3dDLEtBQU8sSUFBSW5DLElBQ2RMLEtBQUttQyxTQUNMbkMsS0FBSzBCLFVBR0hmLEdBQ0ZYLEtBQUt3QyxLQUFLN0IsU0FBU1UsS0FBS1YsR0FHMUJYLEtBQUt5QyxLQUFPekMsS0FBS3dDLGtOQ2hDckJFLEVBQVEsUUFFYUMsYUFDakIsU0FBQUEsRUFBQXBCLEdBQTZCLElBQWhCcUIsRUFBZ0JyQixFQUFoQnFCLE1BQU9DLEVBQVN0QixFQUFUc0Isb0dBQVNDLENBQUE5QyxLQUFBMkMsR0FDekIzQyxLQUFLNEMsTUFBUUEsRUFFYjVDLEtBQUsrQyxZQUVML0MsS0FBS3lDLEtBQU8sSUFBSXBDLElBRWhCLElBQU0yQyxFQUFTLElBQUlDLEVBQ25CakQsS0FBS3lDLEtBQUs1QixJQUFJbUMsR0FFZGhELEtBQUtrRCxpQkFFTGxELEtBQUttRCxTQUVMbkQsS0FBS29ELFlBRUxwRCxLQUFLcUQsaUJBRURSLEdBQVFBLCtEQUlaLElBQ01TLEVBQVN0RCxLQUFLNEMsTUFBTVcsT0FBT0QsT0FDM0JFLEVBQWEsSUFBSW5ELElBQ3ZCbUQsRUFBV0MsVUFBVSxJQUFLLEdBQUksR0FDOUJ6RCxLQUFLNEMsTUFBTWMsU0FBU0MsY0FBY0gsR0FDbEN4RCxLQUFLNEMsTUFBTVcsT0FBUyxJQUFJbEQsSUFMSixFQUsyQ2lELEdBQVUsRUFMckQsRUFLc0VBLEVBQVMsRUFBR00sS0FBaUJBLElBQWtCLEdBQUssS0FDOUk1RCxLQUFLNEMsTUFBTVcsT0FBTzVDLFNBQVNVLEtBQUssSUFBSWhCLElBQWMsR0FBSSxHQUFJLEtBQzFETCxLQUFLNEMsTUFBTVcsT0FBT00sT0FBTyxJQUFJeEQsSUFBYyxFQUFHLEVBQUcsNkNBSWpELElBQU15RCxFQUFnQixJQUFJekQsSUFBMkIsQ0FDakRDLE1BQU8sUUFDUHlELFVBQVcsR0FDWEMsVUFBVyxLQUdUQyxFQUFlLElBQUk1RCxJQUF3QixDQUM3Q0MsTUFBTyxVQUdMNEQsRUFBYyxJQUFJN0QsSUFBd0IsQ0FDNUNDLE1BQU8sV0FHWE4sS0FBS21FLE1BQVEsR0FJYm5FLEtBQUtvRSxZQUFjLElBQUkvRCxJQUN2QixJQUFLLElBQUlnRSxHQUhTLEVBR09BLEVBSFAsRUFHc0JBLElBQ3BDLElBQUssSUFBSUMsR0FKSyxFQUlXQSxFQUpYLEVBSTBCQSxJQUFLLENBTXpDLElBTEEsSUFBTUMsRUFBVSxJQUFJQyxJQUFVLENBQ3RCL0MsS0FBTSxFQUNOQyxTQUFVb0MsRUFDVm5ELFNBQVUsSUFBSU4sSUFBZ0IsSUFBRmdFLEdBQVM3RCxLQUFLdUIsU0FBUyxJQUFNLEVBQUssSUFBRnVDLEtBRTNERyxFQUFJLEVBQUdBLEVBQUksR0FBSUEsSUFBSyxDQUN6QixJQUFNQyxFQUFVbEUsS0FBS3VCLFNBQVcsR0FBTSxJQUFPLEdBQzdDLEtBQUkyQyxFQUFVLEdBQWQsQ0FDQSxJQUFJQyxFQUE2QixHQUFqQm5FLEtBQUt1QixTQUFtQixHQUNwQzZDLEVBQVVwRSxLQUFLdUIsVUFBWXZCLEtBQUt1QixTQUFXLEdBQU0sSUFBTyxJQUM1RDRDLEVBQXFDLEdBQTNCbkUsS0FBS3FFLE1BQWdCLEdBQVZGLEdBQ3JCQyxFQUFvQyxHQUExQnBFLEtBQUtxRSxNQUFnQixFQUFWRCxHQUNyQixJQUFNRSxFQUFZLElBQUlOLElBQVUsQ0FDNUIvQyxLQUFNLElBQ05DLFNBQVVsQixLQUFLdUIsU0FBVyxHQUFNa0MsRUFBZUMsRUFDL0N2RCxTQUFVLElBQUlOLElBQWN1RSxFQUFTRCxFQUFTRCxLQUVsREgsRUFBUTlCLEtBQUs1QixJQUFJaUUsRUFBVXJDLE9BRS9COEIsRUFBUTlCLEtBQUtzQyxNQUFNMUQsS0FBSyxJQUFJaEIsSUFBYyxFQUFFLEVBQUUsSUFDOUNMLEtBQUtvRSxZQUFZdkQsSUFBSTBELEVBQVE5QixNQUM3QnpDLEtBQUttRSxNQUFNYSxLQUFLVCxHQUl4QnZFLEtBQUt5QyxLQUFLNUIsSUFBSWIsS0FBS29FLDhDQUluQixJQUFNYSxFQUFTLElBQUk1RSxJQUEyQixDQUMxQ0MsTUFBTyxPQUNQeUQsVUFBVyxHQUNYQyxVQUFXLEdBQ1hrQixLQUFNN0UsTUFFSjhFLEVBQVcsSUFBSTlFLElBQXdCLENBQ3pDQyxNQUFPLFNBQ1A0RSxLQUFNN0UsSUFDTitFLFdBQVcsSUFFVEMsRUFBTSxJQUFJL0QsRUFBWSxDQUN4QkcsS0FBTSxFQUNOZCxTQUFVLElBQUlOLEtBQWUsR0FBSyxFQUFHLEdBQ3JDcUIsU0FBVXVELEVBQ1ZyRCxlQUFnQixHQUNoQkQsY0FBZSxNQUVuQjBELEVBQUk1QyxLQUFLc0MsTUFBTTFELEtBQUssSUFBSWhCLElBQWMsR0FBSSxLQUFNLEtBQ2hETCxLQUFLeUMsS0FBSzVCLElBQUl3RSxFQUFJNUMsTUFDbEIsSUFBSyxJQUFJSixFQUFJLEVBQUdBLEVBQUksSUFBS0EsSUFBSyxDQUMxQixJQUFNaUQsRUFBTTlFLEtBQUt1QixTQUFXdkIsS0FBSytFLEdBQUssRUFDaENDLEVBQVFoRixLQUFLdUIsU0FBV3ZCLEtBQUsrRSxHQUFLLEdBQ2xDRSxFQUFVLElBQUluRSxFQUFZLENBQzVCRyxLQUFNLEtBQ05DLFNBQVV5RCxFQUNWeEUsU0FBVSxJQUFJTixJQUE4QixHQUFoQkcsS0FBS2tGLElBQUlKLEdBQTZCLEVBQWxCOUUsS0FBS21GLElBQUlILElBQWEsTUFFMUV4RixLQUFLeUMsS0FBSzVCLElBQUk0RSxFQUFRaEQsMkNBSzFCLElBQU1tRCxFQUFZLElBQUl2RixJQUEyQixDQUM3Q0MsTUFBTyxRQUNQeUQsVUFBVyxHQUNYQyxVQUFXLEdBQ1g2QixhQUFhLElBRVhDLEVBQVMsSUFBSXhFLEVBQVksQ0FDM0JHLEtBQU0sRUFDTmQsU0FBVSxJQUFJTixJQUFjLEdBQUksRUFBRyxHQUNuQ3FCLFNBQVVrRSxJQUVkRSxFQUFPckQsS0FBS3NDLE1BQU0xRCxLQUFLLElBQUloQixJQUFjLEVBQUcsR0FBSyxJQUNqREwsS0FBS3lDLEtBQUs1QixJQUFJaUYsRUFBT3JELCtDQUlyQnpDLEtBQUsrRixZQUFjQyxTQUFTQyxjQUFjLE1BQzFDakcsS0FBSytGLFlBQVlHLFVBQVksZ0JBQzdCbEcsS0FBSytGLFlBQVlJLE1BQU1DLE9BQVMsT0FDaENwRyxLQUFLK0YsWUFBWUksTUFBTUUsVUFBWSxPQUNuQ3JHLEtBQUsrRixZQUFZSSxNQUFNRyxjQUFnQixTQUN2Q3RHLEtBQUsrRixZQUFZSSxNQUFNSSxXQUFhLHFCQUNwQ3ZHLEtBQUsrRixZQUFZSSxNQUFNN0YsTUFBUSxlQUMvQk4sS0FBSytGLFlBQVlJLE1BQU1LLFdBQWEsVUFDcEN4RyxLQUFLK0YsWUFBWUksTUFBTU0sT0FBUyxVQUNoQ3pHLEtBQUsrRixZQUFZSSxNQUFNTyxjQUFnQixRQUN2Q1YsU0FBU1csS0FBS0MsWUFBWTVHLEtBQUsrRiw0Q0FJNUJjLEdBQ0gsSUFBTUMsRUFBOEIsR0FBZEQsRUFFdEI3RyxLQUFLK0csa0JBQWtCRCxHQUV2QjlHLEtBQUtnSCxhQUFhSCw2Q0FHSkMsR0FDZCxJQUFLLElBQUl6RSxFQUFJLEVBQUdBLEVBQUlyQyxLQUFLb0UsWUFBWTZDLFNBQVMvRSxPQUFRRyxJQUFLLENBQ3ZELElBQU02RSxFQUFRbEgsS0FBS29FLFlBQVk2QyxTQUFTNUUsR0FDbEM4RSxFQUFTRCxFQUFNdkcsU0FDckJ3RyxFQUFPQyxFQUFJNUcsS0FBS2tGLElBQUtyRCxFQUFJN0IsS0FBSytFLEdBQUssSUFBUXVCLEdBQzNDSSxFQUFNdkcsU0FBU1UsS0FBSzhGLHlDQUlmTixHQUNUN0csS0FBSzRDLE1BQU1XLE9BQU81QyxTQUFTVSxLQUN2QixJQUFJaEIsSUFDOEIsR0FBOUJHLEtBQUttRixJQUFrQixJQUFka0IsR0FBMEIsRUFDbkNyRyxLQUFLbUYsSUFBa0IsR0FBZGtCLEdBQW9CLEVBQzdCLEtBRVI3RyxLQUFLNEMsTUFBTVcsT0FBT00sT0FBTyxJQUFJeEQsSUFBYyxFQUFHLElBQUssSUFDbkRMLEtBQUs0QyxNQUFNVyxPQUFPOEQsNERBSWxCckIsU0FBU1csS0FBS1csWUFBWXRILEtBQUsrRix5SUNwTGxCdkIsRUFDbkIsU0FBQUEsRUFBQWpELEdBQTRDLElBQUFDLEVBQUFELEVBQS9CRSxZQUErQixJQUFBRCxFQUF4QixFQUF3QkEsRUFBckJFLEVBQXFCSCxFQUFyQkcsU0FBVWYsRUFBV1ksRUFBWFosc0dBQVdaLENBQUFDLEtBQUF3RSxHQUMxQ3hFLEtBQUs4QixLQUFPdEIsS0FBS3VCLFNBQ2pCLElBQU16QixFQUFXLEVBQVhBLEVBQWdCLEVBQWhCQSxFQUFxQixFQUMzQk4sS0FBS00sTUFBUSxJQUFJRCxJQUNqQkwsS0FBS00sTUFBTTBCLE9BQU8xQixFQUFTQSxFQUFTQSxHQUVwQ04sS0FBSzBCLFNBQVdBLEdBQVksSUFBSXJCLElBQXdCLENBQ3REQyxNQUFPTixLQUFLTSxRQUdkTixLQUFLbUMsU0FBVyxJQUFJOUIsSUFBa0JvQixFQUFNQSxFQUFNQSxHQUVsRHpCLEtBQUt3QyxLQUFPLElBQUluQyxJQUNkTCxLQUFLbUMsU0FDTG5DLEtBQUswQixVQUdIZixHQUNGWCxLQUFLd0MsS0FBSzdCLFNBQVNVLEtBQUtWLEdBRzFCWCxLQUFLeUMsS0FBT3pDLEtBQUt3Qyx5QkNyQnJCLElBQUErRSxFQUFjQyxFQUFRLElBQ3RCLGlCQUFBRCxNQUFBLEVBQTRDRSxFQUFBcEYsRUFBU2tGLEVBQUEsTUFJckQsSUFBQUcsRUFBQSxDQUFlQyxLQUFBLEVBQ2ZDLGVBSEFBLEdBS2FKLEVBQVEsRUFBUkEsQ0FBMkNELEVBQUFHLEdBQ3hESCxFQUFBTSxTQUFBSixFQUFBSyxRQUFBUCxFQUFBTSwwQkNaQUosRUFBQUssUUFBMkJOLEVBQVEsRUFBUkEsTUFBdUNPLElBS2xFL0MsS0FBQSxDQUFjeUMsRUFBQXBGLEVBQVMsdU5BQTJObUYsRUFBUSxJQUErQixnQ0FBc0NBLEVBQVEsSUFBOEIsaURBQStDLHNCQ0xwWkMsRUFBQUssUUFBaUJOLEVBQUFRLEVBQXVCLCtDQ0F4Q1AsRUFBQUssUUFBaUJOLEVBQUFRLEVBQXVCIiwiZmlsZSI6Ii4vanMvU2t5c2NyYXBlcnNMb29wLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdoaXRlSGVtaSBleHRlbmRzIFRIUkVFLkdyb3VwIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcblxyXG4gICAgY29uc3QgaGVtaUxpZ2h0ID0gbmV3IFRIUkVFLkhlbWlzcGhlcmVMaWdodCggMHhmZmZmZmYsIDB4ZmZmZmZmLCAzLjAgKTtcclxuXHRcdGhlbWlMaWdodC5jb2xvci5zZXRIU0woXHJcblx0XHRcdE1hdGguTm9ybWFsaXplSHVlKDMyNSksIFxyXG5cdFx0XHQwLjEsXHJcblx0XHRcdDAuOTRcclxuXHRcdCk7XHJcblx0XHRoZW1pTGlnaHQuZ3JvdW5kQ29sb3Iuc2V0SFNMKFxyXG5cdFx0XHRNYXRoLk5vcm1hbGl6ZUh1ZSgzMjUpLCBcclxuXHRcdFx0MC4xLCBcclxuXHRcdFx0MC42NFxyXG5cdFx0KTtcclxuXHRcdGhlbWlMaWdodC5wb3NpdGlvbi5zZXQoIDAsIDIsIDAgKTtcclxuXHRcdHRoaXMuYWRkKCBoZW1pTGlnaHQgKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xyXG5pbXBvcnQgV2hpdGVIZW1pIGZyb20gJy4vV2hpdGVIZW1pLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFR3b0RpcmVjdGlvbmFscyBleHRlbmRzIFRIUkVFLkdyb3VwIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgY29uc3Qgd2hpdGVFbWkgPSBuZXcgV2hpdGVIZW1pKCk7XHJcbiAgICAgICAgdGhpcy5hZGQod2hpdGVFbWkpO1xyXG5cclxuICAgICAgICBjb25zdCBkaXJlY3Rpb25hbExpZ2h0ID0gbmV3IFRIUkVFLkRpcmVjdGlvbmFsTGlnaHQoJ3doaXRlJywgMC42NSk7XHJcbiAgICAgICAgY29uc3QgZGlyZWN0aW9uYWxMaWdodDIgPSBuZXcgVEhSRUUuRGlyZWN0aW9uYWxMaWdodCgnd2hpdGUnLCAwLjU1KTtcclxuXHJcbiAgICAgICAgZGlyZWN0aW9uYWxMaWdodC5wb3NpdGlvbi5jb3B5KFxyXG4gICAgICAgICAgICBuZXcgVEhSRUUuVmVjdG9yMyhcclxuICAgICAgICAgICAgICAgIDksXHJcbiAgICAgICAgICAgICAgICAzLjUsXHJcbiAgICAgICAgICAgICAgICAwXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBkaXJlY3Rpb25hbExpZ2h0Mi5wb3NpdGlvbi5jb3B5KFxyXG4gICAgICAgICAgICBuZXcgVEhSRUUuVmVjdG9yMyhcclxuICAgICAgICAgICAgICAgIC0xMCxcclxuICAgICAgICAgICAgICAgIDIsXHJcbiAgICAgICAgICAgICAgICAwXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICB0aGlzLmFkZChkaXJlY3Rpb25hbExpZ2h0LCBkaXJlY3Rpb25hbExpZ2h0Mik7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNpY1NwaGVyZSB7XHJcbiAgY29uc3RydWN0b3Ioe3NpemUgPSA1LCBtYXRlcmlhbCwgcG9zaXRpb24sIHdpZHRoU2VnbWVudHMsIGhlaWdodFNlZ21lbnRzfSkge1xyXG4gICAgdGhpcy5zZWVkID0gTWF0aC5yYW5kb20oKTtcclxuICAgIGNvbnN0IGNvbG9yID0ge3I6MSAsZzoxLCBiOjF9O1xyXG4gICAgdGhpcy5jb2xvciA9IG5ldyBUSFJFRS5Db2xvcigpO1xyXG4gICAgdGhpcy5jb2xvci5zZXRSR0IoY29sb3IuciwgY29sb3IuZywgY29sb3IuYik7XHJcblxyXG4gICAgdGhpcy5tYXRlcmlhbCA9IG1hdGVyaWFsIHx8IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7XHJcbiAgICAgIGNvbG9yOiB0aGlzLmNvbG9yXHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgY29uc3QgU3BoZXJlID0gbWF0ZXJpYWwubGVuZ3RoID4gMSA/IFRIUkVFLlNwaGVyZUJ1ZmZlckdlb21ldHJ5IDogVEhSRUUuU3BoZXJlR2VvbWV0cnk7XHJcblxyXG4gICAgdGhpcy5nZW9tZXRyeSA9IG5ldyBTcGhlcmUoXHJcbiAgICAgIHNpemUsIFxyXG4gICAgICB3aWR0aFNlZ21lbnRzIHx8IDcsIFxyXG4gICAgICBoZWlnaHRTZWdtZW50cyB8fCA5KTtcclxuICAgIFxyXG4gICAgaWYgKG1hdGVyaWFsLmxlbmd0aCkge1xyXG4gICAgICB0aGlzLmdlb21ldHJ5LmNsZWFyR3JvdXBzKCk7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWF0ZXJpYWwubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB0aGlzLmdlb21ldHJ5LmFkZEdyb3VwKCAwLCBJbmZpbml0eSwgaSApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5tZXNoID0gbmV3IFRIUkVFLk1lc2goXHJcbiAgICAgIHRoaXMuZ2VvbWV0cnksXHJcbiAgICAgIHRoaXMubWF0ZXJpYWxcclxuICAgICk7XHJcblxyXG4gICAgaWYgKHBvc2l0aW9uKSB7XHJcbiAgICAgIHRoaXMubWVzaC5wb3NpdGlvbi5jb3B5KHBvc2l0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnJvb3QgPSB0aGlzLm1lc2g7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcclxuaW1wb3J0IExpZ2h0cyBmcm9tICcuLi9MaWdodHMvVHdvRGlyZWN0aW9uYWxzLmpzJztcclxuaW1wb3J0IEJhc2ljQ3ViZSBmcm9tICcuLi9PYmplY3RzL0Jhc2ljQ3ViZS5qcyc7XHJcbmltcG9ydCBCYXNpY1NwaGVyZSBmcm9tICcuLi9PYmplY3RzL0Jhc2ljU3BoZXJlLmpzJztcclxucmVxdWlyZSgndHlwZWZhY2UtdnQzMjMnKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNreXNjcmFwZXJzTG9vcCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7c2NlbmUsIG9uTG9hZH0pIHtcclxuICAgICAgICB0aGlzLnNjZW5lID0gc2NlbmU7XHJcblxyXG4gICAgICAgIHRoaXMuZWRpdFNjZW5lKCk7XHJcblxyXG4gICAgICAgIHRoaXMucm9vdCA9IG5ldyBUSFJFRS5Hcm91cCgpO1xyXG5cclxuICAgICAgICBjb25zdCBsaWdodHMgPSBuZXcgTGlnaHRzKCk7XHJcbiAgICAgICAgdGhpcy5yb290LmFkZChsaWdodHMpO1xyXG5cclxuICAgICAgICB0aGlzLmFkZFNreXNjcmFwZXJzKCk7XHJcblxyXG4gICAgICAgIHRoaXMuYWRkU2t5KCk7XHJcblxyXG4gICAgICAgIHRoaXMuYWRkR3JvdW5kKCk7XHJcblxyXG4gICAgICAgIHRoaXMuYWRkV2hlcmVBcmVZb3UoKTtcclxuXHJcbiAgICAgICAgaWYgKG9uTG9hZCkgb25Mb2FkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZWRpdFNjZW5lKCkge1xyXG4gICAgICAgIGNvbnN0IGZydXN0dW1TaXplID0gNztcclxuICAgICAgICBjb25zdCBhc3BlY3QgPSB0aGlzLnNjZW5lLmNhbWVyYS5hc3BlY3Q7XHJcbiAgICAgICAgY29uc3QgY2xlYXJDb2xvciA9IG5ldyBUSFJFRS5Db2xvcigpO1xyXG4gICAgICAgIGNsZWFyQ29sb3Iuc2V0SW50SFNMKDI0NCwgMzAsIDgpO1xyXG4gICAgICAgIHRoaXMuc2NlbmUucmVuZGVyZXIuc2V0Q2xlYXJDb2xvcihjbGVhckNvbG9yKTtcclxuICAgICAgICB0aGlzLnNjZW5lLmNhbWVyYSA9IG5ldyBUSFJFRS5PcnRob2dyYXBoaWNDYW1lcmEoZnJ1c3R1bVNpemUgKiBhc3BlY3QgLyAtMiwgZnJ1c3R1bVNpemUgKiBhc3BlY3QgLyAyLCBmcnVzdHVtU2l6ZSAvIDIsIGZydXN0dW1TaXplIC8gLTIsIDAuMSwgMTUwKTtcclxuICAgICAgICB0aGlzLnNjZW5lLmNhbWVyYS5wb3NpdGlvbi5jb3B5KG5ldyBUSFJFRS5WZWN0b3IzKDEwLCAxMCwgMTApKTtcclxuICAgICAgICB0aGlzLnNjZW5lLmNhbWVyYS5sb29rQXQobmV3IFRIUkVFLlZlY3RvcjMoMCwgMCwgMCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFNreXNjcmFwZXJzKCkge1xyXG4gICAgICAgIGNvbnN0IHNreVNjcmFwZXJNYXQgPSBuZXcgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwoe1xyXG4gICAgICAgICAgICBjb2xvcjogMHg0MTNmNTAsXHJcbiAgICAgICAgICAgIG1ldGFsbmVzczogMC4zLFxyXG4gICAgICAgICAgICByb3VnaG5lc3M6IDAuMlxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCB3aW5kb3dPZmZNYXQgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoe1xyXG4gICAgICAgICAgICBjb2xvcjogMHgyMzFmMzdcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3Qgd2luZG93T25NYXQgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoe1xyXG4gICAgICAgICAgICBjb2xvcjogMHhjY2NjZGQgLy8weGI3YTUxZlxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmN1YmVzID0gW107XHJcblxyXG4gICAgICAgIGNvbnN0IGhhbGZDb3VudCA9IDU7XHJcblxyXG4gICAgICAgIHRoaXMuY3ViZXNQYXJlbnQgPSBuZXcgVEhSRUUuR3JvdXAoKTtcclxuICAgICAgICBmb3IgKGxldCB4ID0gLWhhbGZDb3VudDsgeCA8IGhhbGZDb3VudDsgeCsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHogPSAtaGFsZkNvdW50OyB6IDwgaGFsZkNvdW50OyB6KyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0N1YmUgPSBuZXcgQmFzaWNDdWJlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZTogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF0ZXJpYWw6IHNreVNjcmFwZXJNYXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBuZXcgVEhSRUUuVmVjdG9yMyh4KjEuNSArIChNYXRoLnJhbmRvbSgpLTAuNSksIDAsIHoqMS41KVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCA4MDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeE9mZnNldCA9IE1hdGgucmFuZG9tKCkgPiAwLjUgPyAwLjUgOiAtMC41O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh4T2Zmc2V0IDwgMCkgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHlPZmZzZXQgPSAoKE1hdGgucmFuZG9tKCkpICogMC44KSAtIDAuNDtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgek9mZnNldCA9IE1hdGgucmFuZG9tKCkgKiAoTWF0aC5yYW5kb20oKSA+IDAuNSA/IDAuNCA6IC0wLjQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQgPSBNYXRoLnJvdW5kKHlPZmZzZXQgKiAxMCkgKiAwLjE7XHJcbiAgICAgICAgICAgICAgICAgICAgek9mZnNldCA9IE1hdGgucm91bmQoek9mZnNldCAqIDUpICogMC4yO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1dpbmRvdyA9IG5ldyBCYXNpY0N1YmUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplOiAwLjA1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXRlcmlhbDogTWF0aC5yYW5kb20oKSA+IDAuMSA/IHdpbmRvd09mZk1hdCA6IHdpbmRvd09uTWF0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogbmV3IFRIUkVFLlZlY3RvcjMoek9mZnNldCwgeU9mZnNldCwgeE9mZnNldClcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIG5ld0N1YmUucm9vdC5hZGQobmV3V2luZG93LnJvb3QpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbmV3Q3ViZS5yb290LnNjYWxlLmNvcHkobmV3IFRIUkVFLlZlY3RvcjMoMSwyLDEpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3ViZXNQYXJlbnQuYWRkKG5ld0N1YmUucm9vdCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1YmVzLnB1c2gobmV3Q3ViZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yb290LmFkZCh0aGlzLmN1YmVzUGFyZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRTa3koKSB7XHJcbiAgICAgICAgY29uc3Qgc2t5TWF0ID0gbmV3IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsKHtcclxuICAgICAgICAgICAgY29sb3I6IDB4MDUwMzI5LFxyXG4gICAgICAgICAgICBtZXRhbG5lc3M6IDAuMSxcclxuICAgICAgICAgICAgcm91Z2huZXNzOiAwLjksXHJcbiAgICAgICAgICAgIHNpZGU6IFRIUkVFLkJhY2tTaWRlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3Qgc3RhcnNNYXQgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoe1xyXG4gICAgICAgICAgICBjb2xvcjogMHhjY2NjZGQsXHJcbiAgICAgICAgICAgIHNpZGU6IFRIUkVFLkJhY2tTaWRlLFxyXG4gICAgICAgICAgICB3aXJlZnJhbWU6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBza3kgPSBuZXcgQmFzaWNTcGhlcmUoe1xyXG4gICAgICAgICAgICBzaXplOiA1LFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogbmV3IFRIUkVFLlZlY3RvcjMoLTAuNSwgMSwgMCksXHJcbiAgICAgICAgICAgIG1hdGVyaWFsOiBza3lNYXQsXHJcbiAgICAgICAgICAgIGhlaWdodFNlZ21lbnRzOiA3MixcclxuICAgICAgICAgICAgd2lkdGhTZWdtZW50czogMTI4XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2t5LnJvb3Quc2NhbGUuY29weShuZXcgVEhSRUUuVmVjdG9yMygxMCwgOS4yNSwgMTApKTtcclxuICAgICAgICB0aGlzLnJvb3QuYWRkKHNreS5yb290KTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEyMDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBoeSA9IE1hdGgucmFuZG9tKCkgKiBNYXRoLlBJICogMjtcclxuICAgICAgICAgICAgY29uc3QgdGhldGEgPSBNYXRoLnJhbmRvbSgpICogTWF0aC5QSSAqIDAuNjtcclxuICAgICAgICAgICAgY29uc3QgbmV3U3RhciA9IG5ldyBCYXNpY1NwaGVyZSh7XHJcbiAgICAgICAgICAgICAgICBzaXplOiAwLjAxOCxcclxuICAgICAgICAgICAgICAgIG1hdGVyaWFsOiBzdGFyc01hdCxcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBuZXcgVEhSRUUuVmVjdG9yMyhNYXRoLnNpbihwaHkpICogMjAsIE1hdGguY29zKHRoZXRhKSAqIDgsIC0xMClcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMucm9vdC5hZGQobmV3U3Rhci5yb290KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYWRkR3JvdW5kKCkge1xyXG4gICAgICAgIGNvbnN0IGdyb3VuZE1hdCA9IG5ldyBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCh7XHJcbiAgICAgICAgICAgIGNvbG9yOiAweDEzMTMxMyxcclxuICAgICAgICAgICAgbWV0YWxuZXNzOiAwLjcsXHJcbiAgICAgICAgICAgIHJvdWdobmVzczogMC45LFxyXG4gICAgICAgICAgICBmbGF0U2hhZGluZzogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IGdyb3VuZCA9IG5ldyBCYXNpY1NwaGVyZSh7XHJcbiAgICAgICAgICAgIHNpemU6IDMsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBuZXcgVEhSRUUuVmVjdG9yMygwLCAtMSwgMCksXHJcbiAgICAgICAgICAgIG1hdGVyaWFsOiBncm91bmRNYXRcclxuICAgICAgICB9KTtcclxuICAgICAgICBncm91bmQucm9vdC5zY2FsZS5jb3B5KG5ldyBUSFJFRS5WZWN0b3IzKDUsIDAuNSwgNCkpO1xyXG4gICAgICAgIHRoaXMucm9vdC5hZGQoZ3JvdW5kLnJvb3QpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFdoZXJlQXJlWW91KCkge1xyXG4gICAgICAgIHRoaXMud2hlcmVBcmVZb3UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgICAgIHRoaXMud2hlcmVBcmVZb3UuaW5uZXJIVE1MID0gXCJ3aGVyZSBhcmUgeW91XCI7XHJcbiAgICAgICAgdGhpcy53aGVyZUFyZVlvdS5zdHlsZS5tYXJnaW4gPSAnYXV0byc7XHJcbiAgICAgICAgdGhpcy53aGVyZUFyZVlvdS5zdHlsZS5tYXJnaW5Ub3AgPSAnMzB2aCc7XHJcbiAgICAgICAgdGhpcy53aGVyZUFyZVlvdS5zdHlsZS52ZXJ0aWNhbEFsaWduID0gJ21pZGRsZSc7XHJcbiAgICAgICAgdGhpcy53aGVyZUFyZVlvdS5zdHlsZS5mb250RmFtaWx5ID0gXCInVlQzMjMnLCBtb25vc3BhY2VcIjtcclxuICAgICAgICB0aGlzLndoZXJlQXJlWW91LnN0eWxlLmNvbG9yID0gJ2FudGlxdWV3aGl0ZSc7XHJcbiAgICAgICAgdGhpcy53aGVyZUFyZVlvdS5zdHlsZS5mb250V2VpZ2h0ID0gJ2xpZ2h0ZXInO1xyXG4gICAgICAgIHRoaXMud2hlcmVBcmVZb3Uuc3R5bGUuY3Vyc29yID0gJ2RlZmF1bHQnO1xyXG4gICAgICAgIHRoaXMud2hlcmVBcmVZb3Uuc3R5bGUubGV0dGVyU3BhY2luZyA9ICcwLjJlbSc7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLndoZXJlQXJlWW91KTtcclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIHVwZGF0ZSh0aW1lRWxhcHNlZCkge1xyXG4gICAgICAgIGNvbnN0IGFuaW1hdGlvblRpbWUgPSB0aW1lRWxhcHNlZCAqIDAuMjtcclxuICAgIFxyXG4gICAgICAgIHRoaXMudXBkYXRlU2t5c2NyYXBlcnMoYW5pbWF0aW9uVGltZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy51cGRhdGVDYW1lcmEodGltZUVsYXBzZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVNreXNjcmFwZXJzKGFuaW1hdGlvblRpbWUpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY3ViZXNQYXJlbnQuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgY2hpbGQgPSB0aGlzLmN1YmVzUGFyZW50LmNoaWxkcmVuW2ldO1xyXG4gICAgICAgICAgICBjb25zdCBuZXdQb3MgPSBjaGlsZC5wb3NpdGlvbjtcclxuICAgICAgICAgICAgbmV3UG9zLnkgPSBNYXRoLnNpbigoaSAqIE1hdGguUEkgKiAwLjI1KSArIGFuaW1hdGlvblRpbWUpO1xyXG4gICAgICAgICAgICBjaGlsZC5wb3NpdGlvbi5jb3B5KG5ld1Bvcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUNhbWVyYSh0aW1lRWxhcHNlZCkge1xyXG4gICAgICAgIHRoaXMuc2NlbmUuY2FtZXJhLnBvc2l0aW9uLmNvcHkoXHJcbiAgICAgICAgICAgIG5ldyBUSFJFRS5WZWN0b3IzKFxyXG4gICAgICAgICAgICAgICAgTWF0aC5jb3ModGltZUVsYXBzZWQgKiAuMTIpICogMTAgKyAyLFxyXG4gICAgICAgICAgICAgICAgTWF0aC5jb3ModGltZUVsYXBzZWQgKiAuMikgKyAxLFxyXG4gICAgICAgICAgICAgICAgMzApXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5zY2VuZS5jYW1lcmEubG9va0F0KG5ldyBUSFJFRS5WZWN0b3IzKDAsIDIuNSwgNikpO1xyXG4gICAgICAgIHRoaXMuc2NlbmUuY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcclxuICAgIH1cclxuXHJcbiAgICBvblJlbW92ZSgpIHtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMud2hlcmVBcmVZb3UpO1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2ljQ3ViZSB7XHJcbiAgY29uc3RydWN0b3Ioe3NpemUgPSA1LCBtYXRlcmlhbCwgcG9zaXRpb259KSB7XHJcbiAgICB0aGlzLnNlZWQgPSBNYXRoLnJhbmRvbSgpO1xyXG4gICAgY29uc3QgY29sb3IgPSB7cjoxICxnOjEsIGI6MX07XHJcbiAgICB0aGlzLmNvbG9yID0gbmV3IFRIUkVFLkNvbG9yKCk7XHJcbiAgICB0aGlzLmNvbG9yLnNldFJHQihjb2xvci5yLCBjb2xvci5nLCBjb2xvci5iKTtcclxuXHJcbiAgICB0aGlzLm1hdGVyaWFsID0gbWF0ZXJpYWwgfHwgbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHtcclxuICAgICAgY29sb3I6IHRoaXMuY29sb3JcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZ2VvbWV0cnkgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoc2l6ZSwgc2l6ZSwgc2l6ZSk7XHJcblxyXG4gICAgdGhpcy5tZXNoID0gbmV3IFRIUkVFLk1lc2goXHJcbiAgICAgIHRoaXMuZ2VvbWV0cnksXHJcbiAgICAgIHRoaXMubWF0ZXJpYWxcclxuICAgICk7XHJcblxyXG4gICAgaWYgKHBvc2l0aW9uKSB7XHJcbiAgICAgIHRoaXMubWVzaC5wb3NpdGlvbi5jb3B5KHBvc2l0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnJvb3QgPSB0aGlzLm1lc2g7XHJcbiAgfVxyXG59XHJcbiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9jc3MtbG9hZGVyL2luZGV4LmpzIS4vaW5kZXguY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBQcmVwYXJlIGNzc1RyYW5zZm9ybWF0aW9uXG52YXIgdHJhbnNmb3JtO1xuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9pbmRleC5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9pbmRleC5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh1bmRlZmluZWQpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyogdnQzMjMtNDAwbm9ybWFsIC0gbGF0aW4gKi9cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnVlQzMjMnO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIHNyYzpcXG4gICAgbG9jYWwoJ1ZUMzIzIFJlZ3VsYXIgJyksXFxuICAgIGxvY2FsKCdWVDMyMy1SZWd1bGFyJyksXFxuICAgIHVybChcIiArIHJlcXVpcmUoXCIuL2ZpbGVzL3Z0MzIzLWxhdGluLTQwMC53b2ZmMlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYyJyksIFxcbiAgICB1cmwoXCIgKyByZXF1aXJlKFwiLi9maWxlcy92dDMyMy1sYXRpbi00MDAud29mZlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYnKTsgLyogTW9kZXJuIEJyb3dzZXJzICovXFxufVxcblxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImZvbnRzL3Z0MzIzLWxhdGluLTQwMC53b2ZmMlwiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImZvbnRzL3Z0MzIzLWxhdGluLTQwMC53b2ZmXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==
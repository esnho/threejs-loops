(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{15:function(t,e,o){"use strict";o.d(e,"a",function(){return r});var n=o(14);var r=function t(e){var o=e.size,r=void 0===o?5:o,i=e.material,a=e.position;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.seed=Math.random();var s=1,c=1,u=1;this.color=new n.d,this.color.setRGB(s,c,u),this.material=i||new n.l({color:this.color}),this.geometry=new n.b(r,r,r),this.mesh=new n.k(this.geometry,this.material),a&&this.mesh.position.copy(a),this.root=this.mesh}},20:function(t,e,o){var n=o(21);"string"==typeof n&&(n=[[t.i,n,""]]);var r={hmr:!0,transform:void 0};o(1)(n,r);n.locals&&(t.exports=n.locals)},21:function(t,e,o){(t.exports=o(0)(void 0)).push([t.i,"/* vt323-400normal - latin */\n@font-face {\n  font-family: 'VT323';\n  font-style: normal;\n  font-display: swap;\n  font-weight: 400;\n  src:\n    local('VT323 Regular '),\n    local('VT323-Regular'),\n    url("+o(22)+") format('woff2'), \n    url("+o(23)+") format('woff'); /* Modern Browsers */\n}\n\n",""])},22:function(t,e,o){t.exports=o.p+"fonts/vt323-latin-400.woff2"},23:function(t,e,o){t.exports=o.p+"fonts/vt323-latin-400.woff"},5:function(t,e,o){"use strict";o.r(e);var n=o(14);function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var c=function(t){function e(){var t;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),t=i(this,a(e).call(this));var o=new n.i(16777215,16777215,3);return o.color.setHSL(Math.NormalizeHue(325),.1,.94),o.groundColor.setHSL(Math.NormalizeHue(325),.1,.64),o.position.set(0,2,0),t.add(o),t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(e,n["h"]),e}();function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function h(t,e){return!e||"object"!==u(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var p=function(t){function e(){var t;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),t=h(this,l(e).call(this));var o=new c;t.add(o);var r=new n.f("white",.65),i=new n.f("white",.55);return r.position.copy(new n.t(9,3.5,0)),i.position.copy(new n.t(-10,2,0)),t.add(r,i),t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(e,n["h"]),e}(),d=o(15);var y=function t(e){var o=e.size,r=void 0===o?5:o,i=e.material,a=e.position,s=e.widthSegments,c=e.heightSegments;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.seed=Math.random();var u=1,h=1,l=1;this.color=new n.d,this.color.setRGB(u,h,l),this.material=i||new n.l({color:this.color});var f=i.length>1?n.r:n.s;if(this.geometry=new f(r,s||7,c||9),i.length){this.geometry.clearGroups();for(var p=0;p<i.length;p++)this.geometry.addGroup(0,1/0,p)}this.mesh=new n.k(this.geometry,this.material),a&&this.mesh.position.copy(a),this.root=this.mesh};function w(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}o.d(e,"default",function(){return m}),o(20);var m=function(){function t(e){var o=e.scene,r=e.onLoad;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.scene=o,this.editScene(),this.root=new n.h;var i=new p;this.root.add(i),this.addSkyscrapers(),this.addSky(),this.addGround(),this.addWhereAreYou(),r&&r()}var e,o,r;return e=t,(o=[{key:"editScene",value:function(){var t=this.scene.camera.aspect,e=new n.d;e.setIntHSL(244,30,8),this.scene.renderer.setClearColor(e),this.scene.camera=new n.n(7*t/-2,7*t/2,3.5,-3.5,.1,150),this.scene.camera.position.copy(new n.t(10,10,10)),this.scene.camera.lookAt(new n.t(0,0,0))}},{key:"addSkyscrapers",value:function(){var t=new n.m({color:4276048,metalness:.3,roughness:.2}),e=new n.l({color:2301751}),o=new n.l({color:13421789});this.cubes=[];this.cubesParent=new n.h;for(var r=-5;r<5;r++)for(var i=-5;i<5;i++){for(var a=new d.a({size:1,material:t,position:new n.t(1.5*r+(Math.random()-.5),0,1.5*i)}),s=0;s<80;s++){var c=Math.random()>.5?.5:-.5;if(!(c<0)){var u=.8*Math.random()-.4,h=Math.random()*(Math.random()>.5?.4:-.4);u=.1*Math.round(10*u),h=.2*Math.round(5*h);var l=new d.a({size:.05,material:Math.random()>.1?e:o,position:new n.t(h,u,c)});a.root.add(l.root)}}a.root.scale.copy(new n.t(1,2,1)),this.cubesParent.add(a.root),this.cubes.push(a)}this.root.add(this.cubesParent)}},{key:"addSky",value:function(){var t=new n.m({color:328489,metalness:.1,roughness:.9,side:n.a}),e=new n.l({color:13421789,side:n.a,wireframe:!0}),o=new y({size:5,position:new n.t(-.5,1,0),material:t,heightSegments:72,widthSegments:128});o.root.scale.copy(new n.t(10,9.25,10)),this.root.add(o.root);for(var r=0;r<120;r++){var i=Math.random()*Math.PI*2,a=Math.random()*Math.PI*.6,s=new y({size:.018,material:e,position:new n.t(20*Math.sin(i),8*Math.cos(a),-10)});this.root.add(s.root)}}},{key:"addGround",value:function(){var t=new n.m({color:1250067,metalness:.7,roughness:.9,flatShading:!0}),e=new y({size:3,position:new n.t(0,-1,0),material:t});e.root.scale.copy(new n.t(5,.5,4)),this.root.add(e.root)}},{key:"addWhereAreYou",value:function(){this.whereAreYou=document.createElement("h1"),this.whereAreYou.innerHTML="where are you",this.whereAreYou.style.margin="auto",this.whereAreYou.style.marginTop="30vh",this.whereAreYou.style.verticalAlign="middle",this.whereAreYou.style.fontFamily="'VT323', monospace",this.whereAreYou.style.color="antiquewhite",this.whereAreYou.style.fontWeight="lighter",this.whereAreYou.style.cursor="default",this.whereAreYou.style.letterSpacing="0.2em",document.body.appendChild(this.whereAreYou)}},{key:"update",value:function(t){var e=.2*t;this.updateSkyscrapers(e),this.updateCamera(t)}},{key:"updateSkyscrapers",value:function(t){for(var e=0;e<this.cubesParent.children.length;e++){var o=this.cubesParent.children[e],n=o.position;n.y=Math.sin(e*Math.PI*.25+t),o.position.copy(n)}}},{key:"updateCamera",value:function(t){this.scene.camera.position.copy(new n.t(10*Math.cos(.12*t)+2,Math.cos(.2*t)+1,30)),this.scene.camera.lookAt(new n.t(0,2.5,6)),this.scene.camera.updateProjectionMatrix()}},{key:"onRemove",value:function(){document.body.removeChild(this.whereAreYou)}}])&&w(e.prototype,o),r&&w(e,r),t}()}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvT2JqZWN0cy9CYXNpY0N1YmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3R5cGVmYWNlLXZ0MzIzL2luZGV4LmNzcz84MDgzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90eXBlZmFjZS12dDMyMy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3R5cGVmYWNlLXZ0MzIzL2ZpbGVzL3Z0MzIzLWxhdGluLTQwMC53b2ZmMiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdHlwZWZhY2UtdnQzMjMvZmlsZXMvdnQzMjMtbGF0aW4tNDAwLndvZmYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0xpZ2h0cy9XaGl0ZUhlbWkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0xpZ2h0cy9Ud29EaXJlY3Rpb25hbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL09iamVjdHMvQmFzaWNTcGhlcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0xvb3BzL1NreXNjcmFwZXJzTG9vcC5qcyJdLCJuYW1lcyI6WyJCYXNpY0N1YmUiLCJfcmVmIiwiX3JlZiRzaXplIiwic2l6ZSIsIm1hdGVyaWFsIiwicG9zaXRpb24iLCJfY2xhc3NDYWxsQ2hlY2siLCJ0aGlzIiwic2VlZCIsIk1hdGgiLCJyYW5kb20iLCJjb2xvciIsIlRIUkVFIiwic2V0UkdCIiwiZ2VvbWV0cnkiLCJtZXNoIiwiY29weSIsInJvb3QiLCJjb250ZW50IiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZSIsImkiLCJvcHRpb25zIiwiaG1yIiwidHJhbnNmb3JtIiwibG9jYWxzIiwiZXhwb3J0cyIsInVuZGVmaW5lZCIsInB1c2giLCJwIiwiV2hpdGVIZW1pIiwiX3RoaXMiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiIsIl9nZXRQcm90b3R5cGVPZiIsImNhbGwiLCJoZW1pTGlnaHQiLCJzZXRIU0wiLCJOb3JtYWxpemVIdWUiLCJncm91bmRDb2xvciIsInNldCIsImFkZCIsIlR3b0RpcmVjdGlvbmFscyIsIlR3b0RpcmVjdGlvbmFsc19jbGFzc0NhbGxDaGVjayIsIlR3b0RpcmVjdGlvbmFsc19wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIiwiVHdvRGlyZWN0aW9uYWxzX2dldFByb3RvdHlwZU9mIiwid2hpdGVFbWkiLCJkaXJlY3Rpb25hbExpZ2h0IiwiZGlyZWN0aW9uYWxMaWdodDIiLCJCYXNpY1NwaGVyZSIsIndpZHRoU2VnbWVudHMiLCJoZWlnaHRTZWdtZW50cyIsIkJhc2ljU3BoZXJlX2NsYXNzQ2FsbENoZWNrIiwiU3BoZXJlIiwibGVuZ3RoIiwiY2xlYXJHcm91cHMiLCJhZGRHcm91cCIsIkluZmluaXR5IiwicmVxdWlyZSIsIlNreXNjcmFwZXJzTG9vcCIsInNjZW5lIiwib25Mb2FkIiwiU2t5c2NyYXBlcnNMb29wX2NsYXNzQ2FsbENoZWNrIiwiZWRpdFNjZW5lIiwibGlnaHRzIiwiTGlnaHRzIiwiYWRkU2t5c2NyYXBlcnMiLCJhZGRTa3kiLCJhZGRHcm91bmQiLCJhZGRXaGVyZUFyZVlvdSIsImFzcGVjdCIsImNhbWVyYSIsImNsZWFyQ29sb3IiLCJzZXRJbnRIU0wiLCJyZW5kZXJlciIsInNldENsZWFyQ29sb3IiLCJmcnVzdHVtU2l6ZSIsImxvb2tBdCIsInNreVNjcmFwZXJNYXQiLCJtZXRhbG5lc3MiLCJyb3VnaG5lc3MiLCJ3aW5kb3dPZmZNYXQiLCJ3aW5kb3dPbk1hdCIsImN1YmVzIiwiY3ViZXNQYXJlbnQiLCJ4IiwieiIsIm5ld0N1YmUiLCJqIiwieE9mZnNldCIsInlPZmZzZXQiLCJ6T2Zmc2V0Iiwicm91bmQiLCJuZXdXaW5kb3ciLCJzY2FsZSIsInNreU1hdCIsInNpZGUiLCJzdGFyc01hdCIsIndpcmVmcmFtZSIsInNreSIsInBoeSIsIlBJIiwidGhldGEiLCJuZXdTdGFyIiwic2luIiwiY29zIiwiZ3JvdW5kTWF0IiwiZmxhdFNoYWRpbmciLCJncm91bmQiLCJ3aGVyZUFyZVlvdSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsInN0eWxlIiwibWFyZ2luIiwibWFyZ2luVG9wIiwidmVydGljYWxBbGlnbiIsImZvbnRGYW1pbHkiLCJmb250V2VpZ2h0IiwiY3Vyc29yIiwibGV0dGVyU3BhY2luZyIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInRpbWVFbGFwc2VkIiwiYW5pbWF0aW9uVGltZSIsInVwZGF0ZVNreXNjcmFwZXJzIiwidXBkYXRlQ2FtZXJhIiwiY2hpbGRyZW4iLCJjaGlsZCIsIm5ld1BvcyIsInkiLCJ1cGRhdGVQcm9qZWN0aW9uTWF0cml4IiwicmVtb3ZlQ2hpbGQiXSwibWFwcGluZ3MiOiJ5SUFFcUJBLEVBQ25CLFNBQUFBLEVBQUFDLEdBQTRDLElBQUFDLEVBQUFELEVBQS9CRSxZQUErQixJQUFBRCxFQUF4QixFQUF3QkEsRUFBckJFLEVBQXFCSCxFQUFyQkcsU0FBVUMsRUFBV0osRUFBWEksc0dBQVdDLENBQUFDLEtBQUFQLEdBQzFDTyxLQUFLQyxLQUFPQyxLQUFLQyxTQUNqQixJQUFNQyxFQUFXLEVBQVhBLEVBQWdCLEVBQWhCQSxFQUFxQixFQUMzQkosS0FBS0ksTUFBUSxJQUFJQyxJQUNqQkwsS0FBS0ksTUFBTUUsT0FBT0YsRUFBU0EsRUFBU0EsR0FFcENKLEtBQUtILFNBQVdBLEdBQVksSUFBSVEsSUFBd0IsQ0FDdERELE1BQU9KLEtBQUtJLFFBR2RKLEtBQUtPLFNBQVcsSUFBSUYsSUFBa0JULEVBQU1BLEVBQU1BLEdBRWxESSxLQUFLUSxLQUFPLElBQUlILElBQ2RMLEtBQUtPLFNBQ0xQLEtBQUtILFVBR0hDLEdBQ0ZFLEtBQUtRLEtBQUtWLFNBQVNXLEtBQUtYLEdBRzFCRSxLQUFLVSxLQUFPVixLQUFLUSwwQkNyQnJCLElBQUFHLEVBQWNDLEVBQVEsSUFDdEIsaUJBQUFELE1BQUEsRUFBNENFLEVBQUFDLEVBQVNILEVBQUEsTUFJckQsSUFBQUksRUFBQSxDQUFlQyxLQUFBLEVBQ2ZDLGVBSEFBLEdBS2FMLEVBQVEsRUFBUkEsQ0FBMkNE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LElBQUl0RyxFQUFJLEVBQUdBLEVBQUlkLEtBQUs0RSxZQUFZMkMsU0FBU3pFLE9BQVFoQyxJQUFLLENBQ3ZELElBQU0wRyxFQUFReEgsS0FBSzRFLFlBQVkyQyxTQUFTekcsR0FDbEMyRyxFQUFTRCxFQUFNMUgsU0FDckIySCxFQUFPQyxFQUFJeEgsS0FBSzhGLElBQUtsRixFQUFJWixLQUFLMkYsR0FBSyxJQUFRdUIsR0FDM0NJLEVBQU0xSCxTQUFTVyxLQUFLZ0gseUNBSWZOLEdBQ1RuSCxLQUFLb0QsTUFBTVcsT0FBT2pFLFNBQVNXLEtBQ3ZCLElBQUlKLElBQzhCLEdBQTlCSCxLQUFLK0YsSUFBa0IsSUFBZGtCLEdBQTBCLEVBQ25DakgsS0FBSytGLElBQWtCLEdBQWRrQixHQUFvQixFQUM3QixLQUVSbkgsS0FBS29ELE1BQU1XLE9BQU9NLE9BQU8sSUFBSWhFLElBQWMsRUFBRyxJQUFLLElBQ25ETCxLQUFLb0QsTUFBTVcsT0FBTzRELDREQUlsQnJCLFNBQVNXLEtBQUtXLFlBQVk1SCxLQUFLcUciLCJmaWxlIjoiLi9qcy9Ta3lzY3JhcGVyc0xvb3AuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNpY0N1YmUge1xuICBjb25zdHJ1Y3Rvcih7c2l6ZSA9IDUsIG1hdGVyaWFsLCBwb3NpdGlvbn0pIHtcbiAgICB0aGlzLnNlZWQgPSBNYXRoLnJhbmRvbSgpO1xuICAgIGNvbnN0IGNvbG9yID0ge3I6MSAsZzoxLCBiOjF9O1xuICAgIHRoaXMuY29sb3IgPSBuZXcgVEhSRUUuQ29sb3IoKTtcbiAgICB0aGlzLmNvbG9yLnNldFJHQihjb2xvci5yLCBjb2xvci5nLCBjb2xvci5iKTtcblxuICAgIHRoaXMubWF0ZXJpYWwgPSBtYXRlcmlhbCB8fCBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoe1xuICAgICAgY29sb3I6IHRoaXMuY29sb3JcbiAgICB9KTtcblxuICAgIHRoaXMuZ2VvbWV0cnkgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoc2l6ZSwgc2l6ZSwgc2l6ZSk7XG5cbiAgICB0aGlzLm1lc2ggPSBuZXcgVEhSRUUuTWVzaChcbiAgICAgIHRoaXMuZ2VvbWV0cnksXG4gICAgICB0aGlzLm1hdGVyaWFsXG4gICAgKTtcblxuICAgIGlmIChwb3NpdGlvbikge1xuICAgICAgdGhpcy5tZXNoLnBvc2l0aW9uLmNvcHkocG9zaXRpb24pO1xuICAgIH1cblxuICAgIHRoaXMucm9vdCA9IHRoaXMubWVzaDtcbiAgfVxufVxuIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9pbmRleC5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIFByZXBhcmUgY3NzVHJhbnNmb3JtYXRpb25cbnZhciB0cmFuc2Zvcm07XG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vY3NzLWxvYWRlci9pbmRleC5qcyEuL2luZGV4LmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vY3NzLWxvYWRlci9pbmRleC5qcyEuL2luZGV4LmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKiB2dDMyMy00MDBub3JtYWwgLSBsYXRpbiAqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdWVDMyMyc7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LWRpc3BsYXk6IHN3YXA7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgc3JjOlxcbiAgICBsb2NhbCgnVlQzMjMgUmVndWxhciAnKSxcXG4gICAgbG9jYWwoJ1ZUMzIzLVJlZ3VsYXInKSxcXG4gICAgdXJsKFwiICsgcmVxdWlyZShcIi4vZmlsZXMvdnQzMjMtbGF0aW4tNDAwLndvZmYyXCIpICsgXCIpIGZvcm1hdCgnd29mZjInKSwgXFxuICAgIHVybChcIiArIHJlcXVpcmUoXCIuL2ZpbGVzL3Z0MzIzLWxhdGluLTQwMC53b2ZmXCIpICsgXCIpIGZvcm1hdCgnd29mZicpOyAvKiBNb2Rlcm4gQnJvd3NlcnMgKi9cXG59XFxuXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZm9udHMvdnQzMjMtbGF0aW4tNDAwLndvZmYyXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZm9udHMvdnQzMjMtbGF0aW4tNDAwLndvZmZcIjsiLCJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdoaXRlSGVtaSBleHRlbmRzIFRIUkVFLkdyb3VwIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIGNvbnN0IGhlbWlMaWdodCA9IG5ldyBUSFJFRS5IZW1pc3BoZXJlTGlnaHQoIDB4ZmZmZmZmLCAweGZmZmZmZiwgMy4wICk7XG5cdFx0aGVtaUxpZ2h0LmNvbG9yLnNldEhTTChcblx0XHRcdE1hdGguTm9ybWFsaXplSHVlKDMyNSksIFxuXHRcdFx0MC4xLFxuXHRcdFx0MC45NFxuXHRcdCk7XG5cdFx0aGVtaUxpZ2h0Lmdyb3VuZENvbG9yLnNldEhTTChcblx0XHRcdE1hdGguTm9ybWFsaXplSHVlKDMyNSksIFxuXHRcdFx0MC4xLCBcblx0XHRcdDAuNjRcblx0XHQpO1xuXHRcdGhlbWlMaWdodC5wb3NpdGlvbi5zZXQoIDAsIDIsIDAgKTtcblx0XHR0aGlzLmFkZCggaGVtaUxpZ2h0ICk7XG5cdH1cbn1cbiIsImltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcbmltcG9ydCBXaGl0ZUhlbWkgZnJvbSAnLi9XaGl0ZUhlbWkuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUd29EaXJlY3Rpb25hbHMgZXh0ZW5kcyBUSFJFRS5Hcm91cCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIGNvbnN0IHdoaXRlRW1pID0gbmV3IFdoaXRlSGVtaSgpO1xuICAgICAgICB0aGlzLmFkZCh3aGl0ZUVtaSk7XG5cbiAgICAgICAgY29uc3QgZGlyZWN0aW9uYWxMaWdodCA9IG5ldyBUSFJFRS5EaXJlY3Rpb25hbExpZ2h0KCd3aGl0ZScsIDAuNjUpO1xuICAgICAgICBjb25zdCBkaXJlY3Rpb25hbExpZ2h0MiA9IG5ldyBUSFJFRS5EaXJlY3Rpb25hbExpZ2h0KCd3aGl0ZScsIDAuNTUpO1xuXG4gICAgICAgIGRpcmVjdGlvbmFsTGlnaHQucG9zaXRpb24uY29weShcbiAgICAgICAgICAgIG5ldyBUSFJFRS5WZWN0b3IzKFxuICAgICAgICAgICAgICAgIDksXG4gICAgICAgICAgICAgICAgMy41LFxuICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgIClcbiAgICAgICAgKTtcblxuICAgICAgICBkaXJlY3Rpb25hbExpZ2h0Mi5wb3NpdGlvbi5jb3B5KFxuICAgICAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoXG4gICAgICAgICAgICAgICAgLTEwLFxuICAgICAgICAgICAgICAgIDIsXG4gICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgKVxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuYWRkKGRpcmVjdGlvbmFsTGlnaHQsIGRpcmVjdGlvbmFsTGlnaHQyKTtcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNpY1NwaGVyZSB7XG4gIGNvbnN0cnVjdG9yKHtzaXplID0gNSwgbWF0ZXJpYWwsIHBvc2l0aW9uLCB3aWR0aFNlZ21lbnRzLCBoZWlnaHRTZWdtZW50c30pIHtcbiAgICB0aGlzLnNlZWQgPSBNYXRoLnJhbmRvbSgpO1xuICAgIGNvbnN0IGNvbG9yID0ge3I6MSAsZzoxLCBiOjF9O1xuICAgIHRoaXMuY29sb3IgPSBuZXcgVEhSRUUuQ29sb3IoKTtcbiAgICB0aGlzLmNvbG9yLnNldFJHQihjb2xvci5yLCBjb2xvci5nLCBjb2xvci5iKTtcblxuICAgIHRoaXMubWF0ZXJpYWwgPSBtYXRlcmlhbCB8fCBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoe1xuICAgICAgY29sb3I6IHRoaXMuY29sb3JcbiAgICB9KTtcbiAgICBcbiAgICBjb25zdCBTcGhlcmUgPSBtYXRlcmlhbC5sZW5ndGggPiAxID8gVEhSRUUuU3BoZXJlQnVmZmVyR2VvbWV0cnkgOiBUSFJFRS5TcGhlcmVHZW9tZXRyeTtcblxuICAgIHRoaXMuZ2VvbWV0cnkgPSBuZXcgU3BoZXJlKFxuICAgICAgc2l6ZSwgXG4gICAgICB3aWR0aFNlZ21lbnRzIHx8IDcsIFxuICAgICAgaGVpZ2h0U2VnbWVudHMgfHwgOSk7XG4gICAgXG4gICAgaWYgKG1hdGVyaWFsLmxlbmd0aCkge1xuICAgICAgdGhpcy5nZW9tZXRyeS5jbGVhckdyb3VwcygpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXRlcmlhbC5sZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLmdlb21ldHJ5LmFkZEdyb3VwKCAwLCBJbmZpbml0eSwgaSApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMubWVzaCA9IG5ldyBUSFJFRS5NZXNoKFxuICAgICAgdGhpcy5nZW9tZXRyeSxcbiAgICAgIHRoaXMubWF0ZXJpYWxcbiAgICApO1xuXG4gICAgaWYgKHBvc2l0aW9uKSB7XG4gICAgICB0aGlzLm1lc2gucG9zaXRpb24uY29weShwb3NpdGlvbik7XG4gICAgfVxuXG4gICAgdGhpcy5yb290ID0gdGhpcy5tZXNoO1xuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5pbXBvcnQgTGlnaHRzIGZyb20gJy4uL0xpZ2h0cy9Ud29EaXJlY3Rpb25hbHMuanMnO1xuaW1wb3J0IEJhc2ljQ3ViZSBmcm9tICcuLi9PYmplY3RzL0Jhc2ljQ3ViZS5qcyc7XG5pbXBvcnQgQmFzaWNTcGhlcmUgZnJvbSAnLi4vT2JqZWN0cy9CYXNpY1NwaGVyZS5qcyc7XG5yZXF1aXJlKCd0eXBlZmFjZS12dDMyMycpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTa3lzY3JhcGVyc0xvb3Age1xuICAgIGNvbnN0cnVjdG9yKHtzY2VuZSwgb25Mb2FkfSkge1xuICAgICAgICB0aGlzLnNjZW5lID0gc2NlbmU7XG5cbiAgICAgICAgdGhpcy5lZGl0U2NlbmUoKTtcblxuICAgICAgICB0aGlzLnJvb3QgPSBuZXcgVEhSRUUuR3JvdXAoKTtcblxuICAgICAgICBjb25zdCBsaWdodHMgPSBuZXcgTGlnaHRzKCk7XG4gICAgICAgIHRoaXMucm9vdC5hZGQobGlnaHRzKTtcblxuICAgICAgICB0aGlzLmFkZFNreXNjcmFwZXJzKCk7XG5cbiAgICAgICAgdGhpcy5hZGRTa3koKTtcblxuICAgICAgICB0aGlzLmFkZEdyb3VuZCgpO1xuXG4gICAgICAgIHRoaXMuYWRkV2hlcmVBcmVZb3UoKTtcblxuICAgICAgICBpZiAob25Mb2FkKSBvbkxvYWQoKTtcbiAgICB9XG5cbiAgICBlZGl0U2NlbmUoKSB7XG4gICAgICAgIGNvbnN0IGZydXN0dW1TaXplID0gNztcbiAgICAgICAgY29uc3QgYXNwZWN0ID0gdGhpcy5zY2VuZS5jYW1lcmEuYXNwZWN0O1xuICAgICAgICBjb25zdCBjbGVhckNvbG9yID0gbmV3IFRIUkVFLkNvbG9yKCk7XG4gICAgICAgIGNsZWFyQ29sb3Iuc2V0SW50SFNMKDI0NCwgMzAsIDgpO1xuICAgICAgICB0aGlzLnNjZW5lLnJlbmRlcmVyLnNldENsZWFyQ29sb3IoY2xlYXJDb2xvcik7XG4gICAgICAgIHRoaXMuc2NlbmUuY2FtZXJhID0gbmV3IFRIUkVFLk9ydGhvZ3JhcGhpY0NhbWVyYShmcnVzdHVtU2l6ZSAqIGFzcGVjdCAvIC0yLCBmcnVzdHVtU2l6ZSAqIGFzcGVjdCAvIDIsIGZydXN0dW1TaXplIC8gMiwgZnJ1c3R1bVNpemUgLyAtMiwgMC4xLCAxNTApO1xuICAgICAgICB0aGlzLnNjZW5lLmNhbWVyYS5wb3NpdGlvbi5jb3B5KG5ldyBUSFJFRS5WZWN0b3IzKDEwLCAxMCwgMTApKTtcbiAgICAgICAgdGhpcy5zY2VuZS5jYW1lcmEubG9va0F0KG5ldyBUSFJFRS5WZWN0b3IzKDAsIDAsIDApKTtcbiAgICB9XG5cbiAgICBhZGRTa3lzY3JhcGVycygpIHtcbiAgICAgICAgY29uc3Qgc2t5U2NyYXBlck1hdCA9IG5ldyBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCh7XG4gICAgICAgICAgICBjb2xvcjogMHg0MTNmNTAsXG4gICAgICAgICAgICBtZXRhbG5lc3M6IDAuMyxcbiAgICAgICAgICAgIHJvdWdobmVzczogMC4yXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHdpbmRvd09mZk1hdCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7XG4gICAgICAgICAgICBjb2xvcjogMHgyMzFmMzdcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3Qgd2luZG93T25NYXQgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoe1xuICAgICAgICAgICAgY29sb3I6IDB4Y2NjY2RkIC8vMHhiN2E1MWZcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5jdWJlcyA9IFtdO1xuXG4gICAgICAgIGNvbnN0IGhhbGZDb3VudCA9IDU7XG5cbiAgICAgICAgdGhpcy5jdWJlc1BhcmVudCA9IG5ldyBUSFJFRS5Hcm91cCgpO1xuICAgICAgICBmb3IgKGxldCB4ID0gLWhhbGZDb3VudDsgeCA8IGhhbGZDb3VudDsgeCsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCB6ID0gLWhhbGZDb3VudDsgeiA8IGhhbGZDb3VudDsgeisrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3Q3ViZSA9IG5ldyBCYXNpY0N1YmUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZTogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdGVyaWFsOiBza3lTY3JhcGVyTWF0LFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IG5ldyBUSFJFRS5WZWN0b3IzKHgqMS41ICsgKE1hdGgucmFuZG9tKCktMC41KSwgMCwgeioxLjUpXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgODA7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB4T2Zmc2V0ID0gTWF0aC5yYW5kb20oKSA+IDAuNSA/IDAuNSA6IC0wLjU7XG4gICAgICAgICAgICAgICAgICAgIGlmICh4T2Zmc2V0IDwgMCkgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIGxldCB5T2Zmc2V0ID0gKChNYXRoLnJhbmRvbSgpKSAqIDAuOCkgLSAwLjQ7XG4gICAgICAgICAgICAgICAgICAgIGxldCB6T2Zmc2V0ID0gTWF0aC5yYW5kb20oKSAqIChNYXRoLnJhbmRvbSgpID4gMC41ID8gMC40IDogLTAuNCk7XG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQgPSBNYXRoLnJvdW5kKHlPZmZzZXQgKiAxMCkgKiAwLjE7XG4gICAgICAgICAgICAgICAgICAgIHpPZmZzZXQgPSBNYXRoLnJvdW5kKHpPZmZzZXQgKiA1KSAqIDAuMjtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3V2luZG93ID0gbmV3IEJhc2ljQ3ViZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplOiAwLjA1LFxuICAgICAgICAgICAgICAgICAgICAgICAgbWF0ZXJpYWw6IE1hdGgucmFuZG9tKCkgPiAwLjEgPyB3aW5kb3dPZmZNYXQgOiB3aW5kb3dPbk1hdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBuZXcgVEhSRUUuVmVjdG9yMyh6T2Zmc2V0LCB5T2Zmc2V0LCB4T2Zmc2V0KVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBuZXdDdWJlLnJvb3QuYWRkKG5ld1dpbmRvdy5yb290KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbmV3Q3ViZS5yb290LnNjYWxlLmNvcHkobmV3IFRIUkVFLlZlY3RvcjMoMSwyLDEpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN1YmVzUGFyZW50LmFkZChuZXdDdWJlLnJvb3QpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3ViZXMucHVzaChuZXdDdWJlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5yb290LmFkZCh0aGlzLmN1YmVzUGFyZW50KTtcbiAgICB9XG5cbiAgICBhZGRTa3koKSB7XG4gICAgICAgIGNvbnN0IHNreU1hdCA9IG5ldyBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCh7XG4gICAgICAgICAgICBjb2xvcjogMHgwNTAzMjksXG4gICAgICAgICAgICBtZXRhbG5lc3M6IDAuMSxcbiAgICAgICAgICAgIHJvdWdobmVzczogMC45LFxuICAgICAgICAgICAgc2lkZTogVEhSRUUuQmFja1NpZGVcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHN0YXJzTWF0ID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHtcbiAgICAgICAgICAgIGNvbG9yOiAweGNjY2NkZCxcbiAgICAgICAgICAgIHNpZGU6IFRIUkVFLkJhY2tTaWRlLFxuICAgICAgICAgICAgd2lyZWZyYW1lOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBza3kgPSBuZXcgQmFzaWNTcGhlcmUoe1xuICAgICAgICAgICAgc2l6ZTogNSxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBuZXcgVEhSRUUuVmVjdG9yMygtMC41LCAxLCAwKSxcbiAgICAgICAgICAgIG1hdGVyaWFsOiBza3lNYXQsXG4gICAgICAgICAgICBoZWlnaHRTZWdtZW50czogNzIsXG4gICAgICAgICAgICB3aWR0aFNlZ21lbnRzOiAxMjhcbiAgICAgICAgfSk7XG4gICAgICAgIHNreS5yb290LnNjYWxlLmNvcHkobmV3IFRIUkVFLlZlY3RvcjMoMTAsIDkuMjUsIDEwKSk7XG4gICAgICAgIHRoaXMucm9vdC5hZGQoc2t5LnJvb3QpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEyMDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBwaHkgPSBNYXRoLnJhbmRvbSgpICogTWF0aC5QSSAqIDI7XG4gICAgICAgICAgICBjb25zdCB0aGV0YSA9IE1hdGgucmFuZG9tKCkgKiBNYXRoLlBJICogMC42O1xuICAgICAgICAgICAgY29uc3QgbmV3U3RhciA9IG5ldyBCYXNpY1NwaGVyZSh7XG4gICAgICAgICAgICAgICAgc2l6ZTogMC4wMTgsXG4gICAgICAgICAgICAgICAgbWF0ZXJpYWw6IHN0YXJzTWF0LFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBuZXcgVEhSRUUuVmVjdG9yMyhNYXRoLnNpbihwaHkpICogMjAsIE1hdGguY29zKHRoZXRhKSAqIDgsIC0xMClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5yb290LmFkZChuZXdTdGFyLnJvb3QpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWRkR3JvdW5kKCkge1xuICAgICAgICBjb25zdCBncm91bmRNYXQgPSBuZXcgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwoe1xuICAgICAgICAgICAgY29sb3I6IDB4MTMxMzEzLFxuICAgICAgICAgICAgbWV0YWxuZXNzOiAwLjcsXG4gICAgICAgICAgICByb3VnaG5lc3M6IDAuOSxcbiAgICAgICAgICAgIGZsYXRTaGFkaW5nOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBncm91bmQgPSBuZXcgQmFzaWNTcGhlcmUoe1xuICAgICAgICAgICAgc2l6ZTogMyxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBuZXcgVEhSRUUuVmVjdG9yMygwLCAtMSwgMCksXG4gICAgICAgICAgICBtYXRlcmlhbDogZ3JvdW5kTWF0XG4gICAgICAgIH0pO1xuICAgICAgICBncm91bmQucm9vdC5zY2FsZS5jb3B5KG5ldyBUSFJFRS5WZWN0b3IzKDUsIDAuNSwgNCkpO1xuICAgICAgICB0aGlzLnJvb3QuYWRkKGdyb3VuZC5yb290KTtcbiAgICB9XG5cbiAgICBhZGRXaGVyZUFyZVlvdSgpIHtcbiAgICAgICAgdGhpcy53aGVyZUFyZVlvdSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgIHRoaXMud2hlcmVBcmVZb3UuaW5uZXJIVE1MID0gXCJ3aGVyZSBhcmUgeW91XCI7XG4gICAgICAgIHRoaXMud2hlcmVBcmVZb3Uuc3R5bGUubWFyZ2luID0gJ2F1dG8nO1xuICAgICAgICB0aGlzLndoZXJlQXJlWW91LnN0eWxlLm1hcmdpblRvcCA9ICczMHZoJztcbiAgICAgICAgdGhpcy53aGVyZUFyZVlvdS5zdHlsZS52ZXJ0aWNhbEFsaWduID0gJ21pZGRsZSc7XG4gICAgICAgIHRoaXMud2hlcmVBcmVZb3Uuc3R5bGUuZm9udEZhbWlseSA9IFwiJ1ZUMzIzJywgbW9ub3NwYWNlXCI7XG4gICAgICAgIHRoaXMud2hlcmVBcmVZb3Uuc3R5bGUuY29sb3IgPSAnYW50aXF1ZXdoaXRlJztcbiAgICAgICAgdGhpcy53aGVyZUFyZVlvdS5zdHlsZS5mb250V2VpZ2h0ID0gJ2xpZ2h0ZXInO1xuICAgICAgICB0aGlzLndoZXJlQXJlWW91LnN0eWxlLmN1cnNvciA9ICdkZWZhdWx0JztcbiAgICAgICAgdGhpcy53aGVyZUFyZVlvdS5zdHlsZS5sZXR0ZXJTcGFjaW5nID0gJzAuMmVtJztcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLndoZXJlQXJlWW91KTtcbiAgICB9XG4gICAgXG5cbiAgICB1cGRhdGUodGltZUVsYXBzZWQpIHtcbiAgICAgICAgY29uc3QgYW5pbWF0aW9uVGltZSA9IHRpbWVFbGFwc2VkICogMC4yO1xuICAgIFxuICAgICAgICB0aGlzLnVwZGF0ZVNreXNjcmFwZXJzKGFuaW1hdGlvblRpbWUpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy51cGRhdGVDYW1lcmEodGltZUVsYXBzZWQpO1xuICAgIH1cblxuICAgIHVwZGF0ZVNreXNjcmFwZXJzKGFuaW1hdGlvblRpbWUpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmN1YmVzUGFyZW50LmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBjaGlsZCA9IHRoaXMuY3ViZXNQYXJlbnQuY2hpbGRyZW5baV07XG4gICAgICAgICAgICBjb25zdCBuZXdQb3MgPSBjaGlsZC5wb3NpdGlvbjtcbiAgICAgICAgICAgIG5ld1Bvcy55ID0gTWF0aC5zaW4oKGkgKiBNYXRoLlBJICogMC4yNSkgKyBhbmltYXRpb25UaW1lKTtcbiAgICAgICAgICAgIGNoaWxkLnBvc2l0aW9uLmNvcHkobmV3UG9zKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZUNhbWVyYSh0aW1lRWxhcHNlZCkge1xuICAgICAgICB0aGlzLnNjZW5lLmNhbWVyYS5wb3NpdGlvbi5jb3B5KFxuICAgICAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoXG4gICAgICAgICAgICAgICAgTWF0aC5jb3ModGltZUVsYXBzZWQgKiAuMTIpICogMTAgKyAyLFxuICAgICAgICAgICAgICAgIE1hdGguY29zKHRpbWVFbGFwc2VkICogLjIpICsgMSxcbiAgICAgICAgICAgICAgICAzMClcbiAgICAgICAgICAgICk7XG4gICAgICAgIHRoaXMuc2NlbmUuY2FtZXJhLmxvb2tBdChuZXcgVEhSRUUuVmVjdG9yMygwLCAyLjUsIDYpKTtcbiAgICAgICAgdGhpcy5zY2VuZS5jYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuICAgIH1cblxuICAgIG9uUmVtb3ZlKCkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMud2hlcmVBcmVZb3UpO1xuICAgIH1cblxufSJdLCJzb3VyY2VSb290IjoiIn0=
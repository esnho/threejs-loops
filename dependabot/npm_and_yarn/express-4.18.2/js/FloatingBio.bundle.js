(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{109:function(t,e,o){"use strict";o.d(e,"a",function(){return l});var n=o(104);function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function i(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var u={intensity:1},l=function(t){function e(){var t,o;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];(o=i(this,(t=s(e)).call.apply(t,[this].concat(c)))).params=function(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{},n=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(o).filter(function(t){return Object.getOwnPropertyDescriptor(o,t).enumerable}))),n.forEach(function(e){a(t,e,o[e])})}return t}({},u,c[0]);var h=new n.HemisphereLight(16777215,16777215,1.5*o.params.intensity);return h.color.setHSL(f(325),.9,.94),h.groundColor.setHSL(f(325),.9,.64),h.position.set(0,2,0),o.add(h),o}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}(e,n["Group"]),e}();function f(t){return t/360}},40:function(t,e,o){"use strict";o.r(e);var n=o(104),r=o(109);var a=function t(e){var o=e.size,r=void 0===o?5:o,a=e.material,i=e.position;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.seed=Math.random();var s=1,c=1,u=1;this.color=new n.Color,this.color.setRGB(s,c,u),this.material=a||new n.MeshBasicMaterial({color:this.color}),this.geometry=new n.CylinderGeometry(r,r,r),this.mesh=new n.Mesh(this.geometry,this.material),i&&this.mesh.position.copy(i),this.root=this.mesh};function i(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}o.d(e,"default",function(){return s});var s=function(){function t(e){var o=e.scene,a=e.onLoad;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.scene=o,o.camera.far=350,this.scene.camera.updateProjectionMatrix();var i=new n.Color;i.setIntHSL(48,90,64),o.renderer.setClearColor(i),o.scene.fog=new n.Fog(i,.1,300),this.root=new n.Group;var s=new r.a;this.root.add(s);var c=new n.MeshStandardMaterial({color:16777215,metalness:.4,roughness:.2});this.amoebas=[];for(var u=-60;u<60;u++){var l=this.newAmeba({slices:17,amebaSize:15,material:c,xPosition:15*u*.1});this.amoebas.push(l),this.root.add(l)}a&&a()}var e,o,s;return e=t,(o=[{key:"newAmeba",value:function(t){var e=t.slices,o=t.amebaSize,r=t.material,i=t.xPosition,s=void 0===i?0:i,c=Math.PI/e*.5,u=new n.Group,l=-(this.scene.camera.far-o);u.translateZ(Math.random()*l);for(var f=-e;f<e;f++){var h=Math.cos(c*f)*o,p=Math.sin(c*f*.7)*o,y=new a({size:1,material:r,position:new n.Vector3(s*(u.position.z/(3*o)),p,0)});y.root.scale.copy(new n.Vector3(.7*h,.6*c*h,.7*h)),u.add(y.root)}return u.userData={initialPosition:u.position.clone(),randomValue:Math.random()},u}},{key:"update",value:function(t){for(var e=3*t,o=0;o<this.amoebas.length;o++)this.updateAmeba(o,e);this.updateCamera(.5*t)}},{key:"updateAmeba",value:function(t,e){for(var o=this.amoebas[t],n=0;n<o.children.length;n++){var r=o.children[n],a=r.position;r.position.copy(a),r.translateY(.12*Math.sin(e+(.08*n+o.userData.randomValue)+t*Math.PI)),r.rotateY(.005+.001*n)}var i=o.userData.initialPosition.clone(),s=(.01*e+t*Math.PI)*Math.pow(Math.abs(.01*o.position.z),.3);i.y=2*(s-Math.floor(.5+s))*250,o.position.copy(i)}},{key:"updateCamera",value:function(t){this.scene.camera.position.copy(new n.Vector3(0,14*Math.cos(t),10)),this.scene.camera.lookAt(new n.Vector3(0,0,-60)),this.scene.camera.updateProjectionMatrix()}}])&&i(e.prototype,o),s&&i(e,s),t}()}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvTGlnaHRzL01hZ2VudGFQYXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvT2JqZWN0cy9CYXNpY0N5bGluZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9Mb29wcy9GbG9hdGluZ0Jpby5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0UGFyYW1zIiwiaW50ZW5zaXR5IiwiTWFnZW50YVBhcnR5IiwiX2dldFByb3RvdHlwZU9mMiIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrIiwidGhpcyIsIl9sZW4iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJhcmdzIiwiQXJyYXkiLCJfa2V5IiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4iLCJfZ2V0UHJvdG90eXBlT2YiLCJjYWxsIiwiYXBwbHkiLCJjb25jYXQiLCJwYXJhbXMiLCJfb2JqZWN0U3ByZWFkIiwiaGVtaUxpZ2h0IiwiSGVtaXNwaGVyZUxpZ2h0IiwiY29sb3IiLCJzZXRIU0wiLCJOb3JtYWxpemVIIiwiZ3JvdW5kQ29sb3IiLCJwb3NpdGlvbiIsInNldCIsImFkZCIsIkdyb3VwIiwiaCIsIkJhc2ljQ3lsaW5kZXIiLCJfcmVmIiwiX3JlZiRzaXplIiwic2l6ZSIsIm1hdGVyaWFsIiwic2VlZCIsIk1hdGgiLCJyYW5kb20iLCJDb2xvciIsInNldFJHQiIsIk1lc2hCYXNpY01hdGVyaWFsIiwiZ2VvbWV0cnkiLCJDeWxpbmRlckdlb21ldHJ5IiwibWVzaCIsIk1lc2giLCJjb3B5Iiwicm9vdCIsIkZsb2F0aW5nQmlvIiwic2NlbmUiLCJvbkxvYWQiLCJGbG9hdGluZ0Jpb19jbGFzc0NhbGxDaGVjayIsImNhbWVyYSIsImZhciIsInVwZGF0ZVByb2plY3Rpb25NYXRyaXgiLCJjbGVhckNvbG9yIiwic2V0SW50SFNMIiwicmVuZGVyZXIiLCJzZXRDbGVhckNvbG9yIiwiZm9nIiwiRm9nIiwibGlnaHRzIiwiTGlnaHRzIiwiY3ViZU1hdCIsIk1lc2hTdGFuZGFyZE1hdGVyaWFsIiwibWV0YWxuZXNzIiwicm91Z2huZXNzIiwiYW1vZWJhcyIsImkiLCJuZXdBbWViYSIsInNsaWNlcyIsImFtZWJhU2l6ZSIsInhQb3NpdGlvbiIsInB1c2giLCJfcGFyYW1zJHhQb3NpdGlvbiIsInBpSyIsIlBJIiwiYW1lYmEiLCJ6RGlzdHJpYnV0aW9uIiwidHJhbnNsYXRlWiIsInkiLCJzY2FsZVgiLCJjb3MiLCJzY2FsZVkiLCJzaW4iLCJuZXdDdWJlIiwiVmVjdG9yMyIsInoiLCJzY2FsZSIsInVzZXJEYXRhIiwiaW5pdGlhbFBvc2l0aW9uIiwiY2xvbmUiLCJyYW5kb21WYWx1ZSIsInRpbWVFbGFwc2VkIiwiYW5pbWF0aW9uVGltZSIsImEiLCJ1cGRhdGVBbWViYSIsInVwZGF0ZUNhbWVyYSIsImNoaWxkcmVuIiwiY2hpbGQiLCJuZXdSb3QiLCJ0cmFuc2xhdGVZIiwicm90YXRlWSIsIm5ld1BvcyIsInNhd1RpbWUiLCJwb3ciLCJhYnMiLCJmbG9vciIsImxvb2tBdCJdLCJtYXBwaW5ncyI6Imc0QkFLQSxJQUFNQSxFQUFnQixDQUNsQkMsVUFBVyxHQUdNQyxjQUNwQixTQUFBQSxJQUFxQixJQUFBQyxFQUFBQywrRkFBQUMsQ0FBQUMsS0FBQUosR0FBQSxRQUFBSyxFQUFBQyxVQUFBQyxPQUFOQyxFQUFNLElBQUFDLE1BQUFKLEdBQUFLLEVBQUEsRUFBQUEsRUFBQUwsRUFBQUssSUFBTkYsRUFBTUUsR0FBQUosVUFBQUksSUFDcEJSLEVBQUFTLEVBQUFQLE1BQUFILEVBQUFXLEVBQUFaLElBQUFhLEtBQUFDLE1BQUFiLEVBQUEsQ0FBQUcsTUFBQVcsT0FBU1AsTUFDSlEseVVBQUxDLENBQUEsR0FDSW5CLEVBQ0FVLEVBQUssSUFHUCxJQUFNVSxFQUFZLElBQUlDLGtCQUN2QixTQUNBLFNBQ0EsSUFBTWpCLEVBQUtjLE9BQU9qQixXQVZDLE9BWXBCbUIsRUFBVUUsTUFBTUMsT0FDZkMsRUFBVyxLQUNYLEdBQ0EsS0FFREosRUFBVUssWUFBWUYsT0FDckJDLEVBQVcsS0FDWCxHQUNBLEtBRURKLEVBQVVNLFNBQVNDLElBQUssRUFBRyxFQUFHLEdBQzlCdkIsRUFBS3dCLElBQUtSLEdBdkJVaEIsOE9BRG9CeUIsaUJBNEIxQyxTQUFTTCxFQUFXTSxHQUNuQixPQUFPQSxFQUFFLHVFQy9CV0MsRUFDbkIsU0FBQUEsRUFBQUMsR0FBNEMsSUFBQUMsRUFBQUQsRUFBL0JFLFlBQStCLElBQUFELEVBQXhCLEVBQXdCQSxFQUFyQkUsRUFBcUJILEVBQXJCRyxTQUFVVCxFQUFXTSxFQUFYTixzR0FBV3JCLENBQUFDLEtBQUF5QixHQUMxQ3pCLEtBQUs4QixLQUFPQyxLQUFLQyxTQUNqQixJQUFNaEIsRUFBVyxFQUFYQSxFQUFnQixFQUFoQkEsRUFBcUIsRUFDM0JoQixLQUFLZ0IsTUFBUSxJQUFJaUIsUUFDakJqQyxLQUFLZ0IsTUFBTWtCLE9BQU9sQixFQUFTQSxFQUFTQSxHQUVwQ2hCLEtBQUs2QixTQUFXQSxHQUFZLElBQUlNLG9CQUFrQixDQUNoRG5CLE1BQU9oQixLQUFLZ0IsUUFHZGhCLEtBQUtvQyxTQUFXLElBQUlDLG1CQUFpQlQsRUFBTUEsRUFBTUEsR0FFakQ1QixLQUFLc0MsS0FBTyxJQUFJQyxPQUNkdkMsS0FBS29DLFNBQ0xwQyxLQUFLNkIsVUFHSFQsR0FDRnBCLEtBQUtzQyxLQUFLbEIsU0FBU29CLEtBQUtwQixHQUcxQnBCLEtBQUt5QyxLQUFPekMsS0FBS3NDLHNOQ25CQUksYUFDakIsU0FBQUEsRUFBQWhCLEdBQTZCLElBQWhCaUIsRUFBZ0JqQixFQUFoQmlCLE1BQU9DLEVBQVNsQixFQUFUa0Isb0dBQVNDLENBQUE3QyxLQUFBMEMsR0FDekIxQyxLQUFLMkMsTUFBUUEsRUFFYkEsRUFBTUcsT0FBT0MsSUFBTSxJQUNuQi9DLEtBQUsyQyxNQUFNRyxPQUFPRSx5QkFFbEIsSUFBTUMsRUFBYSxJQUFJaEIsUUFDdkJnQixFQUFXQyxVQUFVLEdBQUksR0FBSSxJQUM3QlAsRUFBTVEsU0FBU0MsY0FBY0gsR0FDN0JOLEVBQU1BLE1BQU1VLElBQU0sSUFBSUMsTUFBSUwsRUFBWSxHQUFLLEtBRTNDakQsS0FBS3lDLEtBQU8sSUFBSWxCLFFBRWhCLElBQU1nQyxFQUFTLElBQUlDLElBQ25CeEQsS0FBS3lDLEtBQUtuQixJQUFJaUMsR0FFZCxJQUFNRSxFQUFVLElBQUlDLHVCQUFxQixDQUNyQzFDLE1BQU8sU0FDUDJDLFVBQVcsR0FDWEMsVUFBVyxLQUdmNUQsS0FBSzZELFFBQVUsR0FLZixJQUpBLElBSVNDLEdBRlUsR0FFT0EsRUFGUCxHQUV1QkEsSUFBSyxDQUMzQyxJQUFNQyxFQUFXL0QsS0FBSytELFNBQVMsQ0FDM0JDLE9BTk8sR0FPUEMsVUFOVSxHQU9WcEMsU0FBVTRCLEVBQ1ZTLFVBUlUsR0FRQ0osRUFBWSxLQUczQjlELEtBQUs2RCxRQUFRTSxLQUFLSixHQUNsQi9ELEtBQUt5QyxLQUFLbkIsSUFBSXlDLEdBR2RuQixHQUFRQSw0REFJUGhDLEdBQVEsSUFDTm9ELEVBQThDcEQsRUFBOUNvRCxPQUFRQyxFQUFzQ3JELEVBQXRDcUQsVUFBV3BDLEVBQTJCakIsRUFBM0JpQixTQURidUMsRUFDd0N4RCxFQUFqQnNELGlCQUR2QixJQUFBRSxFQUNtQyxFQURuQ0EsRUFHUEMsRUFBTXRDLEtBQUt1QyxHQUFLTixFQUFTLEdBQ3pCTyxFQUFRLElBQUloRCxRQUNaaUQsSUFBa0J4RSxLQUFLMkMsTUFBTUcsT0FBT0MsSUFBTWtCLEdBRWhETSxFQUFNRSxXQUFXMUMsS0FBS0MsU0FBV3dDLEdBQ2pDLElBQUssSUFBSUUsR0FBS1YsRUFBUVUsRUFBSVYsRUFBUVUsSUFBSyxDQUNuQyxJQUFNQyxFQUFTNUMsS0FBSzZDLElBQUlQLEVBQU1LLEdBQUtULEVBQzdCWSxFQUFTOUMsS0FBSytDLElBQUlULEVBQU1LLEVBQUksSUFBT1QsRUFDbkNjLEVBQVUsSUFBSXRELEVBQWMsQ0FDOUJHLEtBQU0sRUFDTkMsU0FBVUEsRUFDVlQsU0FBVSxJQUFJNEQsVUFDVmQsR0FBYUssRUFBTW5ELFNBQVM2RCxHQUFpQixFQUFaaEIsSUFDakNZLEVBQ0EsS0FHUkUsRUFBUXRDLEtBQUt5QyxNQUFNMUMsS0FBSyxJQUFJd0MsVUFDZixHQUFUTCxFQUNNLEdBQU5OLEVBQVlNLEVBQ0gsR0FBVEEsSUFFSkosRUFBTWpELElBQUl5RCxFQUFRdEMsTUFNdEIsT0FKQThCLEVBQU1ZLFNBQVcsQ0FDYkMsZ0JBQW1CYixFQUFNbkQsU0FBU2lFLFFBQ2xDQyxZQUFldkQsS0FBS0MsVUFFakJ1QyxpQ0FHSmdCLEdBR0gsSUFGQSxJQUFNQyxFQUE4QixFQUFkRCxFQUViRSxFQUFJLEVBQUdBLEVBQUl6RixLQUFLNkQsUUFBUTFELE9BQVFzRixJQUNyQ3pGLEtBQUswRixZQUFZRCxFQUFHRCxHQUd4QnhGLEtBQUsyRixhQUEyQixHQUFkSix1Q0FHVkUsRUFBR0QsR0FFWCxJQURBLElBQU1qQixFQUFRdkUsS0FBSzZELFFBQVE0QixHQUNsQjNCLEVBQUksRUFBR0EsRUFBSVMsRUFBTXFCLFNBQVN6RixPQUFRMkQsSUFBSyxDQUM1QyxJQUFNK0IsRUFBUXRCLEVBQU1xQixTQUFTOUIsR0FDdkJnQyxFQUFTRCxFQUFNekUsU0FDckJ5RSxFQUFNekUsU0FBU29CLEtBQUtzRCxHQUNwQkQsRUFBTUUsV0FBK0YsSUFBcEZoRSxLQUFLK0MsSUFBSVUsR0FBcUIsSUFBSjFCLEVBQVdTLEVBQU1ZLFNBQVNHLGFBQWdCRyxFQUFJMUQsS0FBS3VDLEtBQzlGdUIsRUFBTUcsUUFBUSxLQUFhLEtBQUpsQyxHQUUzQixJQUFNbUMsRUFBUzFCLEVBQU1ZLFNBQVNDLGdCQUFnQkMsUUFDeENhLEdBQTJCLElBQWhCVixFQUF3QkMsRUFBSTFELEtBQUt1QyxJQUFPdkMsS0FBS29FLElBQUlwRSxLQUFLcUUsSUFBdUIsSUFBbkI3QixFQUFNbkQsU0FBUzZELEdBQVcsSUFFckdnQixFQUFPdkIsRUFBSyxHQUFLd0IsRUFBVW5FLEtBQUtzRSxNQUFNLEdBQU1ILElBRDdCLElBRWYzQixFQUFNbkQsU0FBU29CLEtBQUt5RCx3Q0FHWFYsR0FDVHZGLEtBQUsyQyxNQUFNRyxPQUFPMUIsU0FBU29CLEtBQ3ZCLElBQUl3QyxVQUNBLEVBQ3lCLEdBQXhCakQsS0FBSzZDLElBQUlXLEdBQ1YsS0FFUnZGLEtBQUsyQyxNQUFNRyxPQUFPd0QsT0FBTyxJQUFJdEIsVUFBUSxFQUFHLEdBQUksS0FFNUNoRixLQUFLMkMsTUFBTUcsT0FBT0UiLCJmaWxlIjoiLi9qcy9GbG9hdGluZ0Jpby5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBHcm91cCxcblx0SGVtaXNwaGVyZUxpZ2h0XG59IGZyb20gJ3RocmVlJztcblxuY29uc3QgZGVmYXVsdFBhcmFtcyA9IHtcbiAgICBpbnRlbnNpdHk6IDFcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFnZW50YVBhcnR5IGV4dGVuZHMgR3JvdXAge1xuXHRjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG5cdFx0c3VwZXIoLi4uYXJncyk7XG5cdFx0dGhpcy5wYXJhbXMgPSB7XG5cdFx0XHQuLi5kZWZhdWx0UGFyYW1zLFxuXHRcdFx0Li4uYXJnc1swXVxuXHRcdH07XG5cbiAgICBjb25zdCBoZW1pTGlnaHQgPSBuZXcgSGVtaXNwaGVyZUxpZ2h0KFxuXHRcdFx0MHhmZmZmZmYsXG5cdFx0XHQweGZmZmZmZixcblx0XHRcdDEuNSAqIHRoaXMucGFyYW1zLmludGVuc2l0eVxuXHRcdCk7XG5cdFx0aGVtaUxpZ2h0LmNvbG9yLnNldEhTTChcblx0XHRcdE5vcm1hbGl6ZUgoMzI1KSwgXG5cdFx0XHQwLjksXG5cdFx0XHQwLjk0XG5cdFx0KTtcblx0XHRoZW1pTGlnaHQuZ3JvdW5kQ29sb3Iuc2V0SFNMKFxuXHRcdFx0Tm9ybWFsaXplSCgzMjUpLCBcblx0XHRcdDAuOSwgXG5cdFx0XHQwLjY0XG5cdFx0KTtcblx0XHRoZW1pTGlnaHQucG9zaXRpb24uc2V0KCAwLCAyLCAwICk7XG5cdFx0dGhpcy5hZGQoIGhlbWlMaWdodCApO1xuXHR9XG59XG5cdFxuZnVuY3Rpb24gTm9ybWFsaXplSChoKSB7XG5cdHJldHVybiBoLzM2MC4wO1xufVxuIiwiaW1wb3J0IHtcbiAgQ29sb3IsXG4gIE1lc2hCYXNpY01hdGVyaWFsLFxuICBDeWxpbmRlckdlb21ldHJ5LFxuICBNZXNoXG59IGZyb20gJ3RocmVlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzaWNDeWxpbmRlciB7XG4gIGNvbnN0cnVjdG9yKHtzaXplID0gNSwgbWF0ZXJpYWwsIHBvc2l0aW9ufSkge1xuICAgIHRoaXMuc2VlZCA9IE1hdGgucmFuZG9tKCk7XG4gICAgY29uc3QgY29sb3IgPSB7cjoxICxnOjEsIGI6MX07XG4gICAgdGhpcy5jb2xvciA9IG5ldyBDb2xvcigpO1xuICAgIHRoaXMuY29sb3Iuc2V0UkdCKGNvbG9yLnIsIGNvbG9yLmcsIGNvbG9yLmIpO1xuXG4gICAgdGhpcy5tYXRlcmlhbCA9IG1hdGVyaWFsIHx8IG5ldyBNZXNoQmFzaWNNYXRlcmlhbCh7XG4gICAgICBjb2xvcjogdGhpcy5jb2xvclxuICAgIH0pO1xuXG4gICAgdGhpcy5nZW9tZXRyeSA9IG5ldyBDeWxpbmRlckdlb21ldHJ5KHNpemUsIHNpemUsIHNpemUpO1xuXG4gICAgdGhpcy5tZXNoID0gbmV3IE1lc2goXG4gICAgICB0aGlzLmdlb21ldHJ5LFxuICAgICAgdGhpcy5tYXRlcmlhbFxuICAgICk7XG5cbiAgICBpZiAocG9zaXRpb24pIHtcbiAgICAgIHRoaXMubWVzaC5wb3NpdGlvbi5jb3B5KHBvc2l0aW9uKTtcbiAgICB9XG5cbiAgICB0aGlzLnJvb3QgPSB0aGlzLm1lc2g7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gICAgQ29sb3IsXG4gICAgVmVjdG9yMyxcbiAgICBHcm91cCxcbiAgICBNZXNoU3RhbmRhcmRNYXRlcmlhbCxcbiAgICBGb2dcbiAgfSBmcm9tICd0aHJlZSc7XG5pbXBvcnQgTGlnaHRzIGZyb20gJy4uL0xpZ2h0cy9NYWdlbnRhUGFydHkuanMnO1xuaW1wb3J0IEJhc2ljQ3lsaW5kZXIgZnJvbSAnLi4vT2JqZWN0cy9CYXNpY0N5bGluZGVyLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmxvYXRpbmdCaW8ge1xuICAgIGNvbnN0cnVjdG9yKHtzY2VuZSwgb25Mb2FkfSkge1xuICAgICAgICB0aGlzLnNjZW5lID0gc2NlbmU7XG4gICAgICAgIFxuICAgICAgICBzY2VuZS5jYW1lcmEuZmFyID0gMzUwO1xuICAgICAgICB0aGlzLnNjZW5lLmNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG4gICAgICAgICAgICBcbiAgICAgICAgY29uc3QgY2xlYXJDb2xvciA9IG5ldyBDb2xvcigpO1xuICAgICAgICBjbGVhckNvbG9yLnNldEludEhTTCg0OCwgOTAsIDY0KTtcbiAgICAgICAgc2NlbmUucmVuZGVyZXIuc2V0Q2xlYXJDb2xvcihjbGVhckNvbG9yKTtcbiAgICAgICAgc2NlbmUuc2NlbmUuZm9nID0gbmV3IEZvZyhjbGVhckNvbG9yLCAwLjEsIDMwMCk7XG5cbiAgICAgICAgdGhpcy5yb290ID0gbmV3IEdyb3VwKCk7XG5cbiAgICAgICAgY29uc3QgbGlnaHRzID0gbmV3IExpZ2h0cygpO1xuICAgICAgICB0aGlzLnJvb3QuYWRkKGxpZ2h0cyk7XG5cbiAgICAgICAgY29uc3QgY3ViZU1hdCA9IG5ldyBNZXNoU3RhbmRhcmRNYXRlcmlhbCh7XG4gICAgICAgICAgICBjb2xvcjogMHhmZmZmZmYsXG4gICAgICAgICAgICBtZXRhbG5lc3M6IDAuNCxcbiAgICAgICAgICAgIHJvdWdobmVzczogMC4yLFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmFtb2ViYXMgPSBbXTtcbiAgICAgICAgY29uc3Qgc2xpY2VzID0gMTc7XG4gICAgICAgIGNvbnN0IGFtZWJhU2l6ZSA9IDE1O1xuICAgICAgICBjb25zdCBhbWViYUNvdW50ID0gNjA7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IC1hbWViYUNvdW50OyBpIDwgYW1lYmFDb3VudDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdBbWViYSA9IHRoaXMubmV3QW1lYmEoe1xuICAgICAgICAgICAgICAgIHNsaWNlcyxcbiAgICAgICAgICAgICAgICBhbWViYVNpemUsXG4gICAgICAgICAgICAgICAgbWF0ZXJpYWw6IGN1YmVNYXQsXG4gICAgICAgICAgICAgICAgeFBvc2l0aW9uOiBpKmFtZWJhU2l6ZSowLjFcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLmFtb2ViYXMucHVzaChuZXdBbWViYSk7XG4gICAgICAgICAgICB0aGlzLnJvb3QuYWRkKG5ld0FtZWJhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvbkxvYWQpIG9uTG9hZCgpO1xuICAgIH1cbiAgICBcblxuICAgIG5ld0FtZWJhKHBhcmFtcykge1xuICAgICAgICBjb25zdCB7c2xpY2VzLCBhbWViYVNpemUsIG1hdGVyaWFsLCB4UG9zaXRpb24gPSAwfSA9IHBhcmFtcztcblxuICAgICAgICBjb25zdCBwaUsgPSBNYXRoLlBJIC8gc2xpY2VzICogMC41O1xuICAgICAgICBjb25zdCBhbWViYSA9IG5ldyBHcm91cCgpO1xuICAgICAgICBjb25zdCB6RGlzdHJpYnV0aW9uID0gLSh0aGlzLnNjZW5lLmNhbWVyYS5mYXIgLSBhbWViYVNpemUpO1xuXG4gICAgICAgIGFtZWJhLnRyYW5zbGF0ZVooTWF0aC5yYW5kb20oKSAqIHpEaXN0cmlidXRpb24pO1xuICAgICAgICBmb3IgKGxldCB5ID0gLXNsaWNlczsgeSA8IHNsaWNlczsgeSsrKSB7XG4gICAgICAgICAgICBjb25zdCBzY2FsZVggPSBNYXRoLmNvcyhwaUsgKiB5KSAqIGFtZWJhU2l6ZTtcbiAgICAgICAgICAgIGNvbnN0IHNjYWxlWSA9IE1hdGguc2luKHBpSyAqIHkgKiAwLjcpICogYW1lYmFTaXplO1xuICAgICAgICAgICAgY29uc3QgbmV3Q3ViZSA9IG5ldyBCYXNpY0N5bGluZGVyKHtcbiAgICAgICAgICAgICAgICBzaXplOiAxLFxuICAgICAgICAgICAgICAgIG1hdGVyaWFsOiBtYXRlcmlhbCxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogbmV3IFZlY3RvcjMoXG4gICAgICAgICAgICAgICAgICAgIHhQb3NpdGlvbiAqIChhbWViYS5wb3NpdGlvbi56IC8gKGFtZWJhU2l6ZSAqIDMpKSxcbiAgICAgICAgICAgICAgICAgICAgc2NhbGVZLFxuICAgICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBuZXdDdWJlLnJvb3Quc2NhbGUuY29weShuZXcgVmVjdG9yMyhcbiAgICAgICAgICAgICAgICBzY2FsZVggKiAwLjcsXG4gICAgICAgICAgICAgICAgcGlLICogMC42ICogc2NhbGVYLFxuICAgICAgICAgICAgICAgIHNjYWxlWCAqIDAuN1xuICAgICAgICAgICAgKSk7XG4gICAgICAgICAgICBhbWViYS5hZGQobmV3Q3ViZS5yb290KTtcbiAgICAgICAgfVxuICAgICAgICBhbWViYS51c2VyRGF0YSA9IHtcbiAgICAgICAgICAgICdpbml0aWFsUG9zaXRpb24nOiBhbWViYS5wb3NpdGlvbi5jbG9uZSgpLFxuICAgICAgICAgICAgJ3JhbmRvbVZhbHVlJzogTWF0aC5yYW5kb20oKVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gYW1lYmE7XG4gICAgfVxuXG4gICAgdXBkYXRlKHRpbWVFbGFwc2VkKSB7XG4gICAgICAgIGNvbnN0IGFuaW1hdGlvblRpbWUgPSB0aW1lRWxhcHNlZCAqIDM7XG4gICAgICAgIFxuICAgICAgICBmb3IgKGxldCBhID0gMDsgYSA8IHRoaXMuYW1vZWJhcy5sZW5ndGg7IGErKykge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVBbWViYShhLCBhbmltYXRpb25UaW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudXBkYXRlQ2FtZXJhKHRpbWVFbGFwc2VkICogLjUpO1xuICAgIH1cblxuICAgIHVwZGF0ZUFtZWJhKGEsIGFuaW1hdGlvblRpbWUpIHtcbiAgICAgICAgY29uc3QgYW1lYmEgPSB0aGlzLmFtb2ViYXNbYV07XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYW1lYmEuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkID0gYW1lYmEuY2hpbGRyZW5baV07XG4gICAgICAgICAgICBjb25zdCBuZXdSb3QgPSBjaGlsZC5wb3NpdGlvbjtcbiAgICAgICAgICAgIGNoaWxkLnBvc2l0aW9uLmNvcHkobmV3Um90KTtcbiAgICAgICAgICAgIGNoaWxkLnRyYW5zbGF0ZVkoTWF0aC5zaW4oYW5pbWF0aW9uVGltZSArIChpICogMC4wOCArIGFtZWJhLnVzZXJEYXRhLnJhbmRvbVZhbHVlKSArIChhICogTWF0aC5QSSkpICogMC4xMik7XG4gICAgICAgICAgICBjaGlsZC5yb3RhdGVZKDAuMDA1ICsgKGkgKiAwLjAwMSkpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG5ld1BvcyA9IGFtZWJhLnVzZXJEYXRhLmluaXRpYWxQb3NpdGlvbi5jbG9uZSgpO1xuICAgICAgICBjb25zdCBzYXdUaW1lID0gKGFuaW1hdGlvblRpbWUgKiAwLjAxICsgKGEgKiBNYXRoLlBJKSkgKiBNYXRoLnBvdyhNYXRoLmFicyhhbWViYS5wb3NpdGlvbi56ICogMC4wMSksIDAuMyk7XG4gICAgICAgIGNvbnN0IHNhd0FtcCA9IDI1MDtcbiAgICAgICAgbmV3UG9zLnkgPSAoMiAqIChzYXdUaW1lIC0gTWF0aC5mbG9vcigwLjUgKyBzYXdUaW1lKSkpICogc2F3QW1wO1xuICAgICAgICBhbWViYS5wb3NpdGlvbi5jb3B5KG5ld1Bvcyk7XG4gICAgfVxuXG4gICAgdXBkYXRlQ2FtZXJhKHRpbWVFbGFwc2VkKSB7XG4gICAgICAgIHRoaXMuc2NlbmUuY2FtZXJhLnBvc2l0aW9uLmNvcHkoXG4gICAgICAgICAgICBuZXcgVmVjdG9yMyhcbiAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgIChNYXRoLmNvcyh0aW1lRWxhcHNlZCkgKiAxNCksXG4gICAgICAgICAgICAgICAgMTApXG4gICAgICAgICAgICApO1xuICAgICAgICB0aGlzLnNjZW5lLmNhbWVyYS5sb29rQXQobmV3IFZlY3RvcjMoMCwgMCwgLTYwKSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnNjZW5lLmNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG4gICAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIifQ==
(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{105:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var o=n(104);var r=function t(e){var n=e.size,r=void 0===n?5:n,i=e.material,a=e.position;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.seed=Math.random();var c=1,s=1,u=1;this.color=new o.Color,this.color.setRGB(c,s,u),this.material=i||new o.MeshBasicMaterial({color:this.color}),this.geometry=new o.BoxGeometry(r,r,r),this.mesh=new o.Mesh(this.geometry,this.material),a&&this.mesh.position.copy(a),this.root=this.mesh}},109:function(t,e,n){"use strict";n.d(e,"a",function(){return f});var o=n(104);function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var u={intensity:1},f=function(t){function e(){var t,n;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var r=arguments.length,s=new Array(r),f=0;f<r;f++)s[f]=arguments[f];(n=a(this,(t=c(e)).call.apply(t,[this].concat(s)))).params=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){i(t,e,n[e])})}return t}({},u,s[0]);var p=new o.HemisphereLight(16777215,16777215,1.5*n.params.intensity);return p.color.setHSL(l(325),.9,.94),p.groundColor.setHSL(l(325),.9,.64),p.position.set(0,2,0),n.add(p),n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(e,o["Group"]),e}();function l(t){return t/360}},31:function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return c});var o=n(104),r=n(109),i=n(105);function a(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var c=function(){function t(e){var n=e.scene,a=e.onLoad;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var c=n.camera.aspect;this.scene=n,n.camera=new o.OrthographicCamera(7*c/-2,7*c/2,3.5,-3.5,.1,150),n.camera.position.copy(new o.Vector3(10,10,10)),n.camera.lookAt(new o.Vector3(0,0,0)),this.root=new o.Group;var s=new r.a;this.root.add(s);var u=new o.MeshStandardMaterial({color:16777215,metalness:.4,roughness:.2});this.cubes=[];this.cubesParent=new o.Group;for(var f=-11;f<11;f++)for(var l=-11;l<11;l++){var p=new i.a({size:1,material:u,position:new o.Vector3(f,0,l)});p.root.scale.copy(new o.Vector3(1,2,1)),this.cubesParent.add(p.root),this.cubes.push(p)}this.root.add(this.cubesParent),a&&a()}var e,n,c;return e=t,(n=[{key:"update",value:function(t){for(var e=3*t,n=0;n<this.cubesParent.children.length;n++){var r=this.cubesParent.children[n],i=r.position;i.y=Math.sin(n*Math.PI*.25+e),r.position.copy(i)}this.scene.camera.position.copy(new o.Vector3(10*Math.sin(.5*t),10,10*Math.cos(.5*t))),this.scene.camera.lookAt(new o.Vector3(0,0,0)),this.scene.camera.updateProjectionMatrix()}}])&&a(e.prototype,n),c&&a(e,c),t}()}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvT2JqZWN0cy9CYXNpY0N1YmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0xpZ2h0cy9NYWdlbnRhUGFydHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0xvb3BzL0dyaWRMb29wLmpzIl0sIm5hbWVzIjpbIkJhc2ljQ3ViZSIsIl9yZWYiLCJfcmVmJHNpemUiLCJzaXplIiwibWF0ZXJpYWwiLCJwb3NpdGlvbiIsIl9jbGFzc0NhbGxDaGVjayIsInRoaXMiLCJzZWVkIiwiTWF0aCIsInJhbmRvbSIsImNvbG9yIiwiQ29sb3IiLCJzZXRSR0IiLCJNZXNoQmFzaWNNYXRlcmlhbCIsImdlb21ldHJ5IiwiQm94R2VvbWV0cnkiLCJtZXNoIiwiTWVzaCIsImNvcHkiLCJyb290IiwiZGVmYXVsdFBhcmFtcyIsImludGVuc2l0eSIsIk1hZ2VudGFQYXJ0eSIsIl9nZXRQcm90b3R5cGVPZjIiLCJfdGhpcyIsIl9sZW4iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJhcmdzIiwiQXJyYXkiLCJfa2V5IiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4iLCJfZ2V0UHJvdG90eXBlT2YiLCJjYWxsIiwiYXBwbHkiLCJjb25jYXQiLCJwYXJhbXMiLCJfb2JqZWN0U3ByZWFkIiwiaGVtaUxpZ2h0IiwiSGVtaXNwaGVyZUxpZ2h0Iiwic2V0SFNMIiwiTm9ybWFsaXplSCIsImdyb3VuZENvbG9yIiwic2V0IiwiYWRkIiwiR3JvdXAiLCJoIiwiQ3ViZUxvb3AiLCJzY2VuZSIsIm9uTG9hZCIsImFzcGVjdCIsImNhbWVyYSIsIk9ydGhvZ3JhcGhpY0NhbWVyYSIsImZydXN0dW1TaXplIiwiVmVjdG9yMyIsImxvb2tBdCIsImxpZ2h0cyIsIkxpZ2h0cyIsImN1YmVNYXQiLCJNZXNoU3RhbmRhcmRNYXRlcmlhbCIsIm1ldGFsbmVzcyIsInJvdWdobmVzcyIsImN1YmVzIiwiY3ViZXNQYXJlbnQiLCJ4IiwieiIsIm5ld0N1YmUiLCJzY2FsZSIsInB1c2giLCJ0aW1lRWxhcHNlZCIsImFuaW1hdGlvblRpbWUiLCJpIiwiY2hpbGRyZW4iLCJjaGlsZCIsIm5ld1BvcyIsInkiLCJzaW4iLCJQSSIsImNvcyIsInVwZGF0ZVByb2plY3Rpb25NYXRyaXgiXSwibWFwcGluZ3MiOiIySUFPcUJBLEVBQ25CLFNBQUFBLEVBQUFDLEdBQTRDLElBQUFDLEVBQUFELEVBQS9CRSxZQUErQixJQUFBRCxFQUF4QixFQUF3QkEsRUFBckJFLEVBQXFCSCxFQUFyQkcsU0FBVUMsRUFBV0osRUFBWEksc0dBQVdDLENBQUFDLEtBQUFQLEdBQzFDTyxLQUFLQyxLQUFPQyxLQUFLQyxTQUNqQixJQUFNQyxFQUFXLEVBQVhBLEVBQWdCLEVBQWhCQSxFQUFxQixFQUMzQkosS0FBS0ksTUFBUSxJQUFJQyxRQUNqQkwsS0FBS0ksTUFBTUUsT0FBT0YsRUFBU0EsRUFBU0EsR0FFcENKLEtBQUtILFNBQVdBLEdBQVksSUFBSVUsb0JBQWtCLENBQ2hESCxNQUFPSixLQUFLSSxRQUdkSixLQUFLUSxTQUFXLElBQUlDLGNBQVliLEVBQU1BLEVBQU1BLEdBRTVDSSxLQUFLVSxLQUFPLElBQUlDLE9BQ2RYLEtBQUtRLFNBQ0xSLEtBQUtILFVBR0hDLEdBQ0ZFLEtBQUtVLEtBQUtaLFNBQVNjLEtBQUtkLEdBRzFCRSxLQUFLYSxLQUFPYixLQUFLVSw4MEJDeEJyQixJQUFNSSxFQUFnQixDQUNsQkMsVUFBVyxHQUdNQyxjQUNwQixTQUFBQSxJQUFxQixJQUFBQyxFQUFBQywrRkFBQW5CLENBQUFDLEtBQUFnQixHQUFBLFFBQUFHLEVBQUFDLFVBQUFDLE9BQU5DLEVBQU0sSUFBQUMsTUFBQUosR0FBQUssRUFBQSxFQUFBQSxFQUFBTCxFQUFBSyxJQUFORixFQUFNRSxHQUFBSixVQUFBSSxJQUNwQk4sRUFBQU8sRUFBQXpCLE1BQUFpQixFQUFBUyxFQUFBVixJQUFBVyxLQUFBQyxNQUFBWCxFQUFBLENBQUFqQixNQUFBNkIsT0FBU1AsTUFDSlEseVVBQUxDLENBQUEsR0FDSWpCLEVBQ0FRLEVBQUssSUFHUCxJQUFNVSxFQUFZLElBQUlDLGtCQUN2QixTQUNBLFNBQ0EsSUFBTWYsRUFBS1ksT0FBT2YsV0FWQyxPQVlwQmlCLEVBQVU1QixNQUFNOEIsT0FDZkMsRUFBVyxLQUNYLEdBQ0EsS0FFREgsRUFBVUksWUFBWUYsT0FDckJDLEVBQVcsS0FDWCxHQUNBLEtBRURILEVBQVVsQyxTQUFTdUMsSUFBSyxFQUFHLEVBQUcsR0FDOUJuQixFQUFLb0IsSUFBS04sR0F2QlVkLDhPQURvQnFCLGlCQTRCMUMsU0FBU0osRUFBV0ssR0FDbkIsT0FBT0EsRUFBRSw0UkM3QldDLGFBQ2pCLFNBQUFBLEVBQUEvQyxHQUE2QixJQUFoQmdELEVBQWdCaEQsRUFBaEJnRCxNQUFPQyxFQUFTakQsRUFBVGlELG9HQUFTNUMsQ0FBQUMsS0FBQXlDLEdBQ3pCLElBQ01HLEVBQVNGLEVBQU1HLE9BQU9ELE9BQzVCNUMsS0FBSzBDLE1BQVFBLEVBRWJBLEVBQU1HLE9BQVMsSUFBSUMscUJBSkMsRUFLRkYsR0FBVyxFQUxULEVBTUZBLEVBQVMsRUFDdkJHLEtBQ0FBLElBQ0EsR0FDQSxLQUVKTCxFQUFNRyxPQUFPL0MsU0FBU2MsS0FBSyxJQUFJb0MsVUFBUSxHQUFJLEdBQUksS0FDL0NOLEVBQU1HLE9BQU9JLE9BQU8sSUFBSUQsVUFBUSxFQUFHLEVBQUcsSUFFdENoRCxLQUFLYSxLQUFPLElBQUkwQixRQUVoQixJQUFNVyxFQUFTLElBQUlDLElBQ25CbkQsS0FBS2EsS0FBS3lCLElBQUlZLEdBRWQsSUFBTUUsRUFBVSxJQUFJQyx1QkFBcUIsQ0FDckNqRCxNQUFPLFNBQ1BrRCxVQUFXLEdBQ1hDLFVBQVcsS0FHZnZELEtBQUt3RCxNQUFRLEdBSWJ4RCxLQUFLeUQsWUFBYyxJQUFJbEIsUUFDdkIsSUFBSyxJQUFJbUIsR0FIUyxHQUdPQSxFQUhQLEdBR3NCQSxJQUNwQyxJQUFLLElBQUlDLEdBSkssR0FJV0EsRUFKWCxHQUkwQkEsSUFBSyxDQUN6QyxJQUFNQyxFQUFVLElBQUluRSxJQUFVLENBQ3RCRyxLQUFNLEVBQ05DLFNBQVV1RCxFQUNWdEQsU0FBVSxJQUFJa0QsVUFBUVUsRUFBRyxFQUFHQyxLQUVwQ0MsRUFBUS9DLEtBQUtnRCxNQUFNakQsS0FBSyxJQUFJb0MsVUFBUSxFQUFFLEVBQUUsSUFDeENoRCxLQUFLeUQsWUFBWW5CLElBQUlzQixFQUFRL0MsTUFDN0JiLEtBQUt3RCxNQUFNTSxLQUFLRixHQUl4QjVELEtBQUthLEtBQUt5QixJQUFJdEMsS0FBS3lELGFBRWZkLEdBQVFBLDBEQUlUb0IsR0FHSCxJQUZBLElBQU1DLEVBQThCLEVBQWRELEVBRWJFLEVBQUksRUFBR0EsRUFBSWpFLEtBQUt5RCxZQUFZUyxTQUFTN0MsT0FBUTRDLElBQUssQ0FDdkQsSUFBTUUsRUFBUW5FLEtBQUt5RCxZQUFZUyxTQUFTRCxHQUNsQ0csRUFBU0QsRUFBTXJFLFNBQ3JCc0UsRUFBT0MsRUFBSW5FLEtBQUtvRSxJQUFLTCxFQUFFL0QsS0FBS3FFLEdBQUcsSUFBTVAsR0FDckNHLEVBQU1yRSxTQUFTYyxLQUFLd0QsR0FJeEJwRSxLQUFLMEMsTUFBTUcsT0FBTy9DLFNBQVNjLEtBQUssSUFBSW9DLFVBQXFDLEdBQTdCOUMsS0FBS29FLElBQWtCLEdBQWRQLEdBQXdCLEdBQWlDLEdBQTdCN0QsS0FBS3NFLElBQWtCLEdBQWRULEtBQzFGL0QsS0FBSzBDLE1BQU1HLE9BQU9JLE9BQU8sSUFBSUQsVUFBUSxFQUFHLEVBQUcsSUFDM0NoRCxLQUFLMEMsTUFBTUcsT0FBTzRCIiwiZmlsZSI6Ii4vanMvR3JpZExvb3AuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29sb3IsXG4gIE1lc2hCYXNpY01hdGVyaWFsLFxuICBCb3hHZW9tZXRyeSxcbiAgTWVzaFxufSBmcm9tICd0aHJlZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2ljQ3ViZSB7XG4gIGNvbnN0cnVjdG9yKHtzaXplID0gNSwgbWF0ZXJpYWwsIHBvc2l0aW9ufSkge1xuICAgIHRoaXMuc2VlZCA9IE1hdGgucmFuZG9tKCk7XG4gICAgY29uc3QgY29sb3IgPSB7cjoxICxnOjEsIGI6MX07XG4gICAgdGhpcy5jb2xvciA9IG5ldyBDb2xvcigpO1xuICAgIHRoaXMuY29sb3Iuc2V0UkdCKGNvbG9yLnIsIGNvbG9yLmcsIGNvbG9yLmIpO1xuXG4gICAgdGhpcy5tYXRlcmlhbCA9IG1hdGVyaWFsIHx8IG5ldyBNZXNoQmFzaWNNYXRlcmlhbCh7XG4gICAgICBjb2xvcjogdGhpcy5jb2xvclxuICAgIH0pO1xuXG4gICAgdGhpcy5nZW9tZXRyeSA9IG5ldyBCb3hHZW9tZXRyeShzaXplLCBzaXplLCBzaXplKTtcblxuICAgIHRoaXMubWVzaCA9IG5ldyBNZXNoKFxuICAgICAgdGhpcy5nZW9tZXRyeSxcbiAgICAgIHRoaXMubWF0ZXJpYWxcbiAgICApO1xuXG4gICAgaWYgKHBvc2l0aW9uKSB7XG4gICAgICB0aGlzLm1lc2gucG9zaXRpb24uY29weShwb3NpdGlvbik7XG4gICAgfVxuXG4gICAgdGhpcy5yb290ID0gdGhpcy5tZXNoO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBHcm91cCxcblx0SGVtaXNwaGVyZUxpZ2h0XG59IGZyb20gJ3RocmVlJztcblxuY29uc3QgZGVmYXVsdFBhcmFtcyA9IHtcbiAgICBpbnRlbnNpdHk6IDFcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFnZW50YVBhcnR5IGV4dGVuZHMgR3JvdXAge1xuXHRjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG5cdFx0c3VwZXIoLi4uYXJncyk7XG5cdFx0dGhpcy5wYXJhbXMgPSB7XG5cdFx0XHQuLi5kZWZhdWx0UGFyYW1zLFxuXHRcdFx0Li4uYXJnc1swXVxuXHRcdH07XG5cbiAgICBjb25zdCBoZW1pTGlnaHQgPSBuZXcgSGVtaXNwaGVyZUxpZ2h0KFxuXHRcdFx0MHhmZmZmZmYsXG5cdFx0XHQweGZmZmZmZixcblx0XHRcdDEuNSAqIHRoaXMucGFyYW1zLmludGVuc2l0eVxuXHRcdCk7XG5cdFx0aGVtaUxpZ2h0LmNvbG9yLnNldEhTTChcblx0XHRcdE5vcm1hbGl6ZUgoMzI1KSwgXG5cdFx0XHQwLjksXG5cdFx0XHQwLjk0XG5cdFx0KTtcblx0XHRoZW1pTGlnaHQuZ3JvdW5kQ29sb3Iuc2V0SFNMKFxuXHRcdFx0Tm9ybWFsaXplSCgzMjUpLCBcblx0XHRcdDAuOSwgXG5cdFx0XHQwLjY0XG5cdFx0KTtcblx0XHRoZW1pTGlnaHQucG9zaXRpb24uc2V0KCAwLCAyLCAwICk7XG5cdFx0dGhpcy5hZGQoIGhlbWlMaWdodCApO1xuXHR9XG59XG5cdFxuZnVuY3Rpb24gTm9ybWFsaXplSChoKSB7XG5cdHJldHVybiBoLzM2MC4wO1xufVxuIiwiaW1wb3J0IHtcbiAgICBWZWN0b3IzLFxuICAgIEdyb3VwLFxuICAgIE1lc2hTdGFuZGFyZE1hdGVyaWFsLFxuICAgIE9ydGhvZ3JhcGhpY0NhbWVyYVxuICB9IGZyb20gJ3RocmVlJztcbmltcG9ydCBMaWdodHMgZnJvbSAnLi4vTGlnaHRzL01hZ2VudGFQYXJ0eS5qcyc7XG5pbXBvcnQgQmFzaWNDdWJlIGZyb20gJy4uL09iamVjdHMvQmFzaWNDdWJlLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3ViZUxvb3Age1xuICAgIGNvbnN0cnVjdG9yKHtzY2VuZSwgb25Mb2FkfSkge1xuICAgICAgICBjb25zdCBmcnVzdHVtU2l6ZSA9IDc7XG4gICAgICAgIGNvbnN0IGFzcGVjdCA9IHNjZW5lLmNhbWVyYS5hc3BlY3Q7XG4gICAgICAgIHRoaXMuc2NlbmUgPSBzY2VuZTtcblxuICAgICAgICBzY2VuZS5jYW1lcmEgPSBuZXcgT3J0aG9ncmFwaGljQ2FtZXJhKFxuICAgICAgICAgICAgZnJ1c3R1bVNpemUgKiBhc3BlY3QgLyAtIDIsXG4gICAgICAgICAgICBmcnVzdHVtU2l6ZSAqIGFzcGVjdCAvIDIsXG4gICAgICAgICAgICBmcnVzdHVtU2l6ZSAvIDIsXG4gICAgICAgICAgICBmcnVzdHVtU2l6ZSAvIC0gMixcbiAgICAgICAgICAgIDAuMSxcbiAgICAgICAgICAgIDE1MFxuICAgICAgICApO1xuICAgICAgICBzY2VuZS5jYW1lcmEucG9zaXRpb24uY29weShuZXcgVmVjdG9yMygxMCwgMTAsIDEwKSk7XG4gICAgICAgIHNjZW5lLmNhbWVyYS5sb29rQXQobmV3IFZlY3RvcjMoMCwgMCwgMCkpO1xuXG4gICAgICAgIHRoaXMucm9vdCA9IG5ldyBHcm91cCgpO1xuXG4gICAgICAgIGNvbnN0IGxpZ2h0cyA9IG5ldyBMaWdodHMoKTtcbiAgICAgICAgdGhpcy5yb290LmFkZChsaWdodHMpO1xuXG4gICAgICAgIGNvbnN0IGN1YmVNYXQgPSBuZXcgTWVzaFN0YW5kYXJkTWF0ZXJpYWwoe1xuICAgICAgICAgICAgY29sb3I6IDB4ZmZmZmZmLFxuICAgICAgICAgICAgbWV0YWxuZXNzOiAwLjQsXG4gICAgICAgICAgICByb3VnaG5lc3M6IDAuMixcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5jdWJlcyA9IFtdO1xuXG4gICAgICAgIGNvbnN0IGhhbGZDb3VudCA9IDExO1xuXG4gICAgICAgIHRoaXMuY3ViZXNQYXJlbnQgPSBuZXcgR3JvdXAoKTtcbiAgICAgICAgZm9yIChsZXQgeCA9IC1oYWxmQ291bnQ7IHggPCBoYWxmQ291bnQ7IHgrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgeiA9IC1oYWxmQ291bnQ7IHogPCBoYWxmQ291bnQ7IHorKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0N1YmUgPSBuZXcgQmFzaWNDdWJlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXRlcmlhbDogY3ViZU1hdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBuZXcgVmVjdG9yMyh4LCAwLCB6KVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBuZXdDdWJlLnJvb3Quc2NhbGUuY29weShuZXcgVmVjdG9yMygxLDIsMSkpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3ViZXNQYXJlbnQuYWRkKG5ld0N1YmUucm9vdCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdWJlcy5wdXNoKG5ld0N1YmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLnJvb3QuYWRkKHRoaXMuY3ViZXNQYXJlbnQpO1xuXG4gICAgICAgIGlmIChvbkxvYWQpIG9uTG9hZCgpO1xuICAgIH1cbiAgICBcblxuICAgIHVwZGF0ZSh0aW1lRWxhcHNlZCkge1xuICAgICAgICBjb25zdCBhbmltYXRpb25UaW1lID0gdGltZUVsYXBzZWQgKiAzO1xuICAgIFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY3ViZXNQYXJlbnQuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkID0gdGhpcy5jdWJlc1BhcmVudC5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgIGNvbnN0IG5ld1BvcyA9IGNoaWxkLnBvc2l0aW9uO1xuICAgICAgICAgICAgbmV3UG9zLnkgPSBNYXRoLnNpbigoaSpNYXRoLlBJKjAuMjUpK2FuaW1hdGlvblRpbWUpO1xuICAgICAgICAgICAgY2hpbGQucG9zaXRpb24uY29weShuZXdQb3MpO1xuICAgICAgICB9XG5cbiAgICAgICAgXG4gICAgICAgIHRoaXMuc2NlbmUuY2FtZXJhLnBvc2l0aW9uLmNvcHkobmV3IFZlY3RvcjMoTWF0aC5zaW4odGltZUVsYXBzZWQgKiAuNSkgKiAxMCwgMTAsIE1hdGguY29zKHRpbWVFbGFwc2VkICogLjUpICogMTApKTtcbiAgICAgICAgdGhpcy5zY2VuZS5jYW1lcmEubG9va0F0KG5ldyBWZWN0b3IzKDAsIDAsIDApKTtcbiAgICAgICAgdGhpcy5zY2VuZS5jYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuICAgIH1cblxufSJdLCJzb3VyY2VSb290IjoiIn0=
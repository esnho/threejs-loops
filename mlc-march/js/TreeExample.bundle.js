(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{34:function(e,o,t){e.exports=t.p+"obj/Lowpoly_tree_sample.obj"},8:function(e,o,t){"use strict";t.r(o),t.d(o,"default",function(){return l});var a=t(17),n=t(34),r=t.n(n),i=t(22),s=t(20),d=t(23);function h(e,o){for(var t=0;t<o.length;t++){var a=o[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}d(a);var l=function(){function e(o){var t=o.scene,n=o.onLoad;!function(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}(this,e),this.scene=t,t.renderer.shadowMap.enabled=!0,t.renderer.shadowMap.type=a.PCFSoftShadowMap,this.root=new a.Group,this.sphereMaterial=new a.MeshStandardMaterial({color:16755200,flatShading:!0}),this.sphere=new i.a({size:3,material:this.sphereMaterial,widthSegments:7,heightSegments:6}),this.root.add(this.sphere.root),this.loadTree(),this.setupLights(),n&&n()}var o,t,n;return o=e,(t=[{key:"loading",value:function(e){}},{key:"setupLights",value:function(){var e=new s.a({intensity:1.8,castShadow:!0,bias:.2,projectionSides:2.5,mapSize:2048});e.rotateY(Math.PI),this.root.add(e)}},{key:"loadTree",value:function(){var e=new a.OBJLoader;this.onHeadReady=this.onTreeReady.bind(this),this.onHeadLoading=this.onHeadLoading.bind(this),this.onTreeReady=this.onTreeReady.bind(this),e.load(r.a,this.onTreeReady,this.onHeadLoading,function(e){console.log("An error happened",e)})}},{key:"onHeadLoading",value:function(e){var o=e.loaded/e.total;console.log(100*o+"% loaded"),this.loading(Math.sin(o))}},{key:"onTreeReady",value:function(e){console.log(this.sphere.root.geometry);for(var o=0;o<this.sphere.root.geometry.vertices.length;o++)this.addTree(e,this.sphere.root.geometry.vertices[o])}},{key:"addTree",value:function(e,o){var t=e.clone();t.position.copy(o),t.scale.copy(new a.Vector3(.1,.1,.1));var n=new a.Vector3(0,1,0);t.quaternion.setFromUnitVectors(n,o.clone().normalize()),t.children[0].material[0].color.setRGB(1,.6,0),t.children[0].material[1].color.setRGB(.8,1,.2),this.sphere.root.add(t)}},{key:"update",value:function(e,o){this.sphere.root.rotateY(.05),this.sphere.root.rotateZ(.01)}}])&&h(o.prototype,t),n&&h(o,n),e}()}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvb2JqL0xvd3BvbHlfdHJlZV9zYW1wbGUub2JqIiwid2VicGFjazovLy8uL3NyYy9qcy9Mb29wcy9UcmVlRXhhbXBsZS5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsInAiLCJPQkpMb2FkZXIiLCJUSFJFRSIsIlRyZWVFeGFtcGxlIiwiX3JlZiIsInNjZW5lIiwib25Mb2FkIiwiX2NsYXNzQ2FsbENoZWNrIiwidGhpcyIsInJlbmRlcmVyIiwic2hhZG93TWFwIiwiZW5hYmxlZCIsInR5cGUiLCJyb290Iiwic3BoZXJlTWF0ZXJpYWwiLCJjb2xvciIsImZsYXRTaGFkaW5nIiwic3BoZXJlIiwiU3BoZXJlIiwic2l6ZSIsIm1hdGVyaWFsIiwid2lkdGhTZWdtZW50cyIsImhlaWdodFNlZ21lbnRzIiwiYWRkIiwibG9hZFRyZWUiLCJzZXR1cExpZ2h0cyIsInBlcmNlbnRhZ2UiLCJsaWdodHMiLCJMaWdodHMiLCJpbnRlbnNpdHkiLCJjYXN0U2hhZG93IiwiYmlhcyIsInByb2plY3Rpb25TaWRlcyIsIm1hcFNpemUiLCJyb3RhdGVZIiwiTWF0aCIsIlBJIiwibG9hZGVyIiwib25IZWFkUmVhZHkiLCJvblRyZWVSZWFkeSIsImJpbmQiLCJvbkhlYWRMb2FkaW5nIiwibG9hZCIsInRyZWUiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJ4aHIiLCJsb2FkaW5nIiwibG9hZGVkIiwidG90YWwiLCJzaW4iLCJvYmplY3QiLCJnZW9tZXRyeSIsImkiLCJ2ZXJ0aWNlcyIsImxlbmd0aCIsImFkZFRyZWUiLCJuZXdQb3NpdGlvbiIsIm5ld1RyZWUiLCJjbG9uZSIsInBvc2l0aW9uIiwiY29weSIsInNjYWxlIiwidXAiLCJxdWF0ZXJuaW9uIiwic2V0RnJvbVVuaXRWZWN0b3JzIiwibm9ybWFsaXplIiwiY2hpbGRyZW4iLCJzZXRSR0IiLCJ0aW1lRWxhcHNlZCIsImRlbHRhIiwicm90YXRlWiJdLCJtYXBwaW5ncyI6IjZFQUFBQSxFQUFBQyxRQUFpQkMsRUFBQUMsRUFBdUIsc1VDS3hDQyxFQUFVQyxPQUVXQyxhQUNuQixTQUFBQSxFQUFBQyxHQUE2QixJQUFoQkMsRUFBZ0JELEVBQWhCQyxNQUFPQyxFQUFTRixFQUFURSxvR0FBU0MsQ0FBQUMsS0FBQUwsR0FDM0JLLEtBQUtILE1BQVFBLEVBRWJBLEVBQU1JLFNBQVNDLFVBQVVDLFNBQVUsRUFDbkNOLEVBQU1JLFNBQVNDLFVBQVVFLEtBQU9WLG1CQUVoQ00sS0FBS0ssS0FBTyxJQUFJWCxRQUVoQk0sS0FBS00sZUFBaUIsSUFBSVosdUJBQTJCLENBQ25EYSxNQUFPLFNBQ1BDLGFBQWEsSUFFZlIsS0FBS1MsT0FBUyxJQUFJQyxJQUFPLENBQ3ZCQyxLQUFNLEVBQ05DLFNBQVVaLEtBQUtNLGVBQ2ZPLGNBQWUsRUFDZkMsZUFBZ0IsSUFHbEJkLEtBQUtLLEtBQUtVLElBQUlmLEtBQUtTLE9BQU9KLE1BQzFCTCxLQUFLZ0IsV0FDTGhCLEtBQUtpQixjQUVEbkIsR0FBUUEsMkRBR05vQiwwQ0FLTixJQUFNQyxFQUFTLElBQUlDLElBQU8sQ0FDeEJDLFVBQVcsSUFDWEMsWUFBWSxFQUNaQyxLQUFNLEdBQ05DLGdCQUFpQixJQUNqQkMsUUFBUyxPQUVYTixFQUFPTyxRQUFRQyxLQUFLQyxJQUNwQjVCLEtBQUtLLEtBQUtVLElBQUlJLHNDQUlkLElBQU1VLEVBQVMsSUFBSW5DLFlBQ25CTSxLQUFLOEIsWUFBYzlCLEtBQUsrQixZQUFZQyxLQUFLaEMsTUFDekNBLEtBQUtpQyxjQUFnQmpDLEtBQUtpQyxjQUFjRCxLQUFLaEMsTUFDN0NBLEtBQUsrQixZQUFjL0IsS0FBSytCLFlBQVlDLEtBQUtoQyxNQUN6QzZCLEVBQU9LLEtBRUxDLElBRUFuQyxLQUFLK0IsWUFFTC9CLEtBQUtpQyxjQUVMLFNBQVVHLEdBQ1JDLFFBQVFDLElBQUksb0JBQXFCRiwyQ0FJekJHLEdBQ1osSUFBTUMsRUFBVUQsRUFBSUUsT0FBU0YsRUFBSUcsTUFDakNMLFFBQVFDLElBQWUsSUFBVkUsRUFBaUIsWUFFOUJ4QyxLQUFLd0MsUUFBUWIsS0FBS2dCLElBQUlILHdDQUdaSSxHQUNWUCxRQUFRQyxJQUFJdEMsS0FBS1MsT0FBT0osS0FBS3dDLFVBQzdCLElBQUksSUFBSUMsRUFBSSxFQUFHQSxFQUFJOUMsS0FBS1MsT0FBT0osS0FBS3dDLFNBQVNFLFNBQVNDLE9BQVFGLElBQzVEOUMsS0FBS2lELFFBQ0hMLEVBQ0E1QyxLQUFLUyxPQUFPSixLQUFLd0MsU0FBU0UsU0FBU0Qsb0NBS2pDRixFQUFRTSxHQUNkLElBQU1DLEVBQVVQLEVBQU9RLFFBQ3ZCRCxFQUFRRSxTQUFTQyxLQUFLSixHQUN0QkMsRUFBUUksTUFBTUQsS0FDWixJQUFJNUQsVUFBYyxHQUFLLEdBQUssS0FHOUIsSUFBTThELEVBQUssSUFBSTlELFVBQWMsRUFBRyxFQUFHLEdBRW5DeUQsRUFBUU0sV0FBV0MsbUJBQ2pCRixFQUNBTixFQUFZRSxRQUFRTyxhQUd0QlIsRUFBUVMsU0FBUyxHQUFHaEQsU0FBUyxHQUFHTCxNQUFNc0QsT0FBTyxFQUFHLEdBQUssR0FDckRWLEVBQVFTLFNBQVMsR0FBR2hELFNBQVMsR0FBR0wsTUFBTXNELE9BQU8sR0FBSyxFQUFHLElBQ3JEN0QsS0FBS1MsT0FBT0osS0FBS1UsSUFBSW9DLGtDQUdoQlcsRUFBYUMsR0FFbEIvRCxLQUFLUyxPQUFPSixLQUFLcUIsUUFBUSxLQUN6QjFCLEtBQUtTLE9BQU9KLEtBQUsyRCxRQUFRIiwiZmlsZSI6Ii4vanMvVHJlZUV4YW1wbGUuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwib2JqL0xvd3BvbHlfdHJlZV9zYW1wbGUub2JqXCI7IiwiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuaW1wb3J0IHRyZWUgZnJvbSAnLi4vLi4vb2JqL0xvd3BvbHlfdHJlZV9zYW1wbGUub2JqJztcbmltcG9ydCBTcGhlcmUgZnJvbSAnLi4vT2JqZWN0cy9CYXNpY1NwaGVyZSc7XG5pbXBvcnQgTGlnaHRzIGZyb20gJy4uL0xpZ2h0cy9Ud29EaXJlY3Rpb25hbHMnO1xuaW1wb3J0ICogYXMgT0JKTG9hZGVyIGZyb20gJ3RocmVlLW9iai1sb2FkZXInO1xuT0JKTG9hZGVyKFRIUkVFKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJlZUV4YW1wbGUge1xuICBjb25zdHJ1Y3Rvcih7c2NlbmUsIG9uTG9hZH0pIHtcbiAgICB0aGlzLnNjZW5lID0gc2NlbmU7XG4gICAgXG4gICAgc2NlbmUucmVuZGVyZXIuc2hhZG93TWFwLmVuYWJsZWQgPSB0cnVlO1xuICAgIHNjZW5lLnJlbmRlcmVyLnNoYWRvd01hcC50eXBlID0gVEhSRUUuUENGU29mdFNoYWRvd01hcDtcblxuICAgIHRoaXMucm9vdCA9IG5ldyBUSFJFRS5Hcm91cCgpO1xuXG4gICAgdGhpcy5zcGhlcmVNYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCh7XG4gICAgICBjb2xvcjogMHhmZmFhMDAsXG4gICAgICBmbGF0U2hhZGluZzogdHJ1ZVxuICAgIH0pXG4gICAgdGhpcy5zcGhlcmUgPSBuZXcgU3BoZXJlKHtcbiAgICAgIHNpemU6IDMsXG4gICAgICBtYXRlcmlhbDogdGhpcy5zcGhlcmVNYXRlcmlhbCxcbiAgICAgIHdpZHRoU2VnbWVudHM6IDcsXG4gICAgICBoZWlnaHRTZWdtZW50czogNlxuICAgIH0pO1xuICAgIFxuICAgIHRoaXMucm9vdC5hZGQodGhpcy5zcGhlcmUucm9vdCk7XG4gICAgdGhpcy5sb2FkVHJlZSgpO1xuICAgIHRoaXMuc2V0dXBMaWdodHMoKTtcblxuICAgIGlmIChvbkxvYWQpIG9uTG9hZCgpO1xuICB9XG5cbiAgbG9hZGluZyhwZXJjZW50YWdlKSB7ICAgIFxuICAgIFxuICB9XG5cbiAgc2V0dXBMaWdodHMoKSB7XG4gICAgY29uc3QgbGlnaHRzID0gbmV3IExpZ2h0cyh7XG4gICAgICBpbnRlbnNpdHk6IDEuOCxcbiAgICAgIGNhc3RTaGFkb3c6IHRydWUsXG4gICAgICBiaWFzOiAwLjIsXG4gICAgICBwcm9qZWN0aW9uU2lkZXM6IDIuNSxcbiAgICAgIG1hcFNpemU6IDIwNDhcbiAgICB9KTtcbiAgICBsaWdodHMucm90YXRlWShNYXRoLlBJKTtcbiAgICB0aGlzLnJvb3QuYWRkKGxpZ2h0cyk7XG4gIH1cblxuICBsb2FkVHJlZSgpIHtcbiAgICBjb25zdCBsb2FkZXIgPSBuZXcgVEhSRUUuT0JKTG9hZGVyKCk7XG4gICAgdGhpcy5vbkhlYWRSZWFkeSA9IHRoaXMub25UcmVlUmVhZHkuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uSGVhZExvYWRpbmcgPSB0aGlzLm9uSGVhZExvYWRpbmcuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uVHJlZVJlYWR5ID0gdGhpcy5vblRyZWVSZWFkeS5iaW5kKHRoaXMpO1xuICAgIGxvYWRlci5sb2FkKFxuICAgICAgLy8gb2dnZXR0byB0cmlkaW1lbnNpb25hbGVcbiAgICAgIHRyZWUsXG4gICAgICAvLyBmdW56aW9uZSBkYSBjaGlhbWFyZSBxdWFuZG8gbCdvZ2dldHRvIDNEIMOoIHN0YXRvIGNhcmljYXRvXG4gICAgICB0aGlzLm9uVHJlZVJlYWR5LFxuICAgICAgLy8gZnVuemlvbmUgZGEgY2hpYW1yZSBkdXJhbnRlIGlsIGNhcmljYW1lbnRlXG4gICAgICB0aGlzLm9uSGVhZExvYWRpbmcsXG4gICAgICAvLyBmdXppb25lIGluIGNhc28gZGkgZXJyb3JlXG4gICAgICBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0FuIGVycm9yIGhhcHBlbmVkJywgZXJyb3IpO1xuICAgICAgfSk7XG4gIH1cblxuICBvbkhlYWRMb2FkaW5nKHhocikge1xuICAgIGNvbnN0IGxvYWRpbmcgPSB4aHIubG9hZGVkIC8geGhyLnRvdGFsO1xuICAgIGNvbnNvbGUubG9nKChsb2FkaW5nICogMTAwKSArICclIGxvYWRlZCcpO1xuICAgIFxuICAgIHRoaXMubG9hZGluZyhNYXRoLnNpbihsb2FkaW5nKSk7XG4gIH1cblxuICBvblRyZWVSZWFkeShvYmplY3QpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnNwaGVyZS5yb290Lmdlb21ldHJ5KTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5zcGhlcmUucm9vdC5nZW9tZXRyeS52ZXJ0aWNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5hZGRUcmVlKFxuICAgICAgICBvYmplY3QsXG4gICAgICAgIHRoaXMuc3BoZXJlLnJvb3QuZ2VvbWV0cnkudmVydGljZXNbaV1cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgYWRkVHJlZShvYmplY3QsIG5ld1Bvc2l0aW9uKSB7XG4gICAgY29uc3QgbmV3VHJlZSA9IG9iamVjdC5jbG9uZSgpO1xuICAgIG5ld1RyZWUucG9zaXRpb24uY29weShuZXdQb3NpdGlvbik7XG4gICAgbmV3VHJlZS5zY2FsZS5jb3B5KFxuICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoMC4xLCAwLjEsIDAuMSlcbiAgICApO1xuXG4gICAgY29uc3QgdXAgPSBuZXcgVEhSRUUuVmVjdG9yMygwLCAxLCAwKTtcbiAgICBcbiAgICBuZXdUcmVlLnF1YXRlcm5pb24uc2V0RnJvbVVuaXRWZWN0b3JzKFxuICAgICAgdXAsIFxuICAgICAgbmV3UG9zaXRpb24uY2xvbmUoKS5ub3JtYWxpemUoKVxuICAgICk7XG5cbiAgICBuZXdUcmVlLmNoaWxkcmVuWzBdLm1hdGVyaWFsWzBdLmNvbG9yLnNldFJHQigxLCAwLjYsIDApO1xuICAgIG5ld1RyZWUuY2hpbGRyZW5bMF0ubWF0ZXJpYWxbMV0uY29sb3Iuc2V0UkdCKDAuOCwgMSwgMC4yKTtcbiAgICB0aGlzLnNwaGVyZS5yb290LmFkZChuZXdUcmVlKTtcbiAgfVxuXG4gIHVwZGF0ZSh0aW1lRWxhcHNlZCwgZGVsdGEpIHtcbiAgICBsZXQgaWQgPSAwO1xuICAgIHRoaXMuc3BoZXJlLnJvb3Qucm90YXRlWSgwLjA1KTtcbiAgICB0aGlzLnNwaGVyZS5yb290LnJvdGF0ZVooMC4wMSk7XG4gIH1cblxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==
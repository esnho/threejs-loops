(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{34:function(e,o,t){e.exports=t.p+"obj/Lowpoly_tree_sample.obj"},8:function(e,o,t){"use strict";t.r(o),t.d(o,"default",function(){return c});var r=t(17),a=t(34),i=t.n(a),n=t(20),s=t(22),h=t(23);function d(e,o){for(var t=0;t<o.length;t++){var r=o[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}h(r);var c=function(){function e(o){var t=o.scene,a=o.onLoad;!function(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}(this,e),this.scene=t,this.setupCamera(),t.renderer.shadowMap.enabled=!0,t.renderer.shadowMap.type=r.PCFSoftShadowMap,this.root=new r.Group,this.loadTree(),this.setupLights();var i=new r.MeshStandardMaterial({emissive:6161169,flatShading:!0});i.emissive.setRGB(157/255,239/255,247/255),this.sphere=new s.a({size:6,material:i,widthSegments:20,heightSegments:10,receiveShadow:!0}),this.sphere.root.rotateX(Math.PI/180*26),console.log(this.sphere.root.geometry),this.root.add(this.sphere.root),a&&a()}var o,t,a;return o=e,(t=[{key:"loading",value:function(e){}},{key:"setupLights",value:function(){var e=new n.a({intensity:1.8,castShadow:!0,bias:2e-5,projectionSides:6.5,mapSize:256});e.rotateY(Math.PI),this.root.add(e)}},{key:"setupCamera",value:function(){this.scene.camera.position.copy(new r.Vector3(0,4.5,18)),this.scene.camera.lookAt(new r.Vector3(0,0,0))}},{key:"loadTree",value:function(){var e=new r.OBJLoader;this.onHeadReady=this.onTreeReady.bind(this),this.onHeadLoading=this.onHeadLoading.bind(this),this.onTreeReady=this.onTreeReady.bind(this),e.load(i.a,this.onTreeReady,this.onHeadLoading,function(e){console.log("An error happened",e)})}},{key:"onHeadLoading",value:function(e){var o=e.loaded/e.total;console.log(100*o+"% loaded"),this.loading(Math.sin(o))}},{key:"onTreeReady",value:function(e){e.traverse(function(e){e.castShadow=!0,e.receiveShadow=!0});for(var o=0;o<this.sphere.root.geometry.vertices.length;o++)console.log(this.sphere.root.geometry.vertices[o]),this.addTree(e,this.sphere.root.geometry.vertices[o],.1)}},{key:"addTree",value:function(e,o,t){var a=e.clone();a.position.copy(o),a.scale.copy(new r.Vector3(t,t,t));var i=new r.Vector3(0,1,0);console.log(this.sphere.root.position),a.quaternion.setFromUnitVectors(i,o.sub(this.sphere.root.position).clone().normalize()),a.children[0].material[0].color.setRGB(1,.6,0),a.children[0].material[1].color.setRGB(224/255,252/255,1),a.children[0].material[1].emissive.setRGB(224/255*.2,252/255*.2,.2),a.rotateY(360*Math.random()),console.log(a),this.sphere.root.add(a)}},{key:"update",value:function(e,o){var t=new r.Color;this.sphere.root.material.emissive.getHSL(t),t.s=.5*(Math.sin(e+.27*Math.PI)+1),t.l=.1*(Math.cos(e)+1),this.sphere.root.material.emissive.setHSL(t.h,t.s,t.l);for(var a=0;a<this.sphere.root.children.length;a+=1){var i=this.sphere.root.children[a].children[0],n=i.position;n.y=30*Math.sin(e+.05*a),i.position.copy(n)}this.sphere.root.rotateY(.35*o)}}])&&d(o.prototype,t),a&&d(o,a),e}()}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvb2JqL0xvd3BvbHlfdHJlZV9zYW1wbGUub2JqIiwid2VicGFjazovLy8uL3NyYy9qcy9Mb29wcy9UcmVlRXhhbXBsZS5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsInAiLCJPQkpMb2FkZXIiLCJUSFJFRSIsIlRyZWVFeGFtcGxlIiwiX3JlZiIsInNjZW5lIiwib25Mb2FkIiwiX2NsYXNzQ2FsbENoZWNrIiwidGhpcyIsInNldHVwQ2FtZXJhIiwicmVuZGVyZXIiLCJzaGFkb3dNYXAiLCJlbmFibGVkIiwidHlwZSIsInJvb3QiLCJsb2FkVHJlZSIsInNldHVwTGlnaHRzIiwic3BoZXJlTWF0ZXJpYWwiLCJlbWlzc2l2ZSIsImZsYXRTaGFkaW5nIiwic2V0UkdCIiwic3BoZXJlIiwiQmFzaWNTcGhlcmUiLCJzaXplIiwibWF0ZXJpYWwiLCJ3aWR0aFNlZ21lbnRzIiwiaGVpZ2h0U2VnbWVudHMiLCJyZWNlaXZlU2hhZG93Iiwicm90YXRlWCIsIk1hdGgiLCJQSSIsImNvbnNvbGUiLCJsb2ciLCJnZW9tZXRyeSIsImFkZCIsInBlcmNlbnRhZ2UiLCJsaWdodHMiLCJMaWdodHMiLCJpbnRlbnNpdHkiLCJjYXN0U2hhZG93IiwiYmlhcyIsInByb2plY3Rpb25TaWRlcyIsIm1hcFNpemUiLCJyb3RhdGVZIiwiY2FtZXJhIiwicG9zaXRpb24iLCJjb3B5IiwibG9va0F0IiwibG9hZGVyIiwib25IZWFkUmVhZHkiLCJvblRyZWVSZWFkeSIsImJpbmQiLCJvbkhlYWRMb2FkaW5nIiwibG9hZCIsInRyZWUiLCJlcnJvciIsInhociIsImxvYWRpbmciLCJsb2FkZWQiLCJ0b3RhbCIsInNpbiIsIm9iamVjdCIsInRyYXZlcnNlIiwib2JqIiwiaSIsInZlcnRpY2VzIiwibGVuZ3RoIiwiYWRkVHJlZSIsIm5ld1Bvc2l0aW9uIiwic2NhbGUiLCJuZXdUcmVlIiwiY2xvbmUiLCJheGlzIiwicXVhdGVybmlvbiIsInNldEZyb21Vbml0VmVjdG9ycyIsInN1YiIsIm5vcm1hbGl6ZSIsImNoaWxkcmVuIiwiY29sb3IiLCJyYW5kb20iLCJ0aW1lRWxhcHNlZCIsImRlbHRhIiwibmV3Q29sb3IiLCJnZXRIU0wiLCJzIiwibCIsImNvcyIsInNldEhTTCIsImgiLCJjb250ZWdnaW8iLCJ5Il0sIm1hcHBpbmdzIjoiNkVBQUFBLEVBQUFDLFFBQWlCQyxFQUFBQyxFQUF1QixzVUNLeENDLEVBQVVDLE9BRVdDLGFBQ25CLFNBQUFBLEVBQUFDLEdBQTZCLElBQWhCQyxFQUFnQkQsRUFBaEJDLE1BQU9DLEVBQVNGLEVBQVRFLG9HQUFTQyxDQUFBQyxLQUFBTCxHQUMzQkssS0FBS0gsTUFBUUEsRUFDYkcsS0FBS0MsY0FFTEosRUFBTUssU0FBU0MsVUFBVUMsU0FBVSxFQUNuQ1AsRUFBTUssU0FBU0MsVUFBVUUsS0FBT1gsbUJBRWhDTSxLQUFLTSxLQUFPLElBQUlaLFFBRWhCTSxLQUFLTyxXQUNMUCxLQUFLUSxjQUVMLElBQU1DLEVBQWlCLElBQUlmLHVCQUEyQixDQUNwRGdCLFNBQVUsUUFDVkMsYUFBYSxJQUdmRixFQUFlQyxTQUFTRSxPQUFPLElBQUksSUFBSyxJQUFJLElBQUssSUFBSSxLQUVyRFosS0FBS2EsT0FBUyxJQUFJQyxJQUFZLENBQzVCQyxLQUFNLEVBQ05DLFNBQVVQLEVBQ1ZRLGNBQWUsR0FDZkMsZUFBZ0IsR0FDaEJDLGVBQWUsSUFHakJuQixLQUFLYSxPQUFPUCxLQUFLYyxRQUFjQyxLQUFLQyxHQUFLLElBQWhCLElBRXpCQyxRQUFRQyxJQUFJeEIsS0FBS2EsT0FBT1AsS0FBS21CLFVBRTdCekIsS0FBS00sS0FBS29CLElBQUkxQixLQUFLYSxPQUFPUCxNQUV0QlIsR0FBUUEsMkRBR042QiwwQ0FLTixJQUFNQyxFQUFTLElBQUlDLElBQU8sQ0FDeEJDLFVBQVcsSUFDWEMsWUFBWSxFQUNaQyxLQUFNLEtBQ05DLGdCQUFpQixJQUNqQkMsUUFBUyxNQUVYTixFQUFPTyxRQUFRZCxLQUFL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UyxHQUN4Q25DLEVBQUtULFNBQVNDLEtBQUtzQixHQUdyQjVELEtBQUthLE9BQU9QLEtBQUs2QixRQUFnQixJQUFSc0MiLCJmaWxlIjoiLi9qcy9UcmVlRXhhbXBsZS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJvYmovTG93cG9seV90cmVlX3NhbXBsZS5vYmpcIjsiLCJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5pbXBvcnQgdHJlZSBmcm9tICcuLi8uLi9vYmovTG93cG9seV90cmVlX3NhbXBsZS5vYmonO1xuaW1wb3J0IExpZ2h0cyBmcm9tICcuLi9MaWdodHMvVHdvRGlyZWN0aW9uYWxzJztcbmltcG9ydCBCYXNpY1NwaGVyZSBmcm9tICcuLi9PYmplY3RzL0Jhc2ljU3BoZXJlJztcbmltcG9ydCAqIGFzIE9CSkxvYWRlciBmcm9tICd0aHJlZS1vYmotbG9hZGVyJztcbk9CSkxvYWRlcihUSFJFRSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyZWVFeGFtcGxlIHtcbiAgY29uc3RydWN0b3Ioe3NjZW5lLCBvbkxvYWR9KSB7XG4gICAgdGhpcy5zY2VuZSA9IHNjZW5lO1xuICAgIHRoaXMuc2V0dXBDYW1lcmEoKTtcbiAgICBcbiAgICBzY2VuZS5yZW5kZXJlci5zaGFkb3dNYXAuZW5hYmxlZCA9IHRydWU7XG4gICAgc2NlbmUucmVuZGVyZXIuc2hhZG93TWFwLnR5cGUgPSBUSFJFRS5QQ0ZTb2Z0U2hhZG93TWFwO1xuXG4gICAgdGhpcy5yb290ID0gbmV3IFRIUkVFLkdyb3VwKCk7XG5cbiAgICB0aGlzLmxvYWRUcmVlKCk7XG4gICAgdGhpcy5zZXR1cExpZ2h0cygpO1xuXG4gICAgY29uc3Qgc3BoZXJlTWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwoe1xuICAgICAgZW1pc3NpdmU6IDB4NWUwMzExLFxuICAgICAgZmxhdFNoYWRpbmc6IHRydWVcbiAgICB9KTtcblxuICAgIHNwaGVyZU1hdGVyaWFsLmVtaXNzaXZlLnNldFJHQigxNTcvMjU1LCAyMzkvMjU1LCAyNDcvMjU1KTtcblxuICAgIHRoaXMuc3BoZXJlID0gbmV3IEJhc2ljU3BoZXJlKHtcbiAgICAgIHNpemU6IDYsXG4gICAgICBtYXRlcmlhbDogc3BoZXJlTWF0ZXJpYWwsXG4gICAgICB3aWR0aFNlZ21lbnRzOiAyMCxcbiAgICAgIGhlaWdodFNlZ21lbnRzOiAxMCxcbiAgICAgIHJlY2VpdmVTaGFkb3c6IHRydWVcbiAgICB9KTtcblxuICAgIHRoaXMuc3BoZXJlLnJvb3Qucm90YXRlWCgyNiAqIChNYXRoLlBJIC8gMTgwKSlcblxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3BoZXJlLnJvb3QuZ2VvbWV0cnkpXG5cbiAgICB0aGlzLnJvb3QuYWRkKHRoaXMuc3BoZXJlLnJvb3QpO1xuXG4gICAgaWYgKG9uTG9hZCkgb25Mb2FkKCk7XG4gIH1cblxuICBsb2FkaW5nKHBlcmNlbnRhZ2UpIHsgICAgXG4gICAgXG4gIH1cblxuICBzZXR1cExpZ2h0cygpIHtcbiAgICBjb25zdCBsaWdodHMgPSBuZXcgTGlnaHRzKHtcbiAgICAgIGludGVuc2l0eTogMS44LFxuICAgICAgY2FzdFNoYWRvdzogdHJ1ZSxcbiAgICAgIGJpYXM6IDAuMDAwMDIsXG4gICAgICBwcm9qZWN0aW9uU2lkZXM6IDYuNSxcbiAgICAgIG1hcFNpemU6IDI1NlxuICAgIH0pO1xuICAgIGxpZ2h0cy5yb3RhdGVZKE1hdGguUEkpO1xuICAgIHRoaXMucm9vdC5hZGQobGlnaHRzKTtcbiAgfVxuXG4gIHNldHVwQ2FtZXJhKCkge1xuICAgIHRoaXMuc2NlbmUuY2FtZXJhLnBvc2l0aW9uLmNvcHkobmV3IFRIUkVFLlZlY3RvcjMoMCwgNC41LCAxOCkpO1xuICAgIHRoaXMuc2NlbmUuY2FtZXJhLmxvb2tBdChuZXcgVEhSRUUuVmVjdG9yMygwLCAwLCAwKSk7XG4gIH1cblxuICBsb2FkVHJlZSgpIHtcbiAgICBjb25zdCBsb2FkZXIgPSBuZXcgVEhSRUUuT0JKTG9hZGVyKCk7XG4gICAgdGhpcy5vbkhlYWRSZWFkeSA9IHRoaXMub25UcmVlUmVhZHkuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uSGVhZExvYWRpbmcgPSB0aGlzLm9uSGVhZExvYWRpbmcuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uVHJlZVJlYWR5ID0gdGhpcy5vblRyZWVSZWFkeS5iaW5kKHRoaXMpO1xuICAgIGxvYWRlci5sb2FkKFxuICAgICAgdHJlZSxcbiAgICAgIHRoaXMub25UcmVlUmVhZHksXG4gICAgICB0aGlzLm9uSGVhZExvYWRpbmcsXG4gICAgICBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0FuIGVycm9yIGhhcHBlbmVkJywgZXJyb3IpO1xuICAgICAgfSk7XG4gIH1cblxuICBvbkhlYWRMb2FkaW5nKHhocikge1xuICAgIGNvbnN0IGxvYWRpbmcgPSB4aHIubG9hZGVkIC8geGhyLnRvdGFsO1xuICAgIGNvbnNvbGUubG9nKChsb2FkaW5nICogMTAwKSArICclIGxvYWRlZCcpO1xuICAgIFxuICAgIHRoaXMubG9hZGluZyhNYXRoLnNpbihsb2FkaW5nKSk7XG4gIH1cblxuICBvblRyZWVSZWFkeShvYmplY3QpIHtcbiAgICBvYmplY3QudHJhdmVyc2UoKG9iaikgPT4ge1xuICAgICAgb2JqLmNhc3RTaGFkb3cgPSB0cnVlO1xuICAgICAgb2JqLnJlY2VpdmVTaGFkb3cgPSB0cnVlO1xuICAgIH0pO1xuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuc3BoZXJlLnJvb3QuZ2VvbWV0cnkudmVydGljZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3BoZXJlLnJvb3QuZ2VvbWV0cnkudmVydGljZXNbaV0pO1xuICAgICAgXG4gICAgICB0aGlzLmFkZFRyZWUob2JqZWN0LCB0aGlzLnNwaGVyZS5yb290Lmdlb21ldHJ5LnZlcnRpY2VzW2ldLCAwLjEpO1xuICAgIH1cbiAgfVxuXG4gIGFkZFRyZWUob2JqZWN0LCBuZXdQb3NpdGlvbiwgc2NhbGUpIHtcbiAgICBjb25zdCBuZXdUcmVlID0gb2JqZWN0LmNsb25lKCk7XG4gICAgLy8gc2V0IHBvc2l0aW9uXG4gICAgbmV3VHJlZS5wb3NpdGlvbi5jb3B5KG5ld1Bvc2l0aW9uKTtcbiAgICAvLyBzY2FsZVxuICAgIG5ld1RyZWUuc2NhbGUuY29weShcbiAgICAgIG5ldyBUSFJFRS5WZWN0b3IzKHNjYWxlLCBzY2FsZSwgc2NhbGUpXG4gICAgKTtcblxuICAgIGNvbnN0IGF4aXMgPSBuZXcgVEhSRUUuVmVjdG9yMygwLCAxLCAwKTtcbiAgICBjb25zb2xlLmxvZygodGhpcy5zcGhlcmUucm9vdC5wb3NpdGlvbikpO1xuICAgIFxuICAgIG5ld1RyZWUucXVhdGVybmlvbi5zZXRGcm9tVW5pdFZlY3RvcnMoYXhpcywgXG4gICAgICBuZXdQb3NpdGlvbi5zdWIodGhpcy5zcGhlcmUucm9vdC5wb3NpdGlvbikuY2xvbmUoKS5ub3JtYWxpemUoKSk7XG5cbiAgICBuZXdUcmVlLmNoaWxkcmVuWzBdLm1hdGVyaWFsWzBdLmNvbG9yLnNldFJHQigxLCAwLjYsIDApO1xuICAgIG5ld1RyZWUuY2hpbGRyZW5bMF0ubWF0ZXJpYWxbMV0uY29sb3Iuc2V0UkdCKDIyNC8yNTUsIDI1Mi8yNTUsIDEpO1xuICAgIG5ld1RyZWUuY2hpbGRyZW5bMF0ubWF0ZXJpYWxbMV0uZW1pc3NpdmUuc2V0UkdCKDIyNC8yNTUqMC4yLCAyNTIvMjU1KjAuMiwgMSowLjIpO1xuICAgIG5ld1RyZWUucm90YXRlWShNYXRoLnJhbmRvbSgpICogMzYwKTtcbiAgICBjb25zb2xlLmxvZyhuZXdUcmVlKTtcbiAgICB0aGlzLnNwaGVyZS5yb290LmFkZChuZXdUcmVlKTtcbiAgfVxuXG4gIHVwZGF0ZSh0aW1lRWxhcHNlZCwgZGVsdGEpIHtcbiAgICBsZXQgbmV3Q29sb3IgPSBuZXcgVEhSRUUuQ29sb3IoKTtcbiAgICB0aGlzLnNwaGVyZS5yb290Lm1hdGVyaWFsLmVtaXNzaXZlLmdldEhTTChuZXdDb2xvcik7XG4gICAgbmV3Q29sb3IucyA9IChNYXRoLnNpbih0aW1lRWxhcHNlZCArIChNYXRoLlBJICogMC4yNykpICsgMSkgKiAwLjU7XG4gICAgbmV3Q29sb3IubCA9IChNYXRoLmNvcyh0aW1lRWxhcHNlZCkgKyAxKSAqIDAuMTtcbiAgICB0aGlzLnNwaGVyZS5yb290Lm1hdGVyaWFsLmVtaXNzaXZlLnNldEhTTChuZXdDb2xvci5oLCBuZXdDb2xvci5zLCBuZXdDb2xvci5sKTtcblxuICAgIGZvciAobGV0IGNvbnRlZ2dpbyA9IDA7IGNvbnRlZ2dpbyA8IHRoaXMuc3BoZXJlLnJvb3QuY2hpbGRyZW4ubGVuZ3RoOyBjb250ZWdnaW8gPSBjb250ZWdnaW8gKyAxKSB7XG4gICAgICBjb25zdCB0cmVlID0gdGhpcy5zcGhlcmUucm9vdC5jaGlsZHJlbltjb250ZWdnaW9dLmNoaWxkcmVuWzBdO1xuICAgICAgY29uc3QgbmV3UG9zaXRpb24gPSB0cmVlLnBvc2l0aW9uO1xuICAgICAgbmV3UG9zaXRpb24ueSA9IE1hdGguc2luKHRpbWVFbGFwc2VkICsgKGNvbnRlZ2dpbyAqIDAuMDUpKSAqIDMwO1xuICAgICAgdHJlZS5wb3NpdGlvbi5jb3B5KG5ld1Bvc2l0aW9uKTtcbiAgICB9XG4gICAgXG4gICAgdGhpcy5zcGhlcmUucm9vdC5yb3RhdGVZKGRlbHRhICogMC4zNSk7XG4gIH1cblxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==
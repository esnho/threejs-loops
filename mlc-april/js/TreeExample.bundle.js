(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{34:function(e,o,t){e.exports=t.p+"obj/Lowpoly_tree_sample.obj"},8:function(e,o,t){"use strict";t.r(o),t.d(o,"default",function(){return l});var r=t(17),n=t(34),a=t.n(n),i=t(22),s=t(20),h=t(23);function d(e,o){for(var t=0;t<o.length;t++){var r=o[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}h(r);var l=function(){function e(o){var t=o.scene,n=o.onLoad;!function(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}(this,e),this.scene=t,t.renderer.shadowMap.enabled=!0,t.renderer.shadowMap.type=r.PCFSoftShadowMap,this.root=new r.Group,this.sphereMaterial=new r.MeshStandardMaterial({color:16755200,flatShading:!0}),this.sphere=new i.a({size:3,material:this.sphereMaterial,widthSegments:7,heightSegments:6}),this.root.add(this.sphere.root),this.setupLights(),this.loadTree(),console.log(">>>>>>>",this.sphere),n&&n()}var o,t,n;return o=e,(t=[{key:"loading",value:function(e){}},{key:"setupLights",value:function(){var e=new s.a({intensity:1.8,castShadow:!0,bias:.2,projectionSides:2.5,mapSize:2048});e.rotateY(Math.PI),this.root.add(e)}},{key:"loadTree",value:function(){var e=new r.OBJLoader;this.onHeadReady=this.onTreeReady.bind(this),this.onHeadLoading=this.onTreeLoading.bind(this),this.onTreeReady=this.onTreeReady.bind(this),e.load(a.a,this.onTreeReady,this.onTreeLoading,function(e){console.log("An error happened",e)})}},{key:"onTreeLoading",value:function(e){var o=e.loaded/e.total;console.log(100*o+"% loaded"),this.loading(Math.sin(o))}},{key:"onTreeReady",value:function(e){console.log(this.sphere.root.geometry);for(var o=0;o<this.sphere.root.geometry.vertices.length;o++)this.addTree(e,this.sphere.root.geometry.vertices[o])}},{key:"addTree",value:function(e,o){var t=e.clone();t.position.copy(o);t.scale.copy(new r.Vector3(.1,.1,.1));var n=new r.Vector3(0,1,0);t.quaternion.setFromUnitVectors(n,o.clone().normalize()),t.children[0].material[0].color.setRGB(1,.6,0),t.children[0].material[1].color.setRGB(.8,1,.2),this.sphere.root.add(t)}},{key:"update",value:function(e,o){this.sphere.root.rotateY(.5*o),this.sphere.root.rotateZ(.1*o);for(var t=0;t<this.sphere.root.children.length;t++){this.sphere.root.children[t].translateY(Math.cos(e+t)*o)}}}])&&d(o.prototype,t),n&&d(o,n),e}()}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvb2JqL0xvd3BvbHlfdHJlZV9zYW1wbGUub2JqIiwid2VicGFjazovLy8uL3NyYy9qcy9Mb29wcy9UcmVlRXhhbXBsZS5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsInAiLCJPQkpMb2FkZXIiLCJUSFJFRSIsIlRyZWVFeGFtcGxlIiwiX3JlZiIsInNjZW5lIiwib25Mb2FkIiwiX2NsYXNzQ2FsbENoZWNrIiwidGhpcyIsInJlbmRlcmVyIiwic2hhZG93TWFwIiwiZW5hYmxlZCIsInR5cGUiLCJyb290Iiwic3BoZXJlTWF0ZXJpYWwiLCJjb2xvciIsImZsYXRTaGFkaW5nIiwic3BoZXJlIiwiU3BoZXJlIiwic2l6ZSIsIm1hdGVyaWFsIiwid2lkdGhTZWdtZW50cyIsImhlaWdodFNlZ21lbnRzIiwiYWRkIiwic2V0dXBMaWdodHMiLCJsb2FkVHJlZSIsImNvbnNvbGUiLCJsb2ciLCJwZXJjZW50YWdlIiwibGlnaHRzIiwiTGlnaHRzIiwiaW50ZW5zaXR5IiwiY2FzdFNoYWRvdyIsImJpYXMiLCJwcm9qZWN0aW9uU2lkZXMiLCJtYXBTaXplIiwicm90YXRlWSIsIk1hdGgiLCJQSSIsImxvYWRlciIsIm9uSGVhZFJlYWR5Iiwib25UcmVlUmVhZHkiLCJiaW5kIiwib25IZWFkTG9hZGluZyIsIm9uVHJlZUxvYWRpbmciLCJsb2FkIiwidHJlZSIsImVycm9yIiwieGhyIiwibG9hZGluZyIsImxvYWRlZCIsInRvdGFsIiwic2luIiwib2JqZWN0IiwiZ2VvbWV0cnkiLCJpIiwidmVydGljZXMiLCJsZW5ndGgiLCJhZGRUcmVlIiwibmV3UG9zaXRpb24iLCJuZXdUcmVlIiwiY2xvbmUiLCJwb3NpdGlvbiIsImNvcHkiLCJzY2FsZSIsInVwIiwicXVhdGVybmlvbiIsInNldEZyb21Vbml0VmVjdG9ycyIsIm5vcm1hbGl6ZSIsImNoaWxkcmVuIiwic2V0UkdCIiwidGltZUVsYXBzZWQi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anMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJvYmovTG93cG9seV90cmVlX3NhbXBsZS5vYmpcIjsiLCJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5pbXBvcnQgdHJlZSBmcm9tICcuLi8uLi9vYmovTG93cG9seV90cmVlX3NhbXBsZS5vYmonO1xuaW1wb3J0IFNwaGVyZSBmcm9tICcuLi9PYmplY3RzL0Jhc2ljU3BoZXJlJztcbmltcG9ydCBMaWdodHMgZnJvbSAnLi4vTGlnaHRzL1R3b0RpcmVjdGlvbmFscyc7XG5pbXBvcnQgKiBhcyBPQkpMb2FkZXIgZnJvbSAndGhyZWUtb2JqLWxvYWRlcic7XG5PQkpMb2FkZXIoVEhSRUUpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmVlRXhhbXBsZSB7XG4gIGNvbnN0cnVjdG9yKHtzY2VuZSwgb25Mb2FkfSkge1xuICAgIHRoaXMuc2NlbmUgPSBzY2VuZTtcbiAgICBcbiAgICBzY2VuZS5yZW5kZXJlci5zaGFkb3dNYXAuZW5hYmxlZCA9IHRydWU7XG4gICAgc2NlbmUucmVuZGVyZXIuc2hhZG93TWFwLnR5cGUgPSBUSFJFRS5QQ0ZTb2Z0U2hhZG93TWFwO1xuXG4gICAgdGhpcy5yb290ID0gbmV3IFRIUkVFLkdyb3VwKCk7XG5cbiAgICB0aGlzLnNwaGVyZU1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsKHtcbiAgICAgIGNvbG9yOiAweGZmYWEwMCxcbiAgICAgIGZsYXRTaGFkaW5nOiB0cnVlXG4gICAgfSlcbiAgICB0aGlzLnNwaGVyZSA9IG5ldyBTcGhlcmUoe1xuICAgICAgc2l6ZTogMyxcbiAgICAgIG1hdGVyaWFsOiB0aGlzLnNwaGVyZU1hdGVyaWFsLFxuICAgICAgd2lkdGhTZWdtZW50czogNyxcbiAgICAgIGhlaWdodFNlZ21lbnRzOiA2XG4gICAgfSk7XG4gICAgXG4gICAgdGhpcy5yb290LmFkZCh0aGlzLnNwaGVyZS5yb290KTtcbiAgICB0aGlzLnNldHVwTGlnaHRzKCk7XG4gICAgdGhpcy5sb2FkVHJlZSgpO1xuXG4gICAgY29uc29sZS5sb2coXCI+Pj4+Pj4+XCIsdGhpcy5zcGhlcmUpO1xuXG4gICAgaWYgKG9uTG9hZCkgb25Mb2FkKCk7XG4gIH1cblxuICBsb2FkaW5nKHBlcmNlbnRhZ2UpIHsgICAgXG4gICAgXG4gIH1cblxuICBzZXR1cExpZ2h0cygpIHtcbiAgICBjb25zdCBsaWdodHMgPSBuZXcgTGlnaHRzKHtcbiAgICAgIGludGVuc2l0eTogMS44LFxuICAgICAgY2FzdFNoYWRvdzogdHJ1ZSxcbiAgICAgIGJpYXM6IDAuMixcbiAgICAgIHByb2plY3Rpb25TaWRlczogMi41LFxuICAgICAgbWFwU2l6ZTogMjA0OFxuICAgIH0pO1xuICAgIGxpZ2h0cy5yb3RhdGVZKE1hdGguUEkpO1xuICAgIHRoaXMucm9vdC5hZGQobGlnaHRzKTtcbiAgfVxuXG4gIGxvYWRUcmVlKCkge1xuICAgIGNvbnN0IGxvYWRlciA9IG5ldyBUSFJFRS5PQkpMb2FkZXIoKTtcbiAgICB0aGlzLm9uSGVhZFJlYWR5ID0gdGhpcy5vblRyZWVSZWFkeS5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25IZWFkTG9hZGluZyA9IHRoaXMub25UcmVlTG9hZGluZy5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25UcmVlUmVhZHkgPSB0aGlzLm9uVHJlZVJlYWR5LmJpbmQodGhpcyk7XG4gICAgbG9hZGVyLmxvYWQoXG4gICAgICAvLyBvZ2dldHRvIHRyaWRpbWVuc2lvbmFsZVxuICAgICAgdHJlZSxcbiAgICAgIC8vIGZ1bnppb25lIGRhIGNoaWFtYXJlIHF1YW5kbyBsJ29nZ2V0dG8gM0Qgw6ggc3RhdG8gY2FyaWNhdG9cbiAgICAgIHRoaXMub25UcmVlUmVhZHksXG4gICAgICAvLyBmdW56aW9uZSBkYSBjaGlhbXJlIGR1cmFudGUgaWwgY2FyaWNhbWVudGVcbiAgICAgIHRoaXMub25UcmVlTG9hZGluZyxcbiAgICAgIC8vIGZ1emlvbmUgaW4gY2FzbyBkaSBlcnJvcmVcbiAgICAgIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZygnQW4gZXJyb3IgaGFwcGVuZWQnLCBlcnJvcik7XG4gICAgICB9KTtcbiAgfVxuXG4gIG9uVHJlZUxvYWRpbmcoeGhyKSB7XG4gICAgY29uc3QgbG9hZGluZyA9IHhoci5sb2FkZWQgLyB4aHIudG90YWw7XG4gICAgY29uc29sZS5sb2coKGxvYWRpbmcgKiAxMDApICsgJyUgbG9hZGVkJyk7XG4gICAgXG4gICAgdGhpcy5sb2FkaW5nKE1hdGguc2luKGxvYWRpbmcpKTtcbiAgfVxuXG4gIG9uVHJlZVJlYWR5KG9iamVjdCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc3BoZXJlLnJvb3QuZ2VvbWV0cnkpO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLnNwaGVyZS5yb290Lmdlb21ldHJ5LnZlcnRpY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLmFkZFRyZWUoXG4gICAgICAgIG9iamVjdCxcbiAgICAgICAgdGhpcy5zcGhlcmUucm9vdC5nZW9tZXRyeS52ZXJ0aWNlc1tpXVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBhZGRUcmVlKG9iamVjdCwgbmV3UG9zaXRpb24pIHtcbiAgICBjb25zdCBuZXdUcmVlID0gb2JqZWN0LmNsb25lKCk7XG4gICAgbmV3VHJlZS5wb3NpdGlvbi5jb3B5KG5ld1Bvc2l0aW9uKTtcbiAgICBjb25zdCBzY2FsZSA9IDAuMTtcbiAgICBuZXdUcmVlLnNjYWxlLmNvcHkoXG4gICAgICBuZXcgVEhSRUUuVmVjdG9yMyhzY2FsZSwgc2NhbGUsIHNjYWxlKVxuICAgICk7XG5cbiAgICBjb25zdCB1cCA9IG5ldyBUSFJFRS5WZWN0b3IzKDAsIDEsIDApO1xuICAgIFxuICAgIG5ld1RyZWUucXVhdGVybmlvbi5zZXRGcm9tVW5pdFZlY3RvcnMoXG4gICAgICB1cCwgXG4gICAgICBuZXdQb3NpdGlvbi5jbG9uZSgpLm5vcm1hbGl6ZSgpXG4gICAgKTtcblxuICAgIG5ld1RyZWUuY2hpbGRyZW5bMF0ubWF0ZXJpYWxbMF0uY29sb3Iuc2V0UkdCKDEsIDAuNiwgMCk7XG4gICAgbmV3VHJlZS5jaGlsZHJlblswXS5tYXRlcmlhbFsxXS5jb2xvci5zZXRSR0IoMC44LCAxLCAwLjIpO1xuICAgIHRoaXMuc3BoZXJlLnJvb3QuYWRkKG5ld1RyZWUpO1xuICB9XG5cbiAgdXBkYXRlKHRpbWVFbGFwc2VkLCBkZWx0YSkge1xuICAgIHRoaXMuc3BoZXJlLnJvb3Qucm90YXRlWSgwLjUgKiBkZWx0YSk7XG4gICAgdGhpcy5zcGhlcmUucm9vdC5yb3RhdGVaKDAuMSAqIGRlbHRhKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3BoZXJlLnJvb3QuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHRyZWUgPSAgdGhpcy5zcGhlcmUucm9vdC5jaGlsZHJlbltpXTtcbiAgICAgIHRyZWUudHJhbnNsYXRlWShcbiAgICAgICAgTWF0aC5jb3ModGltZUVsYXBzZWQgKyBpKSAqIChkZWx0YSlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=
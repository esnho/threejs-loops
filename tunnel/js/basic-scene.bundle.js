(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{28:function(e,t,i){"use strict";i.r(t);var n=i(29);i(37);function r(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}n.Color.prototype.setIntHSL=function(e,t,i){n.Color.prototype.setHSL(e/360,t/100,i/100)},i.d(t,"default",function(){return a});var a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.updatables=[],this.objects=[],this.clock=new n.Clock,this.InitScene=this.InitScene.bind(this),this.Resize=this.Resize.bind(this)}var t,i,a;return t=e,(i=[{key:"InitScene",value:function(){this.scene=new n.Scene,this.camera=this.GetCamera(),this.camera.position.z=10;var e=this.GetRenderer();this.clearColor=e.clearColor,this.renderer=e.renderer,this.canvas=document.body.appendChild(this.renderer.domElement),this.renderer.render(this.scene,this.camera),this.oldTime=this.clock.getElapsedTime(),this.Update(),window.addEventListener("resize",this.Resize)}},{key:"Destroy",value:function(){var e=this;this.objects.map(function(t){return e.Remove(t)}),cancelAnimationFrame(this.animationFrame),this.scene=null,this.camera=null,this.renderer=null,this.canvas.remove(),window.removeEventListener("resize",this.Resize)}},{key:"GetCamera",value:function(){var e=window.innerWidth/window.innerHeight;return new n.PerspectiveCamera(65,e,1,100)}},{key:"GetRenderer",value:function(){var e=new n.Color;e.setRGB(.1,.1,.1);var t=new n.WebGLRenderer({antialias:!0});return t.setSize(window.innerWidth,window.innerHeight),t.setClearColor(e),{clearColor:e,renderer:t}}},{key:"Add",value:function(e){var t=this;this.objects.push(e),this.scene.add(e.root),e.update&&this.updatables.push(e),e.OnDie=function(){t.Remove(e)}}},{key:"Remove",value:function(e){e.onRemove&&e.onRemove(),this.scene.remove(e.root),this.updatables=this.updatables.filter(function(t){return t.root.uuid!==e.root.uuid})}},{key:"Update",value:function(){var e=this,t=this.clock.getElapsedTime(),i=t-this.oldTime;this.oldTime=t;var n=!0,r=!1,a=void 0;try{for(var o,s=this.updatables[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){o.value.update(t,i)}}catch(e){r=!0,a=e}finally{try{n||null==s.return||s.return()}finally{if(r)throw a}}this.renderer.render(this.scene,this.camera),this.animationFrame=requestAnimationFrame(function(){return e.Update()})}},{key:"Resize",value:function(){if(this.camera.aspect)this.camera.aspect=window.innerWidth/window.innerHeight;else if("OrthographicCamera"===this.camera.type){var e=window.innerWidth/window.innerHeight;this.camera.left=this.camera.bottom*e,this.camera.right=this.camera.top*e}this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}}])&&r(t.prototype,i),a&&r(t,a),e}()},37:function(e,t){Math.clamp=function(e,t,i){return Math.min(Math.max(e,t),i)},Math.NormalizeHue=function(e){return e/360}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvSGVscGVycy9USFJFRS1leHRlbnNpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9PYmplY3RzL0Jhc2ljU2NlbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0hlbHBlcnMvTWF0aC5qcyJdLCJuYW1lcyI6WyJDb2xvciIsInByb3RvdHlwZSIsInNldEludEhTTCIsImgiLCJzIiwibCIsInNldEhTTCIsIkJhc2ljU2NlbmUiLCJfY2xhc3NDYWxsQ2hlY2siLCJ0aGlzIiwidXBkYXRhYmxlcyIsIm9iamVjdHMiLCJjbG9jayIsIkNsb2NrIiwiSW5pdFNjZW5lIiwiYmluZCIsIlJlc2l6ZSIsInNjZW5lIiwiU2NlbmUiLCJjYW1lcmEiLCJHZXRDYW1lcmEiLCJwb3NpdGlvbiIsInoiLCJyZW5kZXJPYmplY3QiLCJHZXRSZW5kZXJlciIsImNsZWFyQ29sb3IiLCJyZW5kZXJlciIsImNhbnZhcyIsImRvY3VtZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwiZG9tRWxlbWVudCIsInJlbmRlciIsIm9sZFRpbWUiLCJnZXRFbGFwc2VkVGltZSIsIlVwZGF0ZSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJfdGhpcyIsIm1hcCIsIm9iamVjdCIsIlJlbW92ZSIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiYW5pbWF0aW9uRnJhbWUiLCJyZW1vdmUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYXNwZWN0UmF0aW8iLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJQZXJzcGVjdGl2ZUNhbWVyYSIsInNldFJHQiIsIldlYkdMUmVuZGVyZXIiLCJhbnRpYWxpYXMiLCJzZXRTaXplIiwic2V0Q2xlYXJDb2xvciIsIl90aGlzMiIsInB1c2giLCJhZGQiLCJyb290IiwidXBkYXRlIiwiT25EaWUiLCJvblJlbW92ZSIsImZpbHRlciIsIm9iaiIsInV1aWQiLCJfdGhpczMiLCJ0aW1lRWxhcHNlZCIsImRlbHRhIiwiX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiIsIl9kaWRJdGVyYXRvckVycm9yIiwiX2l0ZXJhdG9yRXJyb3IiLCJ1bmRlZmluZWQiLCJfc3RlcCIsIl9pdGVyYXRvciIsIlN5bWJvbCIsIml0ZXJhdG9yIiwibmV4dCIsImRvbmUiLCJ2YWx1ZSIsImVyciIsInJldHVybiIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImFzcGVjdCIsInR5cGUiLCJsZWZ0IiwiYm90dG9tIiwicmlnaHQiLCJ0b3AiLCJ1cGRhdGVQcm9qZWN0aW9uTWF0cml4IiwiTWF0aCIsImNsYW1wIiwibWluIiwibWF4IiwiTm9ybWFsaXplSHVlIl0sIm1hcHBpbmdzIjoieVJBRUFBLFFBQU1DLFVBQVVDLFVBQVksU0FBU0MsRUFBR0MsRUFBR0MsR0FDdkNMLFFBQU1DLFVBQVVLLE9BQ2RILEVBQUUsSUFDRkMsRUFBRSxJQUNGQyxFQUFFLGdEQ0lhRSxhQUNuQixTQUFBQSxpR0FBY0MsQ0FBQUMsS0FBQUYsR0FDWkUsS0FBS0MsV0FBYSxHQUNsQkQsS0FBS0UsUUFBVSxHQUNmRixLQUFLRyxNQUFRLElBQUlDLFFBQ2pCSixLQUFLSyxVQUFZTCxLQUFLSyxVQUFVQyxLQUFLTixNQUNyQ0EsS0FBS08sT0FBU1AsS0FBS08sT0FBT0QsS0FBS04saUVBSS9CQSxLQUFLUSxNQUFRLElBQUlDLFFBQ2pCVCxLQUFLVSxPQUFTVixLQUFLVyxZQUVuQlgsS0FBS1UsT0FBT0UsU0FBU0MsRUFBSSxHQUV6QixJQUFNQyxFQUFlZCxLQUFLZSxjQUMxQmYsS0FBS2dCLFdBQWFGLEVBQWFFLFdBQy9CaEIsS0FBS2lCLFNBQVdILEVBQWFHLFNBQzdCakIsS0FBS2tCLE9BQVNDLFNBQVNDLEtBQUtDLFlBQVlyQixLQUFLaUIsU0FBU0ssWUFFdER0QixLQUFLaUIsU0FBU00sT0FBT3ZCLEtBQUtRLE1BQU9SLEtBQUtVLFFBRXRDVixLQUFLd0IsUUFBVXhCLEtBQUtHLE1BQU1zQixpQkFDMUJ6QixLQUFLMEIsU0FDTEMsT0FBT0MsaUJBQWlCLFNBQVU1QixLQUFLTywwQ0FHL0IsSUFBQXNCLEVBQUE3QixLQUNSQSxLQUFLRSxRQUFRNEIsSUFBSSxTQUFBQyxHQUFNLE9BQUlGLEVBQUtHLE9BQU9ELEtBQ3ZDRSxxQkFBcUJqQyxLQUFLa0MsZ0JBQzFCbEMsS0FBS1EsTUFBUSxLQUNiUixLQUFLVSxPQUFTLEtBQ2RWLEtBQUtpQixTQUFXLEtBQ2hCakIsS0FBS2tCLE9BQU9pQixTQUNaUixPQUFPUyxvQkFBb0IsU0FBVXBDLEtBQUtPLDRDQUkxQyxJQUFNOEIsRUFBY1YsT0FBT1csV0FBYVgsT0FBT1ksWUFFL0MsT0FEZSxJQUFJQyxvQkFBa0IsR0FBSUgsRUFBYSxFQUFHLDJDQUt6RCxJQUFNckIsRUFBYSxJQUFJekIsUUFDdkJ5QixFQUFXeUIsT0FBTyxHQUFLLEdBQUssSUFFNUIsSUFBTXhCLEVBQVcsSUFBSXlCLGdCQUFjLENBQ2pDQyxXQUFXLElBS2IsT0FIQTFCLEVBQVMyQixRQUFRakIsT0FBT1csV0FBWVgsT0FBT1ksYUFDM0N0QixFQUFTNEIsY0FBYzdCLEdBRWhCLENBQ0xBLFdBQVlBLEVBQ1pDLFNBQVVBLCtCQUlWYyxHQUFRLElBQUFlLEVBQUE5QyxLQUNWQSxLQUFLRSxRQUFRNkMsS0FBS2hCLEdBQ2xCL0IsS0FBS1EsTUFBTXdDLElBQUlqQixFQUFPa0IsTUFDbEJsQixFQUFPbUIsUUFDVGxELEtBQUtDLFdBQVc4QyxLQUFLaEIsR0FFdkJBLEVBQU9vQixNQUFRLFdBQ2JMLEVBQUtkLE9BQU9ELG1DQUtUQSxHQUNEQSxFQUFPcUIsVUFDVHJCLEVBQU9xQixXQUVUcEQsS0FBS1EsTUFBTTJCLE9BQU9KLEVBQU9rQixNQUN6QmpELEtBQUtDLFdBQWFELEtBQUtDLFdBQVdvRCxPQUNoQyxTQUFBQyxHQUFHLE9BQUlBLEVBQUlMLEtBQUtNLE9BQVN4QixFQUFPa0IsS0FBS00sd0NBSWhDLElBQUFDLEVBQUF4RCxLQUNEeUQsRUFBY3pELEtBQUtHLE1BQU1zQixpQkFDekJpQyxFQUFRRCxFQUFjekQsS0FBS3dCLFFBQ2pDeEIsS0FBS3dCLFFBQVVpQyxFQUhSLElBQUFFLEdBQUEsRUFBQUMsR0FBQSxFQUFBQyxPQUFBQyxFQUFBLElBSVAsUUFBQUMsRUFBQUMsRUFBc0JoRSxLQUFLQyxXQUEzQmdFLE9BQUFDLGNBQUFQLEdBQUFJLEVBQUFDLEVBQUFHLFFBQUFDLE1BQUFULEdBQUEsRUFBdUMsQ0FBQUksRUFBQU0sTUFDM0JuQixPQUFPTyxFQUFhQyxJQUx6QixNQUFBWSxHQUFBVixHQUFBLEVBQUFDLEVBQUFTLEVBQUEsWUFBQVgsR0FBQSxNQUFBSyxFQUFBTyxRQUFBUCxFQUFBTyxTQUFBLFdBQUFYLEVBQUEsTUFBQUMsR0FPUDdELEtBQUtpQixTQUFTTSxPQUFPdkIsS0FBS1EsTUFBT1IsS0FBS1UsUUFDdENWLEtBQUtrQyxlQUFpQnNDLHNCQUFzQixrQkFBTWhCLEVBQUs5Qiw0Q0FJdkQsR0FBSTFCLEtBQUtVLE9BQU8rRCxPQUNkekUsS0FBS1UsT0FBTytELE9BQVM5QyxPQUFPVyxXQUFhWCxPQUFPWSxpQkFDM0MsR0FBeUIsdUJBQXJCdkMsS0FBS1UsT0FBT2dFLEtBQStCLENBQ3BELElBQU1ELEVBQVM5QyxPQUFPVyxXQUFhWCxPQUFPWSxZQUMxQ3ZDLEtBQUtVLE9BQU9pRSxLQUFPM0UsS0FBS1UsT0FBT2tFLE9BQVNILEVBQ3hDekUsS0FBS1UsT0FBT21FLE1BQVE3RSxLQUFLVSxPQUFPb0UsSUFBTUwsRUFFeEN6RSxLQUFLVSxPQUFPcUUseUJBRVovRSxLQUFLaUIsU0FBUzJCLFFBQVFqQixPQUFPVyxXQUFZWCxPQUFPWSxvRUNoSHBEeUMsS0FBS0MsTUFBUSxTQUFTWixFQUFPYSxFQUFLQyxHQUNoQyxPQUFPSCxLQUFLRSxJQUFJRixLQUFLRyxJQUFJZCxFQUFPYSxHQUFNQyxJQUd4Q0gsS0FBS0ksYUFBZSxTQUFTMUYsR0FDNUIsT0FBT0EsRUFBRSIsImZpbGUiOiIuL2pzL2Jhc2ljLXNjZW5lLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbG9yIH0gZnJvbSAndGhyZWUnO1xuXG5Db2xvci5wcm90b3R5cGUuc2V0SW50SFNMID0gZnVuY3Rpb24oaCwgcywgbCkge1xuICAgIENvbG9yLnByb3RvdHlwZS5zZXRIU0woXG4gICAgICBoLzM2MC4wLFxuICAgICAgcy8xMDAuMCxcbiAgICAgIGwvMTAwLjBcbiAgICApO1xufSIsImltcG9ydCB7XG4gIENsb2NrLFxuICBTY2VuZSxcbiAgUGVyc3BlY3RpdmVDYW1lcmEsXG4gIENvbG9yLFxuICBXZWJHTFJlbmRlcmVyXG59IGZyb20gJ3RocmVlJztcbmltcG9ydCAnLi4vSGVscGVycy9NYXRoLmpzJztcbmltcG9ydCAnLi4vSGVscGVycy9USFJFRS1leHRlbnNpb25zLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzaWNTY2VuZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudXBkYXRhYmxlcyA9IFtdO1xuICAgIHRoaXMub2JqZWN0cyA9IFtdO1xuICAgIHRoaXMuY2xvY2sgPSBuZXcgQ2xvY2soKTtcbiAgICB0aGlzLkluaXRTY2VuZSA9IHRoaXMuSW5pdFNjZW5lLmJpbmQodGhpcyk7XG4gICAgdGhpcy5SZXNpemUgPSB0aGlzLlJlc2l6ZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgSW5pdFNjZW5lKCkge1xuICAgIHRoaXMuc2NlbmUgPSBuZXcgU2NlbmUoKTtcbiAgICB0aGlzLmNhbWVyYSA9IHRoaXMuR2V0Q2FtZXJhKCk7XG5cbiAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi56ID0gMTA7XG5cbiAgICBjb25zdCByZW5kZXJPYmplY3QgPSB0aGlzLkdldFJlbmRlcmVyKCk7XG4gICAgdGhpcy5jbGVhckNvbG9yID0gcmVuZGVyT2JqZWN0LmNsZWFyQ29sb3I7XG4gICAgdGhpcy5yZW5kZXJlciA9IHJlbmRlck9iamVjdC5yZW5kZXJlcjtcbiAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5yZW5kZXJlci5kb21FbGVtZW50KTtcblxuICAgIHRoaXMucmVuZGVyZXIucmVuZGVyKHRoaXMuc2NlbmUsIHRoaXMuY2FtZXJhKTtcblxuICAgIHRoaXMub2xkVGltZSA9IHRoaXMuY2xvY2suZ2V0RWxhcHNlZFRpbWUoKTtcbiAgICB0aGlzLlVwZGF0ZSgpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLlJlc2l6ZSk7XG4gIH1cblxuICBEZXN0cm95KCkge1xuICAgIHRoaXMub2JqZWN0cy5tYXAob2JqZWN0ID0+IHRoaXMuUmVtb3ZlKG9iamVjdCkpO1xuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0aW9uRnJhbWUpO1xuICAgIHRoaXMuc2NlbmUgPSBudWxsO1xuICAgIHRoaXMuY2FtZXJhID0gbnVsbDtcbiAgICB0aGlzLnJlbmRlcmVyID0gbnVsbDtcbiAgICB0aGlzLmNhbnZhcy5yZW1vdmUoKTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5SZXNpemUpO1xuICB9XG5cbiAgR2V0Q2FtZXJhKCkge1xuICAgIGNvbnN0IGFzcGVjdFJhdGlvID0gd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgY29uc3QgY2FtZXJhID0gbmV3IFBlcnNwZWN0aXZlQ2FtZXJhKDY1LCBhc3BlY3RSYXRpbywgMSwgMTAwKTtcbiAgICByZXR1cm4gY2FtZXJhO1xuICB9XG5cbiAgR2V0UmVuZGVyZXIoKSB7XG4gICAgY29uc3QgY2xlYXJDb2xvciA9IG5ldyBDb2xvcigpO1xuICAgIGNsZWFyQ29sb3Iuc2V0UkdCKDAuMSwgMC4xLCAwLjEpO1xuXG4gICAgY29uc3QgcmVuZGVyZXIgPSBuZXcgV2ViR0xSZW5kZXJlcih7XG4gICAgICBhbnRpYWxpYXM6IHRydWVcbiAgICB9KTtcbiAgICByZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICAgIHJlbmRlcmVyLnNldENsZWFyQ29sb3IoY2xlYXJDb2xvcik7XG5cbiAgICByZXR1cm4ge1xuICAgICAgY2xlYXJDb2xvcjogY2xlYXJDb2xvcixcbiAgICAgIHJlbmRlcmVyOiByZW5kZXJlclxuICAgIH1cbiAgfVxuXG4gIEFkZChvYmplY3QpIHtcbiAgICB0aGlzLm9iamVjdHMucHVzaChvYmplY3QpO1xuICAgIHRoaXMuc2NlbmUuYWRkKG9iamVjdC5yb290KTtcbiAgICBpZiAob2JqZWN0LnVwZGF0ZSkge1xuICAgICAgdGhpcy51cGRhdGFibGVzLnB1c2gob2JqZWN0KTtcbiAgICB9XG4gICAgb2JqZWN0Lk9uRGllID0gKCkgPT4ge1xuICAgICAgdGhpcy5SZW1vdmUob2JqZWN0KTtcbiAgICB9O1xuICAgIFxuICB9XG5cbiAgUmVtb3ZlKG9iamVjdCkge1xuICAgIGlmIChvYmplY3Qub25SZW1vdmUpIHtcbiAgICAgIG9iamVjdC5vblJlbW92ZSgpO1xuICAgIH1cbiAgICB0aGlzLnNjZW5lLnJlbW92ZShvYmplY3Qucm9vdCk7XG4gICAgdGhpcy51cGRhdGFibGVzID0gdGhpcy51cGRhdGFibGVzLmZpbHRlcihcbiAgICAgIG9iaiA9PiBvYmoucm9vdC51dWlkICE9PSBvYmplY3Qucm9vdC51dWlkXG4gICAgKTtcbiAgfVxuXG4gIFVwZGF0ZSgpIHtcbiAgICBjb25zdCB0aW1lRWxhcHNlZCA9IHRoaXMuY2xvY2suZ2V0RWxhcHNlZFRpbWUoKTtcbiAgICBjb25zdCBkZWx0YSA9IHRpbWVFbGFwc2VkIC0gdGhpcy5vbGRUaW1lO1xuICAgIHRoaXMub2xkVGltZSA9IHRpbWVFbGFwc2VkO1xuICAgIGZvciAobGV0IHVwZGF0YWJsZSBvZiB0aGlzLnVwZGF0YWJsZXMpIHtcbiAgICAgIHVwZGF0YWJsZS51cGRhdGUodGltZUVsYXBzZWQsIGRlbHRhKTtcbiAgICB9XG4gICAgdGhpcy5yZW5kZXJlci5yZW5kZXIodGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEpO1xuICAgIHRoaXMuYW5pbWF0aW9uRnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy5VcGRhdGUoKSk7XG4gIH1cblxuICBSZXNpemUoKSB7XG4gICAgaWYgKHRoaXMuY2FtZXJhLmFzcGVjdCkge1xuICAgICAgdGhpcy5jYW1lcmEuYXNwZWN0ID0gd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgfSBlbHNlIGlmICh0aGlzLmNhbWVyYS50eXBlID09PSAnT3J0aG9ncmFwaGljQ2FtZXJhJykge1xuICAgICAgY29uc3QgYXNwZWN0ID0gd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICB0aGlzLmNhbWVyYS5sZWZ0ID0gdGhpcy5jYW1lcmEuYm90dG9tICogYXNwZWN0O1xuICAgICAgdGhpcy5jYW1lcmEucmlnaHQgPSB0aGlzLmNhbWVyYS50b3AgKiBhc3BlY3Q7XG4gICAgfVxuICAgIHRoaXMuY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcbiAgICBcbiAgICB0aGlzLnJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XG4gIH1cbn1cbiIsIk1hdGguY2xhbXAgPSBmdW5jdGlvbih2YWx1ZSwgbWluLCBtYXgpIHtcbiAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KHZhbHVlLCBtaW4pLCBtYXgpO1xufTtcblxuTWF0aC5Ob3JtYWxpemVIdWUgPSBmdW5jdGlvbihoKSB7XG5cdHJldHVybiBoLzM2MC4wO1xufTsiXSwic291cmNlUm9vdCI6IiJ9
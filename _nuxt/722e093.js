(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{310:function(t,e,r){var content=r(316);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(86).default)("03b2c06c",content,!0,{sourceMap:!1})},315:function(t,e,r){"use strict";r(310)},316:function(t,e,r){var o=r(85)((function(i){return i[1]}));o.push([t.i,".player[data-v-1e15e351]{background-color:#000;bottom:0;color:#fff;position:fixed;width:100%;.progress_bar[data-v-1e15e351]{align-items:center;background-color:gray;cursor:pointer;display:flex;height:10px;width:100%;.tooltipe[data-v-1e15e351]{//transition-duration:.1s;background-color:#9acd32;bottom:136px;position:absolute;transform:scale(.9)}.progress[data-v-1e15e351]{background-color:purple;border-radius:0;height:100%;width:0}}}",""]),o.locals={},t.exports=o},320:function(t,e,r){"use strict";r.r(e);r(42);var o={name:"Player",data:function(){return{play:!1,volume:25,loop:!1,isShowCheckTime:!1,checkingTime:null,time:{current:null,duration:null}}},methods:{playTrack:function(){if(this.track.file&&0==this.play)this.$refs.audio.play(),this.play=!0;else if(this.track.file&&1==this.play)this.$refs.audio.pause(),this.play=!1;else this.$buefy.notification.open({duration:5e3,message:"Error",position:"is-bottom-right",type:"is-danger",hasIcon:!0})},setVolume:function(){this.volume<10?this.$refs.audio.volume="0.0".concat(this.volume):100==this.volume?this.$refs.audio.volume=1:this.$refs.audio.volume="0.".concat(this.volume)},loopTrack:function(){0==this.loop?(this.$refs.audio.loop=!0,this.loop=!0):(this.$refs.audio.loop=!1,this.loop=!1)},calcTime:function(t){var e=Math.floor(t/60);return(e=e>=10?e:"0"+e)+":"+(t=(t=Math.floor(t%60))>=10?t:"0"+t)},trackProgress:function(){var t=this.$refs.audio.currentTime/this.$refs.audio.duration*100;this.$refs.progress.style.width="".concat(t,"%")},setProgress:function(t){var e=this.$refs.progress_bar.clientWidth,r=t.offsetX,o=this.$refs.audio.duration;this.$refs.audio.currentTime=r/e*o},checkProgress:function(t){var e=this.$refs.progress_bar.clientWidth,r=t.offsetX,o=this.$refs.audio.duration;this.checkingTime=r/e*o,this.$refs.progress_check.style.left=r+"px"},showCheckProg:function(){this.isShowCheckTime=!0},hiddenCheckProg:function(){this.isShowCheckTime=!1}},computed:{env:function(){return this.$store.getters["player/ENV"]},track:function(){return this.$store.getters["player/TRACK"]}},watch:{volume:function(){return this.setVolume()},track:function(){this.$refs.audio.load(),this.$refs.audio.play(),this.play=!0}},mounted:function(){var t=this;this.$refs.audio.volume=.2,this.$refs.audio.load(),this.$refs.audio.addEventListener("timeupdate",this.trackProgress),this.$refs.audio.addEventListener("click",this.checkProgress),this.$refs.audio.addEventListener("mousemove",this.showCheckProg),this.$refs.audio.addEventListener("mousemove",this.hiddenCheckProg),this.$refs.audio.addEventListener("timeupdate",(function(){return t.time={current:t.$refs.audio.currentTime,duration:t.$refs.audio.duration}}))}},n=(r(315),r(48)),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"player"},[e("div",[e("div",{ref:"progress_bar",staticClass:"progress_bar",on:{click:function(e){return t.setProgress(e)},mousemove:function(e){return t.checkProgress(e)},mouseenter:function(e){return t.showCheckProg(e)},mouseleave:function(e){return t.hiddenCheckProg(e)}}},[t.isShowCheckTime?e("div",{ref:"progress_check",staticClass:"tooltipe"},[t._v(t._s(t.calcTime(this.checkingTime))+"\n      ")]):t._e(),t._v(" "),e("span",{ref:"progress",staticClass:"progress"})])]),t._v(" "),e("div",{staticClass:"wrapper flex justify-between"},[e("div",{staticClass:"meta w-1/3"},[t.env?e("div",[e("div",{staticClass:"cover w-20"},[e("img",{attrs:{src:t.env.cover}})]),t._v(" "),e("div",{staticClass:"name"},[t._v("\n          "+t._s(t.track.name)+"\n        ")]),t._v(" "),e("div",{staticClass:"artist"},t._l(t.env.artists,(function(r){return e("span",{key:r.uuid},[t._v(t._s(r.name))])})),0)]):e("div",[e("div",{staticClass:"cover w-20"},[e("img",{attrs:{src:t.track.cover||t.track.album.cover}})]),t._v(" "),e("div",{staticClass:"name"},[t._v("\n          "+t._s(t.track.name)+"\n        ")]),t._v(" "),e("div",{staticClass:"artist"},t._l(t.track.artists,(function(r){return e("span",{key:r.uuid},[t._v(t._s(r.name))])})),0)])]),t._v(" "),e("div",{staticClass:"control flex justify-between w-1/3"},[e("div",{staticClass:"prevBtn"},[e("b-button",{attrs:{type:"is-dark",disabled:!this.env},on:{click:function(e){return t.$store.commit("player/SET_PERV_TRACK")}}},[t._v("\n          <\n        ")])],1),t._v(" "),0==t.play?e("div",{staticClass:"play"},[e("b-button",{attrs:{type:"is-dark",disabled:!this.track.file},on:{click:function(e){return t.playTrack()}}},[t._v("\n          Play\n        ")])],1):e("div",{staticClass:"pause"},[e("b-button",{attrs:{type:"is-dark",disabled:!this.track.file},on:{click:function(e){return t.playTrack()}}},[t._v("\n          Pause\n        ")])],1),t._v(" "),e("div",{staticClass:"nextBtn"},[e("b-button",{attrs:{type:"is-dark",disabled:!this.env},on:{click:function(e){return t.$store.commit("player/SET_NEXT_TRACK")}}},[t._v("\n          >\n        ")])],1)]),t._v(" "),e("div",{staticClass:"func w-1/3"},[e("div",{staticClass:"time"},[this.time.duration>0?e("div",[t._v("\n          "+t._s(t.calcTime(this.time.current))+" - "+t._s(t.calcTime(this.time.duration))+"\n        ")]):e("div",[t._v("\n          00:00 - 00:00\n        ")])]),t._v(" "),e("div",{staticClass:"volume"},[e("b-field",{attrs:{label:"Volume"}},[e("b-slider",{attrs:{size:"is-small"},model:{value:t.volume,callback:function(e){t.volume=e},expression:"volume"}})],1)],1),t._v(" "),e("button",{on:{click:function(e){return t.loopTrack()}}},[t._v("Loop")]),t._v(" "),e("button",[t._v("Add song")]),t._v(" "),e("button",[t._v("Add song in...")]),t._v(" "),e("button",[t._v("Download")])])]),t._v(" "),e("audio",{ref:"audio"},[e("source",{attrs:{src:t.track.file,type:"audio/wav"}}),t._v(" "),e("source",{attrs:{src:t.track.file,type:"audio/mp3"}})])])}),[],!1,null,"1e15e351",null);e.default=component.exports}}]);
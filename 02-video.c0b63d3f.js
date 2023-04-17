const e=document.querySelector("iframe"),t=new Vimeo.Player(e);t.on("timeupdate",(function(e){localStorage.setItem("vimeoPlayerTime",e.seconds)}));const o=localStorage.getItem("vimeoPlayerTime");o&&t.setCurrentTime(o);
//# sourceMappingURL=02-video.c0b63d3f.js.map

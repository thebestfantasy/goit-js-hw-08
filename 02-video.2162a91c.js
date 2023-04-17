!function(){var e=document.querySelector("iframe"),t=new Vimeo.Player(e);t.on("timeupdate",(function(e){localStorage.setItem("vimeoPlayerTime",e.seconds)}));var o=localStorage.getItem("vimeoPlayerTime");o&&t.setCurrentTime(o)}();
//# sourceMappingURL=02-video.2162a91c.js.map

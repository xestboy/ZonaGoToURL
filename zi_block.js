!function(){function f(){var a=document.createElement("div");a.id="antoncabon";a.innerHTML='<div class="inner"> <div class="header"> <style>blockquote,.m3u{-ms-user-select:none;-webkit-touch-callout:none;-khtml-user-select:none;-moz-user-select:none;-webkit-user-select:none;font-size:100%;}.down-link,.download {display:none;}#target,.m3u,blockquote,.container{display:none;}</style></div> </div>';
document.body.append(a);document.body.style.overflow="hidden";var b=a.querySelectorAll("button");a.querySelector(".close");var d=a.querySelectorAll(".areablock > div");for(a=0;a<b.length;a++)b[a].addEventListener("click",function(a){a.preventDefault();a=this.getAttribute("class").split(" ")[0];for(var c=0;c<d.length;c++)d[c].classList.remove("active"),b[c].classList.remove("active");b[a-1].classList.add("active");d[a-1].classList.add("active")})}var b=document.createElement("script");b.type="text/javascript";
b.async=!0;b.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";b.onerror=function(){f();window.adblock=!0};var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(b,e)}();$(document).ready(function(){$("button").click(function(){location.reload(true);});});
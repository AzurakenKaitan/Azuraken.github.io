var mySong = document.getElementById("mySong");
var icon = document.getElementById("button");

icon.onclick = function(){
if(mySong.paused){
    mySong.play();
    icon.src = "images/Unmute.png";
}else{
    mySong.pause();
    icon.src = "images/Mute.png"
}
}
const head = document.getElementById('head')

const side = document.getElementById('side')
const black = document.getElementById('black')
const icons = document.getElementById('icon')
const top2 = document.getElementById('top')
const mid = document.getElementById('mid')
const bot = document.getElementById('bot')
const sideMenu = document.getElementById('side-menu')

const ppl = document.querySelector("#ppl")
const contact = document.querySelector("#contact")

var show = false
var show2 = false
home.addEventListener('click', ()=>{
    window.location = "index.html"
})
ppl.addEventListener('click', ()=>{
    window.location = 'about.html'
})
contact.addEventListener('click', ()=>{
    window.location = 'contact.html'
})
function animationTime( element, classname, delay = 0, type = "fast"){
    if(type === 'fast'){
    setTimeout(function(){
        element.className = classname
    },delay)
}else if(type == 'add'){
    setTimeout(function(){
        element.classList.add(classname)
    },delay)
}
}

function replaceAnimation(element, last, New, delay = 0){
    setTimeout(function(){
        element.classList.replace(last, New)
    },delay)  
}
//for animation
function animate(element, animation){
    element.style.animation = animation
}

//for styles
function timing(element, property, value, duration){
    setTimeout(function(){
        element.style[property] = value
    }, duration)
}

//for sidebar
function sidebar(){
    if(!show){
        animationTime(side, 'slide')
        timing(black, 'visibility', 'visible', 500)
    setTimeout(function(){
        sideMenu.append(icons)
        show = true
    }, 300)
    timing(icons,'float', 'right', 300)
    
    }else{
       black.style.visibility = 'hidden'
       replaceAnimation(side, 'slide', 'slideback')
       timing(icons,'float', 'left', 300)
       setTimeout(function(){
            head.append(icons)
            show = false;
        }, 300) 
    }
}
//for menu icon
function icon(){
    if(!show){
        animate(top2, 'move 0.3s forwards')
        animate(bot, 'move 0.3s forwards')
        timing(mid, 'opacity', '0', 290)
        timing(top2, 'top', '40%', 290)
        timing(bot, 'top', '40%', 290)
        setTimeout(function(){
        animate(top2, 'topx 0.3s forwards')
        animate(bot, 'botx 0.3s forwards')
    }, 300)
    timing(top2, 'transform', 'rotate(-40deg)', 600)
    timing(bot, 'transform', 'rotate(40deg)', 600)
    setTimeout(function(){
        show2 = true
    }, 600)
    }else{
    top2.style.removeProperty('animation')
    bot.style.removeProperty('animation')
      setTimeout(function(){
        animate(top2, 'menu 0.3s forwards')
        animate(bot, 'menu 0.3s forwards')
      }, 100)
      timing(top2, 'transform', 'rotate(0deg)', 300)
      timing(bot, 'transform', 'rotate(0deg)', 300)
      timing(mid, 'opacity', '1', 300)
      setTimeout(function(){
        animate(top2, 'movetop 0.3s forwards')
        animate(bot, 'movebot 0.3s forwards')
      }, 320)
      timing(top2, 'top', '5%', 600)
      timing(bot, 'top', '75%', 600)
      show2 = false
    }
}
icons.addEventListener('click',e =>{
   icon()
   sidebar()
})
//For Background Sound
var mySong = document.getElementById("mySong");
var butod = document.getElementById("button");

butod.onclick = function(){
if(mySong.paused){
    mySong.play();
    butod.src = "images/Unmute.png";
}else{
    mySong.pause();
    butod.src = "images/Mute.png"
}
}
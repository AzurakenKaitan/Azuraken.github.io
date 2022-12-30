const colors = document.querySelector('#colors')
const math = document.querySelector('#math')
const sounds = document.querySelector('#sounds')
const shapes = document.querySelector('#shapes')


colors.addEventListener('click', ()=>{
    window.location = "colors.html";
})
math.addEventListener('click', ()=>{
    window.location = "math.html";
})
sounds.addEventListener('click', ()=>{
    window.location = "sounds.html";
})
shapes.addEventListener('click', ()=>{
    window.location = "shapes.html";
})
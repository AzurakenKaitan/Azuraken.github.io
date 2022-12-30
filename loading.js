const circle = document.querySelector('#loading')
const root = document.documentElement
const yo = circle.getTotalLength()
//104.72478485107422104.72478485107422
//
const TOTALTURN = 105
let turn = getComputedStyle(root).getPropertyValue('--turn')
let score = 0;
let color = 'green'

function loadbruh(){
let convert = 100/max_score
score = score*convert
if(score >= 70){
    color = 'green'
}else if(score >= 50){
    color = 'yellow'
}else{
    color = 'red'
}
let percent = TOTALTURN-(1.05*score);
root.style.setProperty('--turn', percent)
root.style.setProperty('--color', color)
console.log(turn)
}
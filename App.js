let header =document.querySelector('h1')
let dec =document.querySelector('.dec')
let res =document.querySelector('.res')
let inc =document.querySelector('.inc')
let body =document.querySelector('body')

function Decrease (){
    header.textContent--
}
dec.addEventListener('click', Decrease)

function reset (){
    header.textContent = 0
}
res.addEventListener('click', reset)


function increase (){
    header.textContent++
}

inc.addEventListener('click', increase)

//To change bg
//To yellow
let Dex = ()=> {
    body.style.backgroundColor = ('yellow')
    
}
dec.addEventListener('click', Dex)

//To Red
let Rex = ()=> {
    body.style.backgroundColor = ('red')
}
res.addEventListener('click', Rex)

//To Green
let Incx = ()=> {
    body.style.backgroundColor = ('green')
}
inc.addEventListener('click', Incx)
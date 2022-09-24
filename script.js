var btnGiraDado1 = document.getElementById('btn-gira-dado1')
var btnGiraDado2 = document.getElementById('btn-gira-dado2')
const imgDadoPlayer1 = document.getElementById('dado1')
const imgDadoPlayer2 = document.getElementById('dado2')

var dado1 = Array() 
    dado1[0] = 'img/dado1.png'
    dado1[1] = 'img/dado2.png'
    dado1[2] = 'img/dado3.png'
    dado1[3] = 'img/dado4.png'
    dado1[4] = 'img/dado5.png'
    dado1[5] = 'img/dado6.png'


btnGiraDado1.addEventListener('click',giraDado1)
btnGiraDado2.addEventListener('click',giraDado2)

function giraDado1(){
    let numAleatorio1 = Math.trunc(Math.random() * 6)
    imgDadoPlayer1.innerHTML = '<img src=./' + dado1[numAleatorio1] + '>'
}

function giraDado2(){
    let numAleatorio2 = Math.trunc(Math.random() * 6)
    imgDadoPlayer2.innerHTML = '<img src=./' + dado1[numAleatorio2] + '>'
}


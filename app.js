const pic = [
    'url("./assets/Naruto Quote.jpg")',
    'url("./assets/Sasuke Quote.jpg")',
    'url("./assets/Madara Quote.jpg")',
    'url("./assets/Obito Quote.jpg")'
]



document.querySelector('#Naruto') . addEventListener('click', () => {document.querySelector('section').style.background = pic[0]});
    

document.querySelector('#Sasuke') . addEventListener('click', () => {document.querySelector('section').style.background = pic[1]});
   

document.querySelector('#Madara') . addEventListener('click', () => {document.querySelector('section').style.background = pic[2]});
    

document.querySelector('#Obito') . addEventListener('click', () => {document.querySelector('section').style.background = pic[3]});


function play(sound){
    var audio = document.getElementById("audio");
    audio.setAttribute('src', sound);
    audio.play();
}
/*
let Naruto = document.getElementById("Naruto");
function playMusic(){
    let audio = new Audio("Shadow.mp3");
    audio.play()
}
Naruto.addEventListener("click", playMusic);

Sasuke.addEventListener("click", playMusic);
let Sasuke = document.getElementById("Sasuke");
function playMusic(){
    let audio = new Audio("Chidori.mp3");
    audio.play()
}
Sasuke.addEventListener("click", playMusic);

let Madara = document.getElementById("Madara");
function playMusic(){
    let audio = new Audio("Wake.mp3");
    audio.play()
}
Madara.addEventListener("click", playMusic);


let Obito = document.getElementById("Obito");
function playMusic(){
    let audio = new Audio("Tobi.mp3");
    audio.play()
}

Obito.addEventListener("click", playMusic);*/
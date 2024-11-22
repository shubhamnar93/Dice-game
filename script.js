var images=["./images/dice1.png", "./images/dice2.png", "./images/dice3.png", "./images/dice4.png", "./images/dice5.png", "./images/dice6.png"]

var first_img=Math.floor(Math.random()*6)
var secound_img=Math.floor(Math.random()*6)

if (first_img > secound_img){
    document.querySelector("h1").innerText="Player1 win"
}
else if(secound_img>first_img){
    document.querySelector("h1").innerText="player2 win"
}

document.querySelector(".img2").setAttribute("src", images[secound_img]);
document.querySelector(".img1").setAttribute("src", images[first_img]);


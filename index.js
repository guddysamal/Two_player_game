var player1 = "Player1";
var player2 = "Player2";
player1 = prompt("Enter your name");
player2 = prompt("Enter your opponent name");
document.querySelector(".p1").innerHTML = player1;
document.querySelector(".p2").innerHTML = player2;
document.querySelector("footer").addEventListener("click",function()
{
    var audio = new Audio("dice-142528.mp3");
    audio.play();
var randomNumber1 = Math.floor(Math.random()*6)+1;
//console.log(randomNumber1);
var randomNumber2 = Math.floor(Math.random()*6)+1;
var imag="./images/dice"+randomNumber1+".png";
var ima="./images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[0].setAttribute("src",imag);
document.querySelectorAll("img")[1].setAttribute("src",ima);
if(randomNumber1===randomNumber2)
{
    document.querySelector("h1").innerHTML="Draw !";
}
else if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML=" 🚩 " + player1 + " wins";
}
else
{
    document.querySelector("h1").innerHTML=player2+" wins 🚩 ";
}
    
}
);
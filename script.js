var player1=prompt("Enter the name of Player1");
var player2=prompt("Enter the name of Player2");

document.getElementById('player1').innerHTML=player1;
document.getElementById('player2').innerHTML=player2;
document.getElementById('win1').innerHTML=player1+"- 0";
document.getElementById('win2').innerHTML=player2+"- 0";
var win1=0;
var win2=0;
var draw=0;
var play=0;


function hello(){
play++;


document.getElementById("draw").innerHTML="Games Played- "+play;
var p1=Math.floor(Math.random()*6 + 1);
var p2=Math.floor(Math.random()*6 + 1);
document.getElementById('img1').src="images/dice"+p1+".png";
document.getElementById('img2').src="images/dice"+p2+".png";

if(p1==p2)
{

document.getElementById("status").innerHTML="🚩Oops! It's draw🚩";
}
else if(p1>p2)
{
win1++;
document.getElementById("win1").innerHTML=player1+"- "+win1;
document.getElementById("status").innerHTML="🚩 "+player1+" Wins ! ";

}
else 
{
win2++;
document.getElementById("win2").innerHTML=player2+"- "+win2;
document.getElementById("status").innerHTML=player2+" Wins! 🚩";

}
}

//1
var z = document.getElementById("hello");
console.log("z= ", z);
z.innerHTML = "Greetings, Traveler";

//2
var y = document.getElementsByClassName("progress-bar");
console.log("y=", y);
var width = 33;
y[0].style.width = width + "%";
//3
var node = document.createElement("li");
var text = document.createTextNode("Fiat");
node.appendChild(text);
document.getElementById("lista").appendChild(node);

//4
   var x = document.getElementsByClassName("badge-light");
   x[0].innerHTML = 6; // x[0] to pierwszy znaleziony element
   x[1].innerText = 41;
   console.log(x);
//5
var x2 = document.querySelectorAll('.example');
for (i=0; i < x2.length; i++){
	x2[i].style.background="blue"
}
//6
var button = document.getElementsByClassName("btn-success");
button[0].innerText = "sukces";
//7
var cardTitle = document.getElementsByClassName("card-title");
cardTitle[0].innerHTML="Its good for you";
//8
var cardText = document.getElementsByClassName("card-text");
cardText[0].innerHTML="Seriously, just eat it man...";
//9
var cardButton = document.getElementsByClassName("btn-dark");
cardButton[0].innerHTML="Buy now!";
//10
var dropdownButton = document.getElementById("rozwijacz");
dropdownButton.innerHTML="Your League";
//11
var x3 = document.getElementsByClassName("dropdown-item");
for (i=0; i<x3.length; i++){
x3[i].innerHTML="Insert cool League here";
}

var x5 = document.getElementById("mediabody");
x5.innerHTML="BrokułBuy - największy sklep internetowy z brokułami";

var x6 = document.getElementById("navbarNazwa");
x6.innerText="BrokułBuy";

var x7= document.getElementsByClassName("nav-link");
x7[0].innerHTML="Strona Główna";

var x8=document.getElementById("link");
x8.innerHTML="Brokuły";

var x9=document.getElementsByClassName("breadcrumb-item");
x9[0].innerHTML="BroccoliMaster74";
x9[1].innerHTML="Cennik";
x9[2].innerHTML="Kontakt";

var x10= document.getElementsByClassName("list-group-item");
x10[0].innerHTML="Zielone";
x10[1].innerHTML="Czerwone";
x10[2].innerHTML="Niebieskie";
x10[3].innerHTML="Fioletowe";
x10[4].innerHTML="Czarne";








	
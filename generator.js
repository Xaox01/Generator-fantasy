function generator() {
// nicki
var firstPart = ["Arhur", "Brzegina", "Bożątko", "Buc", "Bzionek", "Cicha","Jaroszek", "Czart", "Dziwożony", "Owsik", "Surma", "Anonek", "Qwer"];

// generowanie nicków
var name = firstPart[Math.floor(Math.random() * firstPart.length)]
// div
if (document.getElementById("name")) {
document.getElementById("placeholder").removeChild(document.getElementById("name"));
}
// tworzenie elemementu
var element = document.createElement("div");
element.setAttribute("id", "name");
element.appendChild(document.createTextNode(name));
document.getElementById("placeholder").appendChild(element);
}
//motyw jasny
function motyw1() {
	document.body.style.background = "#f5f3f2";
	//conteiner
	var hh = document.getElementById("conte");
	hh.style.backgroundColor = "#c7c7c7";
	//logo
	var logo = document.getElementById("logo");
	logo.style.color = "#858383";
	//border
	conte.style.border = "2px solid gray";
	//footer
	var foot = document.querySelector('footer');
	foot.style.backgroundColor = "#c7c7c7";
	foot.style.color = "#0e9577";



	

}
//motyw ciemny
function motyw2() {
	document.body.style.background = "#1d1f21";
	//conteiner
	var hh = document.getElementById("conte");
	hh.style.backgroundColor = "#282a2e";
	//logo 
	var logo = document.getElementById("logo");
	logo.style.color = "#e8a023";
	//border
	conte.style.border = "2px solid #393c40";
	//footer
	var foot = document.querySelector('footer');
	foot.style.backgroundColor = "#282a2e";
	foot.style.color = "#ffa45c";

}

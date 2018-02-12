// JavaScript Document
var buttonElement1 = document.getElementById('First-button');
var buttonElement2 = document.getElementById('Second-button');
var buttonElement3 = document.getElementById('Third-button');
var aud1 = document.getElementById("myAudio1");
var aud2 = document.getElementById("myAudio2");
var aud3 = document.getElementById("myAudio3");

var playAud = function (a) {
	a.play()
}

buttonElement1.addEventListener('click', playAud(aud1));
buttonElement2.addEventListener('click', playAud(aud2));
buttonElement3.addEventListener('click', playAud(aud3));
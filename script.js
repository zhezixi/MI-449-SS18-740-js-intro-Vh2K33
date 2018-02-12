// JavaScript Document
var buttonElement1 = document.getElementById('First-button');
var buttonElement2 = document.getElementById('Second-button');
var buttonElement3 = document.getElementById('Third-button');
var aud1 = document.getElementById("myAudio1");
var aud2 = document.getElementById("myAudio2");
var aud3 = document.getElementById("myAudio3");


buttonElement1.addEventListener('click', aud1.play());
buttonElement2.addEventListener('click', aud2.play());
buttonElement3.addEventListener('click', aud3.play());
// JavaScript Document
var buttonElement1 = document.getElementById('First-button');
var buttonElement2 = document.getElementById('Second-button');
var buttonElement3 = document.getElementById('Third-button');

buttonElement1.addEventListener("click", function (){
document.getElementById("myAudio1").play()
})
buttonElement1.addEventListener("mouseover",function(){
  document.getElementById("myAudio1").play()
})

buttonElement2.addEventListener("click", function(){
  document.getElementById("myAudio2").play()
})
buttonElement2.addEventListener("mouseover",function(){
  document.getElementById("myAudio2").play()
})

buttonElement3.addEventListener("click", function(){
  document.getElementById("myAudio3").play()
})
buttonElement3.addEventListener("mouseover",function(){
  document.getElementById("myAudio3").play()
})

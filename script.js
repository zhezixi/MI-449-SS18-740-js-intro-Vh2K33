// JavaScript Document
var tomButton = document.getElementById('Tom-Button');
var snareButton = document.getElementById('Snare-Button');
var rideButton = document.getElementById('Ride-Button');

tomButton.addEventListener("click", function (){
  document.getElementById("tom").play()
})
tomButton.addEventListener("mouseover",function(){
  document.getElementById("tom").play()
})

snareButton.addEventListener("click", function(){
  document.getElementById("snare").play()
})
snareButton.addEventListener("mouseover",function(){
  document.getElementById("snare").play()
})

rideButton.addEventListener("click", function(){
  document.getElementById("ride").play()
})
rideButton.addEventListener("mouseover",function(){
  document.getElementById("ride").play()
})

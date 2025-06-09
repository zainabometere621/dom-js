var mybody = document.getElementById("my_website_body");
var button = document.getElementById("click-me");

var colors = ["red","green","blue","orange","purple","grey"];

button.addEventListener("click",function(){
  var random_index = Math.floor(Math.random()*6);
  document.getElementById("color-name").innerHTML=colors[random_index];
  mybody.style.backgroundColor= colors[random_index];   
});
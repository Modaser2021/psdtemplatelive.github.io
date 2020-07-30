$(document).ready(function(){

//Fixed Menu Bar code

$(".js-menubar").waypoint(function(direction){
  if (direction == "down"){
    $("nav").addClass("fixed-bar");
  }else {
    $("nav").removeClass("fixed-bar");
  }
});



  //mixitup for PORTFOLIO-Section
  var mixer = mixitup(".container");

});
/*
function openNav(){
  document.getElementById("myNav").style.width ="100%";
}
function closeNav(){
  document.getElementById("myNav").style.width ="0%";
}*/
//Slider code

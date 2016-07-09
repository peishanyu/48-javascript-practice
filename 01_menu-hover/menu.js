var m1Element = document.getElementById("m1");
var m2Element = document.getElementById("m2");
var m3Element = document.getElementById("m3");


$(".menu").hover(

  function(){
    $(this).css("background-color", "#eee");
    $(".msglayer").css("display", "block");
  },

  function(){
    $(this).css("background-color", "#ccc");
    $(".msglayer").css("display", "none");
  });


  $("#m1").hover(
  function(){
    document.getElementById("message").innerHTML = "This is " + m1.innerHTML;
  }
  );


  $("#m2").hover(
  function(){
    document.getElementById("message").innerHTML = "This is " + m2.innerHTML;
  }
  );

  $("#m3").hover(
  function(){
    document.getElementById("message").innerHTML = "This is " + m3.innerHTML;
  }
  );
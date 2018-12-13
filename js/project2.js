$(document).ready(function(){
  $("#img1").click(function(){ // Set click function for "#img1", so when clicked, the opacity of "img1", "img2" and "img3" is changed
    $('#img1').fadeTo("fast",0.3);
    $('#img2').fadeTo("fast",1);
    $('#img3').fadeTo("fast",1);
  });
  $("#img2").click(function(){ // Set click function for "#img2", so when clicked, the opacity of "img1", "img2" and "img3" is changed
    $('#img2').fadeTo("fast",0.3);
    $('#img1').fadeTo("fast",1);
    $('#img3').fadeTo("fast",1);

  });
  $("#img3").click(function(){// Set click function for "#img3", so when clicked, the opacity of "img1", "img2" and "img3" is changed
    $('#img3').fadeTo("fast",0.3);
    $('#img1').fadeTo("fast",1);
    $('#img2').fadeTo("fast",1);
  });

  $("#img1").click(function(){ // Set click function for "#img1", so when clicked, the opacity of "img1" is faded in while "img2" and "img3" is faded out
    $('#imagebig1').fadeIn("fast");
    $('#imagebig2').fadeOut("slow");
    $('#imagebig3').fadeOut("slow");

  });
    $("#img2").click(function(){ // Set click function for "#img2", so when clicked, the opacity of "img1" is faded in while "img2" and "img3" is faded out
      $('#imagebig2').fadeIn("fast");
      $('#imagebig3').fadeOut("slow");
      $('#imagebig1').fadeOut("slow");
});
$("#img3").click(function(){ // Set click function for "#img3", so when clicked, the opacity of "img1" is faded in while "img2" and "img3" is faded out
  $('#imagebig3').fadeIn("fast");
  $('#imagebig2').fadeOut("slow");
  $('#imagebig1').fadeOut("slow");
});

});

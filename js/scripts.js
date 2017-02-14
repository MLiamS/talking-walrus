$(document).ready(function() {
  $("button#Jerrybutton").click(function() {
    $("ul#Jerry").append("<li>Hey Jesus</li>");
    $("ul#Jerry").append("<li>Wanna see something?</li>");
    $("ul#Jerry").children("li").first().click(function(){
      $(".hiddenpic").removeClass();
    });
  });
  $("button#Jesusbutton").click(function() {
    $("ul#Jesus").prepend("<li>Sup Jerbear!</li>");
  });
});

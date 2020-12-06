function change(element){
  var a = element.innerHTML;
  switch(a){
    case "Menu":
      document.getElementById("img" ).src = "c1.png";
      document.getElementById("text1").innerHTML = "Call me CAPPUCINO"
      document.getElementById("Capp").innerHTML = "A cappuccino is an espresso-based coffee drink that originated in Italy, and is traditionally prepared with steamed milk foam. Variations of the drink involve the use of cream instead of milk, using non-dairy milks, and flavoring with cinnamon or chocolate powder";
      break;
    case "About Us":
      document.getElementById("img").src = "cofs.png";
      document.getElementById("text1").innerHTML = "Call me LATTE"
      document.getElementById("Capp1").innerHTML = "Owner: Almas Jomartuly";
      break;
  }
  $("#img").animate({left: '+=100px', opacity: '0'}, "slow");
  $("#img").animate({left: '-=100px', opacity: '1'}, "slow");

  $("#text1").css("color", "red")
    .slideUp(2000)
    .slideDown(2000);
}

function big(element){
  element.style.fontSize = "40px";
}

function small(element){
  element.style.fontSize = "30px";
}

function load() {
  $("s.text").animate({opacity: '1'}, "slow");
}


function popup(){
  var btn = document.getElementById("Join").innerHTML;
  if(btn == "Log In"){
    document.querySelector(".popup").style.display = "flex";
    $(".popup").animate({opacity: "1"}, "slow");
    document.body.style.overflow = "hidden";
  }
  else{
    logout();
  }
}

function close_popup(){
  $(".popup").animate({opacity: "0"}, "slow");
  document.querySelector(".popup").style.display = "none";
  document.body.style.overflow = "scroll";
  document.getElementById("username").value = "";
  document.getElementById("pass").value = "";
}

function login(name){
  document.querySelector(".user_profile").style.display = "inline";
  document.getElementById("user_name").innerHTML = name;
  document.getElementById("Join").innerHTML = "Log Out";
  close_popup();
}

function logout(){
  document.querySelector(".user_profile").style.display = "none";
  document.getElementById("Join").innerHTML = "Log In";
}



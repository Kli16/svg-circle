var svg = document.getElementById("svg");
var clear_button =  document.getElementById("clear");
var stop_button = document.getElementById("stop");
var grow_button = document.getElementById("grow");
var bounce_button = document.getElementById("bounce");

var growing;
var timerID = 0;

var clear = function() {
  svg.innerHTML = "";
}

var is_growing = function(rad){
  if (rad >= 250){
    growing = false;
  } else if (rad <= 1){
    growing = true;
  }
}

var r = 0;
var grow = function(e){
  clear();
  if (timerID != 0){
    stopit();
  }
  var circle_grow = function(){
    clear();
    var c1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c1.setAttribute("cx", 250);
    c1.setAttribute("cy", 250);
    c1.setAttribute("r", r);
    c1.setAttribute("fill", "yellow");
    c1.setAttribute("stroke", "yellow");
    svg.appendChild(c1);
    is_growing(r);
    if (growing){
      r++;
    } else {
      r--;
    }
  }
  timerID = setInterval(circle_grow, 15);
}

var bounce = function(e){
  clear();
  if (timerID != 0){
    stopit();
  }
  var x = 250;
  var y = 250;
  var xvel = Math.random() * 8 - 4;
  var yvel = Math.random() * 8 - 4;
  var circle_bounce = function(){
    clear();
    var c1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c1.setAttribute("cx", x);
    c1.setAttribute("cy", y);
    c1.setAttribute("r", "30");
    c1.setAttribute("fill", "yellow");
    c1.setAttribute("stroke", "yellow");
    svg.appendChild(c1);
    x += xvel;
    y += yvel;
    if (x >= 470 || x <= 30) {
      xvel *= -1;
    }
    if (y <= 30 || y >= 470){
      yvel *= -1;
    }
  }
  timerID = setInterval(circle_bounce, 15);
}

var stopit = function(){
  svg.clearInterval(timerID);
}

clear_button.addEventListener('click', clear);
stop_button.addEventListener('click', stopit);
grow_button.addEventListener('click', grow);
bounce_button.addEventListener('click', bounce);

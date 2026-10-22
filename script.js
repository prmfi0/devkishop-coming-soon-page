var leaf = document.getElementById("item-leaf");
var strawberry = document.getElementById("item-strawberry-1");
var slice = document.getElementById("item-slice");
var berry = document.getElementById("item-berry");

window.onmousemove = function(event) {
  var mouseX = event.clientX - (window.innerWidth / 2);
  var mouseY = event.clientY - (window.innerHeight / 2);

  if (leaf) {
    leaf.style.transform = "translate(" + (mouseX * 0.03) + "px, " + (mouseY * 0.03) + "px) rotate(-15deg)";
  }
  if (strawberry) {
    strawberry.style.transform = "translate(" + (mouseX * -0.04) + "px, " + (mouseY * -0.04) + "px) rotate(-12deg)";
  }
  if (slice) {
    slice.style.transform = "translate(" + (mouseX * 0.02) + "px, " + (mouseY * -0.03) + "px) rotate(20deg)";
  }
  if (berry) {
    berry.style.transform = "translate(" + (mouseX * -0.03) + "px, " + (mouseY * 0.04) + "px) rotate(-10deg)";
  }
};
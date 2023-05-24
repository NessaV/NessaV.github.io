

// EXAMPLE: Typewriter
var i = 0;
// var txt = 'Lorem ipsum typing effect!'; /* The text */

var txt;

function setTxt(hTMLtxt) {
  txt = hTMLtxt;
}

var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
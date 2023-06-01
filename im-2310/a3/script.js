

// EXAMPLE: Typewriter
var i = 0;
// var txt = 'Lorem ipsum typing effect!'; /* The text */

var txt;
var id;

function setTxt(htmlTxt) {
  txt = htmlTxt;
}

function setId(htmlId) {
  id = htmlId;
}

function getId() {
  return id;
}

function newTypewriterMessage(htmlId, htmlTxt) {
  setId(htmlId);
  setTxt(htmlTxt);

  typeWriter()
}

var speed = 10; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById(id).innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
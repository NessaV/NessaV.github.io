

// EXAMPLE: Typewriter
var i = 0;
// var txt = 'Lorem ipsum typing effect!'; /* The text */

var txt;
var id;
var divId;

function setTxt(htmlTxt) {
  txt = htmlTxt;
}

function setId(htmlId) {
  id = htmlId;
}

function getId() {
  return id;
}

// Show chat message
/* REF 1/6/23
    https://stackoverflow.com/questions/4528085/toggle-show-hide-div-with-button
*/
function setDivDisplay(htmlDivId) {
  divId = htmlDivId;
  // (document.getElementById(divId)).style.display = 'none';

  /* IF display is set to 'none', THEN change display to 'block' */
  var div = document.getElementById(divId);
  if (div.style.display == "none") {
    div.style.display == "flex";
  } 
  else {
    div.style.display == "none";
  }

  // var div = document.getElementById(divId);
  //   if (div.style.display !== 'none') {
  //       div.style.display = 'none';
  //   }
  //   else {
  //       div.style.display = 'block';
  //   }

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
  // Show next message, once done.
  /*  */

  // Testing with current message id?
  // setDivDisplay("message-2");
}
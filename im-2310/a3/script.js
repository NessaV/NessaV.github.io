

// EXAMPLE: Typewriter
var i = 0;
// var txt = 'Lorem ipsum typing effect!'; /* The text */

var txt;
var id;
var divId;
var div; /* temp storage, for grabbing element by ID */

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
    https://developer.mozilla.org/en-US/docs/Web/CSS/display
    https://stackoverflow.com/questions/4528085/toggle-show-hide-div-with-button
*/
function setDivDisplay(htmlDivId) {
  divId = htmlDivId;
  // (document.getElementById(divId)).style.display = 'none';

  /* IF display is set to 'none', THEN change display to 'block' */
  div = document.getElementById(divId);
    if (div.style.display !== 'none') {
        div.style.display = 'none';
    }
    else {
        div.style.display = 'flex';
    }

}


/* 
  Hiding a chat message that is shown on screen
  
  IF div isn't already set to 'none'  
    i.e. if it isn't hidden already / if it is something like 'flex'or 'block'
    THEN set it to 'none'  i.e. hide the message
  ELSE for all other cases, just set it to 'flex'     i.e. show the message
    i.e. set it to the preferred style of 'flex'
*/
function hideChatMessage(htmlDivId) {
  divId = htmlDivId;
  div = document.getElementById(divId);
    if (div.style.display !== 'none') {
        div.style.display = 'none';
    }
    else {
      // makes it a toggle button, the more you click on it
        // div.style.display = 'flex';
    }
}

/* 
  Showing a chat message that is hidden from view

  IF div isn't already set to 'flex',
    THEN set it to 'flex'  i.e. show the message
  ELSE for all other cases, set it to 'none'   i.e. hide the message
*/
function showChatMessage(htmlDivId) {
  divId = htmlDivId;
  div = document.getElementById(divId);
    if (div.style.display !== 'flex') {
        div.style.display = 'flex';
    }
    else {
      // makes it a toggle button, the more you click on it
        // div.style.display = 'none';
    }
}

function newTypewriterMessage(htmlId, htmlTxt, clickedButton) {
  setId(htmlId);
  setTxt(htmlTxt);

  i=0;
  typeWriter();
  clickedButton.onclick = "";
  console.log(clickedButton);
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
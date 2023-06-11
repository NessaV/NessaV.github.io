var i = 0;

var txt;
var id;
var divId;
var div; /* temp storage, for grabbing element by ID */

var typeSpeed = 15; /* The speed/duration of the effect in milliseconds */
var currentMessageId;
var nextMessageId;

var isTyped; /* boolean check */

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
// function hideChatMessage(htmlDivId) {
//   divId = htmlDivId;
//   div = document.getElementById(divId);
//     if (div.style.display !== 'none') {
//         div.style.display = 'none';
//     }
//     else {
//       // makes it a toggle button, the more you click on it
//         // div.style.display = 'flex';
//     }
// }

/* Using the 'hidden' class to keep messages hidden
  REF: https://www.w3schools.com/howto/howto_js_add_class.asp
*/
function hideChatMessage(htmlDivId) {
  divId = htmlDivId;
  div = document.getElementById(divId);
  div.classList.add("hidden");
}

function showChatMessage(htmlDivId) {
  divId = htmlDivId;
  div = document.getElementById(divId);
  console.log(divId);
  div.classList.remove("hidden");
  console.log(divId);
}

/* 
  Showing a chat message that is hidden from view

  IF div isn't already set to 'flex',
    THEN set it to 'flex'  i.e. show the message
  ELSE for all other cases, set it to 'none'   i.e. hide the message
*/
// function showChatMessage(htmlDivId) {
//   divId = htmlDivId;
//   div = document.getElementById(divId);
//     if (div.style.display !== 'flex') {
//         div.style.display = 'flex';
//     }
//     else {
//       // makes it a toggle button, the more you click on it
//         // div.style.display = 'none';
//     }
// }

/*
  Get the next message ID, using the current message ID
  ID format is: message-1, message-2, message-3, ...
 */
function getNextMessageId(currentMessageId) {
  // if indexing is from 0, then we get the second string with index 1 --> the number
  var currentNumber = currentMessageId.split("-")[1];
  // make sure we are doing 'addition' on numbers and not appending a string
  var nextNumber = parseInt(currentNumber) + 1;
  return "message-" + nextNumber;
}


function newTypewriterMessage(htmlId, htmlTxt, currentMessageId, isTyped, clickedButton) {
  setId(htmlId);
  setTxt(htmlTxt);

  // run Typewriting effect
  i = 0;
  if (typeWriter()) {
    console.log(typeWriter());
    isTyped = true;
  }
  // get ID of next message
  nextMessageId = getNextMessageId(currentMessageId);
  console.log(clickedButton);

   // not sure how it works, but it stops the Typewriter from running more than once
  clickedButton.onclick = "";
 
  console.log("clickedButton = " + clickedButton);
  console.log(clickedButton);
  

  // if message is completely Typed out
  if (isTyped == true) {
    console.log('is Typed is true');

    // If you wanted to show only the current message, uncomment the next line
    // hideChatMessage(currentMessageId);
    console.log('hide current Message');

    // show next message
    showChatMessage(nextMessageId);
    console.log('show next Message');

  } else if (isTyped == false) {
    console.log('is Typed is false');
  }
}


function typeWriter() {
  if (i < txt.length) {
    document.getElementById(id).innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, typeSpeed);
  } 
  return true;
}
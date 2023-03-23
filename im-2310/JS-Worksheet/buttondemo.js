/* This is a FUNCTION (name is in camel-case) */
function myExternalFunction() {  //No parameter given
 document.getElementById("demo3").innerHTML = 'Zzzzz';
}

/* Some information / parameters are given. So, we can make this FUNCTION sdo something else */
function myExternalFunctionInput(inputNumber) { //Parameter 'inputNumber' is given
    console.log(inputNumber);
}

/* This outputs to the CONSOLE. If element is found, the ID is printed. */
// console.log(document.getElementById("demo1")); 


/* Here, we are calling each FUNCTION */
myExternalFunction();

myExternalFunctionInput(5);
myExternalFunctionInput("some text");
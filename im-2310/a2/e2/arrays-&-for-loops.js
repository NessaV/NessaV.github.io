var fruit1 = "banana";
var fruit2 = "pineapple";
var fruit3 = "apple";
var fruit4 = "peach";
var fruit5 = "orange";

var fruitArray = ["banana", "pineapple", "apple", "peach", "orange"];

var mixedArray = [42, "pineapple", true, [3, 6, "nine"], "orange"];

console.log("Printing fruitArray");
console.log(fruitArray);

/* 
This will find the 4th item in mixedArray (at index 3), which is actually an array
and then select the 2nd item (at index 1)
This gets printed to the console.
*/ 
console.log("Printing item within array in mixedArray (mixedArray[3][1])");
console.log(mixedArray[3][1]); /* should print 6 */

// You can update values of any item in an array
console.log("Before changing the value of mixedArray[0])");
console.log(mixedArray[0]);
mixedArray[0] = 25;
console.log("After changing the value of mixedArray[0])");
console.log(mixedArray[0]);

/* 
Going through the fruitArray
Checking the items at each index in the array
A simple true or false check.

START (for loop)

(first item in array)
IF the item's value equals 'tomato', THEN output to console 'is tomato a fruit?'
ELSE print the item's value to the console
(move on to next item in array, until end of array is reached)

END (for loop)
*/
console.log("FOR Loop");
console.log("IF the item's value equals 'tomato', THEN output to console 'is tomato a fruit?'");
console.log("ELSE print the item's value to the console");
console.log("(move on to next item in array, until end of array is reached)");
for(let fruit of fruitArray){
    if(fruit == "tomato"){
        console.log("is tomato a fruit?");
    } else {
        console.log(fruit);
    }
}





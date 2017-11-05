//ARRAYS
// var a = "this is a string";
// var b="this is another string";

// var array = [a, b];

// var combinedString = a + b;
//
// console.log(combinedString);
// //Will combine a and b in one line
//
// console.log(a.indexOf("h"));
// //method we can use on string that will give us position of letter h in variable a. Will come back as 1 cos everything starts at 0
//
// console.log(a.substr(2,4));
// //method used to count which who knows
//
// console.log(a.includes("string"));
// //checks whether variable a includes that word- will come back true

// var myNumber = 5;
// var myDecimal = 5.5;
// var myExponential = 123e5;

// myNumber++
// console.log(myNumber + 3);
// console.log(myNumber - 3);
// console.log(myNumber * 3);
// console.log(myNumber / 5);

// console.log(isFinite(myNumber));
// console.log(myNumber.toString());

// var myBoolean = true;
//assigning variable with a value
// myBoolean = false;
//setting variable with new value

// var myArray = [3, 4, 5, 'string1', 'string2', 'string3'];
// console.log(myArray[2]);
// //targeting what I want in my array-looking for number 2
// console.log(myArray[myArray.length-1]);
// //to find the last string in the array. length takes you too far so you do -1
//
// var join = myArray + ["oneThing", "anotherThing"];
// console.log(join);
// console.log(typeof join);

// myArray.push("where do I go");
//
// console.log(myArray);

// console.log(myArray.pop());
// //removes the last item
// console.log(myArray);

// console.log(myArray.reverse());
//reverses order

//OBJECTS

// var object = {
//   one: "one is a string",
//   two: ["is an object"],
//   three: {
//     nested: "this is a nested object"
//   }
// }
// console.log(object);

//TYPECOERCIAN

var myString= "5";
var myDecimalString ="2.5";
var myNumber= 3;

//change string to integer
console.log( parseInt(myString) + myNumber );

//change string to decimal (float)
console.log( parseFloat(myDecimalString) + myNumber );

//change decimal to integer (remove the point)
console.log( parseInt(myDecimalString) + myNumber );

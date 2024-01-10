// Iterating through objects
// 1. For-in
// 2. For-of

let rectangle = {
  length: 22,
  breadth: 44,
  printme: function () {
    console.log("Hello world");
  },
};

for (let key in rectangle) {
  // keys are reflected through key variable
  // values are reflected through rectangle[key]
  console.log(key, rectangle[key]);
}

let obj = {
  harry: 90,
  shubh: 45,
  shivika: 56,
  ritika: 57,
  shiv: 23,
};

// For in loop
for (let a in obj) {
  console.log("Marks of " + a + " are " + obj[a]);
}
// Used for iterating over the enumerable properties of an object.
// Not recommended for iterating over arrays or other iterable objects since it may produce unexpected results

// For of loop 
for (let b of "Harry") {
  console.log(b);
}
// Used for iterating over iterable objects, such as arrays, strings, maps, sets, etc.

// The for...of statement executes a loop that operates on a sequence of values sourced from an iterable object.
//  Iterable objects include instances of built-ins such as Array, String, TypedArray, Map, Set, NodeList (and other DOM collections),
//   as well as the arguments object, 

// For of loop only used on iterables
// 1. Arrays
// 2. Map
// 3. iterable objects

// length 22
// breadth 44
// printme [Function: printme]

// Marks of harry are 90
// Marks of shubh are 45
// Marks of shivika are 56
// Marks of ritika are 57
// Marks of shiv are 23

// H
// a
// r
// r
// y

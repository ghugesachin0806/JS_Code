// Object creation Types
// 1. Factory Function
// 2. Constructor Function

// -----------> Factory Function
function createRectangle(len, bre) {
  let rectangle = {
    length: len,
    breath: bre,
    printme: function () {
      console.log("print me buddy !");
    },
  };

  return rectangle;

  //   return rectangle = {
  //     length: len,
  //     breath: bre,
  //     printme: function () {
  //       console.log("print me buddy !");
  //     },
  //   };
}

let myRectangle = createRectangle(10, 5);
myRectangle.printme();

// -----------> Constructor Function
function Square(length,breath)
{
    this.length = length,
    this.breath = breath,
    this.printme = function(factor)
    {
        console.log("area "+(length*breath)*factor);
    }
}

let square1 = new Square(12,23);
console.log(square1);
console.log(square1.length);
square1.printme(45);

// Addding new Property
square1.findme = function()
{
    console.log("Brother !");
}
console.log(square1);


// print me buddy !
// Square { length: 12, breath: 23, printme: [Function (anonymous)] }
// 12
// area 12420
// Square {
//   length: 12,
//   breath: 23,
//   printme: [Function (anonymous)],
//   findme: [Function (anonymous)]
// }

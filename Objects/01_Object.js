// Creating objects using object literal syntax

let Rectangle = {
  length: 12,
  breath: 14,

  printme: function () {
    console.log("print me buddy !");
  },
};

console.log(Rectangle);
console.log(Rectangle.length);
console.log(Rectangle.breath);
Rectangle.printme();

// Adding new Property to object
Rectangle.area = 90;
console.log(Rectangle);

//////////////////////////////////////////////////////////////////////////////////

// Creating objects using 'new' Keyword

let person = new Object();
person.firstname = 'sachin';
person.secondname = 'ghuge';

console.log(person);


// { length: 12, breath: 14, printme: [Function: printme] }
// 12
// 14
// print me buddy !
// { length: 12, breath: 14, printme: [Function: printme], area: 90 }
// { firstname: 'sachin', secondname: 'ghuge' }

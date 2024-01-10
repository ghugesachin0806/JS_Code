// Object cloning
// 1. Iteration
// 2. Assign
// 3. Spread

let obj1 = {
  harry: 90,
  shubh: 45,
  shivika: 56,
  ritika: 57,
  shiv: 23,
};

// Object cloning using assign
let obj2 = Object.assign({}, obj1);

obj2.harry = 99;

// Object cloning using spread
let obj3 = { ...obj1 };
obj3.harry = 3300;

console.log(obj1);
console.log(obj2);
console.log(obj3);

// { harry: 90, shubh: 45, shivika: 56, ritika: 57, shiv: 23 }
// { harry: 99, shubh: 45, shivika: 56, ritika: 57, shiv: 23 }
// { harry: 3300, shubh: 45, shivika: 56, ritika: 57, shiv: 23 }

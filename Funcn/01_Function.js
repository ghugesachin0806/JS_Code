// Function types
// 1. Function declaration
// 2. Function Assignment
// 3. Anonymous function assignment
// 4. Arrow Function

// Function Declaration
function run() {
  console.log("running");
}

run();

// Function Assignment
let stand = function fun() {
  console.log("standing");
};

// fun(); <-- Error
stand();

let jump = stand;

// Anonymous function
let walk = function () {
  console.log("Walking");
};

walk();

// Arrow Function
let sing = () => {
  console.log("singing");
};

sing();

// running
// standing
// Walking
// Singing

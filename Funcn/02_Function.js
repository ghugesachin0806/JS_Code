// Argument function
function sub(a, b) {
  console.log(a - b);
}

sub(5, 2);

// argument object
function sum2() {
  console.log(arguments);
}

sum2(1, 2, 3, 4, 5, 6);

// Using arguments object
function sum() {
  let total = 0;
  for (let val of arguments) {
    total += val;
  }

  console.log(total);
}

sum(1, 2, 3, 4, 5, 6);

// Using arguments object name
function fun1(...args) {
  let total = 0;
  for (let val of args) {
    total += val;
  }

  console.log(total);
}

fun1(1, 2, 3, 4, 5, 6);

// 3
// [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5, '5': 6 }
// 21
// 21

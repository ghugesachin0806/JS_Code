let person1 = {
  fname: "Love",
  lName: "Babbar",

  get fullname() {
    return `${person1.fname}  ${person1.lName}`;
  },

  set fullname(value) {
    let parts = value.split(" ");
    this.fname = parts[0];
    this.lName = parts[1];
  },
};

// Try-catch block

try {
  person1.fullname = 1;
} catch (error) {
  console.log("Error occured !");
}

//////////////////////////////////////////////

let person2 = {
  fname: "Love",
  lName: "Babbar",

  get fullname() {
    return `${person2.fname}  ${person2.lName}`;
  },

  set fullname(value) {
    if (typeof value !== String) {
      throw new Error("Error aa gya !");
    }

    let parts = value.split(" ");
    this.fname = parts[0];
    this.lName = parts[1];
  },
};

// Try-catch block

try {
  person2.fullname = 1;
} catch (error) {
  console.log(error);
}

// Error occured !
// Error: Error aa gya !

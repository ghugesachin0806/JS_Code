// Getter and setters are not functions, they are properties

let person = {
  fname: "Love",
  lName: "Babbar",

  get fullname() {
    return `${person.fname}  ${person.lName}`;
  },

  set fullname(value) {
    let parts = value.split(" ");
    this.fname = parts[0];
    this.lName = parts[1];
  },
};

console.log(person.fullname);

// Getter and setters are not functions, they are properties
person.fullname = "sachin ghuge";

console.log(person.fullname);

// Love  Babbar
// sachin  ghuge

// function greet(name, lastNmae) {
//   console.log("hello " + name + " " + lastNmae);
// }

// function square(number) {
//   return number * number;
// }

// let number = square(2);

// console.log(number);

// let a = "red";
// let b = "blue";

// let c = a;
// a = b;
// b = c;

// Hour
// If hour is between 6am and 12pm: Good morning!
// If is it between 12pm and 6pm: Good afternoon!
// Otherwise: Good evening!

// ***************** if .... else if statement! ************

//This is Block of code!
//if (condition) {
  //statement;
//} else if (anotherCondition) {
  //statement;
//} else if (yetAnotherCondition) {
  //statement;
//} else statement;

let hour = 18;

if (hour >= 6 && hour <= 12) {
  console.log("Good morning!");
} else if (hour >= 12 && hour <= 18) {
  console.log("Good afternoon!");
} else console.log("Good evening!");

// ***************** SWITCH....case **************

let role = "moderator User";

switch (role) {
  case "guest":
    console.log("guest User");
    break;

  case "Moderator":
    console.log("moderator User");
    break;

  default:
    console.log("Unknown User");
}

if (role === "guest") {
  console.log("guest");
} else if (role === "moderator") {
  console.log("moderator");
} else console.log("Unknown User");

// ******************* For Loops *****************

for (let i = 0; i < 10; i++) {
  if (i % 2 == 0) console.log(i + " odd");
}

// ****************** While Loops **************

let i = 0;
while (i <= 5) {
if (i % 2 !== 0) console.log(i);
i++;
}

// ***************** Do While Loops **************
let j = 0;
do {
  if (j % 2 !== 0) console.log(i);
  i++;
} while (j <= 5);

// *************** For-in Loops *************

const person = {
  name: "Oumarion",
  age: 3,
};

for (let key in person) console.log(key, person[key]);

const colors = ["red", "blue", "yellow"];
for (let index in colors) console.log(index, colors[index]);

// **************** For...of Loops **************

// const colors = ["red", "blue", "yellow"];
// for (let color of colors) console.log(color);

// let i = 0;
// while (i <= 10) {
//   //   if (i === 5) break;

//   if (i % 2 === 0) {
//     i++;
//     continue;
//   }
//   console.log(i);
//   i++;
// }

// *********** Max Number ***********

// let number = max(3, 2);
// console.log(number);

// function max(a, b) {
//   if (a > b) return a;
//   return b;

//   return a > b ? a : b;
// }

// // ************** FizzBuzz ************

for (i = 0; i <= 17; i++) {
  if (i % 15 === 0) {
    console.log("fizz");
  } else if (i % 3 === 0) {
    console.log("fizz");
  } else if (i % 5 === 0) {
    console.log("fizzBuzz");
  } else {
    console.log(i);
  }
}

// ************* speedCheck **************
function checkSpeck(speed) {
  const speedLimited = 70;
  const kmPerPoint = 5;

  if (speed < speedLimited) console.log("Ok");
  else {
    const points = Math.floor((speed - speedLimited) / kmPerPoint);
    if (points >= 12) console.log("License Suspended");
    else console.log("points", points);
  }
}

// ************ Object ******************

const circle = {
  radius: 1,
  x: 1,
  y: 1,
  location: {
    x: 1,
    y: 1,
  },
  isVisible: true,
  draw: function () {
    console.log("draw");
  },
};
circle.draw(); // Methhod

// *************** Factory Function ******************
function createCircle(radius) {
  return {
    radius,

    draw() {
      console.log("draw");
    },
  };
}
const circle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(2);
console.log(circle1)

//************ Array ************************

// const numbers = [3, 4];

//  Add numbers to End
// numbers.push(5, 6, 9);

// Add numbers at teh Begining
// numbers.unshift(1, 2);

//  Add numbers in the Middle
// numbers.splice(6, 0, 7, 8);
// console.log(numbers);

// ******* Finding Elements in primitive ***************

// const numbers = [1, 2, 3, 1, 4];
// console.log(numbers.indexOf(3, 2));
// console.log(numbers.lastIndexOf(1));

// console.log(numbers.indexOf(1) !== -1); // Old Method
// console.log(numbers.includes(1)); // new Method

// ******* Finding Elements in Object *****
// const courses = [
//   { id: 1, name: "a" },
//   { id: 2, name: "b" },
// ];
//  Old way of finding Elements
// const course = courses.find(function (course) {
//   return course.name === "a";
//    New way of fining Elements
//   courses.find((course) => course.name === "a");
// });

// console.log(course);

// ************ removing Elements ********************

// const numbers = [1, 2, 3, 4];

// Removing Elemnts End
// numbers.pop();

// Removing Elements from the Beginning
// numbers.shift();

// Removing Elements from Middle
// numbers.splice(2, 1);

// ********* Emptying an Array *******************
// let numbers = [1, 2, 3, 4];
// numbers = [];

// *********** Combinning and Slicing Array ********************
// const first = [1, 2, 3];
// const second = [4, 5, 6];

// const combined = first.concat(second);

// *********************** Spread Operator ***************
// const combined = [...first, "a", ...second, "b"];

// const slice = combined.slice();
// const copy = [...combined];

// console.log(combined);
// console.log(slice);
// console.log(copy);

// ************ Iterating  an Array ***************
//const numbers = [1, 2, 3];

// for (let number of numbers);
// console.log(number);

//numbers.forEach(function (number) {
//console.log(number);
// Both of them work
// numbers.forEach((number, index) => console.log(number, index));
//});

// ******** Joining Arrays ******************
// const numbers = [1, 2, 3];
// numbers.join(",");
// const joined = numbers.join(",");
// console.log(joined);

// const message = "This is my first message";
// const parts = message.split(" ");
// console.log(parts);

// const combined = parts.join("-");
// console.log(combined);

// ******************* Sorting Arrays *****************
// const numbers = [2, 3, 1];
// console.log(numbers.sort());

// ***** Reverse Arrays ******

// console.log(numbers.reverse(numbers));

// const courses = [
//   { id: 1, name: "Node.js" },
//   { id: 2, name: "JavaScript" },
// ];

// courses.sort(function (a, b) {
//   // a < b => -1
//   // a > b => 1
//   // a === b => 0
//   if (a.name < b.name) return -1;
//   if (a.name > b.name) return 1;
//   return 0;
// });
// console.log(courses);

// ************ Testing the Elements of an Array *************
// const numbers = [1, -1, 2, 3];

// every() matches to give catries
// some() check to see if atleast one element matches given catries
// const atLeastOnePositive = numbers.some(function (value) {
// return value >= 0;
// });

// console.log(atLeastOnePositive);

// ********************** Filtering Array ******************
const numbers = [1, -1, 2, 3];
const filtered = numbers.filter(function (value) {
  return value >= 0;

  numbers.filter((n) => n >= 0);
});

console.log(filtered);

// ********************* Mapping an Array *******************
// const numbers = [1, -1, 2, 3];

// const filtered = numbers.filter((n) => n >= 0);

// const items = filtered.map((n) => "<li>" + n + "</li>");
// const items = filtered.map((n) => {
//   const obj = { value: n };
//   return obj;
// });

// const html = "ul" + items.join("") + "</ul>";

// const items = numbers
//   .filter((n) => (n) => 0)
//   .map((n) => ({ value: n }))
//   .filter((obj) => obj.value > 1)
//   .map((obj) => obj.value);

// console.log(items);

// ****************** reducing an Array *****************
// const numbers = [1, -1, 2, 3];

// let sum = 0;
// for (let n of numbers) sum += n;
// console.log(sum);

// const sum = numbers.reduce(
//   (accumulator, currentValue) => accumulator + currentValue
// );

// console.log(sum);

// ************************** Function Declaration ***********
// function walk() {
//   console.log("walk");
// }

// ************************** Function Expression **************
// let run = function () {
//   console.log("run");
// };
// run();

// ***************** The Rest Operator ***********************
// function sum(discount, ...prices) {
//   const total = prices.reduce((a, b) => a + b);
//   return total * (1 - discount);
// }

// console.log(sum(0.1, 20, 30));

// ******************* Default Parameter *********************
// function interest(principal, rate = 3.5, years = 5) {
//   rate = rate || 3.5;
//   years = years || 5;

//   return ((principal * rate) / 100) * years;
// }

// console.log(interest(10000));

// ******************* Getters and Setters *********************
// const person = {
//   firstName: "Oumarion",
//   lastName: "Quarshie",
//   get fullName() {
//     return `${person.firstName} ${person.lastName}`;
//   },
//   set fullName(value) {
//     const parts = value.split(" ");
//     this.firstName = parts[0];
//     this.lastName = parts[1];
//   },
// };
// person.fullName = "John Smith";
// console.log(person.fullName);

// *************************** Local vs. Global Scope ************
// const color = "red"; // Global Scope

// function start() {
//   const message = "hi";
//   const color = "blue"; // Local Scope
//   console.log(color);
// }

// function stop() {
//   const message = "bye";
// }

// start();

// *************************** Let vs Var *********************

// Var = function-scoped
// ES6 (ES2015): let, const => block-scped

// function start() {
//   for (var i = 0; i < 5; i++) console.log(i);
// }

// start();

// *************************** The This Keyword *********************
// method -> Object
// const video = {
//   title: "a",
//   play() {
//     console.log(this);
//   },
// };

// video.stop = function () {
//   console.log(this);
// };

// video.stop();

// function -> global (window, global)

// const video = {
//   title: "a",
//   tags: ["a", "b", "c"],
//   showTags() {
//     this.tags.forEach(function (tag) {
//       console.log(this.title, tag);
//     }, this);
//   },
// };

// video.showTags();

// *************************** Change This *********************

const video = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach(
      function (tag) {
        console.log(this.title, tag);
      }.bind(this)
    );
  },
};

video.showTags();

function playvideo(a, b) {
  console.log(this);
}

playvideo.call({ name: "Kylian" }, 1, 2);
playvideo.apply({ name: "Kylian" }, [1, 2]);
playvideo.bind({ name: "Kylian" })();

playvideo();

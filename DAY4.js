//Todays questions:

//13. What's event.currentTarget?
//14. What's the difference between == and ===?
//15. Why does it return false when comparing two similar objects in JavaScript?
//16. What does the !! operator do?

//13.

//e.currentTarget is a property of event object which returs element where eventListener is
//attached.

//imagine the following situation:

//you have added eventListener to body element, in which is a div and clicked on that div

//e.target will return that div where the event occured
//but e.currentTarget will return in which EventListener have been occured, meaning body.

//14.

// ==(double equals) is abstract comparison operator,
// which means that before comparing to second vaule
//  it converts operands to same type

//while ===(tripple equals) is strict comparison operator and doesn't convert anything

//code bellow will return true
if (1 == "1") {
  console.log(true);
} else {
  console.log(false);
}

//but this code with tripple equals will return false, as it's strict comparision operator
if (1 === "1") {
  console.log(true);
} else {
  console.log(false);
}

//Mostly we use ===(tripple equals), becouse most of the time we don't want to convert anything
//but there are some cases when ==(double equals) is usefull too!

//15.

//Well, it has quite interesting answer I think!

//bassically, we have primitive and object types in javascript
//primitive types are compared by their value for example:

//becouse both a & b are primitive types they will be compared to each other by their value
//and they both have same value
let a = "stringer";
let b = "stringer";

//so this will log true
if (a === b) {
  console.log(true);
} else {
  console.log(false);
}
///////////////////////
//but javascript treats objects differently, it doesn't compare each other by their value
//but it compares by their address in memory where the variable is stored
let obj1 = {
  first: 1,
  second: 2,
  third: 3,
  fourth: 4,
};

let obj2 = {
  first: 1,
  second: 2,
  third: 3,
  fourth: 4,
};

//becouse obj1 & obj2 have different address in RAM, this will log false as they are in different
//locations
if (obj1 === obj2) {
  console.log(true);
} else {
  console.log(false);
}

//also in JS arrays are objects too and becouse of that code bellow will also log false
if ([] === []) {
  console.log(true);
} else {
  console.log(false);
}

//16.

//the !!(double not), is the easy way to convert any type into boolean

//we simply write !! in front of any value an it coerces!:

console.log(!!undefined); //false
console.log(!!0); //false
console.log(!!1); //true
console.log(!!NaN); //false
console.log(!!""); //false
console.log(!![]); //true
console.log(!!{}); //true

//Todays questions:

//1. What's the difference between undefined and null?
//2. What does the && operator do?
//3. What does the || operator do?
//4. is using the + or unary plus operator the fastest way in converting a string to a number?

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Q1:
// Simply put, Undefined is type itself which occurs when
//variable was declaired but never asigned to any value:
let variable;

console.log(variable); //this should print out undefined.

//while null means nothing and it's an object.

let variableNull = null;

//null means that value of variableNull exists but it's nothing

//so there's a difference undefined means variable's value isn't even defined,
//while null means variable's value is defined but it's empty.

//GE:
//undefined-ის დროს ცვლადს არ გააჩნია მნიშვნელობა, და undefined წარმოადგენს ტაიპს
//null-ის დროს ცვლადს მინიჭებული აქვს მნიშვნელობა თუმცა ეს მნიშვნელობა ცარიელია, null არის
//ობიექტი.

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Q2:
//the && operator is used in if statements and means if both statements are true then execute
//code in the body of if:

const num1 = 1;
const num2 = 2;

if (num1 === 1 && num2 === 2) {
  console.log(
    "Q2: this string will be printed after executing this because both statements are true"
  );
} else {
  console.log("this won't pring");
}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Q3:
//the ||(or) operator is also used in if blocks like &&(and operator), and it will execute
//code in the body of if statement, if one of the statements is true:

const number1 = null;
const number2 = undefined;

if (number1 === null || number2 === 20) {
  console.log(
    "Q3: second argument isn't true but first one is, so this code will be executed"
  );
}

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Q4:
//Yes!, using the unary operator(+) is the fastest way to convert string to a number,
// on the other hand, we can use parseInt() method but with unary operator it's twice as simple.
const string = "4";
const number = +string;
console.log(
  `Q4: indeed it is! ---> before converting: variable: ${string} type: ${typeof string} after converting: variable: ${number} type: ${typeof number}`
);

//Todays questions:

//1. What's the difference between undefined and null?
//2. What does the && operator do?
//3. What does the || operator do?
//4. is using the + or unary plus operator the fastest way in converting a string to a number?

//1:
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

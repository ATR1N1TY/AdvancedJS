//Todays questions:

//17. How to evaluate multiple expressions in one line?
//18. What's Hoisting?
//19. What is Scope?
//20. What are Closures?

//17.

//we can evaluate multiple expressions by ","(comma operator), for example:
let x = 5;

x = (x++, x / 2, x * 10, (x = x * 3), (x = x + (324 * x) / 2));

console.log(x);

//18.

//Hoisting is a pretty interensting thing and also interviewers love to ask what's hoisting

//Bassicaly, variables and functions are hoisted to the top in order to run properly
//for example:
thisFunctWorks();

function thisFunctionWorls() {
  console.log("somethin");
}

//question is... how function can be invoked when it's not declared like in this example
//the answer is that, function is hoisted so it becomes:

function thisFunctionWorls() {
  console.log("somethin");
}

thisFunctWorks();

//but it's important to mention that when hoisted, it doesn't mean functions are moved physically
//but JS compiler firstly goes to function declarations and variables and stores that into RAM
//or in a memory , then the executon phase begins.

//19.

//When we talk about scopes in js, we talk about where can we declare and
//access variables in the code

//there are three types of scopes in javascript: Global, Function and block scopes

//if we aren't declaring variable in the function it means that variable is accesable anywhere:

//Global Scope:
let variableName =
  "this is a global variable so every function, class, block can access it!";

//Function Scope:
//function scope means variable is declared inside function body so only this function or it's
//child functions or blocks can access it:

const funcScope = () => {
  let variable =
    "this variable can only be accessed inside the funcScope function";
  const innerFunct = () => {
    console.log(variable); // this will log variable as it's accesable
    let notConst = "something";
  };
  console.log(notConst); // this will throw an error becouse innerFuncs variable
  // 'notConst' isn't accesable for funcScope function
};

//Block Scope:
if (1 === 1) {
  let blockVar = ["rame"];
}
console.log(blockVar); // this will throw an error because blockVar doesn't exist in the global
//Scope and it's only accesable inside the if statement body

//Bassically, scoping is an important concept which tells us about, how declaring variables work
//in JavaScript!.

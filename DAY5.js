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

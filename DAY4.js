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

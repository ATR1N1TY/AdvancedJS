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

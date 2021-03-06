//Todays questions:

//9. What's the difference between event.preventDefault() and event.stopPropagation() methods?
//10. How to know if event.preventDefault() method was used in an element
//11. Why does this code obg.someprop.x throw an error?
//12. What is event.target?

//9.

//preventDefault() method prevents the default behavour of a browser for example:
//after text is entered in input field, page refreshes but if we use this method page
//won't refresh

//while stopPropagation simply stops bubbling or a capturing.

//one might say that both page refresh, bubbling are default behavour of a browser
//but there are cases when we want bubbling to happen but prevent other behavours, or vice-verca

//10.

//it's quite easy, we should check defaultPrevented property of an event object, if it's value is true ut means
//prevent default was used, otherwise it's not been used

document.addEventListener("touchmove", function (e) {
  console.log(e); // <--- in this object
});

//11.this one is easy one too!, if it throws an error when we want to access value of an x,
//which is a property of a someprop, it means that someprop is undefined

//which means it doesn't exist, so how can something which doesn't exist have an x property?

//12.

//simply put, target is a property of an event object, which is a object itself, and contains detailed information
//about element where the event have been occured

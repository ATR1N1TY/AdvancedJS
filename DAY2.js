///<<<DAY 2>>>///

//Todays questions:
//5. What is the  DOM?
//6. What is Event Propagation?
//7. What's Event Bubbling?
//8. What's Event Capturing?

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Q5:

//DOM aka Document Object Model is an API(aplication programming interface), which allows us
// to manipulate HTML documents with javascript code
// document means HTML document itself
// Object means tags in HTML document, Bassically JS treats HTML tags like objects and also
// JS is known to be good with objects
// Model means how these elements are nested

//with DOM we can add remove and change insides of an HTML element with JS code

// tags in html is also called nodes

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Q6 Q7 Q8:

//Event propagation is the way how the event capturing flows

//when we have nested tags in HTML document by default if we click on the inner most element
// events will flow up(bubble up) also called bubbling, to the body > html > document

//what if we don't want to bubble events?
// we can simply prevent event bubbling by typing e.stopPropagation()

//Event capturing is when we click somehting on a webpage this means event was captured
//Event can be anythin: keyUp, keyDown, click, etc.
//when Event is detected on a webpage by EventListener, this means event was captured

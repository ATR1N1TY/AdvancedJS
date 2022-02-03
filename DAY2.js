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

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Q6:

//Event propagation is the way how the event capturing flows

//when we have nested tags in HTML document by default if we click on the inner most element
// events will flow up(bubble up) also called bubbling, to the body > html > document

//or if event capturing is true and click on inner most element,
//events will flow down from parent to child elements till event will be catched

//in eather way, what if we don't want to bubble events? or stop event capturing?
// we can simply prevent event bubbling/capturing by typing e.stopPropagation()

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Q7:

//When we have nested elements in HTML, and eventListener is added to last child element
//if we click that element, sequence of events will occur from child to parent(will bubble up)
//that's becouse this elements are nested and if we click on last child, we have also clicked
// on parent element of that child and so on

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

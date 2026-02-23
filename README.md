1. Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll
   
getElementById("id")=
Finds one element by its ID.
Returns a single element.

getElementsByClassName("class")=
Finds elements by class name.
Returns a collection (many elements).

querySelector("selector")=
Finds the first element that matches a CSS selector.
Returns one element.

querySelectorAll("selector")=
Finds all elements that match a CSS selector.
Returns a list of elements.

2. How to create and insert a new element into the DOM?
Steps:
Create element → document.createElement()
Add content → element.textContent = "Hello"
Insert into page → parent.appendChild(element)
Example:
let div = document.createElement("div");
div.textContent = "Hello World";
document.body.appendChild(div);
 
3. What is Event Bubbling? How does it work?
Event Bubbling means:

When you click a child element, the event moves up to its parent, then to grandparent, and so on.
Example:
If you click a button inside a div:
First → button event runs
Then → div event runs
Then → body event runs
It goes from inside to outside.

4. What is Event Delegation? Why is it useful?
   
Event Delegation means:
Instead of adding events to many child elements,
Add one event to the parent.
It works because of event bubbling.

Why useful?
Saves memory
Works for dynamically added elements
Cleaner code

5. Difference between preventDefault() and stopPropagation()  
preventDefault()
Stops the default browser action.
Example: Stop a link from opening.


stopPropagation()
Stops the event from moving up (bubbling).
Parent elements will not receive the event.
 
 

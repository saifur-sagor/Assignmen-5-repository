1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

getElementById vs getElementsByClassName vs querySelector / querySelectorAll

getElementById → select one element by ID name.

getElementsByClassName → selects all elements with a class name.

querySelector → select the first matching element using a css selector like (id,class tag).

querySelectorAll → select all matching elements using CSS selector.

2. How do you Create and insert a new element in to the dom.

Element create - document.createElement("tag")

Use parent.appendChild(newElement) or parent.insertBefore(newElement, reference) to insert it.

3. Event Bubbling

Event starts from the target element and bubbles up to its parent elements.

4. Event Delegation

Attach a single event listener on a parent instead of multiple children.


5. preventDefault() vs stopPropagation()

preventDefault() → stops the default browser action (like form submit).

stopPropagation() → stops the event from bubbling to parent elements.

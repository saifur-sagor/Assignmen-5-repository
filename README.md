getElementById vs getElementsByClassName vs querySelector / querySelectorAll

getElementById → selects one element by its ID.

getElementsByClassName → selects all elements with a class (returns HTMLCollection).

querySelector → selects first matching element using any CSS selector.

querySelectorAll → selects all matching elements using CSS selector (returns NodeList).

Create and insert a new element

Use document.createElement("tag") to make an element.

Use parent.appendChild(newElement) or parent.insertBefore(newElement, reference) to insert it.

Event Bubbling

Event starts from the target element and bubbles up to its parent elements.

Event Delegation

Attach a single event listener on a parent instead of multiple children.

Useful for dynamic elements added later.

preventDefault() vs stopPropagation()

preventDefault() → stops the default browser action (like form submit).

stopPropagation() → stops the event from bubbling to parent elements.

If you want, I can also make a super short 1-line version for each so it’s easier to memorize. Do you want me to do that?

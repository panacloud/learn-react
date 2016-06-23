In order to understand it in React lets first understand this concept with reference to Angular 2. 
In Angular 2 a component host is the element that component is attached to. To say it in another way, 
to turn an Angular component into something rendered in the DOM you have to associate an Angular component with
a DOM element. We call such elements host elements.

A component can interact with its host DOM element in the following ways: 
It can listen to its events. It can update its properties. It can invoke methods on it.

But all this is about Angular 2.

On the other hand in React, Props are of key importance in component composition. They are the mechanism used in React for passing
data from parent to child components. Props can’t be changed from inside the component; they are passed
and “owned” by the parent. Therefore, as far as I can understand this step cannot be built in React.
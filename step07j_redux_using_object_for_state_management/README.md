React Sample app created with React cli "create-react-app"


[Create React App](https://github.com/facebookincubator/create-react-app).

Counter example with react-redux

Update in Counter 10:
Using object for state management of Redux. We will return object from reducer and maintain state as Objects for each reducer.

See Reducer's code

We will use Object.assign in reducer to copy all data from old state object to new object and then return new object.
We should never update existing object in reducer, it should be treated as immutable

Now in mapStateToProps function we will have state.reducer.object

In our case it willbe state.incrementCounter.incrementState or state.decrementCounter.decrementState
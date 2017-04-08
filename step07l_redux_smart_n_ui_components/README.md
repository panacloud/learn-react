React Sample app created with React cli "create-react-app"


[Create React App](https://github.com/facebookincubator/create-react-app).

Counter example with react-redux

Update in Counter 12:
Create dump component that will not talk to redux and parent container component will update it

##IMPORTANT:
In this example Counter component will not talk to redux directly.
App component will provide function to Counter component and Counter component
will call that function to pass value to App component then Redux store will be
update by App component
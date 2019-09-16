- [ ] Why would you use class component over function components (removing hooks from the question)?
      Because you are able to use extends React-Component to use the React library and then render the function which will return the react element.

* [ ] Name three lifecycle methods and their purposes.
      Birth/Mounting: this starts the construction of the app and will have componentDidMount as well.Growth/Updating: This is where you build the state (using setState) and you can also use shouldComponentUpdate   to stop the component from renderingDeath/Unmounting : Component is removed from the screen and you can use componentWillUnmount   to clean up if needed

- [ ] What is the purpose of a custom hook?
      Custom hooks are built from scratch to be able to reuse the same hook over and over again

* [ ] Why is it important to test our apps?
      I think testing is VERY important in whatever we do, especially when building Apps - You should not wait until the feature to test the app - it should be tested on every commit to make sure that the app is being built correctly or it could get confusing on what area is 'broken' if any.

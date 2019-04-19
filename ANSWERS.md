PropTypes are used to check the types of data being passed around through props. It is important to use proptypes to ensure that other developers using our code can be sure to enter the proper data types for the particular code in question.


First is the mounting or birth phase. This phase sets up the initial data as well as invoking the render method. This is also when componentDidMount is called.
Second comes the growth or updating phase. This is where setState can be used to change the components state and also is where the render method will be called again.
Third is the death or unmounting phase. This is the end phase of the component, where it is removed from the screen.


A higher order component is a component that receives a component as an argument and returns a new component. It allow the ability to nest functionality inside of a function, in order to avoid having to repeat similar logic.

hat are three different ways to style components in React? Explain some of the benefits of each.
Writing native css or using pre-processors. 
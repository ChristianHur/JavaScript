
# Callback Functions
Let's define callback functions and understand how they work.
## What is a Callback function?
**Definition**:
> A callback function is a function passed into another function as an
> argument, which is then invoked inside the outer function to complete
> some kind of routine or action.

*(Source:  https://developer.mozilla.org/en-US/docs/Glossary/Callback_function)*
## Functions are first-class functions (citizens, objects)
1. used/treated as variables (aka data)
2. assignable to a variable (aka function expression)
      
	    const fx = function( arg ){ return arg; };

3. passed as arguments (inner functions) to another function (outer function)

		function gx(){};
		fx( gx );

## Functions are higher-order because they can operate on other functions
1.  can take other functions as arguments (example c)
2.  can return a function as a value (example a)


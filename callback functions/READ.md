# What are callback functions?
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

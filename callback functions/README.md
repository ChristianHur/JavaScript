
# Callback Functions
Let's define callback functions and understand how they work.
## What is a Callback function?
**Definition**:
> A callback function is a function passed into another function as an
> argument, which is then invoked inside the outer function to complete
> some kind of routine or action.

*(Source:  https://developer.mozilla.org/en-US/docs/Glossary/Callback_function)*
## Functions are first-class functions (citizens, objects)
A first-class function can be:
1. used/treated as variables (aka data)
	```js
	const fx = () => 'Planet';
	const gx = fx;  //fx is treated as a variable
	```
2. assignable to a variable (aka function expression)
	```js
	const fx = arg => arg;
	```
3. passed as arguments (inner functions) to another function (outer function)
	```js
	const gx = () => {};
	fx( gx );              // gx - the inner function, fx - the outer function
	```
## Functions are higher-order because they can operate on other functions
A high-order function can:
1.  take other functions as arguments
	```js
	const fx = () => 'Planet';
	const gx = () => 'Earth';
	const hx = (f, g) => console.log(`Hello ${f()} ${g()}!`);
	hx(fx,gx)	//Hello Planet Earth!
	```
2.  return a function as a value
	```js
	const fx = () => () => console.log('Hello Earth!')
	const gx = fx()		// fx's returned value (which is a function) is assigned to gx
	gx()			// Hello Earth!
	
	// IIFE
	(() => ()=>console.log('Hello Earth!'))()()    // Hello Earth!
	```

## Watch the video here
Video:  [How and Why Callback Functions Are Used in JavaScript](https://youtu.be/8W4eEcY6vAo)

Direct Link:  https://youtu.be/8W4eEcY6vAo

/********************
 Step 1: Create Global Variables
 - Create two global variables (e.g., globalVar, anotherGlobalVar).
 - Assign any values you like.
********************/
let globalVar = "sekai";
let anotherGlobalVar = "isekai";

/********************
 Step 2: Create a Function to Demonstrate Function Scope
 - Define a function (e.g., demoFunctionScope).
 - Inside this function:
   1. Declare a local variable (e.g., localVar).
   2. Log both the global variable(s) and the local variable to the console.
   3. Return a string that includes both the global and local variables.
********************/
function demoFunctionScope() {
  let localVar = 10;
  console.log("log inside function: " + globalVar + " " + anotherGlobalVar + " " + localVar);
  return (globalVar + " " + anotherGlobalVar + " " + localVar);
}

// error
// console.log(localVar);

/********************
 Step 3: Call the Function and Log Its Return Value
 - Call your function from Step 2 and store its result in a variable.
 - Use console.log() to display the return value in the console.
********************/

let result = demoFunctionScope();
console.log("log function return value: " + demoFunctionScope());
console.log("log result: " + result);

/********************
 Step 4: Demonstrate Block Scope
 - Write an if statement that always executes (if (true) { ... }).
 - Inside this block:
   1. Use let to declare a block-scoped variable (e.g., blockVar).
   2. Log the block-scoped variable within the block.
 - Try logging the same variable outside the block and observe what happens.
********************/

if (true){
  let blockVar = "block-scoped variable";
  console.log(blockVar);
}

// error
// console.log(blockVar);
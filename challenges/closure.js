// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();


// Explanation: 
/* The nested function can access the higher order function's variable because there is a closure being created by building nestedFunction into myFunction. That closure is by definition would gives it access to myFunction's variable as part of its so-called "lexical enviroment". Creating the same function outside myFunction would take away its access unless myFunction were modfied to accept nested as a paramenter. That would allow it to be passed into myFunction as a callback and also gain access to myFunction's variables.

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function summation (num) {
  let count = 0;
  for (let i = 1; i < (num+1); i++) {
    count = count + i;
  };
  return count;
}

console.log (summation (2));

console.log (summation (5));

console.log (summation (10));
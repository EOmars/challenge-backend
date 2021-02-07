# CHALLENGE BACKEND

Write a program that prints all the numbers from 1 to 100. However, for multiples of 3, instead of the number, print “Music”. For multiples of 5 print “TI”. For numbers which are multiples of both 3 and 5, print “Musical”.

But here's the catch: you can use only one `if`. No multiple branches, ternary operators or `else`.

# SOLUTION

1st solution:

We use truthy values in javascript, assignment is a truthy value, so we can use it in logical operators
Implementation can be found in [calculateValue.js](calculateValue.js)

2nd solution: 
We use only one `if` and using logical operators to assign a value for each case: 0 if n is a multiple of 3, 1 if n is a multiple of 5, 2 if n is a multiple of both 3 and 5.  

run the follow command: 

`node challenge.js`

# TEST

We use jest for test purpose. Before test, run: 

`npm install`

To test the implementation run:

`npm run test`


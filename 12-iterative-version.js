// Solve the drills 1 - 7 from your previous checkpoint (Recursion) iteratively. 

// 1. Counting Sheep

// Write a recursive function that counts how many sheep jump over the fence. 
// Your program should take a number as input. That number should be the number of sheep you have. 
// The function should display the number along with the message "Another sheep jumps over the fence" until no more sheep are left.

//     Input: 3
//     Output:
//         3: Another sheep jumps over the fence
//         2: Another sheep jumps over the fence
//         1: Another sheep jumps over the fence
//         All sheep jumped over the fence

const theSheep = (n) => {
  for(let i = n; i > 0; i--) {
    console.log(i, ': Another sheep jumps over the fence');
  }
  console.log('All sheep jumped over the fence!');
};

// theSheep(4);

// *------------------------------

// 2. Power Calculator

// Write a function called powerCalculator() that takes two parameters, an integer as a base, and another integer as an exponent. 
// The function returns the value of the base raised to the power of the exponent. 
// Use only exponents greater than or equal to 0 (positive numbers)

//     powerCalculator(10,2) should return 100
//     powerCalculator(10,-2) should return exponent should be >= 0

const calc = (n, e) => {
  let toEx = n;

  if (e <= 0) {
    return 'exponent should be >= 0';
  }

  for (let i = 1; i < e; i++) {
    toEx *= n;
  }

  return toEx;
};

// console.log(calc(1,2));

// *----------------------

// 3. Reverse String

// Write a function that reverses a string. Take a string as input, reverse the string, and return the new string.

const revStr = (str) => {
  let newString = '';

  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }

  return newString;
};

// console.log(revStr('flip it and reverse it'));

// *----------------------------------

// 4. nth Triangular Number

// Calculate the nth triangular number. 
// A triangular number counts the objects that can form an equilateral triangle. 
// The nth triangular number is the number of dots composing a triangle with n dots on a side, and is equal to the sum of the n natural numbers from 1 to n. 
// This is the Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45.

const nthTri = (n) => {
  let triNum = 0;

  for (let i = 0; i <= n; i++) {
    triNum += i;
  }

  return triNum;
};

// console.log(nthTri(3));

// *---------------------------------

// 5. String Splitter

// Write a recursive function that splits a string based on a separator (similar to String.prototype.split). 
// Don't use JS array's split function to solve this problem.

//     Input: 02/20/2020
//     Output: ["02", "20", "2020"]

const stringSplitter = (str, sep) => {
  let arr = [];
  let toArr = '';
  for (let i = 0; i <= str.length; i++) {
    if (str[i] === sep || i === str.length) {
      arr.push(toArr);
      toArr = '';
    }
    else toArr += str[i];
  }
  return arr;
};

// console.log(stringSplitter('02/20/2020', '/'));

// 6. Fibonacci

// Write a recursive function that prints the Fibonacci sequence of a given number. 
// The Fibonacci sequence is a series of numbers in which each number is the sum of the 2 preceding numbers. 
// For example, the 7th Fibonacci number in a Fibonacci sequence is 13. The sequence looks as follows: 1, 1, 2, 3, 5, 8, 13.

const fib = (num) => {
  let result = [];
  for (let i = 1; i <= num; i++) {

    if (i === 1 || i === 2) {
      result.push(1);
    }
    else {
      result.push(result[i - 2] + result[i - 3]);
    }
  }
  return result;
};

// console.log(fib(7));

// 7. Factorial

// Write a recursive function that finds the factorial of a given number. 
// The factorial of a number can be found by multiplying that number by each number between itself and 1. 
// For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.


const fact = (n) => {
  let factorial = 1;

  for (let i = 1; i <= n; i++) {
    factorial *= i;
  }

  return factorial;
};

// console.log(fact(5));
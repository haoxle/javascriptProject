// Write a function that takes a number and returns true if it is a positive number and false if it is a negative number.
const isNumberPositive = (number) => (number > 0 ? true : false);

//Write a function that takes a number of days and converts it into an age.
const convertToAge = (number) => Math.floor(number / 365.25);

//Write a function that takes three numbers and returns the largest of the three numbers.
const maxNumber = (a, b, c) => Math.max(a, b, c);

//Write a function that takes an array of names and returns the last name from the array of names.
const getLastName = (arr) => arr[arr.length - 1];

//Write a function that takes an array of numbers and returns true if all of the numbers are positive. It should return false if there are one or more negative numbers in the array.

//const isArrPositive = (arr) => arr.some((v) => v < 0);

const isArrPositive = (marks) => {
  let lessThanZero = true;
  for (let i = 0; i < marks.length; i++) {
    if (marks[i] < 0) {
      lessThanZero = false;
      break;
    }
  }
  return lessThanZero;
};

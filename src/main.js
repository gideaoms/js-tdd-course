const restOfDivision = (number, divise) => number % divise === 0;

const Fizzbuzz = (number) => {
  if (restOfDivision(number, 3) && restOfDivision(number, 5)) {
    return 'FizzBuzz';
  }
  if (restOfDivision(number, 3)) {
    return 'Fizz';
  }
  if (restOfDivision(number, 5)) {
    return 'Buzz';
  }
  return number;
};

export default Fizzbuzz;

//https://www.codewars.com/kata/558fc85d8fd1938afb000014/train/javascript

function sumTwoSmallestNumbers(numbers) {
  let arr = numbers.sort((a, b) => a - b);
  return arr[0] + arr[1];
}

sumTwoSmallestNumbers([5, 8, 12, 19, 22]);
sumTwoSmallestNumbers([15, 28, 4, 2, 43]);
sumTwoSmallestNumbers([3, 87, 45, 12, 7]);
sumTwoSmallestNumbers([23, 71, 33, 82, 1]);
sumTwoSmallestNumbers([52, 76, 14, 12, 4]);

//Your task is to make function, which returns the sum of a sequence of integers.

// The sequence is defined by 3 non-negative values: begin, end, step (inclusive).

// If begin value is greater than the end, function should returns 0

// https://www.codewars.com/kata/586f6741c66d18c22800010a/train/javascript

const sequenceSum = (begin, end, step) => {
  // May the Force be with you
  //   if (begin > end) {
  //     return 0;
  //   }
  //   if (begin === end) {
  //     return begin;
  //   }

  //   let sum = 0;

  //   for (let i = begin; i <= end; i += step) {
  //     sum += i;
  //   }

  //   return sum;
  return begin > end ? 0 : begin + sequenceSum(begin + step, end, step);
};

sequenceSum(2, 2, 2);
sequenceSum(2, 6, 2);
sequenceSum(1, 5, 1);
sequenceSum(1, 5, 3);

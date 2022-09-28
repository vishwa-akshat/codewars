// Write reverseList function that simply reverses lists.

function reverseList(arr) {
  // Solution 1
  //   console.log(arr.reverse());

  //Solution 2
  let list = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    list.push(arr[i]);
  }
  console.log(list);
}

reverseList([]);
reverseList([1, 2, 3]);
reverseList([5, 6, 4]);
reverseList([0, 2, 9]);

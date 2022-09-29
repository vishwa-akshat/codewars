// https://www.codewars.com/kata/5813d19765d81c592200001a/train/javascript

function dontGiveMeFive(start, end) {
  let count = 0;

  for (let i = start; i <= end; i++) {
    if (i.toString().indexOf("5") > -1) continue;
    count++;
  }
  console.log(count);
}

dontGiveMeFive(1, 9);
dontGiveMeFive(4, 17);

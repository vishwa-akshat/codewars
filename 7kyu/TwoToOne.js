//https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/javascript

function longest(s1, s2) {
  let arr = [...s1, ...s2];
  console.log(
    arr
      .filter((item, index) => arr.indexOf(item) === index)
      .sort()
      .join("")
  );
}

longest("aretheyhere", "yestheyarehere");
longest("loopingisfunbutdangerous", "lessdangerousthancoding");
longest("inmanylanguages", "theresapairoffunctions");

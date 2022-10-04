//https://www.codewars.com/kata/55b42574ff091733d900002f/train/javascript

function friend(friends) {
  const friendsArrayFirstFriendNameLength = friends[0].length;
  const result = friends.filter(
    (val) => val.length === friendsArrayFirstFriendNameLength
  );
  console.log(result);
}

friend(["Ryan", "Kieran", "Mark"]);
friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]);
friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]);
friend(["Love", "Your", "Face", "1"]);

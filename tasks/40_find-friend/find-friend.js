// naive solution

export function findFriend(arr) {
  let result = 0;
  arr.forEach((value, index) => {
    if (value === 'red') {
      let friends = 0;
      let tempIndexL = index - 1;
      while (index - tempIndexL < 3 && arr[tempIndexL--] === 'blue') {
        friends++;
      }
      let tempIndexR = index + 1;
      while (tempIndexR - index < 3 && arr[tempIndexR++] === 'blue') {
        friends++;
      }
      if (friends >= 2) {
        result++;
      }
    }
  });
  return result;
}

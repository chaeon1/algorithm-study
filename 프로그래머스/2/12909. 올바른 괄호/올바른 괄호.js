function solution(s) {
  let count = 0;
  for (let char of s) {
    if (char === '(') count++;
    else {
      if (count === 0) return false;
      count--;
    }
  }
  return count === 0;
}
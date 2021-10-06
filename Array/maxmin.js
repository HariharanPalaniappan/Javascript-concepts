let maxArr = [4, 1, 3, 6, 10, 34, 2];
let temp = 0;
for (let i = 0; i < maxArr.length; i++) {
  if (maxArr[i] >= maxArr[i + 1]) {
    temp = maxArr[i + 1];
    maxArr[i + 1] = maxArr[i];
    maxArr[i] = temp;
  }
}
console.log(maxArr[maxArr.length - 1]);

let minArr = [4, 1, 3, 6, 10, 34, 2];
let temp1 = 0;
for (let i = 0; i < minArr.length; i++) {
  if (minArr[i] <= minArr[i + 1]) {
    temp1 = minArr[i + 1];
    minArr[i + 1] = minArr[i];
    minArr[i] = temp1;
  }
}
console.log(minArr[minArr.length - 1]);

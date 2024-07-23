let arr = [0, 10, 20, 30];


let greaterThan10 = function (n) {
  return n > 10;
};

let firstIndex = function (n, i) {
  return i === 0;
};

let plusOne = function (n) {
  return n + 1;
};

let map = function (arr, fn) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      result.push(arr[i]);
    }
  }
  return result;
};

console.log(map(arr, greaterThan10));
console.log(map(arr, firstIndex));
console.log(map(arr, plusOne));

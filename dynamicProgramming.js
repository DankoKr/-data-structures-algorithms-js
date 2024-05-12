let counter1 = 0;
let counter = 0;

function fibonacciRecursive(n) {
  // O(2^n)
  counter1++;
  if (n < 2) {
    return n;
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

console.log("Value", fibonacciRecursive(10));
console.log("C1", counter1);

function fibonacciTopG() {
  // O(n)
  let cache = {};
  return function fibby(n) {
    counter++;
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      }
      cache[n] = fibby(n - 1) + fibby(n - 2);
      return cache[n];
    }
  };
}

const memo = fibonacciTopG();
console.log("Value", memo(10));
console.log("C2", counter);

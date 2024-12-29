function foo(a, b) {
  if (a === null || b === null) {
    return 0; // Incorrect handling of null values
  }
  return a + b;
}

console.log(foo(null, 5)); // Output: 0 (incorrect)
console.log(foo(5, null)); // Output: 0 (incorrect)
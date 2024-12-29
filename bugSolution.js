function foo(a, b) {
  if (a === null || b === null) {
    throw new Error('Null values are not allowed.'); // Throw an error for null values
  }
  return a + b;
}

// Or alternatively, handle null values with default values
function foo(a, b) {
  const aVal = a === null ? 0 : a; //Using a default value of 0 if a is null
  const bVal = b === null ? 0 : b; //Using a default value of 0 if b is null
  return aVal + bVal;
}

console.log(foo(5, 5)); // Output: 10
console.log(foo(null, 5)); // Throws an error
console.log(foo(5, null)); // Throws an error
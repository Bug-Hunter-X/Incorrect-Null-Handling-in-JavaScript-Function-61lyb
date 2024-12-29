# Incorrect Null Handling in JavaScript Function

This repository demonstrates an example of incorrect null handling in a JavaScript function and provides a corrected version.

## Description

The `foo` function attempts to add two numbers. However, its handling of null values is flawed. If either `a` or `b` is null, it returns 0, which might not be the desired behavior in all cases.

## Bug

The `bug.js` file shows the original function with the incorrect null handling. The function should ideally either throw an error if null is unexpected, or return a meaningful default value if null is possible. 

## Solution

The `bugSolution.js` file demonstrates a more robust approach by checking for null values before performing the addition and using a more descriptive error or default value, to provide more context and avoid potential unexpected behaviour.

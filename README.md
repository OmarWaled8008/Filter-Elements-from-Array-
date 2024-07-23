# Filter Function

This repository contains an implementation of a custom filtering function that mimics the behavior of JavaScript's `Array.filter` method without using the built-in `Array.filter` method.

## Overview

The `filter` function takes two parameters:

1. `arr` - an array of integers.
2. `fn` - a filtering function that determines whether each element in the array should be included in the result.

The `fn` function can accept one or two arguments:
- `arr[i]` - the element at index `i` in the array.
- `i` - the index of the element in the array.

The `filter` function returns a new array `filteredArr` containing only the elements for which the expression `fn(arr[i], i)` evaluates to a truthy value. A truthy value is a value where `Boolean(value)` returns `true`.

## Usage

### Example 1

```javascript
const arr = [0, 10, 20, 30];
const fn = function greaterThan10(n) { return n > 10; };
const newArray = filter(arr, fn); // [20, 30]
console.log(newArray); // Output: [20, 30]

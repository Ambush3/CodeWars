// Given an array of integers, find the one that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.

findOdd = (A) => A.reduce((a, c) => a ^ c, 0);

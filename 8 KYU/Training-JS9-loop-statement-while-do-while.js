// Coding in function padIt, function accept 2 parameters:

// str, it's a string representing the string to pad, we need pad some "*" at leftside or rightside of str
// n, it's a number, how many times to pad the string.

// You need to write a loop statement within the function that loops n times.Each time through the loop it will add one * to str, alternating on which side it is padded: the first time will add a * to the left side of str, the second time will add a * to the right side, and so on.

function padIt(str, n) {
    while (n > 0) {
      if (n % 2) {
        str = "*" + str
      } else {
        str = str + "*"
      }
      n--
    }
  return str
}

// or shorter version

padIt = (str, n) => '*'.repeat((n + 1) / 2) + str + '*'.repeat(n / 2) 
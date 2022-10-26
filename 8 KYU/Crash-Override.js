//  Your task is to create a function that, given a proper first and last name, will return the correct alias.
//  Two objects that return a one word name in response to the first letter of the first name and one for the first letter of the surname are already give
//  If the first character of either of the names given to the function is not a letter from A - Z, you should return "Your name must start with a letter from A - Z
//  Sometimes people might forget to capitalize the first letter of their name so your function should accommodate for these grammatical errors.

function aliasGen(x, y) {
    let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"
        , "N", "O", "P", "R", "S", "X", "T", "U", "V", "Y", "W", "Z", "Q"]
    x = x.toUpperCase().split("")[0]
    y = y.toUpperCase().split("")[0]
    let result = firstName[x] + " " + surname[y]
    if (alphabet.includes(x) && alphabet.includes(y)) {
        return result
    } else {
        return "Your name must start with a letter from A - Z."
    }
    console.log(result)
}
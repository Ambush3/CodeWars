function checkThreeAndTwo(array) {
    let obj = {};
    for (let el of array) {
        if (el in obj) {
            obj[el] += 1;
        } else {
            obj[el] = 1;
        }
    }
    let arr = Object.values(obj).filter(el => el < 2 || el > 3);
    return arr.length === 0;
}
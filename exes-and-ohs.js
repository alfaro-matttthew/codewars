function XO(str) {
    // first, clean up the code, make it all lowercase
    const lowerStr = str.toLowerCase();
    console.log(lowerStr);

    // make counters to count the Xs and the Os
    let countX = 0;
    let countO = 0;

    // iterate through each character in the string
    for (let char of lowerStr) {
        if (char === 'x') {
            countX++;
        } else if (char === 'o') {
            countO++;
        }
    }

    // returning countX === countO will return a boolean
    return countX === countO;
}

const test = XO('xXooO');

console.log(test);

// The BEST Practice: User RegEx
//
// function XO(str) {
//     let x = str.match(/x/gi);
//     let o = str.match(/o/gi);
//     return (x && x.length) === (o && o.length);
//   }
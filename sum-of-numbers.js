function getSum(a, b) {
    // if they equal, we just return the number
    aPos = Math.abs(a);
    bPos = Math.abs(b);

    if (aPos === bPos) {
        return aPos;

    // if aPos is smaller than b, we define the sum var as a, we then use the
    // for loop to determine if aPos is still smaller than b, if so, we add 1 
    // to the count and add the count to the sum. This essentially adds the
    // number that comes after the previously add number. The loop ends once 
    // count would be larger than b
    } else if ( aPos < bPos) {
        console.log("a: " + aPos + " is smaller than " + "b: " + bPos);

        let sum = aPos;

        for (let count = aPos; count <= bPos; count++) {
            sum += count;
        }
        console.log(sum);
        return sum;
    // this is simply the opposite of the previous
    } else {
        console.log("b: " + bPos + " is smaller than " + "a: " + aPos);

        let sum = bPos;

        for (let count = bPos; count <= aPos; count++) {
            sum += count;
        }
        console.log(sum);
        return sum;

    }
}

const findTheSum = getSum(0, 1);

console.log(findTheSum);
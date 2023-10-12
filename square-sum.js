// Complete the square sum function so that it squares each number passed into it and then sums the results together.

function squareSum(numbers) {

    if (!Array.isArray(numbers)) {
        console.log('Not an Array');
    }

    else {

        let sum = 0;

        for (let i = 0; i < numbers.length; i++) {
            if (typeof numbers[i] === "number") {
            sum += numbers[i] ** 2;
            }
            else {
                return "All inputs must be numbers"
            }
        }

        return sum;
    }

}

console.log(squareSum([1, 2]) + " = 5")

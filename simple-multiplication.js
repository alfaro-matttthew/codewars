// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

function simpleMultiplication(number) {
    if (typeof number !== 'number') {
        return "The input must be a number";
    }
    return number % 2 == 0 ? number * 8 : number * 9;
}

console.log(simpleMultiplication(1));

// Best Practice Notes: 
// First: I am really proud of the function that I wrote, it was clean and simple and matched with the second best
// best practice example.
// Second: The number one best practice example of solving the function is pretty close, but still just a little cleaner

// function simpleMultiplication(n) {
//     return n * (n % 2 ? 9 : 8);
// }
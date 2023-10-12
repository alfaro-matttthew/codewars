// Timmy & Sarah think they are in love, but they will only know once they pick a flower each. 
// If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

function loveFunc(flower1, flower2) {

    // first, test to make sure all inputs are numbers
    if (typeof flower1 !== 'number' || typeof flower2 !== 'number') {
        return "Both inputs must be a number";
    }

    // first try
    // const flowerOneValue = flower1 % 2 == 0 ? "even" : "odd";
    // const flowerTwoValue = flower2 % 2 == 0 ? "even" : "odd";

    //second try, removed the  tertiary function because the value is still retained
    const flowerOneValue = flower1 % 2 == 0;
    const flowerTwoValue = flower2 % 2 == 0;

    if (flowerOneValue !== flowerTwoValue) {
        return "They are in love!"
    } else {
        return "They are not in love..."
    }
}

console.log(loveFunc(1, 4));

// Best Practice: remember! the output is a boolean when you use a strict inequality operator

// function lovefunc(flower1, flower2){
//     return flower1 % 2 !== flower2 % 2;
//   }


// Another good example that if the two numbers are added together, they can be tested to see if they equal odd or even

// function lovefunc(flower1, flower2){
//     return (flower1 + flower2) % 2 === 1
//   }
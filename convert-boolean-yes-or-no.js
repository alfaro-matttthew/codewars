// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

function boolToWord(bool) {

    // first I test to make sure that the input is in fact a boolean
    if (typeof bool !== 'boolean') {
        return "This is not a boolean";
    }

     // after it passed the test, I use an if statement
    if (bool === true) {
        return "Yes";
    } else {
        return "No";
    }
}

// Best Practice Notes: Wow....completely forgot about tertiary functions

// function boolToWord( bool ){
//     return bool ? 'Yes':'No';
//   }

console.log(boolToWord(false));
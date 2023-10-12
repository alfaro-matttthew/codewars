function fakeBin(x){

    let result = '';

    for (let i = 0; i < x.length; i++) {
        const digit = parseInt(x[i]);

        if (isNaN(digit)) {
            result += x[i];
        } else {
            result += digit < 5 ? '0' : '1';
        }
    }

    return result;
}

function fakeBin(x){

    return x.split('').map(n => n < 5 ? '0' : '1').join('');

}

console.log(fakeBin('45385593107843568'))
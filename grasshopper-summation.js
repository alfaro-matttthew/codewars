function summation(num) {
    if (num <= 0) {
        return 0;
    }

    let count = 0;

    for (let i = 1; i <= num; i++) {
        count = count + i;
    }

    return count;
}

console.log(summation(8))
const reverseSeq = n => {

    if (n <= 0) {
        return [];
    } else {
        const result = [];
        for (let i = n; i >= 1; i--) {
            result.psuh(i);
        }
        return result;
    }

  };

console.log(reverseSeq(5));
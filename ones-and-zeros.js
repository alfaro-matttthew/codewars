const binaryArrayToNumber = arr => {
    console.log(arr);
    let jointString = arr.join('');
    return Number(jointString);
  };

  const example = binaryArrayToNumber([0,0,0,1]);

  console.log(example);
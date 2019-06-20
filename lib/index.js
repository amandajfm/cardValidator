function cardValidator(fullCardNumber) {
  fullCardNumber = fullCardNumber.replace(/[^0-9]/g, '');

  if (fullCardNumber.length !== 16) {
    return false;
  }  

  fullCardNumber = fullCardNumber.split('');

  if (fullCardNumber.every((elements) => elements === fullCardNumber[0])) {
    return false;
  }

  const eachCardNumber = fullCardNumber.map((value, index) => {
    if (index % 2 === 0) {
      return parseInt(value) * 2;
    } else {
      return parseInt(value);
    }
  });

  const doubleDigitsSums = eachCardNumber.map((value) => {
    if (value > 9) {
      return (parseInt(value) % 10) + 1;
    } else {
      return parseInt(value);
    }
  });

  const numbersSum = doubleDigitsSums.reduce((acc, val) => acc + val);
  
  if (numbersSum % 10 === 0) {
    return true;
  } else {
    return false;
  }
}

module.exports.cardValidator = cardValidator;

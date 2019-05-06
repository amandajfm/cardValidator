function cardValidator (fullCardNumber) {

  fullCardNumber = fullCardNumber.replace(/[^0-9]/g, '');

  if (fullCardNumber.length !== 16) {

    return false;

  }

  const repeatedNumbers = ['0000000000000000', '11111111111', '22222222222', '33333333333', '44444444444', '55555555555', '66666666666',
    '77777777777', '88888888888', '99999999999'];
  if (repeatedNumbers.indexOf(fullCardNumber) !== -1) {

    return false;

  }

  fullCardNumber = fullCardNumber.split('');

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

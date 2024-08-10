module.exports = function toReadable (number) {

  const numberInWord = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine"
  };

  const tenthsInWord = {
    0: "ten",
    1: "eleven",
    2: "twelve",
    3: "thirteen",
    4: "fourteen",
    5: "fifteen",
    6: "sixteen",
    7: "seventeen",
    8: "eighteen",
    9: "nineteen"
  }

  const decimalInWord = {
    1: "ten",
    2: "twenty",
    3: "thirty",
    4: "forty",
    5: "fifty",
    6: "sixty",
    7: "seventy",
    8: "eighty",
    9: "ninety"
  }

  const i = String(number).length;

  const firstNumber = Math.trunc(number / 100);

  const secondNumber = Math.trunc((number / 10) - (firstNumber * 10));

  const thirdNumber = number % 10;

  if (i == 1) {
    return numberInWord[thirdNumber];
  } else if (number >= 10 && number < 20) {
    return tenthsInWord[number % 10];
  } else if (i == 2 && number >= 20 && number % 10 == 0) {
    return decimalInWord[Math.trunc(number / 10)];
  } else if (i == 2 && number > 20 && number % 10 !== 0) {
    return `${decimalInWord[Math.trunc(number / 10) ]} ${numberInWord[number % 10]}`;
  } else if (i == 3 && number % 100 == 0) {
    return `${numberInWord[firstNumber]} hundred`;
  } else if (i == 3 && number % 100 !== 0 && number % 10 == 0) {
    return `${numberInWord[firstNumber]} hundred ${decimalInWord[secondNumber]}`;
  } else if (i == 3 && number % 100 !== 0 && number % 10 !== 0 && secondNumber > 1) {
    return `${numberInWord[firstNumber]} hundred ${decimalInWord[secondNumber]} ${numberInWord[thirdNumber]}`;
  } else if (i == 3 && number % 100 !== 0 && number % 10 !== 0 && secondNumber == 1) {
    return `${numberInWord[firstNumber]} hundred ${tenthsInWord[number % 10]}`;
  } else {
    return `${numberInWord[firstNumber]} hundred ${numberInWord[thirdNumber]}`
  }
}
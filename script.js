const isNumberPositive = (myNumber) => {
  if (myNumber > 0) {
    console.log("false");
  } else {
    console.log("true");
  }
};

isNumberPositive(-1);
isNumberPositive(10);

const convertDaysToAge = (myAgeInDays) => {
  const ageInYears = myAgeInDays / 365;
  return ageInYears;
};

console.log(convertDaysToAge(3650));
console.log(convertDaysToAge(6570));

const getLargestNumber = (number1, number2, number3) => {
  const calculateLargestNumber = Math.max(number1, number2, number3);
  return calculateLargestNumber;
};

console.log(getLargestNumber(2, 1, 4));
console.log(getLargestNumber(6, 2, 3));

const getLastName = (array) => {
  //    let lastName = getLastName.lastIndexOf();
  return array[array.length - 1];
};
console.log(getLastName(["Charlie", "Rob", "Andy"]));
console.log(getLastName(["Ash", "Stu"]));

//const allNumbersPositive = (array) => {
//    const calculateIfallArePositive = array.some(x => x < 0);
//    return calculateIfallArePositive;
//}
//allNumbersPositive([2,4,5]);
//allNumbersPositive([-5,4,6]);

const allNumbersPositive = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      return false;
    } else return true;
  }
}

console.log(allNumbersPositive([2, 4, 5]));

console.log(allNumbersPositive([-5, 4, 6]));

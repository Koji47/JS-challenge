const isNumberPositive = (myNumber) => {
if (myNumber > 0) {
  console.log("false");
} else {
  console.log("true");
}
}

isNumberPositive(-1);
isNumberPositive(10);

const convertDaysToAge = (myAgeInDays) => {
    const ageInYears = myAgeInDays / 365;
    return ageInYears;
}

console.log(convertDaysToAge(3650));
console.log(convertDaysToAge(6570));
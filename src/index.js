module.exports = function toReadable(number) {
    numberArr = Array.from(String(number), Number);

    console.log(number);
    const numbers0 = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    const numbers10 = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const numbers100 = [
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    const much = ["hundred", "thousand", "million", "billion"];

    if (numberArr.length === 1) {
        return `${numbers0[numberArr[0]]}`;
    } else if (number >= 10 && number <= 19) {
        return `${numbers10[numberArr[1]]}`;
    } else if (number >= 20 && number <= 99) {
        return `${numbers100[numberArr[0] - 2]}${
            numberArr[1] !== 0 ? ` ${numbers0[numberArr[1]]}` : ""
        }`;
    } else if (number >= 100 && number <= 999) {
        return `${numbers0[numberArr[0]]} ${much[0]}${
            numberArr[1] !== 0 && numberArr[1] !== 1
                ? ` ${numbers100[numberArr[1] - 2]}`
                : numberArr[1] !== 0 && numberArr[1] === 1 && numberArr[2] === 0
                ? ` ${numbers10[0]}`
                : numberArr[1] !== 0 && numberArr[1] === 1 && numberArr[2] !== 0
                ? ` ${numbers10[numberArr[2]]}`
                : numberArr[1] === 0
                ? ""
                : ""
        }${
            numberArr[1] === 1 || numberArr[2] === 0
                ? ""
                : ` ${numbers0[numberArr[2]]}`
        }`;
    } else if (number >= 1000 && number <= 99999) {
        if (number.length === 4) {
        }
    }
};

const getSumOfSequence = (number) => {
    let arrayOfNumbers = [];
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        arrayOfNumbers.push(i);
    }
    sum = arrayOfNumbers.at(0) + arrayOfNumbers.at(-1);
    console.log(arrayOfNumbers);
    console.log(sum);
};

getSumOfSequence(35);
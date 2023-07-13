// Необходимо посчитать сумму кубов всех чисел в массиве. 

const numbers = [10, 4, 100, -5, 54, 2];
// Для данного массива numbers сумма кубов должна равняться 1158411.

// Через цикл for

const funcToCubeFor = () => {
    let sumOfCubes = 0;
    for (let i = 0; i < numbers.length; i++) {
        sumOfCubes += numbers[i] ** 3;
    };

    return sumOfCubes;
};

const result1 = funcToCubeFor();
console.log(result1); // 1158411

// Через цикл for...of

const funcToCubeForOf = () => {
    let cube = 0;
    for (let number of numbers) {
        cube += number ** 3;
    };

    return cube;
};

const result2 = funcToCubeForOf();
console.log(result2); // 1158411

// Через метод forEach()

const funcToCubeForEach = () => {
    let sumOfCubes = 0;
    numbers.forEach( (number) => {
        sumOfCubes += number ** 3;
    });

    return sumOfCubes;
};

const result3 = funcToCubeForEach();
console.log(result3); // 1158411

// Через метод reduce()

const funcToCubeReduce = () => {
    let sumOfCubes = 0;
    numbers.reduce((acc, number) => {
        sumOfCubes += number ** 3;
    }, 0);

    return sumOfCubes;
};

const result4 = funcToCubeReduce();
console.log(result4); // 1158411

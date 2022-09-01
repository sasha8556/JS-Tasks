// Задание 1

// Напишите функцию, которая принимает три числовых аргумента: number, min, max.
// Функция проверяет, находится ли число number в диапазоне чисел от min до max.
// 1 вариант решения: с помощью логического И в условии.
// *2 вариант решения: с помощью логического ИЛИ в условии.

// let number = 0;
// let min = 0;
// let max = 0;

// function nums(num) {
//     if (number > min && number < max) {
//         console.log();
//     } else {
//         console.log();
//     }
// }

// function name(params) {
//     if (number >= max || number <= min) {
//         console.log();
//     } else {
//         console.log();
//     }
// }
const a = (number, min, max) => {
    let result = !(result < min || result > max) ? 'Да,число входит в диапазон' : 'Нет';

}
a(a, 2, 200);
a(99, -20, 20)


// Задание 2

// Есть объект с именами и заработными платами инженеров:
const engineers = {
        Den: 1000,
        Matt: 5000,
        Steve: 2000
    }
    // Вывести в консоль через шаблонные строки заработную плату всех работников в таком формате:
    // Заработная плата ххх составляет ххх рублей.

for (let key in engineers) {
    console.log(`Заработная плата ${key} составляет ${engineers[key]}`);
}



// console.log(`Заработная плата Den составляет ${engineers.Den}`);
// console.log(`Заработная плата Matt составляет ${engineers.Matt}`);
// console.log(`Заработная плата Steve составляет ${engineers.Steve}`);


// Задание 3

// Создать массив из 5 элементов.
// Используя цикл for, вывести каждый второй элемент массива в консоль.

// let age = [10, 15, 25, 33, 39, 45]
// for (let i = 0; i < age.length; i += 2) {
//     console.log(age[i]);
// }

// Задание 4

// Есть массив произвольных чисел:
// let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70]

// Вывести в консоль значения всех элементов массива и соответствующие им индексы в таком виде:
// Индексу 0 соответствует число 42
// Индексу 1 соответствует число 65
// и т.д.

// let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70]

// let i = 0;
// while (i < numbers.length) {

//     console.log(`Индексу ${i} соответствует число ${numbers[i]}`);
//     i++
// }


// Задание 5

// Дан массив объектов, например:

let questions = [{
        question: "What's the currency of the USA?",
        choices: ["US dollar", "Ruble", "Horses", "Gold"],
        corAnswer: 0
    },
    {
        question: "Where was the American Declaration of Independence signed?",
        choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
        corAnswer: 0
    }
];
// Добавить в каждый объект дополнительное поле usersAnswer со значением null.
// Решение должно работать для массива любой длины.

questions.forEach((element) => {
    element.usersAnswer = null;
});



// Задание 6

// Есть массив произвольных чисел:
let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70]

// 1) Посчитать и вывести в консоль сумму элементов в массиве.

// Подсказка: в задачах такого типа нужно заранее предусмотреть переменную (например, sum) и записать в нее начальное значение (в случае с суммой - ноль). Затем уже описать цикл, в котором эта сумма будет считаться (в каждой итерации цикла к ней будет прибавляться следующий элемент массива).
let sum = 0;
const getSum = (numbers) => {

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];

    }
    return sum;

}
console.log(getSum(numbers));



// 2) Посчитать и вывести в консоль сумму четных элементов в массиве.

for (let i = 0; i < numbers.length; i++) {

    if (numbers[i] % 2 == 0) {
        sum += numbers[i];
    }
}
console.log(sum);

// 3) Найти и вывести в консоль максимальное число массива.

// Подсказка: как и в случае с суммой, здесь сначала нужно объявить переменную (например, max), записать в нее первый элемент массива, а затем уже в цикле искать максимальное значение.


let maxNum = 42;
let min;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < min) {
        min = numbers[i];

    } else {
        maxNum = numbers[i];

    }

}
console.log(maxNum);

// 4) Определить и вывести в консоль индекс максимального числа массива (или индексы, если число встречается более одного раза). Само максимальное число мы уже нашли в прошлой части задачи, повторно его искать не нужно.
let maxIndex = 0;
let maxIndex2 = 0;
let max = numbers[0];
let max2 = numbers[0];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
        maxIndex = i;
        max = numbers[i];

    } else if (numbers[i] = max) {
        maxIndex2 = i;
        max2 = numbers[i];

    }

}
console.log(maxIndex, maxIndex2);

// Задание 7

// Определить массив 
let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0]

// Создать новый массив из элементов массива arr, но в новом должны содержаться только положительные элементы.
// Подсказка. Изначально нужно объявить пустой массив-хранилище (например, let newArr = []). Затем пройтись в цикле по массиву arr, и в каждой итерации, если элемент положительный, добавлять его в массив newArr.

let newArr = [];
arr.forEach()


console.log(newArr);
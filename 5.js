// Задание 1
// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.
// Вам понадобятся методы строк.

const ucFirst = (str) => {

    return str.charAt(0).toUpperCase(0) + str.slice(1);
}
console.log(ucFirst('sasha'));


// Задание 2
// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'badWord' или 'XXX', а иначе false.
// Функция должна быть нечувствительна к регистру.

// const checkSpam = (str) => {
//     let lowerStr = str.lowerCase();
//     return lowerStr.includes('badWord') || lowerStr.includes('XXX')

// }
// console.log(.includes('badWord'));

// Задание 3
// Написать функцию, которой на вход подается строка, на выход она дает символы наоборот (разворачивает строку). Пример: «привет Женя» -> «янеЖ тевирп»
// Обратите внимание: метод reverse существует только у массивов.


const arr = (string) => {

    return string.split("").reverse().join("");
}
console.log(arr('привет Женя'));
// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.


function isEven(num) {
    return num % 2 === 0;
}

// Пример использования:
console.log(findLargest(5, 10, 3)); // 10
console.log(findLargest(-1, -5, -3)); // -1
console.log(findLargest(7, 7, 7)); // 7
console.log(findLargest(1, 20, 15)); // 20
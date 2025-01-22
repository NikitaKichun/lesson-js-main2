/*
Напишите функцию `doubleEachCharacter`, которая принимает строку и возвращает новую строку, где каждый символ из исходной строки повторяется дважды.

Входные данные:

- **`str`**: Строка, символы которой нужно удвоить.

Выходные данные:

- Новая строка с каждым символом, повторенным дважды.

Пример работы функции: `doubleEachCharacter('hello')` вернёт `'hheelllloo'`
*/

function findUniqueElements(array) {
    const uniqueElements = [];

    for (const element of array) {
        // Проверяем, есть ли элемент в уникальных элементах
        if (!includesElement(uniqueElements, element)) {
            uniqueElements.push(element);
        }
    }

    return uniqueElements;
}

function findCommonElements(array1, array2) {
    const commonElements = [];

    for (const element of array1) {
        // Проверяем, есть ли элемент в обоих массивах
        if (includesElement(array2, element) && !includesElement(commonElements, element)) {
            commonElements.push(element);
        }
    }

    return commonElements;
}

function doubleEachCharacter(str) {
    let doubledString = "";

    for (const char of str) {
        doubledString += char + char;
    }

    return doubledString;
}

/* Задание 7.
Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. 
Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
При выполнении задания необходимо учесть, что массив может содержать не только числа, 
но и, например, знаки, null и так далее. 
*/
console.log("Задание 7");
let arr7 = [0, 1, 3, "string", null, undefined, 2, "2", 4, 6, NaN, 11, 1, 0];
let evenCount = 0;
let oddCount = 0;

console.log(`Исходный массив:`);
console.log(arr7);

arr7.forEach((item, idx) => {
  if (typeof item === "number" && item !== 0 && !isNaN(item)) {
    item % 2 === 0 ? evenCount++ : oddCount++;
  } else if (item === 0) console.log(`Элемент равен: 0. Индекс: ${idx}`);
});

console.log(`Количество четных элементов: ${evenCount}`);
console.log(`Количество нечетных элементов: ${oddCount}`);

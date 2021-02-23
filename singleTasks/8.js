/*Задание 8.

Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».
Используйте шаблонные строки. */
let myMap = new Map([
  [1, "number"],
  ["str", "string"],
  [true, "bolean"],
  ["one", 1],
]);

let keys = myMap.keys();
for (item of myMap) {
  console.log(`Ключ - ${item[0]}, значение - ${item[1]}`);
}

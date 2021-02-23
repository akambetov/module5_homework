/* Задание 1.
    Напишите программу, которая работала бы следующим образом: в prompt вводится значение. 
    С помощью унарного плюса (арифметический оператор) необходимо преобразовать его в число, 
    затем проверить с помощью typeof, принадлежит ли оно к множеству Number.

    Если это число, то вывести в консоль чётное оно или нечётное.

    Если передано не число, выведите: «Упс, кажется, вы ошиблись».

    *NaN, хоть и относится к типу Number, числом не является. Добавьте отдельную проверку для этого значения.
*/

console.log("Задание 1.");
let userNumber = +prompt("Введите число: ");
if (typeof userNumber === "number" && !isNaN(userNumber)) {
  let isEven = userNumber % 2;
  switch (isEven) {
    case 0:
      console.log(userNumber + ": четное число");
      break;
    default:
      console.log(userNumber + ": нечетное число");
  }
} else console.log("Упс, кажется, вы ошиблись");

/* в цикле  */
// let userNumber = prompt("Введите число: ");
// while (userNumber) {
//   if (typeof +userNumber === "number" && !isNaN(+userNumber)) {
//     let isEven = userNumber % 2;
//     switch (isEven) {
//       case 0:
//         console.log(userNumber + ": четное число");
//         break;
//       default:
//         console.log(userNumber + ": нечетное число");
//     }
//   } else console.log("Упс, кажется, вы ошиблись");
//   userNumber = prompt("Введите число: ");
// }

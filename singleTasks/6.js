/*Задание 6.
Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль. 
Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. Проверить, все ли элементы в массиве одинаковые. 
*/
console.log("Задание 6");
const arrUnequal = [30, 7, 90, 172, 60];
const arrUnequal2 = [1, 1, 2];
const arrSame = [303, 303, 303, 303, 303];

function compare(arr) {
  let res;
  for (let i = 1; i < arr.length; i++) {
    let elem = arr[0];
    if (elem !== arr[i]) {
      res = false;
      break;
    } else {
      elem = arr[i];
      res = true;
    }
  }
  console.log(res);
}

console.log(`Массив с неодинаковыми элементами: ${arrUnequal}`);
compare(arrUnequal);
console.log(`Массив с неодинаковыми элементами: ${arrUnequal2}`);
compare(arrUnequal2);
console.log(`Массив с одинаковыми элементами: ${arrSame}`);
compare(arrSame);

// Задание №1
// Создайте объект в переменной programmer. Дайте объекту имя,
// фамилию, возраст, язык программирования и зарплату. Выведите каждое свойство объекта по очереди в консоль.

// ПИСАТЬ КОД ЗДЕСЬ
let programmer = {
  name: "Argen",
  surname: "Durusbekov",
  age: 17,
  languageProgrammer: "JavaScript",
  salary: 100000,
};

// ! Вариант - 1
console.log("Задание - 1:");
console.log("Решение -1:");
console.log(programmer.name);
console.log(programmer.surname);
console.log(programmer.age);
console.log(programmer.languageProgrammer);
console.log(programmer.salary);
// ! Вариант - 2
const { name, surname, age, languageProgrammer, salary } = programmer;
console.log("Решение -2:");
console.log(name);
console.log(surname);
console.log(age);
console.log(languageProgrammer);
console.log(salary);

// Задание №2
// Запросите у пользователя ввести два числа и верните ему сумму этих двух чисел.
// Если сумма больше 10 и в то же время меньше 20 то, умножьте на 5. Если же сумма больше 20 и меньше 50, то разделите на 3.
// Иначе прибавьте 10.
// Для решения используйте функции: prompt и parseInt или опертаор +.
// Ответ может быть и десятичным числом, и выведите это конечное число.
// Например:
// let firstNum = prompt("Введите первое число")
// let secondNum = prompt("Введите второе число")

// ПИСАТЬ КОД ЗДЕСЬ
let firstNum = prompt("Введите первое число");
let secondNum = prompt("Введите второе число");
let sum = +firstNum + +secondNum;
if (sum > 10 && sum < 20) {
  sum *= 5;
} else if (sum > 20 && sum < 50) {
  sum /= 3;
} else {
  sum += 10;
}
console.log("Задание - 2:");
console.log(sum);

// Задание №3
// Вам дан сложный вложенный список. Используя цикл выведите все элементы в виде ключ: значение
// Ввод:
// let aboutUs = [
//   ["name", "Makers"],
//   ["type", "Bootcamp"],
//   ["place", "Bishkek"],
//   ["languages", "JavaScript, Python"],
//   ["simply", "the best!"]
// ];

// Вывод:
// name: Makers
// type: Bootcamp
// place: Bishkek
// languages: JavaScript, Python
// simply: the best!

// ПИСАТЬ КОД ЗДЕСЬ
let aboutUs = [
  ["name", "Makers"],
  ["type", "Bootcamp"],
  ["place", "Bishkek"],
  ["languages", "JavaScript, Python"],
  ["simply", "the best!"],
];
console.log("Задание - 3:");
for (let [key, value] of aboutUs) {
  console.log(`${key}: ${value}`);
}

// Задание №4
// Есть объект users в котором перечислен
// возраст участников. Напишите код,
// который выведет суммарный возраст
// всех участников. Решите задачу через
// цикл for...in.
// let users = {
//   John: 28,
//   Mark: 30,
//   David: 25,
//   Richard: 42
// };

// ПИСАТЬ КОД ЗДЕСЬ
let users = {
  John: 28,
  Mark: 30,
  David: 25,
  Richard: 42,
};
let sumAge = 0;
for (let user in users) {
  sumAge += users[user];
}
console.log("Задание - 4:");
console.log(sumAge);

// Задание №5
// Напишите функцию removeElem(arr, element), которая принимает 2 аргумента.
// Первый аргумент- это массив.
// Второй аргумент- это элемент который нужно удалить из массива.
// Пример: let arr = [2, ‘hello’, true,  ‘world’,  5, ‘js’]
//     removeElem(arr,’world’)
// Ответ: [2, ‘hello’, true,  5, ‘js’]

// ПИСАТЬ КОД ЗДЕСЬ
let arr = [2, "hello", true, "world", 5, "js"];
function removeElem(arr, element) {
  return arr.filter((item) => item !== element);
}
console.log("Задание - 5:");
console.log(removeElem(arr, "world"));

// Задание №6
// Создайте функцию-замыкание, которая возвращает анонимную функцию и высчитывает сумму аргументов возвращаемой функции с аргументом главной функции, то есть нужно посчитать сумму аргументов родительской функции и дочерней функции.

// function foo(a) {
//Допишите ф-ю
// }
// Пример:
// const res = foo(3)(4);
// console.log(res); //7

// function foo(a) {
//Допишите ф-ю
//   }
// Пример:
//   const res = foo(3)(4);
//   console.log(res); //7

// ПИСАТЬ КОД ЗДЕСЬ
function foo(a) {
  return function (b) {
    return a + b;
  };
}
const res = foo(3)(4);
console.log("Задание - 6:");
console.log(res);

// Задание №7
// Дан лимит = 1000, напишите функцию, которая будет выводить в консоль удвоенное значение аргумента до тех пор, пока оно не достигнет лимита, и после этого вывести в консоль аргументы в обратном порядке

// Например:

// Ввод: functionLimit(50)
// Вывод:
// 50
// 100
// 200
// 400
// 800
// 800
// 400
// 200
// 100
// 50

// ПИСАТЬ КОД ЗДЕСЬ
function functionLimit(value2) {
  const limit = 1000;

  while (value2 <= limit) {
    console.log(value2);
    value2 *= 2;
  }

  while (value2 > 50) {
    value2 /= 2;
    console.log(value2);
  }
}
console.log("Задание - 7:");
functionLimit(50);

// Задание №8
// Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов.
// Используйте метод filter()

// ПИСАТЬ КОД ЗДЕСЬ
let strArr = ["apple", "banana", "pineapple", "orange", "kiwi"];
let strArrfiltr = strArr.filter(function (str) {
  return str.length > 5;
});
console.log("Задание - 8");
console.log(strArrfiltr);

// Задание №9
// Дан массив
// let task2 = [10, 25, 25, 15, 5, 10];
// Выведите в alert сумму элементов
// этого массива.
// Используйте метод .forEach()

// ПИСАТЬ КОД ЗДЕСЬ
let task2 = [10, 25, 25, 15, 5, 10];
let sum2 = 0;
task2.forEach(function (element) {
  sum2 += element;
});
alert(sum2);

// Задание №10
// 	Напишите функцию, определяющую
// максимальное количество повторяющихся
//  элементов в массиве.
// Массив для примера:
// let task5 = [4, 5, 5, 5, 3, 5, 2, 3, 1, 3, 4];

// ПИСАТЬ КОД ЗДЕСЬ
let task5 = [4, 5, 5, 5, 3, 5, 2, 3, 1, 3, 4];
function maxRepeatCount(arr) {
  let counts = {};

  for (let num of arr) {
    counts[num] = (counts[num] || 0) + 1;
  }

  return Math.max(...Object.values(counts));
}

console.log("Задание - 10:");
console.log(maxRepeatCount(task5));

// Задание №11
// Дан массив nums = [8,1,2,2,3]
// Напишите функцию, которая будет возвращать массив, в котором указано сколько есть чисел в массиве меньше, чем каждый элемент массива.
// Используйте метод map()
// Пример №1:
// Ввод: nums = [8,1,2,2,3]
// Вывод: [4,0,1,1,3]
// 4 элемента меньше чем 8
// 0 элементов меньше чем 1
// 1 элемент меньше чем 2
// 1 элемент меньше чем 2
// 3 элемента меньше чем 3

// Пример №2:
// Ввод: nums = [6,5,4,8]
// Вывод: [2,1,0,3]

// ПИСАТЬ КОД ЗДЕСЬ
let nums = [8, 1, 2, 2, 3];
const numberNums = (nums) =>
  nums.map((num) => nums.filter((n) => n < num).length);
let result = numberNums(nums);
console.log("Задание - 11:");
console.log(result);

// Задание №12
// Вам нужно поменять местами значения
// переменных при помощи деструктуризации.
// let a = 0;
// let b = 1;
// Пример результата:
// console.log(a, b); // 1, 0

// ПИСАТЬ КОД ЗДЕСЬ
let a = 0;
let b = 1;
[a, b] = [b, a];
console.log("Задание - 12:");
console.log(a, b);

// Задание №13
// Дан объект { size: { width: 100, height: 200 }, items: ["Cake", "Donut"], extra: true}.
// Деструктуризуйте все свойства и элементы данного объекта, включая вложенные объекты и массивы и выведите в консоли.

// ПИСАТЬ КОД ЗДЕСЬ
let obj = {
  size: { width: 100, height: 200 },
  items: ["Cake", "Donut"],
  extra: true,
};
const {
  size: { width, height },
  items: [c, d],
  extra,
} = obj;
console.log("Задание - 13:");
console.log(width);
console.log(height);
console.log(c);
console.log(d);
console.log(extra);

// Задание №14
// Необходимо создать объект, который будет
// представлять из себя лифт. У него
// должны быть методы:
// ● printFloor - печатает текущий этаж, на котором
// находится лифт
// ● upOneFloor - перемещает на один этаж вверх
// ● downOneFloor - перемещает на один этаж вниз
// ● toFloor - принимает целое числовое
// значение от 1 до 16 - переместиться на
// определенный этаж.
// Изначально лифт находится на первом этаже.
// Когда мы вызываем метод toFloor(),
// программа должна в консоли отобразить
// постепенное перемещение лифта на нужный этаж
// (только в этом методе).
// ● Лифт должен хранить текущий этаж, на котором он находится.
// ● Для наглядности, вызовите метод toFloor несколько раз в программе.
// ● Метод toFloor должен использовать методы oneFloorUp и oneFloorDown для
// перемещения по этажам, а также метод printFloor для вывода текущего этажа лифта.
// ● В здании 16 этажей, нельзя, чтобы лифт мог уехать ниже первого или выше 16-го этажа.

// ПИСАТЬ КОД ЗДЕСЬ
function exrtaLift() {
  this.currentFloor = 1;

  this.printFloor = function () {
    console.log(`Current floor: ${this.currentFloor}`);
  };

  this.upOneFloor = function () {
    if (this.currentFloor < 16) {
      this.currentFloor++;
      this.printFloor();
    } else {
      console.log("Error: Cannot go higher than the 16th floor.");
    }
  };

  this.downOneFloor = function () {
    if (this.currentFloor > 1) {
      this.currentFloor--;
      this.printFloor();
    } else {
      console.log("Error: Cannot go lower than the 1st floor.");
    }
  };

  this.toFloor = function (targetFloor) {
    if (targetFloor >= 1 && targetFloor <= 16) {
      while (this.currentFloor < targetFloor) {
        this.upOneFloor();
      }

      while (this.currentFloor > targetFloor) {
        this.downOneFloor();
      }
    } else {
      console.log("Error: Netu takogo etaja");
    }
  };
}

const lift = new exrtaLift();

console.log("Задание - 14:");
lift.toFloor(8);
lift.toFloor(3);
lift.toFloor(16);

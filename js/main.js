//Вложенные функции

//240
/*
№1

Сделайте функцию test, параметрами принимающую 3 функции. 
Передайте в нее первым параметром функцию, возвращающую 1, вторым - функцию, возвращающую 2, третьим - функцию, возвращающую 3. 
Выведите в консоль сумму результатов функций.
*/
// function test(func1, func2, func3){
//     console.log(func1()+func2()+func3())
// }
// test(function(){return 1}, function(){return 2}, function(){return 3})

//241
/*
№1

Сделайте функцию test, параметрами принимающую 3 функции и возвращающую сумму результатов переданных функций.
*/

// function test(func1, func2, func3){
//     console.log(func1()+func2()+func3())
// }
// test(
//     function(){return 1;},
//     function(){return 2;},
//     function (){return 3;}
// )

/*
№2

Сделайте 3 функции, объявив их как Function Declaration и дав им имена func1, func2 и func3. 
Пусть первая функция возвращает 1, вторая - 2, а третья - 3. 
Передайте эти функции параметром в функцию test из предыдущей задачи.
*/
// function func1(){
//     return 1;
// }
// function func2(){
//     return 2;
// }
// function func3(){
//     return 3;
// }
// function test(func1, func2, func3){
//    console.log(func1()+func2()+func3())
// }
// test(func1, func2, func3)

/*
№3

Модифицируйте предыдущую задачу так, чтобы функции были объявлены как Function Expression с теми же именами.
*/
// let ret1 = function(){
//     return 1;
// }
// let ret2 = function(){
//     return 2;
// }
// let ret3 = function(){
//     return 3;
// }
// let test = function(func1, func2, func3){
//     console.log(func1()+func2()+func3())
// }
// test(ret1, ret2, ret3)


//242
/*
№1

Скопируйте код моей функции test. 
Вызовите эту функцию, передав ей параметром анонимную функцию, которая параметром будет принимать число и возвращать его куб.
*/
// test(function(num) {
// 	return Math.pow(num, 3);
// });

// function test(func) {
// 	console.log(func(3));
// }

/*
№2

Переделайте ваш код так, чтобы передаваемая функция была не анонимной, а была определена как Function Declaration с именем func.
*/
// test(function func(num){
// 	return Math.pow(num, 3);
// });

// function test(func) {
// 	console.log(func(3));
// }

/*
№3

Переделайте передаваемую функцию на Function Expression с тем же именем func.
*/
// let func = function(num){
// 	return Math.pow(num, 3);
// }
// test(func);
// function test(func) {
// 	console.log(func(3));
// }

/*
№4

Пусть передаваемая функция теперь принимает два параметра и возвращает их сумму. При вызове передаваемой функции внутри test передайте в передаваемую функцию число 2 и число 3. Выведите алертом результат.
*/
// function test(f1, f2){
//     console.log(f1()+f2())
// }
// test(
//     function(){return 2},
//     function(){return 3}
// )

//243
/*
№1

Пусть функция test первым параметром принимает число, а вторым и третьим параметрами - функции, также параметром принимающие числа. Пусть функция test возвращает сумму результатов переданных функций:

function test(num, func1, func2) {
	return func1(num) + func2(num);
}
Вызовите функцию test, первым параметром передав число 3, вторым параметром функцию, возводящую число в квадрат, а третьим - функцию, возводящую число в куб. Выведите результат работы в консоль.
*/
// function test(num, func1, func2) {
// 	return func1(num) + func2(num);
// }
// function f1(num){
// 	return Math.pow(num, 2)
// }
// function f2(num){
// 	return Math.pow(num, 3)
// }
// console.log(test(3, f1,  f2))

//244
/*
№1

Не подсматривая в мой код реализуйте такую же функцию test самостоятельно
*/
// function test(arr, func){
// 	for (let i=0; i<arr.length; i++){
// 		arr[i]=func(arr[i]);
// 	}
// 	return arr;
// }
// let result = test([1, 2, 3], function(num){
// 	return num*num;
// })
// console.log(result)

/*
№2

Вызовите созданную вами функцию test, передав ей параметром массив с числами. Сделайте так, чтобы функция вернула массив с кубами этих чисел.
*/
// function test(arr, func){
// 	for (let i=0; i<arr.length; i++){
// 		arr[i]=func(arr[i]);
// 	}
// 	return arr;
// }
// let result = test([1, 2, 3], function(num){
// 	return num*num*num;
// })
// console.log(result)

//245
/*
№1

Сделайте функцию func, которая параметрами будет принимать два числа, а возвращать сумму квадрата первого числа с кубом второго числа. 
Сделайте для этого вспомогательную функцию square, возводящую число в квадрат, и вспомогательную функцию cube, возводящую число в куб.
*/
// function func(num1, num2){
// 	function square(num){
// 		return num*num;
// 	}
// 	function cube(num){
// 		return num*num*num
// 	} 
// 	return square(num1) + cube(num2);
// }
// console.log(func(2,3))

//246
/*
№1

Сделайте функцию func1, которая будучи вызвана вот так: func1()(), вернет число 1. 
Сделайте аналогичную функцию func2, возвращающую число 2. Найдите сумму результатов этих функций.
*/
// function func1(){
// 	return function(){
// 		return 1
// 	}
// }
// function func2(){
// 	return function(){
// 		return 2
// 	}
// }
// console.log(func1()()+func2()())

//251
/*
№1

Сделайте функцию func, которая будучи вызвана вот так: func()()()()(), вернет '!'.
*/
// function func(){
// 	return function(){
// 		return function(){
// 			return function(){
// 				return function(){
// 					return '!'
// 				}
// 			}
// 		}
// 	}
// }
// console.log(func()()()()())

//252
/*
№1

Сделайте функцию func, которая будучи вызвана вот так: func(2)(3)(4), вернет сумму переданных в параметры чисел.
*/
// function func(num1){
// 	return function(num2){
// 		return function(num3){
// 			return num1+num2+num3;
// 		}
// 	}
// }
// console.log(func(2)(3)(4))

/*
№2

Сделайте функцию func, которая будучи вызвана вот так: func(2)(3)(4)(5)(), вернет массив переданных в параметры чисел.
*/
// function func(num1){
// 	let arr=[]
// 	arr.push(num1)
// 	return function(num2){
// 		arr.push(num2)
// 		return function(num3){
// 			arr.push(num3)
// 			return function(num4){
// 				arr.push(num4)
// 				return function(){
// 					return arr
// 				}
// 			}
// 		}
// 	}
// }
// console.log(func(2)(3)(4)(5)())


//253
/*
№1

Дан массив с числами. С помощью созданной нами функции each увеличьте каждый элемент в два раза.
*/
// function each(arr, callback){
// 	for(let i=0; i<arr.length; i++){
// 		arr[i]=callback(arr[i])
// 	}
// 	return arr
// }
// console.log(each([1, 2, 3], function (num){
// 	return num*2
// }))

/*
№2

Дан массив со строками. С помощью созданной нами функции each переверните символы каждой строки в обратном порядке.
*/
// function each(arr, callback) {
// 	let result = [];
// 	for (let elem of arr) {
// 		result.push(callback(elem));
// 	}
// 	return result;
// }
// console.log(each(['afc', 'bol', 'cok', 'ljjmod'], function(str){
// 	return str.split('').reverse().join('')
// }))

/*
 №3

Дан массив со строками. С помощью созданной нами функции each сделайте заглавным первый символ каждой строки.
*/
// function each(arr, callback) {
// 	let result = [];
// 	for (let elem of arr) {
// 		result.push(callback(elem));
// 	}
// 	return result;
// }
// console.log(each(['afc', 'bol', 'cok', 'ljjmod'], function(str){
// 	let s=str.split('').reverse().join('')
// 	return s.toUpperCase()[0]+s.substring(1)
// }))

//254
/*
№1

С помощью следующей функции возведите все элементы массива в куб:

function cube(num) {
	return num ** 3;
}
*/
// function cube(num) {
// 	return num ** 3;
// }
// function each(arr, callback){
// 	for(let i=0; i<arr.length; i++){
// 		arr[i]=callback(arr[i])
// 	}
// 	return arr
// }
// console.log(each([1, 2, 3, 4], cube))

//256
/*
№1

Дана следующая функция с коллбэком:

let result = filter([1, 2, 3, 4, 5], function(elem) {
	if (elem > 0) {
		return true;
	} else {
		return false;
	}
});
Упростите коллбэк через стрелочную функцию.
*/


// function filter(arr, callback) {
// 	let res = [];

// 	for (let elem of arr) {
// 		if ( callback(elem) === true ) {
// 			res.push(elem);
// 		}
// 	}
	
// 	return res;
// }
// let result = filter([1, 2, 3, 4, 5], elem => elem > 0);
// console.log(result)



//Замыкания
/*
№1

Самостоятельно, не подсматривая в мой код, реализуйте счетчик вызова функции, работающий на замыканиях.
*/
// function test(){
// 	let num=1
// 	return function(){
// 		console.log(num)
// 		num++
// 	}
// }
// let func=test()
// func()
// func()
// func()

/*
№2

Пусть функция в замыкании хранит число 10. Сделайте так, чтобы каждый вызов функции уменьшал это число на 1 и выводил в консоль уменьшенное число.
*/
// function test(){
// 	let num=10
// 	return function(){
// 		console.log(num)
// 		num--
// 	}
// }
// let func=test()
// func()
// func()
// func()

/*
№3

Модифицируйте предыдущую задачу так, чтобы отсчет доходил до 0, а затем каждый последующий вызов функции выводил в консоль сообщение о том, что отсчет окончен.
*/
// function test(){
// 	let num=10
// 	return function(){
// 		if(num>=0){
// 			console.log(num)
// 		    num--
// 		}else{
// 			console.log('отсчет окончен')
// 		}
// 	}
// }
// let func=test()
// func()
// func()
// func()
// func()
// func()
// func()
// func()
// func()
// func()
// func()
// func()
// func()

//269
/*
№1

Допишите следующий код так, чтобы его запуск алертом выводил '!':

(function() {
	// какой-то код
})()()();
*/
// (function() {
// 	return function(){
// 		return function(){
// 			console.log('!')
// 		}
// 	}
// })()()();

/*
№2


Допишите следующий код так, чтобы его запуск выводил сумму переданных параметрами чисел:

(function() {
	// какой-то код
})(1)(2);
*/
// (function(num1) {
// 	let sum=0
// 	return function(num2){
// 		console.log(num1+num2)
// 	}
// })(1)(2);

/*
№3

Допишите следующий код так, чтобы его запуск выводил сумму переданных параметрами чисел:

(function() {
	// какой-то код
})(1)(2)(3);
*/
// (function(num1) {
// 	let sum=0
// 	return function(num2){
// 		return function(num3){
// 			console.log(num1+num2+num3)
// 		}
// 	}
// })(1)(2)(3);

//272
/*
№1

Не подсматривая в мой код, самостоятельно реализуйте такой же счетчик.
*/
// let result=(function(){
// 	let num=1;
// 	return function(){
// 		console.log(num)
// 		num++;
// 	}
// }())
// result()
// result()

/*
№2

Модифицируйте работу счетчика так, чтобы он считал до 5, а потом отсчет начинался сначала.
*/
// let result=(function(){
// 	let num=1;
// 	return function(){
// 		if(num==6){
// 			num=1;
// 		}else{
// 		    console.log(num)
// 		    num++;
// 		}
// 	}
// }())
// result()
// result()
// result()
// result()
// result()
// result()
// result()
// result()
// result()


//274
/*
№1

Дан массив:

let arr = [1, 2, 3, 4, 5];
С помощью рекурсии выведите элементы этого массива в консоль.
*/
// let func=(arr)=>{
// 	console.log(arr.shift())
// 	if(arr.length!=0) func(arr)
// }
// func([1,2,3])

//275
/*
№1

Дан массив:

let arr = [1, 2, 3, 4, 5];
С помощью рекурсии найдите сумму квадратов элементов этого массива.
*/
// let summ=0
// function func(arr) {
// 	summ+=arr.shift()**2;
	
// 	if (arr.length != 0) {
// 		func(arr);
// 	}
// 	return summ
// }

// console.log(func([1, 2, 3, 4, 5]));

//275
/*
№1

Дан массив:

let arr = [1, 2, 3, 4, 5];
С помощью рекурсии найдите сумму квадратов элементов этого массива.
*/
// function getSum(arr) {
// 	let sum = arr.shift()**2;
	
// 	if (arr.length !== 0) {
// 		sum += getSum(arr);
// 	}
	
// 	return sum;
// }

// console.log(getSum([1, 2, 3, 4, 5]));

//276
/*
№1

Дан многомерный объект произвольного уровня вложенности, например, такой:

{a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}}
С помощью рекурсии выведите все примитивные элементы этого объекта в консоль.
*/
// function func(ob){
// 	for(let key in ob){
// 		if(typeof(ob[key])=='object'){
// 			continue
// 		}else{
// 			console.log(ob[key])
// 		}
// 	}
// }
// func({a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}})

/*
№2

Дан многомерный массив произвольного уровня вложенности, например, такой:

[1, [2, 7, 8], [3, 4, [5, [6, 7]]]]
Напишите код, который развернет наш многомерный массив в одномерный. Для приведенного выше массива это будет выглядеть вот так:

[1, 2, 7, 8, 3, 4, 5, 6, 7]
*/

// let arrnew=[];
// function func(arr) {
// 	for (let elem of arr) {
// 		if (typeof elem == 'object') {
// 			func(elem);
// 		} else {
// 			arrnew.push(elem);
// 		}
// 	}
// 	return arrnew
// }
// console.log(func([1, [2, 7, 8], [3, 4, [5, [6, 7]]]]))

//278
/*
№1

Дан многомерный массив произвольного уровня вложенности, например, такой:

[1, [2, 7, 8], [3, 4], [5, [6, 7]]]
Возведите все элементы-числа этого массива в квадрат.
*/
// function func(arr){
// 	for (let i=0; i<arr.length; i++){
// 		if(typeof arr[i] == 'object'){
// 			func(arr[i])
// 		}else{
// 			arr[i]**=2
// 		}
// 	}
// 	return arr;
// }
// console.log(func([1, [2, 7, 8], [3, 4], [5, [6, 7]]]))


//Перебирающие методы
//279
/*
№1

Дан массив с числами. Используя метод map извлеките из каждого элемента массива квадратный корень и запишите результат в новый массив.
*/
// let arrnew=[2, 4, 9, 10].map((elem)=> Math.sqrt(elem))
// console.log(arrnew)

/*
№2

Дан массив со строками. Используя метод map в конец значению каждого элемента массива добавьте символ '!'.
*/
// console.log([2, 3, 5, 8].map((elem)=>elem+"!"))

/*
№3

Дан массив со строками. Используя метод map переверните символы каждой строки в обратном порядке.
*/
// console.log(["abc", "ert", "fgg"].map((elem)=>elem.split('').reverse().join('')))

/*
№4

Дан следующий массив:

let arr = ['123', '456', '789'];
Используя метод map преобразуйте этот массив в следующий:

let arr = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9]
];
*/
// let arr = ['123', '456', '789'];
// console.log(arr.map((elem)=>elem.split('').map((elem)=>Number(elem))))

/*
№5

Дан массив с числами. Используя метод map запишите в каждый элемент массива значение этого элемента, умноженное на его порядковый номер в массиве.
*/
// console.log([1, 6, 9].map((elem, index)=>elem*index))


//280
/*
№1

Дан массив с числами. Используя метод forEach найдите сумму квадратов элементов этого массива.
*/
// let sum=0;
// [1, 2, 3].forEach((elem)=>{
// 	sum+=elem**2
//      return sum; 
// })
// console.log(sum)

//281
/*
№1

Дан массив с числами. Оставьте в нем только положительные числа.
*/
// console.log([1, -1, 4, 6, -9, -7].filter(elem=>elem>=0))

/*
№2

Дан массив с числами. Оставьте в нем только отрицательные числа.
*/
// console.log([1, -1, 4, 6, -9, -7].filter(elem=>elem<=0))

/*
№3

Дан массив с числами. Оставьте в нем только числа, которые больше нуля, но меньше 10.
*/
// console.log([1, -1, 40, 6, -9, -7].filter(elem=>elem>0 && elem<10))

/*
№4

Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов.
*/
// console.log(['utgo', 'ufiufivvi', 'juvivbio', 'g', 'jvuob'].filter(elem=>elem.length>5))

/*
№5

Дан массив с числами. Оставьте в нем только те числа, произведение которых на их порядковый номер меньше 30.
*/
// console.log([1, 16, 3, 41, -7].filter((elem, index)=>(elem*index)<30))

/*
№6

Дан массив, в нем могут быть обычные элементы и подмассивы, например [1, 2, [3, 4], 5, [6, 7]]. Оставьте в нем только обычные элементы.
*/
// console.log([1, 2, [3, 4], 5, [6, 7]].filter(elem=>typeof elem !== 'object'))

//282
/*
№1

Дан массив с числами. Проверьте то, что все элементы в массиве больше нуля.
*/
// console.log([1, -1, 4, 6, -9, -7].every(elem=>elem>0))

/*
№2

Дан массив с числами. Проверьте то, что для всех элементов произведение их значений на их порядковый номер меньше 30.
*/
// console.log([1, 15, 4, 6, -9].every((elem, index)=>elem*index<30))

//283
/*
№1

Дан массив с числами. Проверьте то, что в массиве есть хотя бы одно число больше нуля.
*/
// console.log([1, 15, 4, -6, -9].some(elem=>elem>0))

/*
№2

Дан массив с числами. Проверьте то, что хотя бы для одного элемента произведение его значения на порядковый номер больше 30.
*/
// console.log([1, 15, 40, -6, -9].some((elem, index)=>elem*index>30))


//Оператор spread
//286
/*
№1

Дан массив:

let arr = [1, 2, 3, 4, 5];
Дана также функция:

function func(num1, num2, num3, num4, num5) {
	return num1 + num2 + num3 + num4 + num5;
}
Найдите с помощью приведенной функции сумму элементов массива.
*/
// let arr = [1, 2, 3, 4, 5];

// function func(num1, num2, num3, num4, num5) {
// 	return num1 + num2 + num3 + num4 + num5;
// }
// console.log(func(...arr))

//288
/*
№1

Дан массив с числами. Используя Math.min и spread выведите на экран минимальное значение массива.
*/
// let arr = [1, 2, 3, 4, 5]
// console.log(Math.min(...arr));


//Оператор rest
/*
№1

Напишите функцию, которая будет принимать параметрами произвольное количество чисел и возвращать их среднее арифметическое.
*/
// function func(...numb){
// 	let sum=0;
// 	let cout=0;
// 	for(let elem of numb){
// 		sum+=elem
// 		cout++
// 	}
// 	return sum/cout;
// }
// console.log(func(1, 2, 3, 4, 5, 10))


//Деструктуризация массивов
//296
/*
№1

В следующем коде части массива записываются в соответствующие переменные:

let arr = ['John', 'Smit', 'development', 'programmer', 2000];

let name       = arr[0];
let surname    = arr[1];
let department = arr[2];
let position   = arr[3];
let salary     = arr[4];
Переделайте этот код через деструктуризацию согласно изученной теории.
*/
// let arr = ['John', 'Smit', 'development', 'programmer', 2000];
// let [name, surname, department, position, salary]=arr;

//297
/*
№1

В следующем коде части массива записываются в соответствующие переменные:

function func() {
	return ['John', 'Smit', 'development', 'programmer', 2000];
}

let arr = func();

let name       = arr[0];
let surname    = arr[1];
let department = arr[2];
let position   = arr[3];
let salary     = arr[4];
Переделайте этот код через деструктуризацию согласно изученной теории.
*/
// function func() {
// 	return ['John', 'Smit', 'development', 'programmer', 2000];
// }

// let [name, surname, department, position, salary] = func();

//298
/*
№1

В следующем коде части массива записываются в соответствующие переменные:

let arr = ['John', 'Smit', 'development', 'programmer', 2000];

let department = arr[2];
let position   = arr[3];
Переделайте этот код через деструктуризацию согласно изученной теории.
*/
// let arr = ['John', 'Smit', 'development', 'programmer', 2000];
// let [, , department, position,]=arr;

//300
/*
№1

В следующем коде части массива записываются в соответствующие переменные:

let arr = ['John', 'Smit', 'development', 'programmer', 2000];

let name    = arr[0];
let surname = arr[1];

let info = arr.slice(2); // все элементы со второго до конца массива
Переделайте этот код через деструктуризацию согласно изученной теории.
*/
// let arr = ['John', 'Smit', 'development', 'programmer', 2000];
// let [name, surname, ...info]=arr;

//301
/*
№1

В следующем коде части массива записываются в соответствующие переменные:

let arr = ['John', 'Smit', 'development', 'programmer'];

let name       = arr[0];
let surname    = arr[1];
let department = arr[2];

let position;
if (arr[3] !== undefined) {
	position = arr[3];
} else {
	position = 'trainee';
}
Переделайте этот код через деструктуризацию согласно изученной теории.
*/
// let arr = ['John', 'Smit', 'development', 'programmer'];
// let [name, surname, department, position='trainee']=arr;

//304
/*
№1

В следующем коде части объекта записываются в соответствующие переменные:

let options = {
	color: 'red',
	width:  400,
	height: 500,
};

let color  = options.color;
let width  = options.width;
let height = options.height;
Переделайте этот код через деструктуризацию согласно изученной теории.
// */
// let options = {
// 	color: 'red',
// 	width:  400,
// 	height: 500,
// };
// let {color, width, height} = options;

//305
/*
№1

В следующем коде части объекта записываются в соответствующие переменные:

let options = {
	color: 'red',
	width:  400,
	height: 500,
};

let c = options.color;
let w = options.width;
let h = options.height;
Переделайте этот код через деструктуризацию согласно изученной теории.
*/
// let options = {
// 	color: 'red',
// 	width:  400,
// 	height: 500,
// };
// let {color: c, width: w, height: h}=options;

//306
/*
№1

В следующем коде части объекта записываются в соответствующие переменные:

let options = {
	width:  400,
	height: 500,
};

let color;
if (options.color !== undefined) {
	color = options.color;
} else {
	color = 'black';
}

let width  = options.width;
let height = options.height;
Переделайте этот код через деструктуризацию согласно изученной теории.
*/
// let options = {
// 	width:  400,
// 	height: 500,
// };
// let {color = 'black', width, height}=options;

//307
/*
№1

В следующем коде части объекта записываются в соответствующие переменные:

let options = {
	width:  400,
	height: 500,
};

let с;
if (options.с !== undefined) {
	с = options.color;
} else {
	с = 'black';
}

let w = options.width;
let h = options.height;
Переделайте этот код через деструктуризацию согласно изученной теории.
*/
// let options = {
// 	width:  400,
// 	height: 500,
// };
// let {color: c = 'black', width: w, height: h}=options;

//309
/*
№1

Переделайте следующий код через деструктуризацию согласно изученной теории:

function func(employee) {
	let name       = employee[0];
	let surname    = employee[1];
	let department = employee[2];
	let position   = employee[3];
	let salary     = employee[4];
}

func( ['John', 'Smit', 'development', 'programmer', 2000] );
*/
// function func([name, surname, department, position, salary]) {
// 	console.log(name);
// 	console.log(surname);
// 	console.log(department);
// 	console.log(position);
// 	console.log(salary);
// }

// func( ['John', 'Smit', 'development', 'programmer', 2000] );

/*
№2

Переделайте следующий код через деструктуризацию согласно изученной теории:

function func(employee) {
	let name     = employee[0];
	let surname  = employee[1];
	let info     = employee[2];
}

func( ['John', 'Smit', 'development', 'programmer', 2000] );
*/
// function func([name, surname, info, ...rest]) {
// 	console.log(name)
// 	console.log(surname)
// 	console.log(info)
// 	console.log(...rest)
// }

// func( ['John', 'Smit', 'development', 'programmer', 2000] );

/*
№3

Переделайте следующий код через деструктуризацию согласно изученной теории:

function func(employee) {
	let name       = employee[0];
	let surname    = employee[1];
	let department = employee[2];
	
	let position;
	if (arr[3] !== undefined) {
		position = arr[3];
	} else {
		position = 'джуниор';
	}
}

func( ['John', 'Smit', 'development'] );
*/
// function func([name, surname, department, position = 'джуниор']) {
// 	console.log(name);
// 	console.log(surname);
// 	console.log(department);
// 	console.log(position);
// }

// func( ['John', 'Smit', 'development'] );

/*
№4

Переделайте следующий код через деструктуризацию согласно изученной теории:

function func(department, employee, hired) {
	let name     = employee[0];
	let surname  = employee[1];
	
	let year  = hired[0];
	let month = hired[1];
	let day   = hired[2];
}

func( 'development', ['John', 'Smit'], [2018, 12, 31] );
*/
// function func(department, employee, hired) {
// 	let [name, surname]=employee;
// 	console.log(name);
// 	console.log(surname);
// 	let [year, month, day]=hired;
// 	console.log(year);
// 	console.log(month);
// 	console.log(day);
// }

// func( 'development', ['John', 'Smit'], [2018, 12, 31] );

//310
/*
№1

Переделайте следующий код через деструктуризацию согласно изученной теории:

function func(options) {
	let color  = options.color;
	let width  = options.width;
	let height = options.height;
}

func( {color: 'red', width: 400, height: 500} );
*/
// function func({color, width, height}) {
// 	console.log(color);
// 	console.log(width);
// 	console.log(height);
// }

// func( {color: 'red', width: 400, height: 500} );

/*
№2

Переделайте следующий код через деструктуризацию согласно изученной теории:

function func(options) {
	let width  = options.width;
	let height = options.height;
	
	let color;
	if (options.color !== undefined) {
		color = options.color;
	} else {
		color = 'black';
	}
}

func( {color: 'red', width: 400, height: 500} );
*/
// function func({color='black', width, height}) {
// 	console.log(color);
// 	console.log(width);
// 	console.log(height);
// }

// func( {color: 'red', width: 400, height: 500} );

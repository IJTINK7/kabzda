import React from 'react';

export const ReactTS = () => {
	//11:22 - Димыч рассказывает про использование типов в TypeScript
	//let a = 12;
	// Переменной a неявно присвоен тип number
	//a = 254;
	// a = "Hello"; //Выдаст ошибку Type 'string' is not assignable to type 'number'.
	//Потому компилятор что неявно переменной a был назначен тип number
	//console.log(a) // 254

	// 22:25
	// let a; Переменной a неявно присвоен тип any
	// a = 12;
	// console.log(a) //12
	// a = "Hi"
	// console.log(a)// "Hi"
	// a= true;
	// console.log(a) // true

	// 23:30 - Явное присвоение типа данных к переменной
	// let a: number; // Переменной a явно присвоен тип number
	// a = 12;
	// console.log(a) //12
	// a = "Hi"
	// console.log(a)// TS2322: Type 'string' is not assignable to type 'number'.
	// a = true;
	// console.log(a) // TS2322: Type 'boolean' is not assignable to type 'number'.

	// 14:00 Если присвоить пустой объект переменной - TypeScript ругатся не будет
	// let b = {};
	// b = 12;
	// b = "Hi"
	// console.log(b) // "Hi"

	// 14:30 А от если изначально объект не пустой - то полезут проблемы
	// let c = {name: "Roma"};
	// c = 12; // TS2322: Type 'number' is not assignable to type '{ name: string; }'.
	// c = "Hi" // Type 'string' is not assignable to type '{ name: string; }'
	// console.log(c) // В консоли будет "Hi", но проект сляжет из-за любой из ошибок выше

	// 14:45 Переприсвоить вместо заполненного объекта пустой тоже нельзя, так как ему нужны свойства.
	// let d = {name: "Roma"};
	// d = {} // TS2741: Property 'name' is missing in type '{}' but required in type '{ name: string; }'.

	// 15:07 - переприсвоить с таким же внутренним содержанием - ок
	// let e = {name: "Roma"};
	// e = {name: "Alex"};
	// console.log(e.name) // "Alex"

	// 15:27 - ругается из-за разного содержания
	// let f = {name: "Roma", age: 28};
	// f = {name: "Alex"}; // TS2741: Property 'age' is missing in type '{ name: string; }' but required in type '{ name: string; age: number; }'.
	// console.log(f.name) // "Alex", но проект слёг

	// 15:48 - Не даёт ошибиться в написании ключей в объектах (Объект в объекте)
	// let g = {
	// 	name: "Roma",
	// 	age: 28,
	// 	myAddress: {
	// 		country: "Belarus",
	// 		city: "Minsk"
	// 	}
	// }

	// console.log(g.myAddres.city) // TS2551: Property 'myAddres' does not exist on type
	// '{ name: string; age: number; myAddress: { country: string; city: string; }; }'. Did you mean 'myAddress'?


	// 19:15 Распаковывание массивов и объектов - помогает пролагать путь к элементам внутри
	// после нажатия на . после ключа объекта или [0]. - элемента массива
	// let h = [
	// 	{
	// 		name: "Roma",
	// 		age: 28,
	// 		myAddress: {
	// 			country: "Belarus",
	// 			city: "Minsk"
	// 		}
	// 	},
	// 	{
	// 		name: "Alex",
	// 		age: 29,
	// 		myAddress: {
	// 			country: "Lithuania",
	// 			city: "Vilnius"
	// 		}
	// 	}
	// ]
	// console.log(h[0].name) // "Roma"
	// console.log(h[1].myAddress.country) // "Lithuania"

	// 25:50 Типизация массива
	// 2 способа:
	// let i: Array<number>;
	// или
	// let i: number[]; - по-взрослому;

	// let i: number[]// ;
	// i = [1,2,3,4,5];
	// console.log(i) // [1,2,3,4,5]
	// i = [];
	// console.log(i) // []
	// i = [2,8,34587,8969,223,76];
	// console.log(i) // [2,8,34587,8969,223,76]
	// i = 10;
	// console.log(i) // Type 'number' is not assignable to type 'number[]'
	// i = ["Hi","Ho","He"]
	// console.log(i) // TS2322: Type 'string' is not assignable to type 'number'. - так как не массив чисел


	// let i: boolean[]// ;
	// i = [1,2,3]; //TS2322: Type 'number' is not assignable to type 'boolean'.
	// console.log(i)
	// i = [true, false, false] // Всё ок
	// console.log(i)


	// 27:50  - несколько типов данных в массиве
	// let i: Array<boolean | string> | number [] // ;
	// i = [1,2,3]; // Всё ок
	// console.log(i)
	// i = [true, "Hi", false] // Всё ок
	// console.log(i)
	// i = [12, "Hi", 23] // Ошибка, т.к. не массив булевых значений или строк, а также не массив чисел
	// console.log(i)
	return (
		<div>
			"Hello"
		</div>
	);
};

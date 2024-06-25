//Musketeers
//Write a program that:

//Creates an array named musketeers containing values "Athos", "Porthos" and "Aramis".
//Shows each array element using a for loop.
//Adds the "D'Artagnan" value to the array.
//Shows each array element using the forEach() method.
//Remove poor Aramis.
//Shows each array element using a for-of loop.

let arr = ['Athos','Porthos','Aramis']
for(let i = 0; i< arr.length; i++){
	console.log(arr[i])
}
arr.push("D'Artagnan")
arr.forEach(arr => console.log(arr))
arr.splice(2,1)
for(const names of arr){
	console.log(arr)
}

//Write a program that creates the following array, then calculates and shows the sum of its values (42 in that case).

const values = [3, 11, 7, 2, 9, 10];

values.reduce((acc,c) => acc +c, 0)

//Write a program that creates the following array, then calculates and shows the array's maximum value.

const values = [3, 11, 7, 2, 9, 10];

function newArr(n1,n2,n3,n4,n5){
VM1172:4 
	let arr = [n1,n2,n3,n4,n5]
	arr.sort((a,b) => a-b)
	return arr.pop()
}

//Write a program that asks the user for a word until the user types "stop". The program then shows each of these words, except "stop"

function yuppers(array){
	let arr = []
	for(let i = 0; i < word.length; i++){
		if(word.toLowerCase() != 'stop'){
			arr.push(arr)
		}else{
			console.log(arr)
		}
	}
}

function yuppers(word){
	let arr = []
	for(let i = 0; i < arr.length; i++){
		arr.push(arr)
		console.log(arr)
	}
}
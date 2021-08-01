// concepts of arrays

var fruits=["apple","mango","banana","grapes","papaya","oranges"];
console.log(fruits[0]);
//apple
console.log(fruits[6]); 
//undefined because array does not contain 7 elements
console.log(fruits.length);
//6
fruits.push("pomegranate");
console.log(fruits);
//push adds anew element at the end of the array
fruits.pop();
console.log(fruits);
//pop removes the last element in the array
fruits.unshift("pomegranate");
console.log(fruits);    
//unshift adds a new element at the beginning of the array
fruits.shift();
console.log(fruits);
//shift removes the first element of the array
fruits.splice(4,0,"litchi");
console.log(fruits);    
//splice is used to add a new element at index 4 without deleting any element
fruits.splice(4,1);
console.log(fruits);
//splice is used to delete one element at index 4
fruits.splice(4,2);
console.log(fruits);
//splice is used to delete two elements starting from index four, including index 4
fruits.reverse();
console.log(fruits);
//reverse is used to reverse the order of elemts present in the array
var vegetables=["onion","potato","spinach"];
var eatables=fruits.concat(vegetables);
console.log(eatables);
//concat takes arrays and concatanates them to form a single array
var eatables=vegetables.concat(fruits);
console.log(eatables);
//reverses the order of concatanation of two arrays
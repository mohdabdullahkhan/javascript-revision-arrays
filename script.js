// concepts of arrays

// var fruits=["apple","mango","banana","grapes","papaya","oranges"];
// console.log(fruits[0]);
// //apple
// console.log(fruits[6]); 
// //undefined because array does not contain 7 elements
// console.log(fruits.length);
// //6
// fruits.push("pomegranate");
// console.log(fruits);
// //push adds anew element at the end of the array
// fruits.pop();
// console.log(fruits);
// //pop removes the last element in the array
// fruits.unshift("pomegranate");
// console.log(fruits);    
// //unshift adds a new element at the beginning of the array
// fruits.shift();
// console.log(fruits);
// //shift removes the first element of the array
// fruits.splice(4,0,"litchi");
// console.log(fruits);    
// //splice is used to add a new element at index 4 without deleting any element
// fruits.splice(4,1);
// console.log(fruits);
// //splice is used to delete one element at index 4
// fruits.splice(4,2);
// console.log(fruits);
// //splice is used to delete two elements starting from index four, including index 4
// fruits.reverse();
// console.log(fruits);
// //reverse is used to reverse the order of elemts present in the array
// var vegetables=["onion","potato","spinach"];
// var eatables=fruits.concat(vegetables);
// console.log(eatables);
// //concat takes arrays and concatanates them to form a single array
// var eatables=vegetables.concat(fruits);
// console.log(eatables);
// //reverses the order of concatanation of two arrays

// let book = ["maths","bio","chemistry","arts"];
// console.log(book);
// let book1= new Array("maths","physics","chemistry","arts");
// console.log(book1);
// book[1]="english";
// console.log(book);
// book.length=0;
// console.log(book);


// var fruits ={
//     mango: 'yellow',
//     guava: 'green',
//     banana: 'yellow',
//     grapes: {
//         type1: 'ripe',
//         type2: 'unripe',
//         type3:'wine material'
//     }
// }

// console.log(fruits);
// console.log(fruits.mango);
// console.log(fruits['guava']);

// // addition of a key value pair
// fruits.strawberry='red';
// console.log(fruits);


// // using dot notation and bracket notation
// console.log(fruits.grapes.type3);
// console.log(fruits['grapes']['type2']);

// // assigning object to different object
// var fruits2= fruits ;

// // adding a key value pair
// fruits2.apple='red';
// console.log(fruits);
// console.log(fruits2);

// // using function inside an object called method

// var video = {
//     name: 'access101 JS Tutorial',
//     play : function () {
//         console.log('Video Played')
//     },
//     timer: [0, 30, 70]
// }
// console.log(video.timer);
// video.play();
// console.log(video.play());
// a=video.play();
// console.log(a);
 


var subjects = {
    maths:'algebra',
    computerscience:'data structures',
    biology:["origin of species","genetics", "anatomy","opthalmology","community medicine", "surgery"],
    english:'literature'

}
var book=subjects.biology.length;
console.log(book);
for(i=0;i<=book;i++){
    console.log(subjects.biology[2]);
}
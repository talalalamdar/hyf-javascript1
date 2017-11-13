
var space = function () {
    console.log("");
    console.log("=======================================");
    console.log("");
}
space();
//Q 1,2,3

let myString = "hello,this,is,a,difficult,to,read,sentence"
console.log(myString);

space();
//Q 4

console.log(myString.length);

space();
//Q 5,6

myString = myString.replace(/\,/g, " ");
console.log(myString);

space();
//Q 7-1,2

let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
favoriteAnimals.push("turtle");
console.log(favoriteAnimals);

space();
//Q 7-3,4,5

favoriteAnimals.splice(1, 0, "meerkat");
console.log("My new array got the following value : [ 'blowfish', 'meerkat', 'capricorn', 'giraffe', 'turtle' ]");
console.log(favoriteAnimals);

space();
//Q 7-6

console.log("the array has a length of: " + favoriteAnimals.length);

space();
//Q 7-7,8

favoriteAnimals.splice(3, 1);
console.log(favoriteAnimals);

space();
//Q 7-9,10

let indexOfMeerkat = favoriteAnimals.indexOf("meerkat");
console.log("The item you are looking for is at index: " + indexOfMeerkat);


space();
               // THE END
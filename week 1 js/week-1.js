  var space = function(){
      console.log("");
      console.log("=======================================");
      console.log("");
  }   
space();
     //1

var ar = "Marhaba ", en = "Hello ", du = "Hoi ", tr = "Merhaba ", ru = "Breviet ", fr = "Salu ", sp = "Hola ";
console.log(ar, en, du, fr, ru, sp, tr);


space();
       //2

console.log("I'm awesome");


space();
      //3

var x = 10;
console.log("The value of my variable x will be: 10");
console.log(x);
var x = 5;
console.log("The value of my variable x will be: 5");
console.log(x);


space();   
      //4   

var y = "Hello";
console.log("The value of my string will be: Hello");
console.log(y);
var y = "Hoi";
console.log("The value of my string will be: Hoi");
console.log(y);


space();
       //5

let z = 7.25;
console.log(z);
let a = Math.round(z);
console.log(a);
if (a > z) {
  var d = a;
}
if (a < z) {
  var d = z;
}
console.log(d);


space();
        //6


let myArray = [];
console.log("the value of my array is empty");
console.log(myArray);
let favAnimals = ["cheetah", "monkey", "dog"];
console.log(favAnimals);
favAnimals.push("baby big");
console.log(favAnimals);


space();
       //7

let myString = "This,is,a,test";
console.log (myString);
console.log(myString.length);

space();
        //8

let x1 = true;
console.log(x1);
let x2 = "abc";
console.log(x2);
let x3 = 5;
console.log(x3);
let x4 = [1,2,3];
console.log(x4);
console.log("The value of my variable x1 is: "+ x1);
console.log("The value of my variable x2 is: "+ x2);
console.log("The value of my variable x3 is: "+ x3);
console.log("The value of my variable x4 is: "+ x4);
console.log("The type of my variable x1 is: boolean");
console.log("The type of my variable x2 is: string");
console.log("The type of my variable x3 is: number");
console.log("The type of my variable x4 is: object");
console.log(typeof x1);
console.log(typeof x2);
console.log(typeof x3);
console.log(typeof x4);
if (typeof x1 !== typeof x2 && typeof x1 !== typeof x3 && typeof x1 !== typeof x4 && typeof x2 !== typeof x3 && typeof x2 !== typeof x4 && typeof x3 !== typeof x4 ){
    console.log("NONE OF THE VARIABLES ARE THE SAME TYPE");
};

          
space();
        //9


console.log("The % operator subtracts 2 values and return what value remains after subtracting it so the value of r = r % 3, if r equal to 7, will be 1");
console.log("Examples:")
let r = 7;
console.log("r % 3 =", r % 3);
console.log("10 % 3 =", 10 % 3);
console.log("23 % 6 =", 23 % 6);
console.log("30 % 3 =", 30 % 3);


space();
         //10


console.log("yes you can use multiple data types in one array.");
if (6/0 === 10/0) {
   console.log("is 6/0 === 10/0  "+true);
   console.log("they are equal")
} else {
    console.log(false)
}



 space();
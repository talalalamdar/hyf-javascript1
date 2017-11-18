let space = function(){
    console.log("");
    console.log("=======================================");
    console.log("");
}   
space();
//Q1

let sum = function(a,b,c) {
    return a + b + c;
}
console.log(sum(4,6,8));
console.log(sum(941,36,234));


space();
//Q2

let colorCar = function(color) {
    return 'a ' + color +' car';
    
}
console.log(colorCar("red"));
console.log(colorCar('green'));



space();
//Q3

let object = {firstName: "Matt", lastName: "Doe", age: 26};
function id() {
    for (let prop in object) {
        return prop + ': ' + object[prop];
    }
}
id();


space();
//Q4

let vehicleType = function(color,code) {
    let type;
    if (code === 1) {
        type = "car";
    }else if (code === 2) {
        type = "motorbike";
    }else {
        console.log("the code is wrong")
    };
    console.log('a ' + color + ' ' + type)
    }
vehicleType('blue',2);
vehicleType('red',1);


space();
//Q5

console.log(3 === 3);


space();
//Q6

let vehicle = function(color,code,age) {
    if (age <= 4) {
        age = "new";
    }else if (age >= 5) {
        age = "old";
    }
    if (code === 1) {
        code = "car";
    }else if (code === 2) {
        code = "motorbike";
    }
   console.log('a ' + color + ' ' + age + " " + code);
};
vehicle("blue",2,1);
vehicle("red",1,5);



space();
//Q7 

var vehicles = ['cars', 'motorbikes', 'caravans', 'motors'];
console.log(vehicles.join(" "))

space();
//Q8
console.log(vehicles[2]);


space();
 //Q9 
 

 let newVehicle = function(color,code,age) {
    if (age <= 2) {
        age = "new";
    }else {
        age = "old";
    }
    if (code === 1) {
        code = vehicles[0];
    }else if (code === 2) {
        code = vehicles[1];
    }else if (code === 3) {
        code = vehicles[2];
    }else if (code === 4) {
        code = vehicles[3];
    }else {
        console.log("the code is wrong");
    }
   console.log( color + ' ' + age + " " + code);
}
newVehicle("green",3,1);
newVehicle("brown",1,5);



space();
//Q10

function advertisement() {
    let lastItem = vehicles.pop();   
    for (let i = 0;i < vehicles.length; i++) {
        console.log("Amazing Joe's Garage, we service " + vehicles.join(", ") + " and " + u) ;
        break;
    }
}
advertisement();



space();
//Q11

vehicles.push("bikes");
vehicles.push("trucks");
vehicles.push("vans")
advertisement();


space();
//Q12

let emptyObject = {};
console.log(emptyObject);

space();
//Q13

let teachers = [ {name: "Philip ,Ivona"}, {name: "Jim"}, {name:  "Unmesh"}, {name: "Frank"} ] ;
function teachersList() {
    for (var i = 0; i < teachers.length; i++) {
        console.log(teachers[i])
    }
}
teachersList();

space();
//Q14

teachers[0].language = "Html and Css";
teachers[1].language = "JavaScript"
teachers[2].language = "Command Line"
teachers[3].language = "Debugging"
teachersList();


space();
//Q15

function foo(a){
    bar();
}
function bar() {
    console.log("Hello, I am bar");
}
foo(bar);


space();
//Q16

let x = [1,2,3];
let y = [1,2,3];
let z = y;
console.log(x == y);
console.log(x === y);
console.log(z == x);
console.log(z == y);


space();
//Q17

let o1 = { name: 'bar' };
let o2 = { name: 'bar' };
let o3 = o2;
console.log(o2 === o3);
o2.name = 'nar';
console.log(o2 === o3);
console.log(o1 === o3);
console.log(o3 === o2)


space();
//Q18

let t = 42;
console.log(typeof t);
console.log(typeof typeof t);  


space();

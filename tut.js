// to display the content like cout of cpp
console.log("hello faizan")

// variable intialization

var a = 10;
var b = "this is fazi";
// variable dispaly
console.log(a);
// string variable displayy
console.log(b);

var num1 = 8;
var num2 = 4;

// arthamatic operations  using string catenation 
console.log("num1 =" + (num1));
console.log("num2 =" + (num2));
console.log(" num1 + num2 = " + (num1 + num2));
console.log(" num1 - num2 = " + (num1 - num2));
console.log(" num1 * num2 = " + (num1 * num2));
console.log(" num1 / num2 = " + (num1 / num2));
// post & pre increment and decrement 
console.log("the value of num1++ is : " + (num1++));
console.log("the value of ++num1 is : " + (++num1));
console.log("the value of num1-- is : " + (num1--));
console.log("the value of --num1 is : " + (--num1));

// strings 

// we can write string in single as well as double quotes 
var name = 'faizan';
var uni = "University of Gujrart";

// bactics to combine string like fill in the blanks 

var temp = `${name} is a boy and studying Computer science in ${uni}`;
console.log(temp);

// length of string 

var len = name.length;  // .length is a function
console.log(`the length of string is ${len}`);
// other method to display
console.log("the length of string is " + (len));

// find the index of substring or word in a string 

var str = "faizan"
// indexOf represent the first occurence
var pos = str.indexOf('a');
console.log(pos);
// lastindexOf represent the last occurence 
pos = str.lastIndexOf('a');
console.log(pos);

// make substring from a string 

var str5 = "this is faizan ali i am writting the javascript code. ";

// we can use slice function which take staring and last index it take neg value too 

var sub = str5.slice(2, 15);
console.log(sub);

// we can use substring function which take staring and last index 
sub = str5.substring(2, 20);
console.log(sub);

// we can use substr function which take staring index and length how much you want string 

sub = str5.substr(2, 25);
console.log(sub);

// replaced the string 
var str6 = "this is faizan ali i am writting the javascript code. ";

console.log(str6);

// .replace is buit in function its take 1st argument to search and 2nd to replace  
var replaceed = str6.replace("faizan", "sufyan");
console.log(replaceed);

//  upper and lowercase 

console.log("UPPER CASE STRING : " + str6.toUpperCase());
console.log("lower case string : " + str6.toLowerCase());

// combile two string 

var s1 = "faizan";
var s2 = " ali";
var c = s1 + s2;
console.log("combibe two strings : " + c);

// if_else conditions 

// let is same as var but its scope is limited and var is global 
let age = 19;

if (age > 18) {

    console.log(`your age is ${age} so you can drink energy drink`);
}
else if (age == 50) {

    console.log(`pani pi bas `);
}
else {

    console.log("your age is less than 18 so drink water");

}

//  we can use string and integers in switch case 

let cup = "tuesday";

switch (cup) {

    case "monday":
        console.log("cup are 1");
        break;
    case "tuesday":
        console.log("cup are 2");
        break;
    case "friday":
        console.log("cup are 3");
        break;
    case "thursday":
        console.log("cup are 4");
        break;
    default:
        console.log("cups are none of these");
        break;
}


// object 

let employ = {

    name: "faizan",
    salary: 10000,
    loc: "rasul",
}
// display  all
console.log(employ);
// for speccific call
console.log(employ.loc);

// array

let arr = [111, 2, 32, 4, "faizan", "sufyan"];
// print whole arr
console.log(arr);
// print specific index
console.log(arr[4]);

// sort the array 
let arr1 = [111, 2, 32, 4,];

arr1 = arr1.sort();
//  it will push at last index of array
arr1.push("push it");
console.log(arr1);

// functions

function naming(name) {

    console.log(`${name} is a good boy`);
}

let neme1 = "ali1";
let neme2 = "ali2";
let neme3 = "ali3";
let neme4 = "ali4";

naming(neme1);
naming(neme2);
naming(neme3);
naming(neme4);

function sum(a, b, c) {

    let d = a + b + c;
    return d;

}



let s = sum(1, 2, 3);
console.log(s);


// msg comes on the top of page you have to handle it first
//  alert("this is 1st my js page")

// take input  as page reload 

// it return the input which we write and after comma is a default argue 

//  let na =prompt("what is your name ?","GUEST");
//  console.log(na);

// confirm is same as alert but it return true or false 

// let club = confirm(" ARE YOU 18+ ?");

// if(club){

//     console.log("congrats you can enter");
// }
// else{

//     console.log("you cann't enter");
// }

let name1 = ["faizan ", "Ali", "sufyan", "tipu", "fazi"];
//print array without loop 

// console.log(name1);

for (let i = 0; i < name1.length; i++) {

    console.log("THE NAME IS : " + name1[i]);

}

console.log("the other loop is for of ");

// element is variable type and the name1 is array 

for (element of name1) {

    console.log("THE NAME IS : " + element);
}


let numm1 = 0;

while (numm1 < 5) {

    console.log(numm1);
    numm1++;
}
console.log("the other loop")
numm1 = 0;

do {
    console.log(numm1);
    numm1++;
} while (numm1 < 5);


function greet(nameee) {

    console.log("hello good morning " + nameee);
}

setTimeout(greet, 2000, "Faizan");
// var timeOut = setTimeout(greet,2000,"Faizan");
// console.log(timeOut);

// jason is use to transfer the data from the one place to another place in form of string 

let objj1 = {

    n: "fazi",
    s: 10000,
    ms: " good morning",
}

// convert it into the string 
let myst = JSON.stringify(objj1);
console.log(myst);

// convert back the string  into the object
// create new variable than use json 
let newobj = JSON.parse(myst);
console.log(newobj);

// function store in variable does not need name 

const eee = function (a, b) {
    return a * b;
}
let x = eee(5, 2);
console.log(x);

// FOR INDEFINATE ARGUMENTS USE ...  
function rest_sum(...argue) {

    let sum = 0;

    for (let element of argue) {
        sum += element;
    }
console.log( "THE TOTAL SUM IS : "+sum );
}
rest_sum(4,5,1,10,80);

// use of this

const person ={
    na:"fazi",
    salaryyy:5000,
    rish:  "aaa",
    valu:function valuesss(){

        return this;
    }
};
console.log(person.valu());

// call apply 

const personn ={
    na:"fazi",
    salaryyy:5000,
    rish:  "aaa",
    valu:function valuesss(){

        return this;
    }
};

// using call functions 

const personn1 ={
    na:"cazi",
    salaryyy:4000,
    rish:  "bbb",
    valu1:function valuesss(){

        return this;
    },
    valu:function valuesss(a,b,c){

        console.log(this.na+" name "+a+" salary "+b+" exp "+c);
    }
}

const p1={

    na:"pazi",
    salaryyy:54000,
    rish:  "bbbc",

}
//using other object call 
console.log(personn1.valu1.call(p1));

// call with other object with arguments 

console.log(personn1.valu.call(p1,"ali",5000,"nnn"));

//apply is same as call but differ is apply take arguments as string 

//classs ---->OOP<--------------

class Car {

    // strict mode 
    "use strict";
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
    display(){

        console.log("the name of car is "+this.name+" the model is "+this.year);
    }
  }

const myCar1 = new Car("Ford", 2014);
myCar1.display();


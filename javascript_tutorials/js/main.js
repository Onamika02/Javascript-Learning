// const myNumber = 42;
// const myFloat = 42.01 ;
// const myString = "42.123abc";

// console.log(myFloat.toFixed(2));

// console.log(Number.parseFloat("4.237abc").toFixed(2).toString());

// console.log(Math.PI);
// console.log(Math.trunc(Math.PI));
// console.log(Math.round(Math.PI));
// console.log(Math.ceil(Math.PI));
// console.log(Math.round(Math.PI));
// console.log(Math.pow(5,2));
// console.log(Math.min(2, 0.5, 9));
// console.log(Math.max(2, 0.5, 9.2));
// console.log(Math.random());
// console.log(Math.random());
// console.log(Math.random());
// console.log(Math.random());
// console.log(Math.random());
// console.log(Math.floor(Math.random() * 10) + 1);
// console.log(Math.floor(Math.random() * 10) + 1);
// console.log(Math.floor(Math.random() * 10) + 1);
// console.log(Math.floor(Math.random() * 10) + 1);
// console.log(Math.floor(Math.random() * 10) + 1);
// console.log(Math.floor(Math.random() * 10) + 1);

// //write code that will return as random letter from your name

// console.log("Onamika".charAt(Math.floor(Math.random() * 4)));
// console.log("Onamika".charAt(Math.floor(Math.random() * 4)));
// console.log("Onamika".charAt(Math.floor(Math.random() * 4)));
// console.log("Onamika".charAt(Math.floor(Math.random() * 4)));
// console.log("Onamika".charAt(Math.floor(Math.random() * 4)));

// let testScore = 42;
// let collegeStudent= true;
// let grade;

// if(testScore >=90){
//     grade ="A";
// }
// else if ( testScore >= 80){
//     grade ="B";
// }
// else if ( testScore >= 70){
//     grade ="C";
// }
// else if ( testScore >= 60){
//     grade ="D";
// }
// else{
//     if(collegeStudent){
//         grade ="U";
//     }
//     else{
//         grade ="F";
//     }
// }

// console.log(grade);

// switch (Math.floor(Math.random() * 3 + 1)){
//     case 1:
//         console.log(1);
//         break;

//     case 2:
//         console.log(2);
//         break;

//     case 3:
//         console.log(3);
//         break;

//     default:
//         console.log("No Match");
// }

// let soup = " Chicken soup";
// let isCustomerBanned = false;
// let soupAccess = isCustomerBanned
//   ? " Sorry, no soup for you"
//   : soup
//   ? `yes we have ${soup} today`
//   : " sorry, no soup today";

// console.log(soupAccess);

// let playerOne = "scissors";
// let computer = "rock";

// let result = playerOne === computer ? " Tie game!"
// :playerOne === "rock" && computer === "paper" ? "Computer Wins!"
// :playerOne === "paper" && computer === "scissors" ? "Computer Wins!"
// :playerOne === "scissors" && computer === "rock" ? "Computer Wins!"
// : " PlayerOne Wins!";

// console.log(result);

// alert(" hello world");
// let myBoolean = confirm("Ok === True\nCancel === False");
// console.log(myBoolean);

// let name = prompt("please enter your name");
// if (name) {
//     console.log(name.length);
//     console.log(name.trim().length);
//     console.log(name.trim());
// }else{
//     console.log("You didnt enter your name");
// }

// for(let i= 0; i<= 10;i++)
// {
//     console.log(i);
//     i++;
// }

// let myNumber = 0;
// while(myNumber< 50){
//     myNumber+=2;
//     console.log(myNumber);
// }

// let name = " Onamika";
// for(let i = 1 ; i<= name.length ; i++)
// {
//     console.log(name.charAt(i));
// }

// let name = "onamika";
// let counter = 0;
// let myLetter;

// while (counter <= 3) {
//   myLetter = name[counter];
//   console.log(myLetter);
//   if (counter === 1) {
//     counter += 2;
//     continue;
//   }
//   if (myLetter === "i") break;
//   counter++;
// }
// console.log(counter);


// function sum(num1, num2)
// {
//     if(num2 === undefined)
//     {
//         return num1+num1;
//     }
//     return num1+ num2;
// }

// console.log(sum(2,4));


// function getUserNameFromEmail(email){
//     return email.slice(0,email.indexOf("@"));
// }

// console.log(getUserNameFromEmail("user@github.com"));

//arrays

// const myArray = [];

// //add elements to an array

// myArray[0] = "Dave";
// myArray[1] = 1001;
// myArray[2] = false;

// console.log(myArray);

// const firstItem = myArray.shift();

// console.log(firstItem);


// console.log(myArray.length);

// delete myArray[1]; //this removes the element but there is a empty space in the array
// console.log(myArray);

// myArray.splice(1,0,42);
// console.log(myArray);
// console.log(myArray[1]);

// const alpha = ["a", "b", "c", "d", "e","f"];

// let originalArray = [1, 2, 3, 4, 5];

// // slice() example
// let slicedArray = originalArray.slice(1, 4);
// console.log("Sliced Array:", slicedArray); // Output: [2, 3, 4]
// console.log("Original Array (after slice):", originalArray); // Output: [1, 2, 3, 4, 5]

// // splice() example
// let splicedArray = originalArray.splice(1, 2);
// console.log("Spliced Array:", splicedArray); // Output: [2, 3]
// console.log("Original Array (after splice):", originalArray); // Output: [1, 6, 7, 4, 5]


// const alpha = ["a", "b", "c"];
// const beta = [1,2,3];

// const newString = alpha.join();

// const newArray = newString.split(",");

// console.log(newString);
// console.log(newArray);

// const concatArr = alpha.concat(beta);

// console.log(concatArr);


//spread operator , its just three dots

// const newArr = [...alpha,...beta];

// console.log(newArr);


//objects

// const myObj = {name : "Dave"};

// const anotherObj ={
//     alive : true,
//     hobbies : ["eat","sleep","code"],
//     beverages: {
//         morning:"coffee",
//         afternoon:"Iced Tea"
//     }
// };

// console.log(anotherObj.beverages.afternoon);

// const vehicle = {
//     wheels : 4,
//     engine : "vhroom"
// };

// delete vehicle.engine;

// console.log(vehicle.hasOwnProperty(engine));

// console.log(Object.values(vehicle));
// for(let job in vehicle)
// {
//     console.log(`On ${job}, it's ${vehicle[job]}!`);
// }

// const truck = Object.create(vehicle);
// truck.doors =2;
// console.log(truck); 
// console.log(truck.wheels);
// console.log(truck.engine());

// const car = Object.create(vehicle);
// car.doors = 4;
// car.engine = function() {
//     return "Whoosh";
// }

// console.log(car.engine());

// const band = {
//     vocal : "aaaaa",
//     guitar : "page",
//     bass : "john",
//     drums : "bohman"
// };

// const {guitar, bass, vocal, drums} = band;
// console.log(guitar);
// console.log(bass);
// console.log(vocal);
// console.log(drums);


// function sings({vocal}){
//     return `${vocal} sings!`;
// }

// console.log(sings(band));



// class pizza{
//     crust = "original";
//     #sauce = "traditional";
//     constructor(pizzaSize)
//     {
//         this.#size = pizzaSize;  
//     }

//     getCrust(){
//         return this.crust;
//     }

//     setCrust(pizzaCrust){
//         this.crust = pizzaCrust;
//     }

//     hereYouGo(){
//         console.log(`Here's Your ${crust} ${this.#sauce} sauce ${this.size} pizzas. `);    
//     }
// }

// const myPizza = new pizza("large");
// myPizza.hereYouGo();
// console.log(myPizza.crust);















// class SpecialtyPizza extends pizza{
//     constructor(pizzaSize){
//         super(pizzaSize);
//         this.type = "The Works";
//     }
//     slice(){
//         console.log(`Our ${this.type} ${this.size} pizza has 8 slices`);
//     }
// }

// const mySpeciality = new SpecialtyPizza("medium");
// mySpeciality.slice();

//     bake()
//     {
//         console.log(`Baking a ${this.size} ${this.crust} ${this.type} crust pizza`);
//     }
// }

// const myPizza = new pizza("pepperoni","medium");
// myPizza.pizzaCrust = "sausage" ;
// myPizza.bake();
// myPizza.setToppings("sausage");
// myPizza.setToppings("salami");
// console.log(myPizza.getToppings());


// function pizzaFactory(pizzaSize)
// {
//     const crust = "original";
//     const size = pizzaSize;
//     return {
//         bake: () => console.log(`Baking a ${size} ${crust} crust pizza`)
//     };
// }

// const myPizza = pizzaFactory("medium");
// myPizza.bake();

//json - javascript object notationv 

// const myObj = {
//     name: "Dave",
//     hobbies : ["eat","sleep","code"],
//     hello : function(){
//         console.log("hello!");
//     }
// };

// console.log(myObj);
// console.log(myObj.name);
// myObj.hello();
// console.log(typeof myObj);

// const sendJson = JSON.stringify(myObj);
// console.log(sendJson);

// const receiveJson = JSON.parse(sendJson);
// console.log(receiveJson);
// console.log(typeof receiveJson);

// "use strict";
// const variable = "Dacve";//reference error ( calling the variable without declaring the datatype)
// console.log(variable);

// const makeError = () => {
//     try{
//         const name = "Dave";
//         name = "Joe";
//     }catch(err){
//         console.error(err.stack);
//     }
// };

// //makeError();

// function customError(message){
//     this.message = message;
//     this.name = "customError";
//     this.stack = `${this.name}: ${this.message}`;
// }

// customError();


// const makeError = () => {
//     let i = 1;
//     while(i <= 3)
//         {
//             try{
//                 if(i % 2 !== 0){
//                     throw new Error("This is a odd number");
//                 }
//                 console.log("Even number!");
//             }
//             catch(err){
//                 console.error(err.stack);
//             }finally{
//                 console.log(".....finally");
//                 i++;
//             }
//         }
// };

// makeError();

// const view1 = document.getElementById("view1");
// console.log(view1);
// const view2 = document.querySelector("#view2");
// console.log(view2);
// view1.style.display = "flex";
// view2.style.display = "flex";

// const views = document.getElementsByClassName("view");
// console.log(views);
// const sameViews = document.querySelectorAll(".views");
// console.log(sameViews);

// const divs = view1.querySelectorAll("div");
// console.log(divs);
// const sameDivs = view1.getElementsByTagName("div");
// console.log(sameDivs);

// const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)");
// // console.log(evenDivs);

// for( let i = 0; i< evenDivs.length; i++)
// {
//     evenDivs[i].style.backgroundColor = "darkblue";
//     evenDivs[i].style.width = "200px";
//     evenDivs[i].style.height = "200px";
// }

// const navText = document.querySelector("nav Hi");
// console.log(navText);
// const navbar = document.querySelector("nav");
// navbar.innerHTML = `<h1>Hello</h1><p>This should shift right</p>`;
// console.log(navbar);
// navbar.style.justifyContent = "space-between";

// console.log(evenDivs[0]);
// console.log(evenDivs[0].parentElement);
// console.log(evenDivs[0].parentElement.children);

// Selecting elements
// const element = document.getElementById("myId");
// const elements = document.querySelectorAll(".myClass");

// // Modifying content
// element.textContent = "New text";
// element.innerHTML = "<strong>Bold text</strong>";

// // Changing styles
// element.style.color = "red";
// element.style.display = "none";

// // Adding/removing classes
// element.classList.add("active");
// element.classList.remove("hidden");
// element.classList.toggle("highlight");

// // Creating new elements
// const newDiv = document.createElement("div");
// newDiv.textContent = "Hello World";
// document.body.appendChild(newDiv);

const view = document.querySelector("#view3");
console.log(view);

//  Task 1

// var marks1 = +prompt("Enter Marks 1 :");
// var marks2 = +prompt("Enter Marks 2 :");
// var marks3 = +prompt("Enter Marks 3 :");
// var tMarks = +prompt("Enter Total Marks :");
// var obMarks = marks1 + marks2 + marks3;
// var per = (obMarks/tMarks)*100;
// if(per >= 80){
//     document.write("Marks 1 : " + marks1 + "<br>");
//     document.write("Marks 2 : " + marks2 + "<br>");
//     document.write("Marks 3 : " + marks3 + "<br>");
//     document.write("Obtained Marks : " + obMarks + "<br>");
//     document.write("Total Marks : " + tMarks + "<br>");
//     document.write("Percentage : " + per + "<br>");
//     document.write("Grade : A+" + "<br>");
//     document.write("Remarks : Excellent" + "<br>");
// }
// else if(per >= 70 && per < 80){
//     document.write("Marks 1 : " + marks1 + "<br>");
//     document.write("Marks 2 : " + marks2 + "<br>");
//     document.write("Marks 3 : " + marks3 + "<br>");
//     document.write("Obtained Marks : " + obMarks + "<br>");
//     document.write("Total Marks : " + tMarks + "<br>");
//     document.write("Percentage : " + per + "<br>");
//     document.write("Grade : A" + "<br>");
//     document.write("Remarks : Good" + "<br>");
// }
// else if(per >= 60 && per < 70){
//     document.write("Marks 1 : " + marks1 + "<br>");
//     document.write("Marks 2 : " + marks2 + "<br>");
//     document.write("Marks 3 : " + marks3 + "<br>");
//     document.write("Obtained Marks : " + obMarks + "<br>");
//     document.write("Total Marks : " + tMarks + "<br>");
//     document.write("Percentage : " + per + "<br>");
//     document.write("Grade : B" + "<br>");
//     document.write("Remarks : You need to improve" + "<br>");
// }
// else{
//     document.write("Marks 1 : " + marks1 + "<br>");
//     document.write("Marks 2 : " + marks2 + "<br>");
//     document.write("Marks 3 : " + marks3 + "<br>");
//     document.write("Obtained Marks : " + obMarks + "<br>");
//     document.write("Total Marks : " + tMarks + "<br>");
//     document.write("Percentage : " + per + "<br>");
//     document.write("Grade : F" + "<br>");
//     document.write("Remarks : Sorry, you are failed" + "<br>");
// }



//  Task 2


// var val = 6;
// var inp = +prompt("Enter number between 1 to 10");
// if(inp === val){
//     document.write("Bingo! Correct Answer");
// }
// else if(inp === (val-1) || inp === (val+1)){
//     document.write("Close enough to the correct answer")
// }
// else{
//     document.write("Wrong Answer");
// }



//  Task 3


// var temp = +prompt("Enter Temperature");
// if(temp > 40){
//     document.write("It is too hot outside.")
// }
// else if(temp > 30 && temp <= 40){
//     document.write("The Weather today is Normal.");
// }
// else if(temp > 20 && temp <= 30){
//     document.write("Today’s Weather is cool.");
// }
// else if(temp > 10 && temp <= 20){
//     document.write("OMG! Today’s weather is so Cool.");
// }



//  Task 4

// var inp1 = +prompt("Enter First Number");
// var inp2 = +prompt("Enter Second Number");
// var op = prompt("Select Operation (+,-,*,/,%)");
// var result;
// if(op === "+"){
//     result = inp1 + inp2;
// }
// else if(op === "-"){
//     result = inp1 - inp2;
// }
// else if(op === "*"){
//     result = inp1 * inp2;
// }
// else if(op === "/"){
//     result = inp1 / inp2;
// }
// else if(op === "%"){
//     result = inp1 % inp2;
// }
// else{
//     document.write("Select right operator");
// }
// document.write("Answer is : " + result);


// Task 5


// var cPass = "123456";
// var inpPass = prompt("Enter Password");
// if(inpPass === ""){
//     alert("Enter your password");
// }
// else if(inpPass === cPass){
//     alert("Correct! The password you entered matches the original password");
// }
// else{
//     alert("Incorrect password");
// }


// Task 6


// var array1 = [];
// var array2 = new Array();
// var array3 = [123,4564,215,2898];
// var array4 = ["Apple","Banana","Mango"];
// var array5 = [true,false,true];
// var array6 = [true,"apple",2123];
// var array7 = [];


// Task 7


// var a = ["Apple","Samsung","Motorola","Nokia","Sony","Haier"];
// document.write("<select><option>" + a[0] + "</option><option>"+ a[1] +"</option><option>" + a[2] + "</option><option>"+ a[3] +"</option><option>" + a[4] + "</option><option>"+ a[5] +"</option></select>");


// Task 8


// var num = +prompt("Enter a number to show its multiplcation table");
// var len = +prompt("Enter lenght of table");
// for(var i = 1; i <= len; i++){
//     document.write(num + " X " + i + " = " + (num*i) + "<br>");
// }


// Chapter 1

//  Task 1
// alert("Wellcome!");


//  Task 2
// alert("Error! Please enter a valid password.");


//  Task 3
// alert("Welcome to JS Land...\nHappy Coding!");


//  Task 4
// alert("Welcome to JS Land...");
// alert("Happy Coding!");

//  Chapter 2

//  Task 1
// var username;

//  Task 2
// var myName = "Shaikh Muhammad Khizar";

//  Task 3
// var message = "Hello World";
// alert(message);

//  Task 4
// var name1 = "Jhone Doe";
// var age = "15 years old";
// var msg = "Certified Mobile Application Development";
// alert(name1);
// alert(age);
// alert(msg);

// Task 5
// var a = "PIZZA"+"\n"+"PIZZ"+"\n"+"PIZ"+"\n"+"PI"+"\n"+"P";
// alert(a);

// Task 6
// var email = "shaikh.muhammad.khizar@gmail.com";
// alert("My email address is " + email);

// Task 7
// var book = "A smarter way to learn Javascript";
// alert("I am trying to learn from the Book " + book);

// Task 8
// document.write("Yah! I can write HTML content through Javascript");

// Task 9
// var symbol = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
// alert(symbol);

// Chapter 3

// Task 1
// var age = 20;
// alert("I am " + age + " years old");

// Task 2
// var count = 20;
// alert("You have visited this site " + count + " times")

// Task 3
// var birthYear = 2001;
// document.write("My birth year is "+birthYear+"<br>Data type of my declared variable is number")

// Task 4
// var vName = "John Doe";
// var pTitle = "T-shirt";
// var quantity = 5;
// document.write(vName + " ordered " + quantity + " " + pTitle + " on XYZ Clothing store");

// Chapter 4

// Task 1
// var a,b,c;

// Task 2

// Legal variable name
// var $address;
// var shoe_type;
// var backgroundColor;
// var name_1;
// var method;

// Illegal variable name
// var address%;
// var 12shoe_type;
// var background Color;
// var .name_1;
// var function;

// Task 3
// document.write("<h1>Rules for naming JS variables</h1><br>");
// document.write("<p>Variable names can only contain _________,__________,___________ and __________. For Example : $my_1stVariable<p>");
// document.write("<p>Variables must begin with a _________, _________, or ___________. For Example $name,_name or name<p>");
// document.write("<p>Variable names are case _____________<p>");
// document.write("<p>Variable names should not be JS ____________<p>");

// Chapter 5

// Task 1
// var num1 = +prompt("Enter First Number for addition:");
// var num2 = +prompt("Enter Second Number for addition:");
// var result = num1 + num2;
// document.write("Sum of " + num1 + " and " + num2 + " is " + result);

// Task 2

// Part 1
// var num1 = +prompt("Enter First Number for subtraction:");
// var num2 = +prompt("Enter Second Number for subtraction:");
// var result = num1 - num2;
// document.write("Subtraction of " + num2 + " from " + num1 + " is " + result);

// Part 2
// var num1 = +prompt("Enter First Number for multiplication:");
// var num2 = +prompt("Enter Second Number for multiplication:");
// var result = num1 * num2;
// document.write("Multiplication of " + num1 + " and " + num2 + " is " + result);

// Part 3
// var num1 = +prompt("Enter First Number for division:");
// var num2 = +prompt("Enter Second Number for division:");
// var result = (num1 / num2);
// document.write("Division of " + num1 + " by " + num2 + " is " + result.toFixed(2));

// Task 3
// var num;
// document.write("Value after variable declaration is " + num + "<br>");
// num = 5;
// document.write("Initial Value is " + num + "<br>");
// num++;
// document.write("Value after increment is " + num + "<br>");
// num = num + 7;
// document.write("Value after addition is " + num + "<br>");
// num--;
// document.write("Value after decrement is " + num + "<br>");
// num /= 3;
// document.write("The remainder is " + num + "<br>");

// Task 4
// var price = 600;
// document.write("Total cost to buy 5 tickets to a movie is " + (price*5) + "PKR");

// Task 5
// var num = +prompt("Enter number for table");
// document.write("Table of " + num + "<br>");
// for(var i = 1; i<=10; i++){
//     document.write(num + " X " + i + " = " + (num*i) + "<br>");
// }

// Task 6
// var celsius = 25;
// var fahr = (celsius*(9/5))+32;
// document.write(celsius + "<sup>o</sup>C is " + fahr + "<sup>o</sup>F<br>");
// var fahr = 70;
// var celsius = (fahr-32)*(5/9);
// document.write(fahr + "<sup>o</sup>C is " + celsius + "<sup>o</sup>F");
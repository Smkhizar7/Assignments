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

// Task 7
// var price1 = 650;
// var price2 = 980;
// var quantity1 = 12;
// var quantity2 = 9;
// var charges = 500;
// var total = (price1*quantity1)+(price2*quantity2)+charges;
// document.write("<h1>Shopping Cart</h1><br>");
// document.write("<p>Price of item 1 is "+price1+"</p>");
// document.write("<p>Quantity of item 1 is "+quantity1+"</p>");
// document.write("<p>Price of item 2 is "+price2+"</p>");
// document.write("<p>Quantity of item 2 is "+quantity2+"</p>");
// document.write("<p>Shipping Charges "+charges+"</p><br>");
// document.write("<p>Total cost of your order is "+total+"</p>");

// Task 8
// var totalMarks = 800;
// var obtainedMarks = 650;
// var percentage = (obtainedMarks/totalMarks)*100;
// document.write("<h1>Marks Sheet</h1><br>");
// document.write("<p>Total marks:"+totalMarks+"</p>");
// document.write("<p>Marks obtained:"+obtainedMarks+"</p>");
// document.write("<p>Percentage:"+percentage+"%</p>");

// Task 9
// document.write("<h1>Currency in PKR</h1><br>");
// document.write("Total Currency in PKR:"+((10*104.80)+(25*28)));

// Task 10
// var a = 8;
// a = ((a+5)*10)/2;
// document.write(a);

// Task 11
// var current_year = 2021;
// var birth_year = 2001;
// var age = current_year - birth_year;
// document.write("<h1>Age Calculator</h1><br>");
// document.write("Current Year: "+current_year+"</p>");
// document.write("<p>Birth Year: "+birth_year+"</p>");
// document.write("<p>Your Age is: "+age+"</p>");

// Task 12
// var radius = 5;
// var circumference = 2 * 3.142 * radius;
// var area = 3.142 * radius * radius;
// document.write("<h1>The Geometrizer</h1><br>");
// document.write("<p>Radius of a circle: "+radius+"</p>");
// document.write("<p>The circumference is: "+circumference+"</p>");
// document.write("<p>The area is: "+area+"</p>");

// Task 13
// var snack = "Popcorn";
// var age = 20;
// var maxAge = 80;
// var amount = 2;
// var totalAmount = (maxAge-age)*365*amount;
// document.write("<h1>The Lifetime Supply Calculator</h1><br>");
// document.write("<p>Favourite Snack: "+snack+"</p>");
// document.write("<p>Current age: "+age+"</p>");
// document.write("<p>Estimated Maximum Age: "+maxAge+"</p>");
// document.write("<p>Amount of snacks per day: "+amount+"</p>");
// document.write("<p>You will need " + totalAmount + " " + snack + " to last you until the ripe old age of " + maxAge + "</p>");

// Chapter 6-9

// Task 1
// var num = 10;
// document.write("Result:<br>");
// document.write("The value of a is: "+num+"<br>");
// document.write("----------------------------------<br><br>");
// document.write("The value of ++a is: "+(++num)+"<br>");
// document.write("Now the value of a is: "+(num)+"<br><br>");
// document.write("The value of a++ is: "+(num++)+"<br>");
// document.write("Now the value of a is: "+(num)+"<br><br>");
// document.write("The value of --a is: "+(--num)+"<br>");
// document.write("Now the value of a is: "+(num)+"<br><br>");
// document.write("The value of a-- is: "+(num--)+"<br>");
// document.write("Now the value of a is: "+(num)+"<br><br>");

// Task 2
// var a = 2, b = 1;
// document.write("Before process<br>");
// document.write("a is " + a + "<br>");
// document.write("b is " + b + "<br>");
// var result = --a - --b + ++b + b--;
// document.write("After process<br>");
// document.write("a is " + a + "<br>");
// document.write("b is " + b + "<br>");
// document.write("result of (--a - --b + ++b + b--) is " + result + "<br>");
// document.write("<ol>");
// document.write("<li>In first step --a will decrease the value of a = 2 by 1 then assign to 'a' which is then equal to 1</li>");
// document.write("<li>In second step --b will decrease the value of b = 1 by 1 then assign to 'b' which is then equal to 0 then subtract the value of '--b' from '--a' which is equal to 1 - 0 = 1</li>");
// document.write("<li>In third step ++b will increase the value of b = 0 by 1 then assign to 'b' which is then equal to 1 then add the value of '++b' to '--a - --b' which is equal to 1 + 1 = 2</li>");
// document.write("<li>In fourth step b-- will add the value of 'b' to '--a - --b + ++b' which is equal to 2 + 1 = 3 then decrease the value of b = 1 by 1 then assign to 'b' which is then equal to 0</li>");
// document.write("</ol>");

// Task 3
// var username = prompt("Enter your name:");
// alert("Welcome "+username);

// Task 5
// var txt = prompt("Enter number for multiplication table");
// var num = Number(txt);
// if(txt !== "" && txt !== null){
//     for(var i = 1; i<=10; i++){
//         document.write(num + " X " + i + " = " + (num*i) + "<br>");
//     }
// }
// else{
//     num = 5;
//     for(var i = 1; i<=10; i++){
//         document.write(num + " X " + i + " = " + (num*i) + "<br>");
//     }
// }

// Task 6
// var sub1 = prompt("Enter first subject name:");
// var sub2 = prompt("Enter second subject name:");
// var sub3 = prompt("Enter third subject name:");
// var totalMarksForEach = 100;
// var sub1_marks = +prompt("Enter first subject marks:");
// var sub2_marks = +prompt("Enter second subject marks:");
// var sub3_marks = +prompt("Enter third subject marks:");
// var obtainedMarks = sub1_marks + sub2_marks +sub3_marks;
// var totalMarks = 300;
// var percentage = (obtainedMarks/totalMarks)*100;
// document.write("<table border='2px'>");
// document.write("<tr>");
// document.write("<th>Subject</th>");
// document.write("<th>Total Marks</th>");
// document.write("<th>Obtained Marks</th>");
// document.write("<th>Percentage</th>");
// document.write("</tr>");
// document.write("<tr>");
// document.write("<td>"+sub1+"</td>");
// document.write("<td>"+totalMarksForEach+"</td>");
// document.write("<td>"+sub1_marks+"</td>");
// document.write("<td>"+((sub1_marks/totalMarksForEach)*100).toFixed(2)+"%</td>");
// document.write("</tr>");
// document.write("<tr>");
// document.write("<td>"+sub2+"</td>");
// document.write("<td>"+totalMarksForEach+"</td>");
// document.write("<td>"+sub2_marks+"</td>");
// document.write("<td>"+((sub2_marks/totalMarksForEach)*100).toFixed(2)+"%</td>");
// document.write("</tr>");
// document.write("<tr>");
// document.write("<td>"+sub3+"</td>");
// document.write("<td>"+totalMarksForEach+"</td>");
// document.write("<td>"+sub3_marks+"</td>");
// document.write("<td>"+((sub3_marks/totalMarksForEach)*100).toFixed(2)+"%</td>");
// document.write("</tr>");
// document.write("<tr>");
// document.write("<th></th>");
// document.write("<th>"+totalMarks+"</th>");
// document.write("<th>"+obtainedMarks+"</th>");
// document.write("<th>"+percentage.toFixed(2)+"%</th>");
// document.write("</tr>");
// document.write("</table>");

// Chapter 9-11

// Task 1
// var city = prompt("Enter City Name:");
// if(city.toLowerCase() === "karachi"){
//     document.write("Welcome to city of lights");
// }

// Task 2
// var gender = prompt("Enter your gender:");
// if(gender.toLowerCase() === "male"){
//     document.write("Good Morning Sir");
// }
// else if(gender.toLowerCase() === "female"){
//     document.write("Good Morning Ma'am");
// }
// else{
//     document.write("Invalid Input!");
// }

// Task 3
// var color = prompt("Enter signal color");
// if(color.toLowerCase() === "red"){
//     alert("Must Stop");
// }
// else if(color.toLowerCase() === "yellow"){
//     alert("Ready to move");
// }
// else if(color.toLowerCase() === "green"){
//     alert("Move now")
// }

// Task 4
// var fuel = +prompt("Enter remaining fuel in litres");
// if(fuel < 0.25){
//     alert("Please refill the fuel in your car");
// }

// Task 5
// Part a
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// Part b
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// Part c
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// Part d
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// Part e
// if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
// Part f
// if("car" < "cat"){
// alert("car is smaller than cat");
// }

// Task 6
// var sub1 = +prompt("Enter subject 1 marks:");
// var sub2 = +prompt("Enter subject 2 marks:");
// var sub3 = +prompt("Enter subject 3 marks:");
// var total = +prompt("Enter total marks:");
// var obMarks = sub1 + sub2 + sub3;
// var percentage = (obMarks/total)*100;
// var grade;
// var Remarks;
// if(percentage >= 80){
//     grade = "A-one";
//     Remarks = "Excellent";
// }
// else if(percentage >= 70){
//     grade = "A";
//     Remarks = "Good";
// }
// else if(percentage >= 60){
//     grade = "B";
//     Remarks = "you need to improve";
// }
// else{
//     grade = "Fail";
//     Remarks = "Sorry";
// }
// document.write("<h1>Marks Sheet</h1><br>");
// document.write("<p>Total marks : "+total+"</p>");
// document.write("<p>Marks Obtained : "+obMarks+"</p>");
// document.write("<p>Percentage : "+percentage.toFixed(2)+"</p>");
// document.write("<p>Grade : "+grade+"</p>");
// document.write("<p>Remarks : "+Remarks+"</p>");

// Task 7
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

// Task 8
// var inp = +prompt("Enter number");
// if((inp%3) === 0){
//     document.write(inp + " is divisible by 3");
// }
// else{
//     document.write(inp + " is not divisible by 3");
// }

// Task 9
// var inp = +prompt("Enter number");
// if((inp%2) === 0){
//     document.write(inp + " is even");
// }
// else{
//     document.write(inp + " is odd");
// }

// Task 10
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

//  Task 11
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

// Chapter 12-13

// Task 1
// var inp = +prompt("Enter Something");
// if(inp >= 65 && inp <= 90){
//     alert("Upper Case Letter");
// }
// else if(inp >=97 && inp<=122){
//     alert("Lower Case Letter");
// }

// Task 2
// var value1 = +prompt("Enter value 1 : ");
// var value2 = +prompt("Enter value 2 : ");
// if(value1 > value2){
//     alert(value1 + " is greater than "+value2);
// }
// else if(value1 < value2){
//     alert(value2 + " is greater than "+value1);
// }
// else{
//     alert(value1 + " is equal to "+value2);
// }

// Task 3
// var val = +prompt("Enter Number");
// if(val > 0){
//     alert("Number is positive");
// }
// else if(val < 0){
//     alert("Number is negative");
// }
// else{
//     alert("Number is zero");
// }

// Task 4
// var char = prompt("Enter a single character");
// var low = char.toLowerCase();
// if(low === 'a' || low === 'e' || low === 'i' || low === 'o' || low === 'u'){
//     alert(true);
// }
// else{
//     alert(false);
// }

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
// var greeting;
// var hour = 13;
// if (hour < 18) {
//     greeting = "Good day";
// }
// else{
//     greeting = "Good evening";
// }
// document.write(greeting)

// Task 7
// var time = +prompt("Enter time");
// if(time >= 0000 && time < 1200){
//     alert("Good Morning!");
// }
// else if(time >= 1200 && time < 1700){
//     alert("Good afternoon!");
// }
// else if(time >= 1700 && time < 2100){
//     alert("Good evening!");
// }
// else{
//     alert("Good night!");
// }
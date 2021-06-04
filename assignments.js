
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


var num = +prompt("Enter a number to show its multiplcation table");
var len = +prompt("Enter lenght of table");
for(var i = 1; i <= len; i++){
    document.write(num + " X " + i + " = " + (num*i) + "<br>");
}
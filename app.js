// Loop Assignments 
// Question No:1 Create an array of fruits like ["apple", "banana", "cherry"] and use a loop to log each fruit in the console.

let fruits = ["apple", "banana" , "cherry"];
for (let i=0; i < fruits.length; i++){
    console.log(fruits[i]);
    
}


// Question No: 2 Given an array of colors ["red", "green", "blue"], use a loop to add all the color names to a paragraph with the ID output using document.querySelector.
let colors = ["red", "green" , "blue"];
let paragraph = document.querySelector("#output");

for (let i=0; i < colors.length ; i++){
    paragraph.innerHTML += colors[i] + " $ ";
}

// Question No:3 Use a for loop to print numbers from 1 to 10 in the browser console.

for(let i=1; i<=10 ; i++){
    console.log(i);
}


// Question No:4 Use a while loop to print numbers from 5 to 1 in the console. 
let i = 5;
while (i>=1){
    console.log(i);
    i--;
    
}


// Question No:5 Given an array of names ["Ali", "Sara", "Ahmed"], use a loop to change the text of a div with ID names to show all names separated by commas.

let name = ["Ali", "Sara" ,"Ahmed"];
let divname = document.querySelector("#names");

for (let i=0; i <name.length; i++){
    if(i === 0){
        divname.innerHTML += name[i];
    }else {
        divname.innerHTML += "/" + name[i];
    }
}
console.log(name);



// Question No:6 Change the text of a paragraph with ID status to "Loading..." using document.querySelector.

let para = document.querySelector("#status");
para.innerHTML = "Loading..........";


// Question No:7 Use a loop to calculate the sum of numbers in an array [5, 10, 15] and display the total in a paragraph with ID sum.

let num1 = [5,10,15];
let total = 0;

for (let i = 0; i < num1.length; i++){
    total += num1[i];
}
let para1 = document.querySelector("#sum");
para1.innerHTML = total;


// Question No:8 Loop through an array of cities ["Karachi", "Lahore", "Quetta"] and display them as a single string in a div with ID cities.
let cities = ["Karachi", "Lahore", "Quetta"];
let divcities = "";
for (let i = 0; i < cities.length; i++){
    divcities += cities[i]+ " ";
}
let para2 = document.querySelector("#cities");
para2.innerHTML = divcities;

// Question No: 9 Write a loop that counts from 1 to 20 and logs only the even numbers in the console.
for (let i= 1; i<=20; i++){
    if(i%2 === 0){
        console.log(i);
        }
}


// Question No:10 Create an array [45, 22, 89, 100] and display the largest number in a paragraph with ID max.
let num2 = [45, 22, 89, 100];
let max = num2[0];

for(let i=0; i < num2.length;i++){
    if(num2[i] > max){
        max = num2[i];
    }
}
let para3 = document.querySelector("#max");
para3.innerHTML = max;



// Question N0:11 Use document.querySelector to select a div with ID result and change its text to "Task Complete".

let para4 = document.querySelector("#result");
para4.innerHTML = "Task Complete";


// Question No:12 Given an array of temperatures [30, 35, 32, 40], use a loop to calculate the average and display it inside an element with ID averageTemp.
let temperatures =  [30, 35, 32, 40];
let average = 0;
 
for(let i=0; i < average.length; i++){
    average += temperatures[i];
}
let para5 = document.querySelector("#averageTemp");
para5.innerHTML = average;

// Question No:13 Create a loop that adds all the numbers from 1 to 100 and shows the total inside a paragraph with ID totalSum.

let sum = 0;
for (let i=0; i <= 100; i++){
    sum += i;
}
let para6 = document.querySelector("#totalSum");
para6.innerHTML = sum;


// Question No:14 Loop through an array ["dog", "cat", "bird"] and display them inside a paragraph with ID animals.
// array k items ma space $ ya kuch b dalny k liay
let zoo = ["dog", "cat", "bird"];
let parazoo = "";
for (let i=0; i < zoo.length; i++){
    parazoo += zoo[i]+ " , ";
}
let para7 = document.querySelector("#animals");
para7.innerHTML = parazoo;


// Question No:15 Use document.querySelector to select a heading with ID title and change its text to "Welcome to JavaScript!".

let para8 = document.querySelector("#title");
para8.innerHTML = "Welcome to JavaScripts!"


// Question No :16 Create a loop that prints all numbers between 1 and 50 that are divisible by 5, and log them to the console.
for (let i = 1; i<=50 ; i++){
    if(i % 5 === 0){
        console.log(i);
        
    }
}



// Question No:17 Given an array of scores [80, 60, 90, 70], calculate how many scores are above 75 and display the count in a div with ID highScores.


// 75 sa kitnynumber choty hain
let scores = [80, 60, 90, 70];
let count = 0;
for (let i=0; i < scores.length; i++){
    if(scores[i] > 75){
        count++;
    }
}
let para9 = document.querySelector("#highScores");
para9.innerHTML = count;


// Question No:18 Select an element with ID message and change its text to "Updated successfully" using document.querySelector.

let para10 = document.querySelector("#message");
para10.innerHTML = "Update successfully";


// Question No:19 Given an array of subjects like ["Math", "Science", "English"], use a loop to show them in a paragraph with ID subjectsList.
let subjects = ["Math", "Science", "English"];
let parasubject = "";
for (let i=0; i < subjects.length; i++){
    parasubject += subjects[i] + "  ";
}
let para11 = document.querySelector("#subjectsList");
para11.innerHTML = parasubject;

// Question No:20  Write a loop that prints numbers from 10 down to 1 and shows the result inside a Given an array of numbers [5, 10, 15, 20], use a loop to calculate and print the sum of all elements.
// part 1:  
let num7 = "";
  for (let i = 10; i >= 1; i--) {
    num7 += i + " ";
  }
  document.querySelector("#countDownResult").innerHTML = num7;
// part:2 
  let numbers = [5, 10, 15, 20];
  let sums = 0;
  for (let i = 0; i < numbers.length; i++) {
    sums += numbers[i];
  }
 let para18= document.querySelector("#sumResult");
 para18.innerHTML = "Sum = " + sums;


// Question No:21 Create a loop that finds the largest number in an array [45, 67, 12, 89, 34].

// Largest number find
let num3 = [45,67,12,89,34];
let lnum = num3[0];

for(let i=0; i < num3.length; i++){
    if(num3[i] > lnum){
        lnum = num3[i];
    }
}
console.log(lnum);
let para12 = document.querySelector("#largest");
para12.innerHTML = lnum;

// Question No: 22 Use a loop to count how many numbers in an array [3, 8, 6, 1, 9, 2] are even.
let num4 = [3,8,6,1,9,2];
let evennum = 0;
for (let i=0; i<num4.length; i++){
    if(num4[i]%2 === 0){
        evennum++;
    }
}

console.log("Total even numbers" + "=" + " " + evennum);
let para13 = document.querySelector("#count");
para13.innerHTML = ("Total even numbers" +" " +"=" + " " + evennum);



// Question No:23 Write a loop that calculates the average of numbers in an array [20, 30, 40, 50].
let calculate = [20,30,40,50];
let averages = 0;
for (let i=0; i < calculate.length; i++){
    averages += calculate[i];
}
let totalaverage = averages / calculate.length;
let para14 = document.querySelector("#finalresult");
para14.innerHTML = ("Total average" + " " +"="+ " "+ averages);
console.log(("Total average" + " " +"="+ " "+ averages));


// Question No:24 Given an array [2, 4, 6, 8, 10], use a loop to create a new array where each value is multiplied by 3.
let num5 = [2,4,6,8,10];
let nextarray = [];
for(let i=0; i < num5.length; i++){
    // Enter a new array
    (nextarray.push(num5[i] * 3));
}
console.log("New array" + " " +"=" +" "+nextarray);
let para15 = document.querySelector("#m-array");
para15.innerHTML = ("New Array" + " " +"=" +" "+ nextarray)


// Question No:25 Loop through an array [1, 3, 5, 7, 9] and count how many elements are greater than 4.
let num6 = [1,3,5,7,9];
let count1 = 0;

for(let i=0; i < num6.length; i++){
    if(num6[i] > 4){
        count1++;
    }
}
console.log("Greater than 4 :" + " " + count1);
let para16 = document.querySelector("#greater");
para16.innerHTML = ("Greater than 4:" + " "+ count1);


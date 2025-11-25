// Question No:26 Given an array [10, 15, 20, 25, 30], use a loop to add only the numbers divisible by 5.
let adddiv = [10, 15, 20, 25, 30];
let addition = 0;
for(let i=0; i < adddiv.length; i++){
    if(adddiv[i] % 5 === 0){
        addition += adddiv[i];
    }
}
let para17 = document.querySelector("#divsum");
para17.innerHTML= ("Sum of total number divisible by 5:" +" "+ addition);
console.log("Sum of total number divisible by 5:" +" "+ addition);


// // Question No:27 Write a loop that checks if a number 25 exists in the array [10, 20, 30, 40, 25].
let num19 = [10, 20, 30, 40, 25];
for (let i=0; i < num19.length; i++){
    if(num19[i] === 25){
        console.log("25 is in list");
        break;
    }
}
let para19 = document.querySelector("#checker");
para19.innerHTML =  ("25 is in list");


// // Question No: 28 Given two arrays [1, 2, 3] and [4, 5, 6], use a loop to create a third array containing the sum of corresponding elements.
let first = [1,2,3];
let second = [4,5,6];
let third = [];
for(let i=0; i<first.length;i++){
    third.push(first[i]+second[i]);
}
console.log(third);



// // Question No:29 Use a loop to find the second-largest number in an array [10, 99, 23, 87, 56].
let num9 = [10,99,23,87,56];
let largestnumber = num9[0];
for(let i=1; i < num9.length; i++){
    if(num9[i]> largestnumber){
        largestnumber = num9[i]
    }
}
let secondlargest = num9[0];
for(let i=1; i < num9.length; i++){
    if(num9[i]> secondlargest && num9[i] < largestnumber){
        secondlargest = num9[i];
    }
}
console.log("Second largest number is:" + secondlargest);



// // Question No:30 Given an array [1, 2, 3, 4, 5], reverse the array manually using a loop (don’t use .reverse()).
let num10 = [1,2,3,4,5];
let reverse = [];
for(let i =num10.length -1; i>=0 ; i--){
    reverse.push(num10[i]);
}
console.log(reverse);


// // Question No:31 Write a loop that finds and prints all the prime numbers between 1 and 50.
// for(let i =1; i <= 50; i++){
//     let primenum = 0;
//     for(let j=1; i<=i; j++){
//         if(i%j === 0){
//             primenum++;
//         }

//     }
// if(primenum === 2){
//     console.log(i);
    
// }

// }

// // Question no:32 Create a loop that finds the difference between the largest and smallest numbers in an array [11, 4, 99, 2, 47].
let num11 = [11,4,99,2,47];
let smallnum = num11[0];
let largenum = num11[0];

for(let i=1; i <num11.length ; i++){
    if(num11[i] < smallnum){
        smallnum = num11[i];
    }
    if(num11[i] > largenum){
        largenum = num11[i]
    }
}
let difference = largenum -smallnum;
console.log("difference between the largest and smallest numbers is" + " " + difference);


// // Question No: 33 Given an array [0, -1, -5, 6, 8, -3], count how many negative numbers are in the array.

let num12 = [0,-1,-5,6,8,-3];
let counter = 0;
for(let i=0; i < num12.length; i++){
    if(num12[i] < 0){
        counter++;
    }
}
console.log("Negative numbers:" + " " + counter);



// // Question No: 34 Loop through an array of numbers and create a new array that only contains odd numbers.

let num13 = [5,10,15,20,25,30,35,40,45,50,43,23,60,2,70,44,11,80,90,101];
let oddnum = [];
for(let i=0; i < num13.length;i++){
    if(num13[i] % 2 !== 0){
        oddnum.push(num13[i]);
    }
}
console.log(oddnum);

// // Question No:35 Use a loop to remove all zeroes from an array [0, 1, 0, 3, 0, 5] and store the non-zero elements in a new array.
let num14 = [0,1,0,3,0,5];
let ouput = [];
for(let i=0; i < num14.length; i++){
    if(num14[i] !== 0){
        ouput.push(num14[i]);
    }
}
console.log(ouput);

// Question No:36 Given an array [1, 2, 3, 4, 5, 6], use a loop to swap the first and last elements.
let num15 = [1,2,3,4,5,6];
for(let i=0 ; i < num15.length; i++){
    if(i === 0){
        let arraylist = num15[0];
        num15[0] = num15[num15.length - 1];
        num15[num15.length - 1] = arraylist;
        break;

    }
}
console.log(num15);

// Question No:37 Write a loop that checks whether all numbers in an array [2, 4, 6, 8] are even.
let num16 = [2,4,6,8];
let result = true;
for(let i=0; i < num16.length; i++){
    if(num16[i] % 2 !== 0){
        result = false;
        break;
    }
}
console.log(result);

// Question No: 38 Create a loop that counts how many numbers in [5, 10, 15, 20, 25] are greater than or equal to the average of the array.
let num17 = [5,10,15,20,25];
let equal = 0;
for(let i=0; i < num17.length; i++){
    equal += num17[i];
}
let average = equal / num17.length;
let count = 0;
for(let i =0; i < num17.length; i++){
    if(num17[i] >= average){
        count++;
    }
}
console.log("Total avarage is : " + " " +average);
console.log("Total count is : " + " " +count);

// Question No:39 Given an array [2, 2, 2, 2, 2], use a loop to check whether all elements are equal.
let num18 = [2,2,2,2,2];
let allequal = true;
for(let  i= 0; i < num18.length; i++){
    if(num18[i] !== num18[0]){
        allequal = false;
        break;
    }
}
console.log(allequal);

//for loop Assignment

// ---CyberPunks Group---

//ASSIGNMENT

// example 4
// ******
// *****
// ****
// ***
// **
// *

for(let k =6; k>0; k--){
    console.log("*".repeat(k));
}

// example 5
//     *
//    **
//   ***
//  ****
// *****
//  ****
//   ***
//    **
//     *


for (let k=1; k<=5;k++ ) {

    let spaces = " ".repeat(5 - k);
    let stars = "*".repeat(k);

    console.log(spaces + stars);
    
    }
for (let k=4; k>=1;k-- ) {

    let spaces = " ".repeat(5 - k);
    let stars = "*".repeat(k);
    
    console.log(spaces + stars);
    
    }




// example 6
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *

for (let x=1; x<=9; x+=2){
    let spaces = " ".repeat((9 - x)/2);
    let stars = "*".repeat(x);
    console.log(spaces + stars);
}

for (let x=7; x>=1; x-=2){
    let spaces = " ".repeat((9 - x)/2);
    let stars = "*".repeat(x);
    console.log(spaces + stars);
}




// example 7
//*******
//      *
//      *
//      *
//      *
//      *
//      *
//      *

for (let i = 1; i <= 8; i++) {
    if (i === 1) {
        console.log("*".repeat(7));
    } else {
        console.log(" ".repeat(6) + "*");
    }
}


// example 8
//*******
//*
//*
//*
//*
//*
//*
for (let i = 1; i <= 7; i++) {
    if (i === 1) {
        console.log("*".repeat(7));
    } else {
        console.log("*");
    }
}

// for(let i = 1; i < 6; i++){
//     console.log("*".repeat(i));
// }


//ASSIGNMENT //generate six random numbers between 1 and 49
let count = 0;
console.log("Generate random no ");

while (count < 6) {
    let randomNumber = Math.floor(Math.random() * 49) + 1;
    console.log("Generated random number : ",randomNumber);
    console.log("Countinue generating");
    count++;
}

console.log("Exits");


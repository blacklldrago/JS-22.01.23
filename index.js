// let a = [1, 2, 3, 4, 5, 6, 99, 107]
// let ans = a.join("")
// if(ans.includes(7)){
//     console.log("Boom!");
// }
// else{
//     console.log("There is no 7 in the array")
// }


// TASK 2
// function times(a, b){
//     let vc = []
//     let cnt = 1;
//     while(b--){
//         vc.push(a*cnt);
//         cnt++
//     }
//     return vc
// }
// console.log(times(7, 5));

// TASK 3
// first way
// let ar = ["John", "Taylor", "John"]
// let ans = new Set();
// for(let i = 0; i<ar.length; i++){
//     ans.add(ar[i])
// }
// console.log(ans);

// second way
// let ar = ["John", "Taylor", "John", "1", "1"]
// let ans = ar.filter(function(a, b){
//     if(ar.indexOf(a) == b){
//         return a
//     }
// })
// console.log(ans);

// TASK 4
// let a = [-3, 0, 8, -6]
// function times(a){
//     let vc = []
//     let cnt = 0;
//     for(let i = 0; i<a.length; i++){
//         vc.push(a[i]*cnt)
//         cnt++;
//     }
//     return vc
// }
// let ans = times(a).reduce(function(a, b){
//     return a+b;
// })
// console.log(ans);

// Distrutizasiya
//rest
// function myBio(firstName, lastName, ...otherInfo) { 
//     return otherInfo;
// }
// console.log(myBio("Oluwatobi", "Sofela", "CodeSweetly", "Web Developer", "Male"));

// spread
// let a = ["Oluwatobi", "Sofela", "CodeSweetly"]
// console.log(...a);

// PRACTIICE 3
// TASK 1
// let ar = [1, 2, "13", "4", "645", null, 110]
// let ans = ar.filter(function(a){
//     if(a === Number(a)){
//         return a
//     }
// })
// let ans1 = ans.reduce(function(a, b){
//     return a+b;
// })
// console.log(ans1);

// TASK 2
// function arr(a){
//     return a.reduce(function(n, m){
//         return n*m
//     })
// }
// console.log(arr([1, 1, 2])+arr([2, 1, 1])+arr([3, 3, 3])+arr([4, 2, 4]));

// TASK 3
// let ar = ([1, 9, 8, 5, 2]);
// function arr(ar){
//     return ar.reduce(function(a, b){
//         return a+b;
//     })
// }
// if(arr(ar) == 25){
//     console.log(true);
// }
// else{
//     console.log(false);
// }

// TASK 4
// let ar = [2, 1, 4, 5, 6, 3]
// let ans = ar.filter(function(a, b){
//     if(a%2 == 0 && b%2 == 0){
//         return a
//     }    
//     else if(a%2 != 0 && b%2 != 0){
//         return a
//     }
// })
// console.log(ans.length == ar.length ? true: false);
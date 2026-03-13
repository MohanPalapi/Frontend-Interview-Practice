
//closure, scope, hosting examples


// function outer(){
//     let count = 0;

//     function inner(){
//         count++;
//         console.log(count);
//     }
//     return inner;
// }

// const counter = outer();
// counter();
// counter();
// counter();

/////////////////////////////////

// for( let i=0; i<3; i++){
//     setTimeout(function(){
//         console.log(i);
//     },1000)
// }

/////////////////////////////////

// for( var i=0; i<3; i++){
// let count =i;
//     setTimeout(function(){
//         let j=count
//         console.log(j);
//     },1000)
// }

/////////////////////////////////

// for(var i=0; i<3; i++){
//     (function(j){
//         setTimeout(function(){
//             console.log(j)
//         },1000)
//     })(i)
// }

/////////////////////////////////

// function makeMultiplier(x) {
//   return function(y) {
//     return x * y;
//   };
// }

// const double = makeMultiplier(2);
// const triple = makeMultiplier(3);

// console.log(double(5)); // 10
// console.log(triple(5)); // 15
// console.log(double(triple(2))); //12
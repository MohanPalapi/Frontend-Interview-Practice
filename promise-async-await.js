// console.log("1");

// setTimeout(() => {
//   console.log("2");
// }, 0);

// Promise.resolve().then(() => {
//   console.log("3");
// });

// console.log("4"); // output: 1, 4, 3, 2

///////////////////////////////////


// console.log("start");

// setTimeout(() => {
//   console.log("timeout 1");
// }, 0);

// Promise.resolve()
//   .then(() => {
//     console.log("promise 1");
//     setTimeout(() => {
//       console.log("timeout 2");
//     }, 0);
//   })
//   .then(() => {
//     console.log("promise 2");
//   });

// console.log("end"); // output: start, end, promise 1, promise 2, timeout 1, timeout 2

//////////////////////////////


// function getUserData(userId, callback) {
//   setTimeout(() => {
//     if (userId === 1) {
//       callback(null, { id: 1, name: "Mohan" });
//     } else {
//       callback("User not found", null);
//     }
//   }, 1000);
// }

// // Called like this:
// getUserData(1, (error, user) => {
//   if (error) {
//     console.log("Error:", error);
//   } else {
//     console.log("User:", user.name);
//   }
// });

/////////////

// function getUserData(userID){
//   return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//        if(userID === 1){
//         resolve({id:1, name: "Mohan"})
//     }else{
//       reject("user not found")
//     }
//     },1000)
   
//   })
// }

// getUserData(1)
// .then(user=>console.log("user", user.name))
// .catch(error=>console.log(error));


///////////////////////////////////////////////

// function getProduct(id){
//   return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//       if(id === 1){
//         resolve({id:1, name:"iPhone"})
//       }else{
//         reject("Product not found")
//       }
//     }, 1000)
//   })
// }

// async function showProduct(){
//   try{
//   const product = await getProduct(1)
//   console.log("product:", product.name)
//   } catch(error){
//     console.log("error:", error)
//   }
// }

// showProduct()
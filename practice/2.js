// const callMe = (condition) => {
//     return new Promise((resolve, reject) => {
//         if (condition === true){
//             resolve('Resolved: condition is true');
//         } else {
//             reject('Rejected: condition is not true');
//         }
//     });
// };

// callMe(true)
//     .then(result => console.log(result))
//     .catch(err=> console.log(err))

// callMe(false)
//     .then(result => console.log(result))
//     .catch(err=> console.log(err))

function fun(value) {
    return new Promise((resolve, reject)=> {
            if (value === true) {
            resolve("Resolved because value is true");
        } else {
            reject("Rejected because value is not true");
        }
    })
}

fun(true)
  .then(result => console.log(result))  
  .catch(error => console.error(error));

fun(false)
  .then(result => console.log(result))
  .catch(error => console.error(error)); 


// function promiseTime(value) {
//     return new Promise((resolve, reject)=> {
//         let secondsPassed = 0;

//         const interval = setInterval(() => {
//             secondsPassed++;
//             console.log(`⏳ ${secondsPassed} second(s)...`);

//         }, 1000);
//         setTimeout(()=> {
//             clearInterval(interval);
//             if (value === true) {
//             resolve("Resolved because value is true");
//         } else {
//             reject("Rejected because value is not true");
//         }
//         }, 5000)
//     })
// }

// promiseTime(true)
//   .then(result => console.log(result))  
//   .catch(error => console.error(error));

// promiseTime(false)
//   .then(result => console.log(result))
//   .catch(error => console.error(error)); 

  
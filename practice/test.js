const http = require('http');

const server = http.createServer((req, res) => {
    res.end('hello bbbbb');
});

server.listen(3000, () => {
  console.log('Server run000');
    
})



function calculateSalaryVar(job) {
    var income = 5;

    if (job){
        var income = 50;
    }

    {
        var income = 500;
    }

    {
        var income = 5000;
    }
    return income;
}



console.log(calculateSalaryVar(false));







// function calculateSalaryLet(job) {
//     income = 5;

//     if (job){
//         let income = 50;
//     }

//     {
//         let income = 500;
//     }

//     {
//         let income = 5000;
//     }
//     return income;
// }



// console.log(calculateSalaryLet(true));

// function calculateSalaryConst(job) {
//     var income = 5;

//     if (job){
//         const income = 50;
//     }

//     {
//         const income = 500;
//     }

//     {
//         const income = 5000;
//     }
//     return income;
// }



// console.log(calculateSalaryConst(true));

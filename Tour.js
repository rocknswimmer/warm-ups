/*
// Sample code to perform I/O:

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;                               // Reading input from STDIN
});

process.stdin.on("end", function () {
   main(stdin_input);
});

function main(input) {
    process.stdout.write("Hi, " + input + ".\n");       // Writing output to STDOUT
}

// Warning: Printing unwanted or ill-formatted data to output will cause the test cases to fail
*/

// Write your code here

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;                               // Reading input from STDIN
});

process.stdin.on("end", function () {
   main(stdin_input);
});

function main(input) {
    var waste = input.split('\n') // short for why the fuck do you make me waste half my brian power getting the information from the tests.
    var annoyingSpacer = Number(waste[0])
    var cities = []
    var costMatrix = []
    var annoyingToTrackSecondSpacer = Number(waste[(2 * annoyingSpacer) + 1])// seriously how hard would it be to pass in 3 arrays, cities, costmatrix, route, so that I dont have to spend my whole time on data extraction.
    var route = []
    var cost = 0;
    for (let i = 1; i <= annoyingSpacer; i++){
        cities.push(waste[i])
    }
    for (let i = annoyingSpacer + 1; i < (2 * annoyingSpacer) + 1; i++){
        let currentCostExtrcation = waste[i].split(' ').map((num) => {return Number(num)})
        costMatrix.push(currentCostExtrcation)
    }
    for(let i = (2 * annoyingSpacer) + 2; i < (2 * annoyingSpacer) + 1 + annoyingToTrackSecondSpacer + 1; i++){
        route.push(waste[i])
    }
    for(let i = 0; i < route.length; i++){
        let toInd = cities.indexOf(route[i])
        let fromInd
        if( i === 0){
            fromInd = 0
        } else {
           fromInd = cities.indexOf(route[i - 1])
        }

        cost += costMatrix[toInd][fromInd]
        //console.log(toInd, fromInd, cost)
    }
    console.log(cost)       // Writing output to STDOUT
}
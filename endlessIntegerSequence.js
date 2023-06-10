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
    //process.stdout.write("Hi, " + input + ".\n");       // Writing output to STDOUT
    let queries = input.split('\n')
    let removed = []
    queries.shift()
    queries.forEach((tup) => {
        let values = tup.split(' ')
        let useable = [Number(values[0]), Number(values[1])]
        if(useable[0] === 1){
            removed.push(useable[1])
        } else if(useable[0] === 2){
            const k = useable[1]
            let result = Number(useable[1])
            removed.forEach((num) => {
                if(num < k){
                    result++
                } else if (num === k || num === result) {
                    result++
                } else if (removed.indexOf(result) !== -1){
                    result++
                }
            })
            console.log(result)
        } else {
            console.log('error', useable)
        }

        })
    //console.log(useable)

}
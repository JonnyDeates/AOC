const {readFile} = require("../Utils");

const data = readFile("./Day1/caloric.txt");


const yeet = (data.split("\n\n").map(x => x.split('\n')).map(x=> x.reduce((y,j)=> parseInt(y) + parseInt(j))).map(x=> parseInt(x)).sort((a,b)=> a-b).reverse())
console.log(yeet[0])
console.log(yeet.slice(0,3).reduce((a,b)=> a+b))
    // first is the first answer.
    // top 3 summed is the second answer


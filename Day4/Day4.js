const {readFile} = require("../Utils");


const data = readFile('./Day4/camp.txt').split("\n");

console.log(data.map(x=> x.split(",").map(y=> y.split("-")).map(y=> ({start: parseInt(y[0]), end: parseInt(y[1])}))).map((x)=> (x[0].start <= x[1].start && x[0].end >= x[1].end) || (x[1].start <= x[0].start && x[1].end >= x[0].end)).filter(x=> x).length);


console.log(data.map(x=> x.split(",").map(y=> y.split("-")).map(y=> ({start: parseInt(y[0]), end: parseInt(y[1])}))).map((x)=> (x[1].start <= x[0].end && x[1].end >= x[0].start)).filter(x=> x).length);


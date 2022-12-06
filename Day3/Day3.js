const {readFile} = require("../Utils");

const data = readFile("./Day3/rucksacks.txt").split("\n");

const yeet = data.map((x)=>{
    const section1 = x.substring(x, x.length/2);
    const section2 = x.substring(x.length/2,x.length);
    return section1.split("").filter(letter => section2.includes(letter))
}).map((x)=> x[0]).flat().map((x)=> {

    const totally = x.charCodeAt(0);
    if(totally > 64 && totally < 91)
        return totally - 38
    else
        return totally - 96
}).reduce((x,y)=>x+y);

console.log(yeet);

let part2 = []
for(let x = 0; x< data.length; x+=3) {
    part2.push(data[x].split("").filter(letter => data[x+1].includes(letter)).filter(letter => data[x+2].includes(letter)));
}

part2 = part2.map((x)=> x[0]).flat().map((x)=> {
        const totally = x.charCodeAt(0);
        if(totally > 64 && totally < 91)
            return totally - 38
        else
            return totally - 96
    }).reduce((x,y)=>x+y);

console.log(part2)

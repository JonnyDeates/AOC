const {readFile} = require("../Utils");

const data = readFile('./Day5/supply.txt')


const initialSetup = () => {
    const table = data.split("\n").slice(0,8).reverse();
    const values = {1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: []};

    for(let row= 0; row < table.length; row++){
        let y = 1;
        for(let col = 1; col < table[row].length; col += 4){
            values[y].push(table[row][col]);
            y++
        }
    }

    Object.keys(values).forEach(x=> values[x] = values[x].filter(y=> y!==" "))

    return values;
}

const commands = data.split("\n").slice(10).map((x)=> {
    const move = parseInt(x.split(" from ")[0].substring(5));
    const rest = x.split(" from ")[1].split(" to ");
    return {move, from: parseInt(rest[0]), to: parseInt(rest[1])}
});

const getEndBits = (arr) => {
    let yeet = "";
    for(let x = 1; x < 10; x++){
        yeet += arr[x].pop()
    }
    return yeet
}
const doPart1 = () => {
    const values = initialSetup()

    commands.forEach(({move, from, to}) => {
        const valuesFrom = values[from];

        values[to] = [...values[to], ...valuesFrom.splice(valuesFrom.length - move, move).reverse()]
    })

   return getEndBits(values)
}

const doPart2 = () => {
    const values = initialSetup()

    commands.forEach(({move, from, to}) => {
        const valuesFrom = values[from];

        values[to] = [...values[to], ...valuesFrom.splice(valuesFrom.length - move, move)]
    })

    return getEndBits(values)
}

console.log(doPart1());
console.log(doPart2());

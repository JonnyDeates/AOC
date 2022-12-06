const {readFile} = require("../Utils");

// A-X is Rock,
// B-Y is Paper
// C-Z is Scissors

const data = readFile("./Day2/rps.txt");
const tictactoes = data.split('\n').map(x=> ({[x[0]]: x[2]}))

// first part
const tttWin = {C: {X: 6, Y: 0, Z: 3}, B: {X: 0, Y: 3, Z: 6}, A: {X: 3, Y: 6, Z: 0}};
const SymbolVal = {X: 1, Y: 2, Z: 3};
console.log(tictactoes.map(x=> {
    const key = Object.keys(x)[0];
    return SymbolVal[x[key]] + tttWin[key][x[key]]
}).reduce((a,b)=> a+b));

// X = Lose
// Y = Tie
// Z = Win
const tttTricky = {X: {A: 'Z', B: 'X', C: 'Y'}, Y: {A: 'X', B: "Y", C:"Z"}, Z: {A: 'Y', B: 'Z', C: 'X'}};
console.log(tictactoes.map(x=> {
    const key = Object.keys(x)[0];
    return tttWin["B"][x[key]] + SymbolVal[tttTricky[x[key]][key]]
}).reduce((a,b)=> a+b));
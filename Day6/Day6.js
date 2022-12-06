const {readFile} = require("../Utils");


const data = readFile('./Day6/marker.txt').split("");

const getFirstX = (arr,t, i) => {
    let dank = []
    for(let x = i; x < i+t; x++){
        dank.push(arr[x])
    }
    return dank
}

const solver = (y) => {
    for (let x = y-1; x < data.length; x++) {
        const dankArr = getFirstX(data, y, x);
        const tester = {}
        dankArr.forEach((x) => {
            tester[x] = true;
        })
        if (Object.keys(tester).length === y) {
            console.log(x + y)
            break;
        }
    }
}
solver(4);
solver(14);
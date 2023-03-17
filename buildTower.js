
function tower (floors) {
    let startingArr = []
    let symbol = '*'
    for (let i = 0; i < floors; i++) {
        startingArr.push(symbol)
        symbol += '**'
        for (let k = 0; k < i; k++) {
            startingArr[k] = ' ' + startingArr[k] + ' '
        }
    }
    return startingArr
}

console.log(tower(3))
function tower(floors) {
    startingArr = []
    symbol = '*'
    for (let i = 0; i < floors; i++) {
        startingArr.push(symbol)
        symbol += '**'
        for (k = 0; k < i; k++) {
            startingArr[k] = ' ' + startingArr[k] + ' '
        }
    }
    return startingArr
}
console.log(tower(6))


////// /* Jared's Solution */ //////

function makeTower(n) {
    // make an empty array that will be my return
    // when it is filled
    let answer = []

    // for each row, come up with a formula
    for (let i = 0; i < n; i++) {

        // for how many spaces,
        // spaces on one side = ((((n - 1) * 2) + 1) - (i * 2) + 1) / 2
        let spaceLength = (((((n - 1) * 2) + 1) - (i * 2) + 1) / 2) - 1 // this equals (n - i - 1)
        let spaceString = ''
        for (let k = 0; k < spaceLength; k++) {
            spaceString += ' '
        }

        // how many stars,
        // the amount of stars is (i * 2) + 1
        let starLength = (i * 2) + 1
        let starString = ''
        for (let k = 0; k < starLength; k++) {
            starString += '*'
        }

        // and how many spaces there are
        // this is the same as the first amount of spaces

        // then concatentate them
        // and push them to my answer array
        answer.push(spaceString + starString + spaceString)
    }
    return answer
}
console.log(makeTower(6))

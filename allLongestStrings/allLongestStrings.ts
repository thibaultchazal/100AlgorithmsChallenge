function allLongestStrings(inputArray: string[]): string[] {
    let longestArray: string[] = []
    longestArray.push(inputArray[0])
    
    for(let i = 1; i < inputArray.length ; i++){
        if(inputArray[i].length == longestArray[0].length){
            longestArray.push(inputArray[i])
        } else if (inputArray[i].length > longestArray[0].length){
            longestArray = [inputArray[i]]
        }
    }
    return longestArray
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));
console.log(allLongestStrings(["aba", "aa", "ajrd", "ad", "vcd", "aba"]));
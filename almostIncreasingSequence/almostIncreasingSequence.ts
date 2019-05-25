function almostIncreasingSequence(sequence: number[]): boolean {
    let nbFalse: number = 0
    for(let i:number = 1; i < sequence.length ; i++){
        sequence[i] > sequence[i-1] ? '' : nbFalse++
    }
    return nbFalse > 1 ? false : true
}

console.log(almostIncreasingSequence([1, 3, 2, 1])) 
console.log(almostIncreasingSequence([1, 3, 2])) 
console.log(almostIncreasingSequence([1, 2, 3])) 
function alphabeticShift(inputString: string): string {
    let inputShifted = inputString.split('')
    for(let i:number = 0; i < inputShifted.length ; i++){
        let n = inputString.charCodeAt(i)
        inputShifted[i] = n === 122 ? String.fromCharCode(97) : String.fromCharCode(n+1)
    }
    return inputShifted.join('')
}

console.log(alphabeticShift('crazy'));
function alphabetSubsequence(s: string): boolean {
    let alphabeticOrder = true
    for(let i:number = 1; i < s.length ; i++){
        alphabeticOrder = s.charCodeAt(i) > s.charCodeAt(i - 1) ? alphabeticOrder : false
        // inputShifted[i] = n === 122 ? String.fromCharCode(97) : String.fromCharCode(n+1)
    }
    return alphabeticOrder
}

console.log(alphabetSubsequence('zab'))
console.log(alphabetSubsequence('effg'))
console.log(alphabetSubsequence('cdce'))
console.log(alphabetSubsequence('ace'))
console.log(alphabetSubsequence('bxz'))

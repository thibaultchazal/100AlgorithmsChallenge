function addTwoDigits(n: any): number {
    // const n1 = n.toString()[0]
    // const n2 = n.toString()[1]   
    // return parseInt(n1) + parseInt(n2)

    const nums = n.toString().split('')
    
    return nums.reduce((n1: string, n2: string) => {
        return parseInt(n1) + parseInt(n2)
    }) 
}

console.log(addTwoDigits(29));
console.log(addTwoDigits(292));
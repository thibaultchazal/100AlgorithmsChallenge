function adjacentElementsProduct(inputArray: number[]): number {
    let products: number[] = []
    
    for(let i: number = 0; i < inputArray.length - 1 ; i++){
        products.push(inputArray[i] * inputArray[i+1])
    }
    return Math.max(...products)
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
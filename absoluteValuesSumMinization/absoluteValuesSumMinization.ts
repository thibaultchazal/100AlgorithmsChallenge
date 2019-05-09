function absoluteValuesSumMinimization(a: number[]): number {
    // if ( a.length % 2 == 0) {
    //     x = Math.floor(a.length / 2) - 1;
    // }else{
    //     x = Math.floor(a.length / 2);
    // }
    // return (a[x]);
    even = a.length % 2 == 0
    return even ? a[Math.floor(a.length / 2) - 1] : a[Math.floor(a.length / 2)]
}

console.log(absoluteValuesSumMinimization([2, 4, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));
function addBorder(picture: string[]): string[] {
    const wall = '*'.repeat(picture[0].length + 2)
    
    for(let p in picture){
        picture[p] = "*" + picture[p] + "*"
        // picture[p] = '*'.concat(picture[p], '*')
    }

    picture.splice(0, 0, wall)
    // picture.unshift(wall)
    picture.splice(picture.length, 0, wall)
    // picture.push(wall)

    return picture
}

console.log(addBorder(["abc", "ded"]));
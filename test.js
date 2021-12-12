function compressedString(message) {
    // Write your code here
    let compressed = ""
    let msgArray = messsage.split
    for (let i = 0; i < msgArray.length; i++) {
        let count = 1
        let currentChar = msgArray[i]
        while (i < msgArray.length - 1 && msgArray[i] === msgArray[i + 1]) {
            count++
            i++
        }
        if (count === 1) {
            compressed += currentChar
        } else { compressed += currentChar + count }
    }
    return compressed
}
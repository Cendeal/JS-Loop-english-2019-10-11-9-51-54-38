function generateMultiplicationContent() {
    let content = ''
    for (let i = 1; i <= 9; i++) {
        let line = []
        for (let j = 1; j <= i; j++) {
            line.push(`${i}*${j}=${i * j}`)
        }
        content +=(i!==1?'\n':'')+line.join("\t")
    }
    return content
}
console.log(generateMultiplicationContent())
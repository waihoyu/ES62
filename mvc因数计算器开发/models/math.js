
 function calcfactor (number) {
    let result = []
    for (let i = 1; i<number;i++){
        number % i == 0 && result.push(i)
    }
    return result
}
//集中暴露
 exports.calcfactor = calcfactor

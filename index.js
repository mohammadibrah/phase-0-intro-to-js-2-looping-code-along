// Code your solutions in this file
function writeCards(names, event){
    const thanksArr = []
    for (let name of names){
        thanksArr.push(`Thank you, ${name}, for the wonderful ${event} gift!`)
    }
    return thanksArr
}
function countDown(countNum){
    while (countNum >= 0){
        console.log(countNum)
        countNum--
    }
}

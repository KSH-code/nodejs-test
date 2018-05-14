// str: 9.626ms
// getLength1: 3339.004ms
// getLength2: 555.618ms
// getLength1: 3351.842ms
// getLength2: 556.167ms
// getLength1: 3382.543ms
// getLength2: 566.677ms
// getLength1: 3519.280ms
// getLength2: 585.942ms
// getLength1: 3656.813ms
// getLength2: 577.271ms
// getLength1: 3445.015ms
// getLength2: 578.026ms
// getLength1: 3446.298ms
// getLength2: 559.352ms
// getLength1: 3351.113ms
// getLength2: 557.701ms
// getLength1: 3405.860ms
// getLength2: 624.664ms
// getLength1: 3679.536ms
// getLength2: 595.528ms
function getLength1(str) {
    let len = 0
    for (let i = 0; i < str.length; i++) {
        if (escape(str.charAt(i)).length === 6) len++
        len++
    }
    return len
}
function getLength2(msg) {
    let b = 0
    let c = ''
    for (let i = 0; (c = msg.charCodeAt(i++)); b += c >> 11 ? 3 : c >> 7 ? 2 : 1);
    return b
}

let str1 = ''
console.time('str')
for (let i = 0; i < 1e5; i++) {
    str1 += '테'
}
console.timeEnd('str')
getLength1(str1)
getLength2(str1)
for (let j = 0; j < 10; j++) {
    console.time('getLength1')
    for (let i = 0; i < 1e3; i++) {
        getLength1(str1)
    }
    console.timeEnd('getLength1')
    console.time('getLength2')
    for (let i = 0; i < 1e3; i++) {
        getLength2(str1)
    }
    console.timeEnd('getLength2')
}
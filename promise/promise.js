/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-09-13 09:42:17
 * @modify date 2017-09-13 09:42:17
 * @desc [Promise 사용]
 */
new Promise((resolve, reject) => {
    resolve(1)
}).then(n => {
    console.log(n)
}).then(n => {
    console.log("end")
})
console.log()

new Promise((resolve, reject) => {
    resolve(1)
}).then(n => {
    throw n
}).catch(e => console.log(e)).then(n => {
    console.log("end")
})
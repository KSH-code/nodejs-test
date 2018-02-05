exports.test1 = () => {
  console.log('exports.test')
}
module.exports.test = () => {
  console.log('module.exports.test')
}
console.dir(module)
module.exports = () => {
  console.log('module.exports')
}
console.dir(module)
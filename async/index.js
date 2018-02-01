async function a () {
  return await time()
}
function time () {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('end')
    }, 500)
  })
}
async function b() {
  console.log(await a())
}
b()
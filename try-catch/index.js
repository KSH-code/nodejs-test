function test () {
  try {
    a / 0
  } catch (err) {
    console.error(err)
    return
  }
  console.log('end1')
}
function test2 () {
  try {
    a / 0
  } catch (err) {
    console.error(err)
    return
  } finally {
    console.log('end2')
  }
}
test()
test2()
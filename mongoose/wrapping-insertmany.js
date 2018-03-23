// insertMany: 705.555ms
// { name1: 'hello', _id: 5ab4aab38a051a4089d55729, __v: 0 }
// insertMany: 456.353ms
// { name1: 'hello', _id: 5ab4aab38a051a4089d55729, __v: 0 }
// save: 28790.550ms
// save: 31028.968ms
// { name1: 'hello', _id: 5ab4aab48a051a4089d5f369, __v: 0 }
// insertMany: 699.071ms
// { name1: 'hello', _id: 5ab4ab1536a2cf41b9e90c70, __v: 0 }
// insertMany: 516.262ms
// { name1: 'hello', _id: 5ab4ab1536a2cf41b9e90c70, __v: 0 }
// save: 32310.738ms
// save: 35001.288ms
// { name1: 'hello', _id: 5ab4ab1636a2cf41b9e9a8b0, __v: 0 }
const mongoose = require('mongoose')
mongoose.connect(`mongodb://localhost/test`, err => {
  if (err) {
    console.error('mongodb connection error', err)
  }
  const scopeSchema1 = new mongoose.Schema({
    name1: {
      type: String,
      default: 'hello'
    }
  }
  )
  const model1 = mongoose.model('zcxvbndsfh', scopeSchema1)
    ; (async function () {
        await mongoose.connection.db.dropDatabase()
        console.time('insertMany')
        let arr = []
        for (let i = 0; i < 1e4; i++) arr.push(new model1())
        await model1.insertMany(arr)
        console.timeEnd('insertMany')
        console.log(await model1.findOne())

        console.time('insertMany')
        arr = []
        for (let i = 0; i < 1e4; i++) arr.push(new model1())
        await model1.insertMany(arr)
        console.timeEnd('insertMany')
        console.log(await model1.findOne())

        await mongoose.connection.db.dropDatabase()
        console.time('save')
        arr = []
        for (let i = 0; i < 1e4; i++) arr.push(new model1().save())
        await Promise.all(arr)
        console.timeEnd('save')

        console.time('save')
        arr = []
        for (let i = 0; i < 1e4; i++) arr.push(new model1().save())
        await Promise.all(arr)
        console.timeEnd('save')
        console.log(await model1.findOne())
        await mongoose.disconnect()
    })()
})
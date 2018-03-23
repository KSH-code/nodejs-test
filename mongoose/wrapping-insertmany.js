// insertMany: 172.058ms
// { name1: 'hello', _id: 5ab4b1c247a46b5691778250, __v: 0 }
// insertMany: 94.320ms
// { name1: 'hello', _id: 5ab4b1c247a46b5691778250, __v: 0 }
// save: 515.782ms
// save: 443.502ms
// { name1: 'hello', _id: 5ab4b1c247a46b56917791f0, __v: 0 }
// create: 442.172ms
// create: 393.982ms
// { name1: 'hello', _id: 5ab4b1c347a46b56917799c4, __v: 0 }
// insertMany: 163.793ms
// { name1: 'hello', _id: 5ab4b1c62e504256a1b9df75, __v: 0 }
// insertMany: 87.504ms
// { name1: 'hello', _id: 5ab4b1c62e504256a1b9df75, __v: 0 }
// save: 513.205ms
// save: 456.415ms
// { name1: 'hello', _id: 5ab4b1c62e504256a1b9ef15, __v: 0 }
// create: 417.969ms
// create: 431.644ms
// { name1: 'hello', _id: 5ab4b1c72e504256a1b9f6e6, __v: 0 }
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
        for (let i = 0; i < 1e3; i++) arr.push(new model1())
        await model1.insertMany(arr)
        console.timeEnd('insertMany')
        console.log(await model1.findOne())

        console.time('insertMany')
        arr = []
        for (let i = 0; i < 1e3; i++) arr.push(new model1())
        await model1.insertMany(arr)
        console.timeEnd('insertMany')
        console.log(await model1.findOne())

        await mongoose.connection.db.dropDatabase()
        console.time('save')
        arr = []
        for (let i = 0; i < 1e3; i++) arr.push(new model1().save())
        await Promise.all(arr)
        console.timeEnd('save')

        console.time('save')
        arr = []
        for (let i = 0; i < 1e3; i++) arr.push(new model1().save())
        await Promise.all(arr)
        console.timeEnd('save')
        console.log(await model1.findOne())

        await mongoose.connection.db.dropDatabase()
        console.time('create')
        arr = []
        for (let i = 0; i < 1e3; i++) arr.push(new model1())
        await model1.create(arr)
        console.timeEnd('create')

        console.time('create')
        arr = []
        for (let i = 0; i < 1e3; i++) arr.push(new model1())
        await model1.create(arr)
        console.timeEnd('create')
        console.log(await model1.findOne())
        await mongoose.disconnect()
    })()
})
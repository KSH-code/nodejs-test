// { name: 'ab', arr: [], _id: 5b1494ba3c98982cee3d974e, __v: 0 }
// { name: 'ab',
//   arr: [ { test: 1 } ],
//   _id: 5b1494ba3c98982cee3d974e,
//   __v: 0 }
// { name: 'ab',
//   arr: [ { test: 1 }, { test: 2 } ],
//   _id: 5b1494ba3c98982cee3d974e,
//   __v: 0 }
// { name: 'ab',
//   arr: [ { test: 3 } ],
//   _id: 5b1494ba3c98982cee3d974e,
//   __v: 0 }
// { name: 'ab',
//   arr: [ { test: 4 }, { test: 5 } ],
//   _id: 5b1494ba3c98982cee3d974e,
//   __v: 0 }
const mongoose = require('mongoose')
mongoose.connect(`mongodb://localhost/test`, async err => {
  if (err) {
    console.error('mongodb connection error', err)
  }
  const schema = new mongoose.Schema({
    name: {
      type: String,
      default: 'ab'
    },
    arr: Array
  })
  const model = mongoose.model('asdgkljasdgkljzcxg5zx4g', schema)
  await model.remove()
  await new model().save()
  console.log(await model.findOne({}))
  await model.updateOne({ name: 'ab' }, { $push: { arr: { test: 1 } } })
  console.log(await model.findOne({}))
  await model.updateOne({ name: 'ab' }, { $push: { arr: { test: 2 } } })
  console.log(await model.findOne({}))
  await model.updateOne({ name: 'ab' }, { 'arr': { test: 3 } })
  console.log(await model.findOne({}))
  await model.updateOne({ name: 'ab' }, { 'arr': [{ test: 4 }, { test: 5 }] })
  console.log(await model.findOne({}))
  await mongoose.connection.close()
})
// { name1: 'hellm', _id: 5ab4adc7b9c6424a46576c85, __v: 0 }
const mongoose = require('mongoose')
mongoose.connect(`mongodb://localhost/test`, async err => {
  if (err) {
    console.error('mongodb connection error', err)
  }
  const scopeSchema1 = new mongoose.Schema({
    name1: {
      type: String,
      index: true,
      unique: true
    },
    arr: Array
  }
  )
  const model1 = mongoose.model('asdgkljasdgkljzcxg5zx4g', scopeSchema1)
  await model1.findOneAndUpdate({ name1: 'g' }, { }, { upsert: true })
  console.time('save')
  for (let i = 0; i < 1e2; i++) {
    try {
      await new model1({
        name1: 'g'
      }).save()
    } catch (err) { }
  }
  console.timeEnd('save')
  console.log(await model1.findOne())
  console.time('upsert')
  for (let i = 0; i < 1e2; i++) {
    await model1.findOneAndUpdate({ name1: 'g' }, {}, { upsert: true })
  }
  console.log(await model1.findOne())
  console.timeEnd('upsert')
})
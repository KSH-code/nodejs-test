// find name1 인덱스 name2 기본: 15637.142ms
// find name1 인덱스 find name3 인덱스: 2449.948ms
// find name1 인덱스 name3 인덱스: 2364.894ms
// find name1 인덱스: 3439.567ms
// find name2 인덱스 아닌거: 45278.540ms
// findOne name1 만 인덱스 적용: 16329.926ms
// findOne name1 인덱스 findOne name3 인덱스: 2683.496ms
// findOne name1 인덱스 name3 인덱스: 2662.403ms
// findOne name1 인덱스: 2503.414ms
// findOne name2 인덱스 아닌거: 50559.182ms
const mongoose = require('mongoose')
mongoose.connect(`mongodb://localhost/test`, err => {
  if (err) {
    console.error('mongodb connection error', err)
  }
  const schema = new mongoose.Schema({
    name: {
      type: String
    }
  }, {
      timestamps: {
        createdAt: 'dateCreated',
        updatedAt: false
      }
    }
  )
  const model = mongoose.model('mongoose-upsert-test', schema)
    ; (async function () {
      await model.deleteMany({})
      const name = 'abcdefg'
      console.log(await model.findOneAndUpdate(
        { name },
        { $set: { name }},
        { upsert: true, new: true }
      ))
      console.log(await model.findOneAndUpdate(
        { name },
        { $set: { name: 'name' }},
        { upsert: true, new: true }
      ))
      mongoose.disconnect()
    })()
})
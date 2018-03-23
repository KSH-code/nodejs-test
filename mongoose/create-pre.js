// { name1: 'hellm', _id: 5ab4adc7b9c6424a46576c85, __v: 0 }
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
  scopeSchema1.pre('save', function (next) {
    this.name1 = 'hellm'
    next()
  })
  const model1 = mongoose.model('zcxvbndsfh', scopeSchema1)
    ; (async function () {
        await mongoose.connection.db.dropDatabase()
        await model1.create(new model1())
        console.log(await model1.findOne())
    })()
})
// MongoError: Failed to parse: { find: "nsgfdhsdfhs", filter: {}, projection: {}, limit: "1", $db: "zxvzxvzxvzxvzxvzxvzxvzxvzxvzxvzxvxzvzxv" }. 'limit' field must be numeric.
const mongoose = require('mongoose')
mongoose.connect(`mongodb://localhost/zxvzxvzxvzxvzxvzxvzxvzxvzxvzxvzxvxzvzxv`, err => {
  if (err) {
    console.error('mongodb connection error', err)
  }
  const scopeSchema1 = new mongoose.Schema({
    test: {
      type: String
    }
  })
  const model1 = mongoose.model('nsgfdhsdfh', scopeSchema1)
    ; (async function () {
      await new model1({ name1: 'name1', name2: 'name1' }).save()
      await new model1({ name1: 'name2', name2: 'name2' }).save()
      console.log(await model1.find().limit('1'))
    })()
})
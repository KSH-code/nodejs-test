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
  }, {
      id: false
    })
  const model1 = mongoose.model('nsgfdhsdfh', scopeSchema1)
    ; (async function () {
      console.dir((await model1.collection.insertOne({ test: 'dasdbasdbasdbadsb' })))
      const a = await new model1({ test: 'd' }).save()
      delete a._doc._id
      console.log(a)
      console.log(await model1.create({ test: 'd' }))
    })()
})
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
  const model = mongoose.model('mongoose-hasNext-test', schema)
    ; (async function () {
        for (let i = 0; i < 1e4; i++) {
            await new model({ name: `${i}` }).save()
        }
        for (let i = 0; i < 1e4; i++) {
            await model.find()
        }
      mongoose.disconnect()
    })()
})
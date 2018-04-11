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
        for (let i = 0; i < 1e3; i++) {
            await new model({ name: `${i}` }).save()
        }
        const f = model.collection.find()
        while (f.hasNext()) {
            console.log(await f.next())
        }
      mongoose.disconnect()
    })()
})
const mongoose = require('mongoose')
mongoose.connect(`mongodb://localhost/asdg6asd4gasdg5asdg`, err => {
  if (err) {
    console.error('mongodb connection error', err)
  }
  const schema = new mongoose.Schema({
    name: {
      type: String,
      index: true
    }
  }, {
      timestamps: {
        createdAt: 'dateCreated',
        updatedAt: false
      }
    }
  )
  const model = mongoose.model('mongoose-test', schema)
    ; (async function () {
        try {
            for (let i = 0; i < 1e5; i++) {
                await new model({ name: `${i}` }).save()
            }
        } catch (err) {}
        console.time('end')
        await model.find({ name: '0' })
        console.timeEnd('end')
      mongoose.disconnect()
    })()
})
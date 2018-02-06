const mongoose = require('mongoose')
mongoose.connect(`mongodb://localhost/test`, err => {
  if (err) {
    console.error('mongodb connection error', err)
  }
  const scopeSchema1 = new mongoose.Schema({
    name1: {
      type: String,
      unique: true,
      required: true
    },
    name2: {
      type: String,
      unique: true,
      required: true
    }
  }, {
      timestamps: {
        createdAt: 'dateCreated',
        updatedAt: false
      }
    }
  )
  scopeSchema1.index({ name1: 1, name2: 1 })
  const model1 = mongoose.model('qwuieth', scopeSchema1)
    ; (async function () {
      try {
        console.log(model1.findOne({ name1: '1' }, (err, he) => {
          return true
        }))
      } catch (err) { console.error(err) }
    })()
})
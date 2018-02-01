const mongoose = require('mongoose')
mongoose.connect(`mongodb://localhost/test`, err => {
  if (err) {
    console.error('mongodb connection error', err)
  }
  const scopeSchema = new mongoose.Schema({
    name: {
      type: String,
      unique: true,
      required: true
    }
  }, {
      timestamps: {
        createdAt: 'dateCreated',
        updatedAt: false
      }
    })
  scopeSchema.static('canUse', function (obj) {
    return obj.status === 'ACTIVE'
  })
  scopeSchema.index({ name: 1 })
  const model = mongoose.model('Scope', scopeSchema)
    ; (async function () {
      try {
        await model.find()
        for (let j = 0; j < 10; j++) {
          console.time('static')
          for (let i = 0; i < 10000; i++) model.canUse(await model.findOne({ name: 'asdb' }))
          console.timeEnd('static')
          console.time('not static')
          for (let i = 0; i < 10000; i++) (await model.findOne({ name: 'asdb' })).status === 'ACTIVE'
          console.timeEnd('not static')
        }

      } catch (err) {
        console.error(err)
      }
    })()
})
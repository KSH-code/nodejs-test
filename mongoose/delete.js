// deleteOne index: 2632.316ms
// deleteOne not used index: 2430.644ms
// deleteMany index: 2540.401ms
// deleteMany not used index: 22147.881ms
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
    },
    temp: {
      type: String,
      required: true
    }
  }, {
      timestamps: {
        createdAt: 'dateCreated',
        updatedAt: false
      }
    }
  )
  scopeSchema.index({ name: 1 })
  const model = mongoose.model('asdgasdgasdg', scopeSchema)
    ; (async function () {
      try {
        for (let i = 0; i < 10000; i++) {
          await new model({
            name: `${i}`,
            temp: `${i}`
          }).save()
        }
        console.time('deleteOne index')
        for (let i = 0; i < 10000; i++) {
          await model.deleteOne({ name: `${i}`})
        }
        console.timeEnd('deleteOne index')
        for (let i = 0; i < 10000; i++) {
          await new model({
            name: `${i}`,
            temp: `${i}`
          }).save()
        }
        console.time('deleteOne not used index')
        for (let i = 0; i < 10000; i++) {
          await model.deleteOne({ temp: `${i}`})
        }
        console.timeEnd('deleteOne not used index')
        for (let i = 0; i < 10000; i++) {
          await new model({
            name: `${i}`,
            temp: `${i}`
          }).save()
        }
        console.time('deleteMany index')
        for (let i = 0; i < 10000; i++) {
          await model.deleteMany({ name: `${i}`})
        }
        console.timeEnd('deleteMany index')
        for (let i = 0; i < 10000; i++) {
          await new model({
            name: `${i}`,
            temp: `${i}`
          }).save()
        }
        console.time('deleteMany not used index')
        for (let i = 0; i < 10000; i++) {
          await model.deleteMany({ temp: `${i}`})
        }
        console.timeEnd('deleteMany not used index')
      } catch (err) {
        console.error(err)
      }
    })()
})
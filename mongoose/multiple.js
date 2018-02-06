// save index: 9223.934ms
// find multiple index: 2774.607ms
// find reversed multiple index: 2469.746ms

// save index: 9435.877ms
// find reversed multiple index: 2779.027ms
// find multiple index: 2498.780ms
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
        await model1.deleteMany()
        console.time('save index')
        for (let i = 0; i < 20000; i++) {
          await new model1({
            name1: `${i}`,
            name2: `${i}`
          }).save()
        }
        console.timeEnd('save index')
        console.time('find multiple index')
        for (let i = 0; i < 10000; i++) {
          await model1.find({
            name1: `${i}`,
            name2: `${i}`
          })
        }
        console.timeEnd('find multiple index')
        console.time('find reversed multiple index')
        for (let i = 0; i < 10000; i++) {
          await model1.find({
            name2: `${i}`,
            name1: `${i}`
          })
        }
        console.timeEnd('find reversed multiple index')
        await model1.deleteMany()
        mongoose.disconnect()
      } catch (err) {
        console.error(err)
      }
    })()
})
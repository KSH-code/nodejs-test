// save index: 3562.169ms
// save not used index: 3507.173ms
// save index: 3460.740ms
// save not used index: 3528.819ms
const mongoose = require('mongoose')
mongoose.connect(`mongodb://localhost/test`, err => {
  if (err) {
    console.error('mongodb connection error', err)
  }
  const scopeSchema1 = new mongoose.Schema({
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
    }
  )
  const scopeSchema2 = new mongoose.Schema({
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
    }
  )
  scopeSchema1.index({ name: 1 })
  const model1 = mongoose.model('qwuieth', scopeSchema1)
  const model2 = mongoose.model('zbxcbzxcb', scopeSchema2)
    ; (async function () {
      try {
        await model2.deleteMany()
        for (let i = 0; i < 10000; i++) {
          await new model2({
            name: `${i}`
          }).save()
        }
        console.time('save not used index')
        for (let i = 10000; i < 20000; i++) {
          await new model2({
            name: `${i}`
          }).save()
        }
        console.timeEnd('save not used index')
        await model1.deleteMany()
        for (let i = 0; i < 10000; i++) {
          await new model1({
            name: `${i}`
          }).save()
        }
        console.time('save index')
        for (let i = 10000; i < 20000; i++) {
          await new model1({
            name: `${i}`
          }).save()
        }
        console.timeEnd('save index')
      } catch (err) {
        console.error(err)
      }
    })()
})
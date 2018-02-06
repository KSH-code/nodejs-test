// find name1 만 인덱스 적용: 15590.580ms
// find 인덱스: 3702.730ms
// find 인덱스 아닌거: 40035.381ms
// findOne name1 만 인덱스 적용: 8391.551ms
// findOne 인덱스: 2794.259ms
// findOne 인덱스 아닌거: 40759.905ms
const mongoose = require('mongoose')
mongoose.connect(`mongodb://localhost/test`, err => {
  if (err) {
    console.error('mongodb connection error', err)
  }
  const scopeSchema1 = new mongoose.Schema({
    name1: {
      type: String
    },
    name2: {
      type: String
    }
  }, {
      timestamps: {
        createdAt: 'dateCreated',
        updatedAt: false
      }
    }
  )
  scopeSchema1.index({ name1: 1 })
  const model1 = mongoose.model('asdhasjdhahzxcn', scopeSchema1)
    ; (async function () {
      try {
        await model1.deleteMany()
        for (let i = 0; i < 10; i++) {
          for (let j = 0; j < 1000; j++) {
            await new model1({
              name1: `${i}`,
              name2: `${j}ag`
            }).save()
          }
        }

        for (let i = 0; i < 10; i++) {
          for (let j = 0; j < 1000; j++) {
            await model1.find({ name1: `${i}`, name2: `${j}ag` })
          }
        }
        console.time('find name1 만 인덱스 적용')
        for (let i = 0; i < 10; i++) {
          for (let j = 0; j < 1000; j++) {
            await model1.find({ name1: `${i}`, name2: `${j}ag` })
          }
        }
        console.timeEnd('find name1 만 인덱스 적용')

        for (let j = 0; j < 10; j++) {
          for (let i = 0; i < 1000; i++) {
            await model1.find({ name1: `${i}` })
          }
        }
        console.time('find 인덱스')
        for (let j = 0; j < 10; j++) {
          for (let i = 0; i < 1000; i++) {
            await model1.find({ name1: `${i}` })
          }
        }
        console.timeEnd('find 인덱스')

        for (let i = 0; i < 10; i++) {
          for (let j = 0; j < 1000; j++) {
            await model1.find({ name2: `${j}ag` })
          }
        }
        console.time('find 인덱스 아닌거')
        for (let i = 0; i < 10; i++) {
          for (let j = 0; j < 1000; j++) {
            await model1.find({ name2: `${j}ag` })
          }
        }
        console.timeEnd('find 인덱스 아닌거')

        for (let i = 0; i < 10; i++) {
          for (let j = 0; j < 1000; j++) {
            await model1.findOne({ name1: `${i}`, name2: `${j}ag` })
          }
        }
        console.time('findOne name1 만 인덱스 적용')
        for (let i = 0; i < 10; i++) {
          for (let j = 0; j < 1000; j++) {
            await model1.findOne({ name1: `${i}`, name2: `${j}ag` })
          }
        }
        console.timeEnd('findOne name1 만 인덱스 적용')

        for (let j = 0; j < 10; j++) {
          for (let i = 0; i < 1000; i++) {
            await model1.findOne({ name1: `${i}` })
          }
        }
        console.time('findOne 인덱스')
        for (let j = 0; j < 10; j++) {
          for (let i = 0; i < 1000; i++) {
            await model1.findOne({ name1: `${i}` })
          }
        }
        console.timeEnd('findOne 인덱스')

        for (let i = 0; i < 10; i++) {
          for (let j = 0; j < 1000; j++) {
            await model1.findOne({ name2: `${j}ab` })
          }
        }
        console.time('findOne 인덱스 아닌거')
        for (let i = 0; i < 10; i++) {
          for (let j = 0; j < 1000; j++) {
            await model1.findOne({ name2: `${j}ab` })
          }
        }
        console.timeEnd('findOne 인덱스 아닌거')
        mongoose.disconnect()
      } catch (err) {
        console.error(err)
      }
    })()
})
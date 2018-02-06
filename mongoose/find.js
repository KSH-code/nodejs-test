// find name1 인덱스 name2 기본: 15637.142ms
// find name1 인덱스 find name3 인덱스: 2449.948ms
// find name1 인덱스 name3 인덱스: 2364.894ms
// find name1 인덱스: 3439.567ms
// find name2 인덱스 아닌거: 45278.540ms
// findOne name1 만 인덱스 적용: 16329.926ms
// findOne name1 인덱스 findOne name3 인덱스: 2683.496ms
// findOne name1 인덱스 name3 인덱스: 2662.403ms
// findOne name1 인덱스: 2503.414ms
// findOne name2 인덱스 아닌거: 50559.182ms
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
    },
    name3: {
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
  scopeSchema1.index({ name3: 1 })
  const model1 = mongoose.model('asdhasjdhahzxcn', scopeSchema1)
    ; (async function () {
      console.log(await model1.findOne({ name1: `${i}` }).findOne({ name3: `${j}` }))
      console.log(await model1.findOne({ name1: `${i}` }))
      try {
        await model1.deleteMany()
        for (let i = 0; i < 10; i++) {
          for (let j = 0; j < 1000; j++) {
            await new model1({
              name1: `${i}`,
              name2: `${j}ag`,
              name2: `${j}`
            }).save()
          }
        }

        for (let i = 0; i < 10; i++) {
          for (let j = 0; j < 1000; j++) {
            await model1.find({ name1: `${i}`, name2: `${j}ag` })
          }
        }
        console.time('find name1 인덱스 name2 기본')
        for (let i = 0; i < 10; i++) {
          for (let j = 0; j < 1000; j++) {
            await model1.find({ name1: `${i}`, name2: `${j}ag` })
          }
        }
        console.timeEnd('find name1 인덱스 name2 기본')

        for (let i = 0; i < 10; i++) {
          for (let j = 0; j < 1000; j++) {
            await model1.find({ name1: `${i}` }).find({ name3: `${j}` })
          }
        }
        console.time('find name1 인덱스 find name3 인덱스')
        for (let i = 0; i < 10; i++) {
          for (let j = 0; j < 1000; j++) {
            await model1.find({ name1: `${i}` }).find({ name3: `${j}` })
          }
        }
        console.timeEnd('find name1 인덱스 find name3 인덱스')

        for (let i = 0; i < 10; i++) {
          for (let j = 0; j < 1000; j++) {
            await model1.find({ name1: `${i}`, name3: `${j}` })
          }
        }
        console.time('find name1 인덱스 name3 인덱스')
        for (let i = 0; i < 10; i++) {
          for (let j = 0; j < 1000; j++) {
            await model1.find({ name1: `${i}`, name3: `${j}` })
          }
        }
        console.timeEnd('find name1 인덱스 name3 인덱스')

        for (let j = 0; j < 10; j++) {
          for (let i = 0; i < 1000; i++) {
            await model1.find({ name1: `${i}` })
          }
        }
        console.time('find name1 인덱스')
        for (let j = 0; j < 10; j++) {
          for (let i = 0; i < 1000; i++) {
            await model1.find({ name1: `${i}` })
          }
        }
        console.timeEnd('find name1 인덱스')

        for (let i = 0; i < 10; i++) {
          for (let j = 0; j < 1000; j++) {
            await model1.find({ name2: `${j}ag` })
          }
        }
        console.time('find name2 인덱스 아닌거')
        for (let i = 0; i < 10; i++) {
          for (let j = 0; j < 1000; j++) {
            await model1.find({ name2: `${j}ag` })
          }
        }
        console.timeEnd('find name2 인덱스 아닌거')

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

        for (let i = 0; i < 10; i++) {
          for (let j = 0; j < 1000; j++) {
            await model1.findOne({ name1: `${i}` }).findOne({ name3: `${j}` })
          }
        }
        console.time('findOne name1 인덱스 findOne name3 인덱스')
        for (let i = 0; i < 10; i++) {
          for (let j = 0; j < 1000; j++) {
            await model1.findOne({ name1: `${i}` }).findOne({ name3: `${j}` })
          }
        }
        console.timeEnd('findOne name1 인덱스 findOne name3 인덱스')

        for (let i = 0; i < 10; i++) {
          for (let j = 0; j < 1000; j++) {
            await model1.findOne({ name1: `${i}`, name3: `${j}` })
          }
        }
        console.time('findOne name1 인덱스 name3 인덱스')
        for (let i = 0; i < 10; i++) {
          for (let j = 0; j < 1000; j++) {
            await model1.findOne({ name1: `${i}`, name3: `${j}` })
          }
        }
        console.timeEnd('findOne name1 인덱스 name3 인덱스')

        for (let j = 0; j < 10; j++) {
          for (let i = 0; i < 1000; i++) {
            await model1.findOne({ name1: `${i}` })
          }
        }
        console.time('findOne name1 인덱스')
        for (let j = 0; j < 10; j++) {
          for (let i = 0; i < 1000; i++) {
            await model1.findOne({ name1: `${i}` })
          }
        }
        console.timeEnd('findOne name1 인덱스')

        for (let i = 0; i < 10; i++) {
          for (let j = 0; j < 1000; j++) {
            await model1.findOne({ name2: `${j}ab` })
          }
        }
        console.time('findOne name2 인덱스 아닌거')
        for (let i = 0; i < 10; i++) {
          for (let j = 0; j < 1000; j++) {
            await model1.findOne({ name2: `${j}ab` })
          }
        }
        console.timeEnd('findOne name2 인덱스 아닌거')
        mongoose.disconnect()
      } catch (err) {
        console.error(err)
      }
    })()
})
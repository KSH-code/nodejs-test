// []
// []
// []
// []
// [ { _id: 5a8cea1a1b92ec2048903814,
//     name1: 'name1',
//     name2: 'name1',
//     dateCreated: 2018-02-21T03:40:10.941Z,
//     __v: 0 },
//   { _id: 5a8cea277be3e43c68cdf9c8,
//     name1: 'name1',
//     name2: 'name1',
//     dateCreated: 2018-02-21T03:40:23.985Z,
//     __v: 0 } ]
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
  const model1 = mongoose.model('nsgfdhsdfh', scopeSchema1)
    ; (async function () {
      await new model1({ name1: 'name1', name2: 'name1' }).save()
      await new model1({ name1: 'name2', name2: 'name2' }).save()
      console.log(await model1.find({ name1: undefined }))
      console.log(await model1.find({ name1: undefined, name2: undefined }))
      console.log(await model1.find({ name1: 'name1', name2: undefined }))
      console.log(await model1.find({ name1: undefined, name2: 'name1' }))
      console.log(await model1.find({ name1: 'name1', name2: 'name1' }))
    })()
})
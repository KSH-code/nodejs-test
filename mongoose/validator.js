
const mongoose = require('mongoose')
mongoose.connect(`mongodb://localhost/test`, async err => {
  if (err) {
    console.error('mongodb connection error', err)
  }
  const scopeSchema1 = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      validate: {
        isAsync: true,
        validator: function (v, cb) {
          console.log('validate' + v)
          console.dir(arguments)
          cb(true, 'success')
        }
      }
    }
  }, {
      timestamps: {
        createdAt: 'dateCreated',
        updatedAt: false
      }
    }
  )
  const model1 = mongoose.model('zxbzxcb', scopeSchema1)
  await new model1({ name: 'ab1' }).save()
  await model1.update({ name: 'ab1' }, { name: 'ab2' })
  console.log(await model1.findOne({ name: 'ab2' }))
})
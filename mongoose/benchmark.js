const mongoose = require('mongoose')
mongoose.connect(`mongodb://localhost/asdbasdbasdbsab`, err => {
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
    scopeSchema1.index({ name: 1 })
    const model1 = mongoose.model('qwuieth', scopeSchema1)
        ; (async function () {
            console.time('insert')
            for (let i = 0; i < 10000; i++) {
                try {
                    await new model1({
                        name: `${i}`
                    }).save()
                } catch (err) {
                }
            }
            console.timeEnd('insert')
            console.time('update')
            for (let i = 0; i < 10000; i++) {
                await model1.updateOne({ name: `${i}` }, { name: `A${i}` })
            }
            console.timeEnd('update')
        })()
})
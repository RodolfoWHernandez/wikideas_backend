const mongoose = require('mongoose')

const topicSchema = new mongoose.Schema({
    _id: Number,
    title: String
},

{
    toJSON: { virtuals: true }, // So `res.json()` and other `JSON.stringify()` functions include virtuals
    toObject: { virtuals: true }, // So `console.log()` and other functions that use `toObject()` include virtuals
  }
)

const Topic = mongoose.model('Topic', topicSchema);

const getAll = async()=>{
    return await Topic.find()
}

const save = async(object)=>{
    const newTopic = new Topic({
        _id: object.id,
        title: object.title
    })
    await newTopic.save()
}

module.exports = {Topic, getAll, save}
const mongoose = require('mongoose')

//Schema Topic
const topicSchema = new mongoose.Schema({
    _id: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    publishDate: {
        type: Date,
        required: true
    },
    tags: {
        type: Array
    }
},

{
    toJSON: { virtuals: true }, // So `res.json()` and other `JSON.stringify()` functions include virtuals
    toObject: { virtuals: true }, // So `console.log()` and other functions that use `toObject()` include virtuals
    versionKey: false,
}
)

const Topic = mongoose.model('Topic', topicSchema);

//Get all Topics
const getAll = async()=>{
    return await Topic.find()
}

//Get one Topic for id
const get = async(object)=>{
    const filtro = {_id: Number(object.id)}
    return await Topic.findOne(filtro)  
}

//Create new Topic
const save = async(object)=>{
    const newTopic = new Topic({
        _id: object.id,
        title: object.title,
        description: object.description,
        image: object.image,
        publishDate: new Date(),
        tags: object.tags

    })
    await newTopic.save()
}

//Update Topic for id
const update = async(object, callback)=>{
    const filtro = { _id: Number(object.id) }
    delete object.id;
    const operacion = {
        $set:object
    }
    return await Topic.findOneAndUpdate(filtro, operacion,{ upsert:true}, callback)
}

//Delete one Topic
const delet = async(id, callback)=>{
    const filtro = { _id: Number(id) }
    await Topic.deleteOne(filtro, callback)
}

module.exports = {Topic, getAll, get, save, update, delet}
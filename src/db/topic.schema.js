const mongoose = require('mongoose');

const categories = ["Cultura y arte", "Filosofía y pensamiento", "Geografía", "Personas", "Tecnología", "Ciencias sociales", "Ciencias Naturales", "Política", "Religión"]
//Schema Topic
const topicSchema = new mongoose.Schema({
    _id: {
        type: Number,
        unique: true,
        min: 1,
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
        default: Date.now,
        required: true
    },
    updateDate: {
        type: Date
    },
    tags: {
        type: Array
    },
    author: {
        type: String,
        required: true
    },
    category: {
        type: String,
        default: function () {
            return categories[Math.floor(Math.random() * categories.length)]
        }
    }
},

{
    toJSON: { virtuals: true }, // So `res.json()` and other `JSON.stringify()` functions include virtuals
    toObject: { virtuals: true }, // So `console.log()` and other functions that use `toObject()` include virtuals
    versionKey: false,
}
)

//Model topic
const Topic = mongoose.model('Topic', topicSchema);

//Counter id schema
const counterSchema = new mongoose.Schema({
    _id : String,
    sequence_value: Number
})

//Model Counter 
const Counter = mongoose.model('Counter', counterSchema)

//Get all Topics
const getAll = async(limit)=>{
    if(limit){
        return await Topic.find().limit(limit)
    }
    return await Topic.find()
}

//Get one Topic for id
const get = async(object)=>{
    const filtro = {_id: Number(object.id)}
    return await Topic.findOne(filtro)  
}

//Counter id and update counter
const counterId = async(callback)=>{
    const filtro = { _id: "topicid" }
    //delete id;
    let newCounter = await Counter.findOneAndUpdate(filtro, { upsert:true, $inc:{sequence_value:1}}, callback)
    return newCounter.sequence_value
}

//Create new Topic
const save = async(object)=>{
    const id = await counterId()
    const newTopic = new Topic({
        _id: id,
        title: object.title,
        description: object.description,
        image: object.image,
        tags: object.tags,
        author: object.author
    })
    await newTopic.save()
}

//Update Topic for id
const update = async(object, updateDate, callback)=>{
    const filtro = { _id: Number(object.id) }
    delete object.id;
    object.updateDate = updateDate
    return await Topic.findOneAndUpdate(filtro, object, callback)

}

//Delete one Topic
const delet = async(id, callback)=>{
    const filtro = { _id: Number(id) }
    await Topic.deleteOne(filtro, callback)
}

module.exports = {Topic, getAll, get, save, update, delet}
const mongoose = require('mongoose');
const counterId = require('./counter.schema')
const Category = require('./category.schema')

//const categories = ["Cultura y arte", "Filosofía y pensamiento", "Geografía", "Personas", "Tecnología", "Ciencias sociales", "Ciencias Naturales", "Política", "Religión"]

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
        type: Number,
        ref: Category.Category,
        required: true
    }
},

{
    toJSON: { virtuals: true }, // So `res.json()` and other `JSON.stringify()` functions include virtuals
    toObject: { virtuals: true }, // So `console.log()` and other functions that use `toObject()` include virtuals
    versionKey: false,
}
)

//Autopopulate
//topicSchema.plugin(require('mongoose-autopopulate'))

//Model topic
const Topic = mongoose.model('Topic', topicSchema);

//Get all Topics
const getAll = async()=>{
    const topics = await Topic.find().populate({path: 'category', select: 'title'})
    return topics
}

const pagination = async(skip, limit) => {
    const cantidad = Number(limit) || 5;
    const page = Number(skip) || 1;
    const topics = await Topic.find().skip(cantidad*(page-1)).limit(cantidad).populate({path: 'category', select: 'title'})
    const totalTopics = await Topic.find().countDocuments()
    return { topics, totalTopics }
}

//Get one Topic for id
const get = async(object)=>{
    const filtro = {_id: Number(object.id)}
    return await Topic.findOne(filtro).populate({path: 'category', select: 'title'})
}

//Get Topics for category id
const getTopicsByCategory = async(object)=>{
    const filtro = {_id: Number(object)}
    let topics = await Topic.find({'category': filtro})
    return topics
    
}

//Create new Topic
const save = async(object)=>{
    const id = await counterId.counterId("topicid")
    const newTopic = new Topic({
        _id: id,
        title: object.title,
        description: object.description,
        image: object.image,
        tags: object.tags,
        author: object.author,
        category: object.category
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

module.exports = {Topic, getAll, get, getTopicsByCategory, save, update, delet, pagination}
const mongoose = require('mongoose')
const counterId = require('./counter.schema')

//Schema Category
const categorySchema = new mongoose.Schema({
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

const Category = mongoose.model('Categorys', categorySchema);

//Get all Categorys
const getAll = async()=>{
    return await Category.find()
}

//Get one Category for id
const get = async(object)=>{
    const filtro = {_id: Number(object.id)}
    return await Category.findOne(filtro)  
}

//Create new Category
const save = async(object)=>{
    const id = await counterId.counterId("categoryid")
    console.log(id);
    const newCategory = new Category({
        _id: object.id,
        title: object.title,
        description: object.description,
        tags: object.tags,
        topics: object.topics

    })
    await newCategory.save()
}

//Update Category for id
const update = async(object, callback)=>{
    const filtro = { _id: Number(object.id) }
    delete object.id;
    const operacion = {
        $set:object
    }
    return await Category.findOneAndUpdate(filtro, operacion,{ upsert:true}, callback)
}

//Delete one Category
const delet = async(id, callback)=>{
    const filtro = { _id: Number(id) }
    await Category.deleteOne(filtro, callback)
}

module.exports = {Category, getAll, get, save, update, delet}
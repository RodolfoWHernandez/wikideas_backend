const mongoose = require('mongoose')

const topicSchema = new mongoose.Schema({
    title: String
})

const Topic = mongoose.model('Topic', topicSchema);

const getAll = async()=>{
    return await Topic.find()
}

module.exports = {Topic, getAll}
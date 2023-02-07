const topicModel = require('../db/topic.schema')

exports.getAll = async function () {
    try{
        const topics = await topicModel.getAll()
        return topics;
    } catch(error){
        return null
    }
}
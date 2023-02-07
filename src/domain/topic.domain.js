const topicModel = require('../db/topic.schema')

exports.getAll = async function () {
    try{
        const topics = await topicModel.getAll()
        return topics;
    } catch(error){
        return null
    }
}

exports.save = async function (topicObj) {
    try {
        const topic = topicModel.save(topicObj)
        return topic;
    } catch (error) {
        return null;
    }
}
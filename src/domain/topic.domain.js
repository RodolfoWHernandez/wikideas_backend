const topicModel = require('../db/topic.schema')

exports.getAll = async function () {
    try{
        const topics = await topicModel.getAll()
        return topics;
    } catch(error){
        return null
    }
}

exports.get = async function (topicObj) {
    try {
        const topic = await topicModel.get(topicObj)
        return topic;
    } catch (error) {
        return null;
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

exports.update = async function (topicObj) {
    try {
        const topic = await topicModel.update(topicObj)
        return topic;
    } catch (error) {
        return null;
    }
}

exports.delete = async function (topicObj) {
    try {
        const topic = topicModel.delet(topicObj)
        return topic;
    } catch (error) {
        return null;
    }
}
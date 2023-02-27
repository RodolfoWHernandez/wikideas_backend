const topicModel = require('../db/topic.schema')

exports.getAll = async function (limit, skip) {
    try{
        let topicsList = await topicModel.getAll(limit, skip);
        return topicsList
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
    let updateDate = new Date
    try {
        const topic = await topicModel.update(topicObj, updateDate)
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
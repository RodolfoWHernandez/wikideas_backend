const topicDomain = require('../domain/topic.domain')

exports.getAll = async function (req, res){
    try{
        const { skip, limit } = req.query
        let topicsList = await topicDomain.getAll(skip, limit);
        let cantidadTopics = topicsList.totalTopics;
        res.status(200).json(topicsList)
    } catch(error){
        res.status(404).json({
            message: error.message
        })
    }
}

exports.get = async function (req, res) {
    try {
        let topic = await topicDomain.get(req.params);
        if(topic==null){
            topic = "Not exist"
        }
        res.status(200).json(topic);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

exports.getTopics = async function (req, res) {
    try {
        let totalTopics = await topicDomain.getTopics(req.params);
        if(totalTopics==null){
            totalTopics = "Not found"
        }
        res.status(200).json(totalTopics);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

exports.save = async function (req, res) {
    try {
        const topic = topicDomain.save(req.body);
        res.status(200).json(topic);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

exports.update = async function (req, res) {
    try {
        const topic = topicDomain.update(req.body);
        res.status(200).json(topic);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

exports.delete = async function (req, res) {
    try {
        const topic = topicDomain.delete(req.params.id);
        res.status(200).json(topic);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}



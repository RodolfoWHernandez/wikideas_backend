const topicDomain = require('../domain/topic.domain')

exports.getAll = async function (req, res){
    try{
        let topicsList = await topicDomain.getAll();
        res.status(200).json(topicsList)
    } catch(error){
        res.status(404).json({
            message: error.message
        })
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
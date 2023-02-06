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
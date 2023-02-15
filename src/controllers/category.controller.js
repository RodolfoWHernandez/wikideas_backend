const categoryDomain = require('../domain/category.domain')

exports.getAll = async function (req, res){
    try{
        let categorysList = await categoryDomain.getAll();
        res.status(200).json(categorysList)
    } catch(error){
        res.status(404).json({
            message: error.message
        })
    }
}

exports.get = async function (req, res) {
    try {
        let category = await categoryDomain.get(req.params);
        if(category==null){
            category = "Not exist"
        }
        res.status(200).json(category);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

exports.save = async function (req, res) {
    try {
        const category = categoryDomain.save(req.body);
        res.status(200).json(category);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

exports.update = async function (req, res) {
    try {
        const category = categoryDomain.update(req.body);
        res.status(200).json(category);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

exports.delete = async function (req, res) {
    try {
        const category = categoryDomain.delete(req.params.id);
        res.status(200).json(category);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
const categoryModel = require('../db/category.schema')

exports.getAll = async function () {
    try{
        const categorys = await categoryModel.getAll()
        return categorys;
    } catch(error){
        return null
    }
}

exports.get = async function (categoryObj) {
    try {
        const category = await categoryModel.get(categoryObj)
        return category;
    } catch (error) {
        return null;
    }
}

exports.save = async function (categoryObj) {
    try {
        const category = categoryModel.save(categoryObj)
        return category;
    } catch (error) {
        return null;
    }
}

exports.update = async function (categoryObj) {
    try {
        const category = await categoryModel.update(categoryObj)
        return category;
    } catch (error) {
        return null;
    }
}

exports.delete = async function (categoryObj) {
    try {
        const category = categoryModel.delet(categoryObj)
        return category;
    } catch (error) {
        return null;
    }
}
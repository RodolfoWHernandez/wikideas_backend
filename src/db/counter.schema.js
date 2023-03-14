const mongoose = require('mongoose');
//Counter id schema
const counterSchema = new mongoose.Schema({
    _id : String,
    sequence_value: Number
})

//Model Counter 
const Counter = mongoose.model('Counter', counterSchema)

//Counter id and update counter
const counterId = async(id, callback)=>{
    const filtro = { _id: id }
    //delete id;
    let newCounter = await Counter.findOneAndUpdate(filtro, { upsert:true, $inc:{sequence_value:1}}, callback)
    return newCounter.sequence_value
}


module.exports = { counterId }
const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();


const port = process.env.PORT||8000;

app.get('/', (req, res) =>{
    //Send 200 json
    res.render()
})


app.listen(8000, ()=>{
    console.log(`Express server. Running at http://localhost:${port}`)
})

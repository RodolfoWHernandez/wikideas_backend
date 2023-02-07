const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
//const conexionBD = require('./src/db/db');
const topicRoutes = require('./src/routes/topic.routes')
require('./src/db/connection')



//Configuration the .env file
dotenv.config();

//Create Express App
const app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())

//Define the first Route or App
app.get('/hello', (req, res) =>{
    //Send 200 json
    res.render()
    res.status(200).json(
        {
            "message": "Hello World",
        }
    )
})

app.use('/topics', topicRoutes)

app.listen(8000, ()=>{
    console.log(`Express server. Running at http://localhost:${port}`)
})


//conexionBD.conexionBD()
//conectionBD.conectionBD()

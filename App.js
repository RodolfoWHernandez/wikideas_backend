const express = require('express');
var cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const topicRoutes = require('./src/routes/topic.routes')
require('./src/db/connection')

//Configuration the .env file
dotenv.config();

//Create Express App
const app = express();
app.use(cors())
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

//Routes
const router = express.Router()
app.use('/api/v1', router)
router.use('/topics', topicRoutes)

//Port listening
app.listen(port, ()=>{
    console.log(`Express server. Running at http://localhost:${port}`)
})


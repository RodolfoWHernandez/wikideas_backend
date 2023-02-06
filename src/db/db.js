const MongoDb = require('mongodb')
const dotenv = require('dotenv')

dotenv.config({path:'./.env'})

const stringConexion = process.env.DATABASE_URL;

const cliente = new MongoDb.MongoClient(stringConexion,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

let conexion;

conexionBD = ()=>{

    cliente.connect((error,db)=>{
        if(error){
            console.error("Error en la conexion a la db")
            return "Error"
        }
        conexion = db.db("wikideas")
        console.log("Conexión exitosa")
        return true;
        
    })
}

getDB = () => {
    return conexion;
}

module.exports = { getDB, conexionBD }
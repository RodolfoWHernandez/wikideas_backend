const MongoDb = require('mongodb')
const dotenv = require('dotenv')

dotenv.config({path:'./.env'})

const stringConexion = process.env.DATABASE_URL;
console.log(stringConexion);
const cliente = new MongoDb.MongoClient(stringConexion,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

let conexion;

conexionBD = ()=>{
    console.log('init');
   cliente.connect((error,db)=>{
    console.log('process connect');

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
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config({path:'./.env'})
const stringConexion = process.env.DATABASE_URL;

mongoose.connect(stringConexion, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
mongoose.set('strictQuery', false);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:')); // Error en conexión
db.once('open', () => {
  console.log('Connected'); // Conexión exitosa
});


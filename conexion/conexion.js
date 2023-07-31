const mongoose = require('mongoose');
require('dotenv').config();

//Traemos las url de conexiones a Mongo
const MONGOLOCAL = process.env.MONGOLOCAL;
const MONGOATLAS = process.env.MONGOATLAS;

//Conexion a la base de datos Mongo - 2
mongoose.connect(MONGOLOCAL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log(`Database conectada a local/Atlas`);
    })
    .catch((error) => {
        console.log(`El error es: ${error}`)
    })


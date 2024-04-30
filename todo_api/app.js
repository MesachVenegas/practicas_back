const routes = require('./src/routes/todo.routes');
const db = require('./src/config/connection');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT || 8000;

const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use(routes);

db.authenticate()
.then( () => console.log('Conectado a la base de datos'))
.catch( (err) => console.error(err) );

db.sync()
.then( () => console.log('Base de datos sincronizada con éxito'))
.catch( (err) => console.error(err) );

app.listen(PORT, () =>{
    console.log(`Servidor escuchando en el el puerto ${PORT}`)
})

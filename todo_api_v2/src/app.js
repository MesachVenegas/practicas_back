const categoryRoutes = require('./routes/category.routes');
const userRoutes = require('./routes/users.routes');
const tasksRoutes = require('./routes/task.routes');
const initModels = require('./models/initModels');
const db = require('./config/connection');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT || 8000;

const app = express();

initModels()

db.authenticate()
    .then(() => console.log('Connection Data Base successfully'))
    .catch((err) => console.error(err));

db.sync()
    .then(() => console.log('Sincronice Data Base successfully'))
    .catch((err) => console.error(err));

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use(userRoutes);
app.use(categoryRoutes);
app.use(tasksRoutes);

app.listen(PORT, () => {
    console.log(`Server on line and listening on port ${PORT}`);
});

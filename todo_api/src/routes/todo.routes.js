const ToDO = require('../models/todos.model');
const { Router } = require('express');

const routes = Router();

// get all todos on DDBB.
routes.get('/api/v1/todos', async (req, res) => {
    try {
        const result = await ToDO.findAll({
            attributes: [
                'id',
                'title',
                'description',
                'is_completed',
                'created_at',
            ]
        });
        res.status(200).send(result)
    }
    catch (err) {
        console.error(err);
        res.send(err);
    }
});

// Get todo by pk.
routes.get('/api/v1/todos/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await ToDO.findByPk(id, {
            attributes: [
                "id",
                "title",
                "description",
                "is_completed",
            ]
        })
        res.send(result);
    }
    catch (err) {
        console.error(err);
        res.send(err);
    }
});

//   Create a todo.
routes.post('/api/v1/todos', async (req, res) => {
    try {
        const newToDo = req.body;
        await ToDO.create(newToDo);
        res.status(204).send('');
    }
    catch (err) {
        console.error(err);
        res.send(err);
    }
})

// update a todo by pk.
routes.put('/api/v1/todos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const result = await ToDO.update(data, {
            where: {
                id: id
            }
        });
    } catch (error) {
        console.error(error);
        res.send(error);
    }
})

// Delete todo by id/
routes.delete('/api/v1/todos/:id', async (req, res) =>{
    try {
        const { id } = req.params;
        const result = await ToDO.destroy({where: {id: id}});
        res.send('');
    } catch (error) {
        console.error(error);
        res.send(error)
}
});

module.exports = routes;
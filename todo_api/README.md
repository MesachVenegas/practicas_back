# CRUD API

CRUD API made with NodeJs and **Express** using **PostgreSQL** like database, with **Sequelize ORM** to manage the database and request.

To use you need [download](https://github.com/MesachVenegas/todo_Server/archive/refs/heads/main.zip) the project, once downloaded moved to the project and run the following command

```npm
npm install
```

and now chose you need run normal or development mode:

- to run normal mode:

```npm
npm run start
```

- development mode:

```npm
npm run dev
```

---

## End Points

To use the API the url to consume you need is [https://todo-api-qk1z.onrender.com](https://todo-api-qk1z.onrender.com) more  some one of end points, example:

> https://todo-api-qk1z.onrender.com/api/v1/todos

## Get All Todos

To get all todos available on server the end point is:
``` /api/v1/todos ```

you got a response like this:

```js
    {
        {
            id: 1,
            title: "Go to run",
            description: "run a 5 miles on the night",
            is_complete: true
        },
        {
            id: 2,
            title: "make shopping",
            description: "make shopping this fryday",
            is_complete: false
        }
    }
```

## Get a todo by id

To get a specific todo use this endpoint:
```/api/v1/todos/id```

> /api/v1/todos/2

you got a response like this:

```js
    {
        id: 2,
        title: "make shopping",
        description: "make shopping this fryday",
        is_complete: false
    }
```

## Update Todo

To update a todo you need the endpoint `/api/v1/todos/id` and in the request body send a json element or object, with the data to change, for example:
> /api/v1/todos/2

request body:

```js
    {
        is_complete: true
    }
```

if request is resolved correctly the todo with id 2 change state to completed state false to true. You can modify the state of ToDo, the title or description, you don't received any response of API,
only a status code of 204.

## Delete ToDo

If you need to delete a todo only make a request to `/api/v1/todos/id` send the id of todo to delete.

> /api/v1/todos/2

and the todo will be deleted, don't send any response of API, only a status code of 200 is everting ok

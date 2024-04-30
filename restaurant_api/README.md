# Restaurant API

API de restaurant parte del modulo de backend de Academlo para conocer el funcionamiento de Sequelize-cli ademas de la implementación de los conocimientos adquiridos en anteriores entregables.

> Iniciamos creando la base de datos con sequelize cli

```npm
npx sequelize-cli db:create
```

> Creación de modelos:

```npm
npx sequelize-cli model:create --name tableName --attributes att1:type,att2:type,att3:type...
```

> Modelo de tipo enum

```npm
npx sequelize-cli model:generate --name role_types --attributes 'type:enum:{admin,seller,cashier}'
```

> Migraciones

```npm
npx sequelize-cli db:migrate
```

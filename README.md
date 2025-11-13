/

- src/
  index.js // server
  model.js/
  contorllers/
  middlewares/
  services/
  utils/
  config/
  - tests/ [later]
    -static/
    -temp/

# Welcome to flight services

# Project setup

-clone the project on your local
-execute `npm install` on the same path as of your root directory of the downloaded project

- create `.env` file in the root of directory and add thte ofllowing environment varriable
- `PORT - 3000`
- inside the `src/config` folder create new file `config.json` and then add the following piece of json

```
{
"development": {
  "username": "<Login_name>",
  "password": "<Your MySQL Password>",
  "database": "Flight_search_DB_dev",
  "host": "127.0.0.1",
  "dialect": "mysql"
}
}
```
- Once you've added your db config as listed above , go to the src folder from your terminal and execute `npx sequelize db:create`

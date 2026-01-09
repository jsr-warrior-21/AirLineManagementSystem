const express = require("express");
const app = express();
const bodyParser = require('body-parser');

const {PORT} = require("./config/serverConfig");
const apiRoutes = require('./routes/index');

// const bcrypt= require("bcrypt");
// const {User} = require("./models/index");
// const UserRepository = require('./repository/user-repository');

const prepareAndStartServer  = () =>{

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true})); // both line parse the incoming request body so that we can easly acces the data from the request body.

    app.use('/api',apiRoutes);

    app.listen(PORT,async()=>{
        console.log(`server started at PORT : ${PORT}`);



        // const repo = new UserRepository();
        // const response = await repo.getById(1);
        // console.log(response);
        



        // checking for is It matching or not
        // const  incomingPassword = "654321";
        // const user = await User.findByPk(1);
        // const response = bcrypt.compareSync(incomingPassword,user.password)
        // console.log(response);
    });
}
prepareAndStartServer();

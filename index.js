const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const bcrypt= require("bcrypt");

const {PORT} = require("./config/serverConfig");
const apiRoutes = require('./routes/index');

const {User} = require("./models/index")

const prepareAndStartServer  = () =>{

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true})); // both line parse the incoming request body so that we can easly acces the data from the request body.

    app.use('/api',apiRoutes);

    app.listen(PORT,async()=>{
        console.log(`server started at PORT : ${PORT}`);
        // checking for is It matching or not
        // const  incomingPassword = "654321";
        // const user = await User.findByPk(1);
        // const response = bcrypt.compareSync(incomingPassword,user.password)
        // console.log(response);
    });
}
prepareAndStartServer();

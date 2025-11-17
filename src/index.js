const express = require('express');
const {PORT} = require('./config/serverConfig');
const bodyParser = require('body-parser');
const CityRepository = require('./repository/city-repo');
const setupAndStartServer = async () =>{
    const app = express();
     app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({extended:true}));
    app.listen(PORT,async()=>{
        console.log(`server started at ${PORT}`);
        const repo = new CityRepository();
        // repo.createCity({name:"Bombay"});
        // repo.deleteCity(1) // using this you can delete city also from your data bases;
    });
}
setupAndStartServer();
//importing modules
var express= require("express");
var fetch=require("./fetch/fetch");
var cors = require('cors');
var bodyparser= require("body-parser");
var conn =require("./config/db_connection");
var connection=conn.getConnection();

//create app instance

var app=express();
app.use(cors());

app.get('/', function (req, res){
    // res.send('Hello Express!');
    connection.query("select * from sys.product", function(err,recordsArray,fields){
        if (err){
            console.log("Error occured while fetching the data !")
        }else{
            res.send(recordsArray);
        }
    });
});
app.use("/fetch",fetch);

//set JSON as MIME type
app.use(bodyparser.json());

//front-end not sending any form data
app.use(bodyparser.urlencoded({extended:false}));

var insert = require("./insert/insert");
app.use("/insert",insert);

//update operation
var update= require("./update/update");
app.use("/update",update);

//delete opearation
var remove=require("./delete/delete");
app.use("/delete",remove);

//Assign port number
app.listen(3012);
console.log("server is listening at port no. 8080");
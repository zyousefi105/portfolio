//import connection
var conn =require("../config/db_connection");

//setting the connection object
var connection=conn.getConnection();

//connect to database
connection.connect();

//import express
var express=require("express");

//create the router
var router=express.Router();

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });

//get request
router.get("/" ,function(req,res){
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "*");
    connection.query("select * from sys.orders", function(err,recordsArray,fields){
        if (err){
            console.log("Error occured while fetching the data !")
        }else{
            res.send(recordsArray);
        }
    });
});

// router.get("/" ,function(req,res){
//     connection.query("select * from sys.product", function(err,recordsArray,fields){
//         if (err){
//             console.log("Error occured while fetching the data !")
//         }else{
//             res.send(recordsArray);
//         }
//     });
// });
//export the router
module.exports=router;
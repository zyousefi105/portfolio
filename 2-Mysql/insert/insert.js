//import express module
var express = require("express");

//import connection moule
var conn= require("../config/db_connection");

//getting the connection object
var connection =conn.getConnection();

//connect to database
connection.connect();

//create the module(Router)
var router = express.Router();
router.post("/",function(req,res){

    // res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    // res.header("Access-Control-Allow-Headers", "*"); //Access-Control-Allow-Methods
    // res.header("Access-Control-Allow-Methods", "*");

    // req.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    // req.header("Access-Control-Allow-Headers", "*"); //Access-Control-Allow-Methods
    // req.header("Access-Control-Allow-Methods", "*");
    console.log("We are here!")
    var orderId=req.body.orderId;
    var orderDate=req.body.orderDate;
    var orderStatus=req.body.orderStatus;
    var customerName=req.body.customerName;
    var product=req.body.product;
    var customerEmail=req.body.customerEmail;
    var customerAddress=req.body.customerAddress;
    var orderCount=req.body.orderCount;

    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "*"); //Access-Control-Allow-Methods
    res.header("Access-Control-Allow-Methods", "*");
    connection.query("insert into sys.Orders values("+orderId+", '"+orderDate+"', '"+orderStatus+"', '"+customerName+"', '"+product+"', '"+customerEmail+"', '"+customerAddress+"', "+orderCount+")",
        function (err,result){
        if(err){
            console.log("error while inserting the object!")
        }else{
            res.send({insert:"success"});
        }
    });

    // connection.query("insert into sys.product values("+p_id+",'"+p_name+"')",
    //     function (err,result){
    //     if(err){
    //         console.log("error while inserting the object!")
    //     }else{
    //         res.send({insert:"success"});
    //     }
    // });
});
//export router
module.exports=router;
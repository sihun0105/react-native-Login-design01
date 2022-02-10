const express = require("express"); 
const bodyParser = require("body-parser");
const mysql = require("mysql"); // mysql 모듈 사용
//const port = 3001; // react의 기본값은 3000이니까 3000이 아닌 아무 수

var connection = mysql.createPool({
    host : "localhost",
    port : '3306',
    user : "root", //mysql의 id
    password : "5559", //mysql의 password
    database : "sihun", //사용할 데이터베이스
    //acquireTimeout:6000000
});
// We're still in routes.js! Right below everything else.
// Starting our app.
const app = express();
app.get('/', function(req, res){
    res.send('Hello World');
});
app.get('/sihun', function(req, res){
    res.send('Hello World');
    connection.query('SELECT * FROM test', function (error, results, fields) {
        // If some error occurs, we throw an error.
            if (error) throw error;
            // Getting the 'response' from the database and sending it to our route. This is were the data is.
            //res.send(results);
            console.log(results,error,fields);
    });
});

// Creating a GET route that returns data from the 'users' table.
app.get('/users', function (req, res) {
    // Connecting to the database.
    connection.getConnection(function (err, connection) {// Executing the MySQL query (select all data from the 'users' table).
        if(err) {
            console.log("getConnection 에러")
            throw err;
        }
        connection.query('SELECT * FROM test', function (error, results, fields) {
            res.send(results);
        // If some error occurs, we throw an error.
            if (error) throw error;

            // Getting the 'response' from the database and sending it to our route. This is were the data is.
            //res.send(results);
            console.log(results,error,fields);
    });
  });
});

app.get("/idplz", (req,res)=>{
    //const test = req.body.test;
    // console.log(req.body);
    connection.query('SELECT * FROM test', function (error, results, fields) {
        if(error){
            console.log("실패");
            // console.log(err);
        }else{
            console.log("성공");
            // console.log(rows);
        };
    });
});

// Starting our server.
app.listen(port, ()=>{
    console.log(`Connect at http://localhost:${port}`);
})
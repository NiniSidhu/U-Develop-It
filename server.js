const mysql = require('mysql2'); //Connecting mysql that we installed in node modules to the server

const express = require ('express');
const PORT = process.env.PORT || 3001; 
const app = express(); 

//Express Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Connect to the Database
const db = mysql.createConnection(
    {
        host:'localhost',
        //Your MySQL username
        user:'root',
        //Your Password
        password: 'Macbook02!!',
        database: 'election'
    },
    console.log('Connected to the election database.')
)

db.query(`select * from candidates`, (err, rows) => {
    console.log(rows);
});

//Default response for any other requests (NOT FOUND). ALWAYS make sure this is the last one otherwise it will take presidence over the other GET/POST requests
app.use((req,res)=>{
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}!`);
});
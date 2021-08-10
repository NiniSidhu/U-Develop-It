const express = require ('express');
const PORT = process.env.PORT || 3001; 
const app = express(); 

//Express Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());



//Default response for any other requests (NOT FOUND). ALWAYS make sure this is the last one otherwise it will take presidence over the other GET/POST requests
app.use((req,res)=>{
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}!`);
});
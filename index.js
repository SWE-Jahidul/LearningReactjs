const express = require('express');
const app = express();
const port = 3000;


app.get('/',(req,res) =>{
    res.send("helo from node ")
});


app.listen(port,() =>{
    console.log("lisiting to port ", port );
})
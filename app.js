const express = require('express');
const server = express();
const dotenv = require('dotenv');
const path = require('path')

dotenv.config();

server.use(express.static('public'));

const port = process.env.PORT || 4000

server.listen(port,()=>{
    console.log(`El servidor esta corriendo en el puerto ${port}`);
})

server.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname, "views", "home.html"))
})
const express= require('express')
const app= express()
const mongoose = require('mongoose');
const server=require('./server')
const cors = require('cors');
const db = require( './models');


require('dotenv/config')

app.use(cors());
app.options('*', cors())

app.use(express.json());

app.use('/nft',server)


db.sequelize.sync().then((req)=>{
    console.log("db connected");
    app.listen(3000,()=>{
        console.log('server running on http://localhost:3000');
     
    })
})
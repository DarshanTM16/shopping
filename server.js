const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Product = require('./productschema.js');
const defaultData = require('./default.js');
const dotenv = require('dotenv');
const app = express();

const PORT = process.env.PORT || 4500;

dotenv.config();

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const URL = `mongodb+srv://${username}:${password}@productinfo.1ccgw.mongodb.net/mernstack?retryWrites=true&w=majority`;

app.use(cors());

    mongoose.connect(process.env.MONGODB_URI || URL, { useNewUrlParser: true })
    .then((result)=>{
        console.log('connected');
        app.listen(PORT, (err)=> {
            console.log(err);
        });
    })
    .catch((err)=> {
        console.log(err);
    })

    if(process.env.NODE_ENV == 'production'){
        app.use(express.static('client/build'))
    }

    defaultData()
    



app.get('/getdata', (req,res)=> {
    Product.find()
    .then((result)=> {
        res.send(result);
    })
    .catch((err)=> {
        console.log(err);
    })
});

console.log("started");

const path = require('path');
const express = require('express');

const bodyParser=require('body-parser');

const allRouting = require('./routes/routing');

const index = express();

index.set('view engine' , 'ejs');


index.use(bodyParser.urlencoded({extended:false}));

index.use(allRouting);

index.listen(3000,()=>{
    console.log('Server is running on 3000');
});
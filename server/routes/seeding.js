var express = require('express');
const Author = require('../models/author');
const { default: axios } = require('axios');
const Product = require('../models/Product');
const { response } = require('../server');
var router = express.Router();

router.get('/seeding',function(req, res, next) {
    // consumeing data form https://dummyjson.com/products
    axios.get('https://dummyjson.com/products').then(axiosResponse=>{
        // insert data into database.
        Product.insertMany(axiosResponse.data.products).then(doc=>{
            res.send(doc)
        }).catch(err=>{
            res.status(500)
            res.send({err})
        })

    }).catch(err=>{
        res.status(500)
            res.send({err})
    })
});


module.exports=router;
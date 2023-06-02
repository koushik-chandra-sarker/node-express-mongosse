var express = require('express');
const Author = require('../models/author');
var router = express.Router();


router.get('/get-all', function(req, res, next) {

    Author.find().then(docs=>{
        res.json(docs)
    }).catch(error=>{
       res.json({
        error: err.message
       })
    })
});

router.get('/get/:id', function(req, res, next) {
    const id = req.params.id
    if(id){
        Author.findById(id).then(doc=>{
            res.json(doc)
        }).catch(err=>{
            res.status(500)
            res.json({
                error : err.message
            })
        })
    }else{
        res.status(400);
        res.json({
        error: "invalid Id"
    });
    }
    
});

router.post('/add', function(req, res, next) {
    const data = req.body

    const author = new Author({
        firstName : data.firstName,
        lastName : data.lastName,
        age : data.age
    })
    
    author.save().then((doc) => {
        res.status(200)
        res.json(doc)
      })
      .catch((err) => {
        res.status(500)
        res.json({
            error: "Somathing want wrong whele saving data in db."
        })
      });
});

router.put('/update/:id', function(req, res, next) {
    const id = req.params.id
    const data = req.body
    // Author.updateOne({_id: id}, data).then(doc=>{
    //     res.send(doc)
    // }).catch(err=>{
    //     res.send({error: err.message})
    // })
    Author.findOneAndUpdate({_id: id}, data, {new: true}).then(doc=>{
        res.send(doc)
    }).catch(err=>{
        res.send({error: err.message})
    })
});
router.delete('/delete/:id', function(req, res, next) {
    const id = req.params.id
    Author.findByIdAndDelete(id).then(r=>{
        res.send({message: "Delete Sucessfull."})
    }).catch(err=>[
        res.send({error:err.message})
    ])
});

module.exports = router;

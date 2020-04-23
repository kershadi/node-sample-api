var express = require ('express');
var router = express.Router();

router.get('/sample', (req,res)=>{
    res.send('{id: "Node.js sample API works"}');
})

module.exports = router;


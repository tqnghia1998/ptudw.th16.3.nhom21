var express = require('express');
var userModel = require('../../models/user.model');

var router = express.Router();

router.get('/', (req, res)=>{
    var u = userModel.editor();
    u.then(rows=>{
        console.log(rows);
        res.render('page/admin/editor',{
            users: rows,
        });
    }).catch(error=>{
        console.log(error);
    });
    //res.end('lafm bieesn quas')
    
})

module.exports = router;
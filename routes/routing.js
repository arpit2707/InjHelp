const express = require('express');

const loginController = require('../controller/LoggedIn');

const router = express.Router();

router.get('/',(req,res)=>{
    res.render('index');
});
router.post('/loggedIn',loginController.postLogin);

router.get('/Login.ejs',(req,res)=>{
    res.render('Login.ejs')
});

router.get('/User',loginController.getUSers);

router.post('/delete-product',loginController.deleteUser);

module.exports = router;
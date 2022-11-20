const express=require('express')
const { body, validationResult } = require('express-validator');
const router=express.Router()
const User=require('../models/User')
router.post('/',[body('name').isLength({ min: 3 }), body('passWord').isLength({ min: 5 }), body('email').isEmail(),],(req,res)=>{
    console.log("inaside auth")
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
      const user=User(req.body)
    user.save()


       res.json(user)
})

module.exports=router
const express=require('express')
const router=express.Router()
const Notes=require('../models/Notes')
router.get('/',(req,res)=>{
    console.log("inased Notes api")
    
    console.log(req.body)
       
    const notes=Notes(req.body)
    notes.save()
    res.send("got it")
})

module.exports=router
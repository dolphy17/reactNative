const express=require('express');
const BlogPost=require('../models/blogPost');
const router=express.Router();

router.get('/',(req,res)=>{
    
    BlogPost.find({})
       .then((data)=>{console.log('Data',data);
       res.json(data);
   })
       .catch((error)=>{console.log('error',daerrota)})
 
});
router.post('/save',(req,res)=>{
   console.log('Body: ' ,req.body)
res.json({
   msg:'We recieved ur data !!!'
});
});

router.get('/name',(req,res)=>{
   const data= {
      username:'peterson',
      age:5
   };
res.json(data);
});

module.exports=router;
const mongoose=require('mongoose');

const Schema=mongoose.Schema;
const BlogSpotSchema=new Schema({
title:String,
body:String,
date:{
    type:String,
    default:Date.now()
}
});
//Model
const BlogPost=mongoose.model('BlogPost',BlogSpotSchema);
module.exports=BlogPost;
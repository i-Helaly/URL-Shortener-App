const Url = require('../models/url.model')

const getShortUrl = async (req , res)=>{

    const url = await Url.findOne({alias : req.params.alias}) 
    if(!url){
       return res.status(404).send("URL Not Found");
    }
    res.redirect(url.url)
}

const addLongUrl = async (req , res)=>{
 const url = await Url.create(req.body);
 
 res.status(200).json({
     message: "Created Successfully",
     data:url
 })
}

module.exports ={
    getShortUrl,
    addLongUrl
}
const Topic = require("../models/Topics");

exports.getTopics = async(req,res)=>{

 const topics = await Topic.find({
    subjectId:req.params.subjectId
 });

 res.json(topics);

};
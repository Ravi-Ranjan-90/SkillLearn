const Subject = require("../models/Subject");

exports.getSubjects = async(req,res)=>{

 const subjects = await Subject.find();

 res.json(subjects);

};
// Add subject
exports.addSubject = async (req, res) => {

  try {

    const subject = await Subject.create(req.body);

    res.status(201).json(subject);

  } catch (error) {

    res.status(500).json({ message: "Server error" });

  }
};
exports.login = async(req,res)=>{

 const {email,password} = req.body;

 const user = await User.findOne({email});

 if(!user){
   return res.status(400).json({message:"User not found"})
 }

 const match = await bcrypt.compare(password,user.password);

 if(!match){
   return res.status(400).json({message:"Invalid password"})
 }

 const token = jwt.sign(
   {id:user._id},
   "secretkey",
   {expiresIn:"7d"}
 );

 res.json({token,user});

};
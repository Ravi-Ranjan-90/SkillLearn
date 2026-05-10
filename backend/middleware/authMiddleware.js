// const jwt = require("jsonwebtoken");

// module.exports = function(req,res,next){

//  const token = req.headers.authorization;

//  if(!token){
//    return res.status(401).json({message:"No token"})
//  }

//  try{

//    const decoded = jwt.verify(token,"secretkey");

//    req.user = decoded;

//    next();

//  }catch(error){

//    res.status(401).json({message:"Invalid token"})

//  }

// }

const jwt = require("jsonwebtoken");

module.exports = function(req,res,next){

 const authHeader = req.headers.authorization;

 if(!authHeader){
   return res.status(401).json({message:"No token"});
 }

 const token = authHeader.split(" ")[1]; // remove "Bearer"

 try{

 const decoded = jwt.verify(token,"secretkey");

 req.user = decoded;

 next();

 }catch(error){

 res.status(401).json({message:"Invalid token"});

 }

};

// const jwt = require("jsonwebtoken");

// module.exports = function (
//   req,
//   res,
//   next
// ) {
//   const authHeader =
//     req.headers.authorization;

//   if (!authHeader) {
//     return res.status(401).json({
//       message: "No token",
//     });
//   }

//   const token =
//     authHeader.split(" ")[1];

//   try {
//     const decoded =
//       jwt.verify(
//         token,
//         process.env.JWT_SECRET
//       );
//       console.log(decoded);

//     req.user = decoded;

//     next();
//   } catch (error) {
//     res.status(401).json({
//       message: "Invalid token",
//     });
//   }
// };
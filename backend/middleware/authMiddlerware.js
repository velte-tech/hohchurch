const Users = require('../models/userModel')
const ResetToken = require('../models/resetTokenModel')
const ErrorResponse = require('../utils/errorResponse')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')





      exports.isResetTokenValid = async (req,res,next)=>{

        try{
          const {token, id} = req.query

          if(!token || !id){
            res.status(400).json({msg:"Invalid request1"})
            return next(new ErrorResponse("Invalid request", 400))
          }

          const user = await Users.findById(id)

          if(!user){
            res.status(400).json({msg:"user not found"})
            return next(new ErrorResponse("user not found", 400))

          }

          const resetToken = await ResetToken.findOne({owner:user._id})

          if(!resetToken){
            res.status(400).json({msg:"Reset token not found!"})
            return next(new ErrorResponse("Reset token not found!", 400))

          }


          const isMatch = await bcrypt.compare(token, resetToken.token)

          if(!isMatch){
            res.status(400).json({msg:"Reset token is invalid!"})
            return next(new ErrorResponse("Reset token is invalid!", 400))
          }

          req.user = user
          next()

        }catch(err){
          return res.status(500).json({msg:err.message})
        }



  }

  exports.auth = async (req, res, next)=>{
    try {
      const token = req.header('Authorization')

      if(!token){
        res.status(400).json({msg:"Invalid Authentication"})
        return next(new ErrorResponse("Invalid Authentication", 400))
      }

      const decoded_token = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)

      if(!decoded_token){
        res.status(400).json({msg:"Invalid Authentication"})
        return next(new ErrorResponse("Invalid Authentication", 400))
      }

      const user = await Users.findOne({_id:decoded_token.id})

      req.user = user
      next()
    } catch (err) {
      return res.status(500).json({msg:err.message})
    }
  }

  exports.authorize = (...roles) => {
    return (req, res, next) => {
      if(!roles.includes(req.user.role)) {
        return next(
          new ErrorResponse('You do not have permission perform this action', 403)
        )
      }
  
      next();
    };
  };
  

import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
export const register = async (req,res) => {
    try {
        const{fullname, email,phoneNumber,password,role}= req.body;
        if(!fullname || !email || !phoneNumber || !password || !role){
            return res.status(400).json({
                message:"Something is missing",
                success:false
            });
        };
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({
                message:'User alredy exist with this email',
                success:false,
            })
        }

      const hashedPassword = await bcrypt.hash(password,10);
      await User.create({
        fullname,
        email,
        phoneNumber,
        password:hashedPassword,
        role,
      });
      return res.status(201).json({
        message:"Account created succesfully",
        success:true
      });

    } catch (error) {
        console.log(error);
    }
}
export const login = async (req,res) => {
    try {
        const {email, password,role} = req.body;
        if( !email|| !password || !role){
            return res.status(400).json({
                message:"Something is missing",
                success:false
            });
        };
        let User = await User.findOne({email});
        if(!User){
            return res.status(400).json({
                message:"Incorrect email or password",
                success:false,
            })
        }
        const isPasswordMatch = bcrypt.compare(password,User.password);
        if(!isPasswordMatch){
            return res.status(400).json({
                message:"Incorrect email or password",
                success:false,
            })

        };
        // checking the role is correct or not
        if(role!=User.role){
            return res.status(400).json({
                message:"Account doesn't exist with current role",
                success:false
            })
        };
        const tokenData = {
            userId:user_id,
        }
        const token = await jwt.sign(tokenData,process.env.SECRET_KEY,{expiresIn:'1d'});
        
        User={
            _id:User,
            fullname:User.fullname,
            email:User.email,
            phoneNumber:User.phoneNumber,
            role:User.role,
            profile:User.profile
        }



        return res.status(200).cookie("token",{maxAge:1*24*60*60*1000 , httpsOnly:true, sameSite:"strict"}).json({
            message:`Welcome back &{user.fullname}`,
            success:true
        });
    } catch (error) {
        console.log(error);
    }
}
export const logout = async(req,res)=>{
    try {
        return res.status(200).cookie("token","",{maxAge:0}).json({
            message:"Logged out succesfully",
            success:true
        })
    } catch (error) {
        console.log(error);
    }
}
export const updateProfile = async(req,res)=>{
    try {
        const{fullname,email,phoneNumber,bio,skills}=req.body;
        const file = req.file;
       /* if(!fullname || !email || !phoneNumber || !bio|| !skills){
            return res.status(400).json({
                message:"Something is missing",
                success:false
            });
        };*/
        // cloudinary comes here
        let skillsArray;
        if(skills){
         skillsArray = skills.split(",");

        }

        const userId = req.id;//midddleware authentication
        let user = await User.findById(userId);
        if(!user){
            return res.status(400).json({
                message:"user not found.",
                success:false,
            })
        }
        //updating data
        if(fullname) user.fullname = fullname;
        if(email) user.email = email;
        if(phoneNumber) user.phoneNumber = phoneNumber;
        if(bio) user.profile.bio = bio;
        if(skills) user.profile.skills = skillsArray;
       
        // resume comes here , later
        await user.save();

        User={
            _id:User,
            fullname:User.fullname,
            email:User.email,
            phoneNumber:User.phoneNumber,
            role:User.role,
            profile:User.profile
        }
        return res.status(200).json({
            message:"progile updated succesfully",
            user,
            success:true
        })


    } catch (error) {
        console.log(error);
        
    }
}
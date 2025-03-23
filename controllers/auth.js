import { UserModel } from "../models/user.js"
import bcrypt from 'bcryptjs'
import { ValidateRegister } from "../validate/auth.js"
export const Register = async(req,res)=>{
    try {
        const body = req.body
        const {email,password} = body
        const {error}  = ValidateRegister.validate(body,{abortEarly:false})
        if (error) throw {mes:error.details.map(item=>item.message),code:400}
        const check = await UserModel.findOne({email:email})
        if (check) throw {mes:"Tai khoan da ton tai ",code:400} 
        body.password = await bcrypt.hash(password,11)
        const user = await new UserModel(body).save()
        user.password = undefined
        res.status(201).send({message:"Dang ki thanh cong",status:true,data:user})
    } catch (error) {
        res.status(error.code??500).send({message:error.mes??"Dang ki that bai",status:false})
    }
}
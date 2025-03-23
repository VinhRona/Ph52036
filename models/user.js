import mongoose from "mongoose";
const UserSchema = mongoose.Schema({
    name:{
        require:true,
        type:String,
    },
    email:{
        require:true,
        type:String,
        unique:true,
    },
    password:{
        require:true,
        type:String,
    }
},{
    timestamps:true
})
export const UserModel = mongoose.model('user',UserSchema)
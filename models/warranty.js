import mongoose from "mongoose";
const WarSchema = mongoose.Schema({
   name:{
    required:true,
    type:String
   },
   phone:{
    required:true,
    type:Number
   },
   bienso:{
type:String
   },
   tensp:{
    // required:true,
type:String
   },
   ngaylap:{
    // required:true,
type:Date
   },
   baohanh:{
    // required:true,
type:String
   }
},{
    timestamps:true
})
export const WarModel = mongoose.model('warrantys',WarSchema)
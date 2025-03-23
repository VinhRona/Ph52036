import { WarModel } from "../models/warranty.js"


export const addWar = async (req,res)=>{
    const body = req.body
    // const {name, phone,bienso,tensp, ngaylap, baohanh} = body
    try {
        // const {error} = ValidateWar.validate({name,phone,},{abortEarly:false})
        // if(error) throw {mess:error.detail.map(item=>item.message)}
        const warranty = await new  WarModel(body).save()
        console.log(warranty);
        res.status(201).send({message:"Thêm mới thành công",status:true,data:warranty})
    } catch (error) {
        console.log(error)
        res.status(500).send({message:"Thêm mới không thành công",status:false})    
    }

}

export const WarList = async (req,res)=>{
    try {
        const warrantys = await WarModel.find()
        res.status(200).send({message:"Tai thanh cong ",status:true,data:warrantys})

    } catch (error) {
        res.status(500).send({send:"Loi hien thi",status:false})
    }
}
export const getWar = async (req,res) =>{
    const {id} = req.params;
    try {
        const warranty = await WarModel.findById(id);
        if(!warranty) {
            return res.status(404).send({message:"Khong tim thay thong tin bao hanh"});
        }
        res.status(200).send({message:"Thong tin bao hanh",warranty});
    
    } catch (error) {
     res.status(500).send({error:error.message});    
    }
};
export const editWar = async(req,res)=>{
    try {
        const id = req.params.id
        console.log(id)
        const body = req.body
        const warranty = await WarModel.findOne({_id:id})
        if(warranty){
            const newwarranty = await WarModel.findOneAndUpdate({_id:id})
            res.status(200).send({message:"Sua thanh cong ",status:true,data:newwarranty})

        }
        else throw {mes:"Khong tim thay san pham", code:404}
    } catch (error) {
        console.log(error)
        // res.status(error.code??500).send({message:error.mes??"Cap nhat khong thanh cong",status:false})
    }
}
export const deleteWar = async(req,res)=>{
    try {
        const id = req.params.id
    
        const warranty = await WarModel.findOne({_id:id})
        if(warranty){
            const newwarranty = await WarModel.findOneAndDelete({_id:id})
            res.status(200).send({message:"Xoa thanh cong ",status:true})

        }
       
    } catch (error) {
        console.log(error)
        res.status(500).send({message:"Cap nhat khong thanh cong",status:false})
    }
}
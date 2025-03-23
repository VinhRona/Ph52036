import Joi from "joi";
export const ValidateRegister = Joi.object({
    name:Joi.string().required().trim().messages({
        "any.required" : "Ten bat buoc phai nhap",
        "string.empty" : "Ten khong duoc bo trong"
    }),
    email:Joi.string().required().trim().email().messages({
        "any.required" : "Ten bat buoc phai nhap",
        "string.empty" : "Ten khong duoc bo trong"
    }),
    password:Joi.string().required().trim().min(5).messages({
        "any.required" : "Ten bat buoc phai nhap",
        "string.empty" : "Ten khong duoc bo trong",
        "string.min": "Mat khau phai tren 5 ki tu",
    }),
})
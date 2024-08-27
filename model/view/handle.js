const express=require('express');
const app = express();
const { PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();
const adminModel=require('../admin/page')
module.exports={
    contact:async(name,gmail,phone,message)=>{
        const load= await prisma.contact.create({data:{name:`${name}`,gmail:`${gmail}`,phone:`${phone}`,message:`${message}`}})
    },
    addProduct:async(idproduct,iduser,quantity)=>{
        const crea= await prisma.user_product.create({data:{userid:iduser,productid:idproduct,quantity:`${quantity}`}})
    },
    deleteProduct:async(id)=>{
        const dele= await prisma.user_product.deleteMany({
            where:{id:id}
        })
    },
    sumProduct:async(iduser)=>{
        var cartProduct={}
        if(iduser >=0){
            var cartProduct= await adminModel.cartProduct(iduser)

        }else{
            var cartProduct={}
        }

        var sum=0;
        for(i=0; i< cartProduct.length; i++){
           sum= sum + parseInt(cartProduct[i].quantity) * parseInt(cartProduct[i].price);
        }
        return sum;
    }
}
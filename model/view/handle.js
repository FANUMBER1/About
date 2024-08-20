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
        const dele= await prisma.$queryRaw`delete from "user_product" where "user_product".id=${id}`
    },
    sumProduct:async(iduser)=>{
        const cartProduct= await adminModel.cartProduct(iduser)
        var sum=0;
        for(i=0; i< cartProduct.length; i++){
           sum= sum + parseInt(cartProduct[i].quantity) * parseInt(cartProduct[i].price);
        }
        return sum;
    }
}
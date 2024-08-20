const { PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient();
module.exports={
    /////product
    product:async(id)=>{
        const dele= await prisma.$queryRaw`delete from "user_product" where "user_product".productid=${id}`
        const del=await prisma.$queryRaw`delete from "product" where id=${id}`
    },
    ////review
    review:async(id)=>{
        const del=await prisma.$queryRaw`delete from "review" where id=${id}`
     },
    ////advertisementg
    advertisement:async(id)=>{
        const del=await prisma.$queryRaw`delete from "advertisement" where id=${id}`
    },
    ////introproduct
    introproduct:async(id)=>{
        const del=await prisma.$queryRaw`delete from "productintro" where id=${id}`
    },
    ////soicial
    soicial:async(id)=>{
        const del=await prisma.$queryRaw`delete from "social" where id=${id}`
    },
    ////contact
    contact:async(id)=>{
        const del=await prisma.$queryRaw`delete from "contact" where id=${id}`
    },
    //////role
    role:async(id)=>{
        const del= await prisma.$queryRaw`delete from "role" where id=${id}`
    },
    ////////
    user:async(id)=>{
        const del= await prisma.$queryRaw`delete from "user" where id=${id}` 
    },
    ///////
    seller:async(id)=>{
        const del= await prisma.$queryRaw`delete from "seller" where id=${id}` 
    }
    
    
}
const { PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient();
module.exports={
    ////profile
    profile:async()=>{
        const data= await prisma.$queryRaw`select * from "profile"`
        return data;
    },
    /////product
    product:async()=>{
        const data= await prisma.$queryRaw`select * from "product"`
        return data;
    },
    /////review
    review:async()=>{
        const data= await prisma.$queryRaw`select * from "review"`
        return data;
    },
    ////advertisement
    advertisement:async()=>{
        const data= await prisma.$queryRaw`select * from "advertisement"`
        return data;

    },
    /////intrpproduct
    introproduct:async()=>{
        const data= await prisma.$queryRaw`select * from "productintro"`
        return data;
    },
    //////soicial
    soicial:async()=>{
        const data= await prisma.$queryRaw`select * from "social" `
        return data;
    },
    //////contact
    contact:async()=>{
        const data= await prisma.$queryRaw`select * from "contact" `
        return data;
    },
    /////role
    role:async(req,res)=>{
        const data= await prisma.$queryRaw`select * from "role" `
        return data;
    },
    //////user
    user:async()=>{
        const data= await prisma.$queryRaw`
        select "user".id as id, name , avata ,email , pass, role.position as position from "user" 
           JOIN role on "user".roleid =role.id `       
         return data;
    },
    //////cart product
    cartProduct:async(id)=>{
        const data= await prisma.$queryRaw`
        select "product".name,"product".price,"product".img,"user_product".quantity as quantity,"user_product".id as idcart from "product"
        JOIN "user_product" ON "product".id="user_product".productid
        JOIN "user" ON "user".id="user_product".userid
        where "user_product".userid=${id}`
        return data;
    },
    //////seller
    seller:async()=>{
        const data= await prisma.$queryRaw`select * from "seller" `
        return data;
    }
}
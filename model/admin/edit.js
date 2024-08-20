const { PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();
module.exports={
    ////profile
    profile:async()=>{
        const data= await prisma.$queryRaw`select * from "profile"`
        return data;
    },
    editProfile:async(name,phone,address,gmail,conten1,conten2)=>{
        const update=await prisma.$queryRaw`update "profile" 
        set name=${name},phone=${phone},address=${address},gmail=${gmail},conten1=${conten1},conten2=${conten2} where id=0`
    },
    ////product
    product:async(id)=>{
        const data= await prisma.$queryRaw`select * from "product" where id=${id}`
        return data;
    },
    editProduct:async(name,price,img,describe,id)=>{
        const update=await prisma.$queryRaw`update "product" 
        set name=${name},price=${price},img=${img},describe=${describe} where id=${id}`
    },
    //////review
    review:async(id)=>{
        const data= await prisma.$queryRaw`select * from "review" where id=${id}`
        return data;
    },
    editReview:async(name,product,content,id)=>{
        const update=await prisma.$queryRaw`update "review" 
        set name=${name},productname=${product},content=${content} where id=${id}`
    },
    /////advertisement
    advertisement:async(id)=>{
        const data= await prisma.$queryRaw`select * from "advertisement" where id=${id}`
        return data;
    },
    editAdvertisement:async(name,link,img,describe,content,id)=>{
        const update=await prisma.$queryRaw`update "advertisement" 
        set name=${name},link=${link},img=${img},describe=${describe},content=${content} where id=${id}`
    },
    /////introproduct
    introproduct:async(id)=>{
        const data= await prisma.$queryRaw`select * from "productintro" where id=${id}`
        return data;
    },
    editIntroproduct:async(name,link,img,describe,content,id)=>{
        const update=await prisma.$queryRaw`update "productintro" 
        set name=${name},link=${link},img=${img},describe=${describe},content=${content} where id=${id}`
    },
    ////////soicial
    soicial:async(id)=>{
        const data= await prisma.$queryRaw`select * from "social" where id=${id} `
        return data;
    },
    editSoicial:async(id,name,link,img)=>{
        const update=await prisma.$queryRaw`UPDATE "social" SET name =${name},link=${link},img=${img} WHERE id=${id}` 
    },
    ///////contact
    contact:async(id)=>{
        const data= await prisma.$queryRaw`select * from "contact" where id=${id}`
        return data;
    },
    ///////role
    role:async(id)=>{
        const data= await prisma.$queryRaw`select * from "role" where id=${id} `
        return data;
    },
    editrole:async(id,position,)=>{
        const update=await prisma.$queryRaw`UPDATE "role" SET position=${position} WHERE id=${id}` 
    },
    /////////user
    user:async(id)=>{
        const data= await prisma.$queryRaw`
        select "user".id as id, name , avata ,email, pass, role.position as position from "user" 
           JOIN role on "user".roleid =role.id where "user".id = ${id}`     
        return data;
    },
    edituser:async(id,name,taikhoan,pass,img,role)=>{
        const creat= await prisma.$queryRaw` update "user" set name=${name},email=${taikhoan},avata=${img}, pass=${pass},roleid=${role} where id=${id}`

    }

 
}
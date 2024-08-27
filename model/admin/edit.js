const { PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();
module.exports={
    ////profile
    profile:async()=>{
        const data= await prisma.profile.findUnique({where:{id:0}})
        return data;
    },
    editProfile:async(name,phone,address,gmail,conten1,conten2)=>{
        const updata= await prisma.profile.update({where:{id:0},
            data:{name:`${name}`,phone:`${phone}`,address:`${address}`,gmail:`${gmail}`,conten1:`${conten1}`,conten2:`${conten2}`}})
    },
    ////product
    product:async(id)=>{
        const data= await prisma.product.findUnique({where:{id:id}})
        return data;
    },
    editProduct:async(name,price,img,describe,id)=>{
        const updata= await 
        prisma.product.update({
            where:{id:id},
            data:{name:`${name}`,price:`${price}`,img:`${img}`,describe:`${describe}`}})
    },
    //////review
    review:async(id)=>{
        const data= await prisma.review.findUnique({where:{id:id}})
        return data;
    },
    editReview:async(name,product,content,id)=>{
        const update=await prisma.review.update({
            where:{id:id},
            data:{
                name:`${name}`,productname:`${product}`,content:`${content}` 
            }
        }) 
    },
    /////advertisement
    advertisement:async(id)=>{
        const data= await prisma.advertisement.findUnique({where:{id:id}})
        return data;
    },
    editAdvertisement:async(name,link,img,describe,content,id)=>{
        const update=await prisma.advertisement.update({
            where:{id:id},
            data:{
                name:`${name}`,link:`${link}`,img:`${img}`,describe:`${describe}`,content:`${content}` 
            }
        })
    },
    /////introproduct
    introproduct:async(id)=>{
        const data= await prisma.productintro.findUnique({where:{id:id}})
        return data;
    },
    editIntroproduct:async(name,link,img,describe,content,id)=>{
        const update=await prisma.productintro.update({
            where:{id:id},
            data:{
                name:`${name}`,link:`${link}`,img:`${img}`,describe:`${describe}`,content:`${content}`
            }
        }) 
    },
    ////////soicial
    soicial:async(id)=>{
        const data= await prisma.social.findUnique({where:{id:id}})
        return data;
    },
    editSoicial:async(id,name,link,img)=>{
        const update=await prisma.social.update({
            where:{id:id},
            data:{
                name :`${name}`,link:`${link}`,img:`${img}`
            }
        })
    },
    ///////contact
    contact:async(id)=>{
        const data= await prisma.contact.findUnique({where:{id:id}})
        return data;
    },
    ///////role
    role:async(id)=>{
        const data= await prisma.role.findUnique({where:{id:id}})
        return data;
    },
    editrole:async(id,position,)=>{
        const update=await prisma.role.update({
            where:{id:id},
             data:{
                position:`${position}`
             }
        }) 
    },
    /////////user
    user:async(id)=>{
        const data = await prisma.user.findUnique({
            where: {
              id: id,  
            },
            select: {
              id: true,
              name: true,
              avata: true,
              email: true,
              pass: true,
              roles: {
                select: {
                  position: true, 
                },
              },
            },
          });
          
        return data;
    },
    edituser:async(id,name,taikhoan,pass,img,role)=>{
        const creat= await prisma.user.update({
            where:{id:id},
            data:{
                name:`${name}`,email:`${taikhoan}`,avata:`${img}`, pass:`${pass}`,roleid:role
            }
        })

    }

 
}
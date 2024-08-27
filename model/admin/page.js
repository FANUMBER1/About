const { PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient();
module.exports={
    ////profile
    profile:async()=>{
        const data= await prisma.profile.findMany()
        return data;
    },
    /////product
    product:async()=>{
        const data= await prisma.product.findMany()
        return data;
    },
    /////review
    review:async()=>{
        const data= await prisma.review.findMany()
        return data;
    },
    ////advertisement
    advertisement:async()=>{
        const data= await prisma.advertisement.findMany()
        return data;

    },
    /////intrpproduct
    introproduct:async()=>{
        const data= await prisma.productintro.findMany()
        return data;
    },
    //////soicial
    soicial:async()=>{
        const data= await prisma.social.findMany()
        return data;
    },
    //////contact
    contact:async()=>{
        const data= await prisma.contact.findMany()
        return data;
    },
    /////role
    role:async(req,res)=>{
        const data= await prisma.role.findMany()
        return data;
    },
    //////user
    user:async()=>{
        const data = await prisma.user.findMany({
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
    //////cart product
    cartProduct:async(id)=>{
        const data= await prisma.user_product.findUnique({
            where:{
                userid:id
            },
            select:{
                id:true,
                quantity:true,
                product:{
                    name:true,
                    price:true,
                    img:true,
                }
            }
        });
        return data;
    },
    //////seller
    seller:async()=>{
        const data= await prisma.seller.findMany()
        return data;
    }
}
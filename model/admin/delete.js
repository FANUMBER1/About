const { PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient();
module.exports={
    /////product
    product:async(id)=>{
        const dele= await prisma.user_product.deleteMany({where:{productid:id}})
        const del=await prisma.product.deleteMany({where:{id:id}})
    },
    ////review
    review:async(id)=>{
        const del=await prisma.review.deleteMany({where:{id:id}})
     },
    ////advertisementg
    advertisement:async(id)=>{
        const del=await prisma.advertisement.deleteMany({where:{id:id}})
    },
    ////introproduct
    introproduct:async(id)=>{
        const del=await prisma.productintro.deleteMany({where:{id:id}})
    },
    ////soicial
    soicial:async(id)=>{
        const del=await prisma.social.deleteMany({where:{id:id}})
    },
    ////contact
    contact:async(id)=>{
        const del=await prisma.contact.deleteMany({where:{id:id}})
    },
    //////role
    role:async(id)=>{
        const del= await prisma.role.deleteMany({where:{id:id}})
    },
    ////////
    user:async(id)=>{
        const del= await prisma.user.deleteMany({where:{id:id}}) 
    },
    ///////
    seller:async(id)=>{
        const del= await prisma.seller.deleteMany({where:{id:id}})
    }
    
    
}
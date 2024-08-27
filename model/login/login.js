const { PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();
module.exports={
    taikhoan: async (tentaikhoan) => {
        const data= await prisma.user.findMany({where:{email:`${tentaikhoan}`}});
       return data;
    },
    infuser:async(id)=>{
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
    }
}
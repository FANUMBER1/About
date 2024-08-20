const { PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();
module.exports={
    taikhoan: async (tentaikhoan) => {
        const data= await prisma.$queryRaw`select * from "user" where email=${tentaikhoan}`;
       return data;
    },
    infuser:async(id)=>{
        const data= await prisma.$queryRaw`
        select "user".id as id, name , avata ,email, pass, role.position as position from "user" 
           JOIN role on "user".roleid =role.id where "user".id = ${id}`     
        return data;
    }
}
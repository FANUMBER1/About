const { PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();
module.exports={
 ////////product
 product:async(name,price,img,describe)=>{
    const creat=await prisma.product.create({data:{name:`${name}`,price:`${price}`,img:`${img}`,describe:`${describe}`}})
 },
 ///////checkimg
 checkImg:async(anh,data)=>{
     var img='';
     if(anh==undefined){
        if(data!= undefined){
            img= data.img ||data.avata
        }else{
            img='/assets/images/anhdaidien.jpg'
        }
     }else{
        img= '/assets/upload/'+anh.filename;
     }
     return img;
 },
 //////review
 review:async(name,product,content)=>{
    const creat=await prisma.review.create({data:{name:`${name}`,productname:`${product}`,content:`${content}`}})
 },
 /////advertisement
 advertisement:async(name,link,img,describe,content)=>{
   const creat=await prisma.advertisement.create({data:{name:`${name}`,link:`${link}`,img:`${img}`,describe:`${describe}`,content:`${content}`}})
},
/////introproduct
introproduct:async(name,link,img,describe,content)=>{
  const creat=await prisma.productintro.create({data:{name:`${name}`,link:`${link}`,img:`${img}`,describe:`${describe}`,content:`${content}`}})
},
//////soicial
createSoicial:async(name,link,img)=>{
   const create= await prisma.social.create({data:{name:`${name}`,link:`${link}`,img:`${img}`}})
},
/////role
createrole:async(position)=>{
   const create= await prisma.role.create({data:{position:`${position}`}})
},
//////user
creatuser:async(name,taikhoan,pass,img,role,describe,position)=>{
   const creat= await prisma.user.create({ data:{name:`${name}`,email:`${taikhoan}`,avata:`${img}`, pass:`${pass}`,roleid:role}});
},
////seller
seller:async(email)=>{
   const create= await prisma.seller.create({data:{email:`${email}`}})
}
}
const express=require('express');
const app = express();
const bcrypt = require('bcrypt');
const creat=require('../../model/admin/create');
const { introproduct } = require('./page');
app.set('view engine', 'ejs');
module.exports={
    ///////product
    product:async(req,res)=>{
        res.render('./create/product')
    },
    createProduct:async(req,res)=>{
        const name = req.body.name;
        const price = req.body.price;
        const anh = req.file;
        const data=[];
        const img= await creat.checkImg(anh,data)
        const describe = req.body.describe;
        const crea= await creat.product(name,price,img,describe)
        res.redirect('/admin/product')
    },
    //////review
    review:async(req,res)=>{
        const name = req.body.name;
        const product = req.body.product;
        
        const content = req.body.content;
        const crea= await creat.review(name,product,content)
        res.redirect('/admin/review')
    },
    /////advertisement
    advertisement:async(req,res)=>{
        res.render('./create/advertisement')
    },
    createAdvertisement:async(req,res)=>{
        const name= req.body.name
        const link=req.body.link;
        const anh=req.file;
        const data=[];
        const img= await creat.checkImg(anh,data)
        const describe=req.body.describe
        const content=req.body.content
        const crea= await creat.advertisement(name,link,img,describe,content)
        res.redirect('/admin/advertisement')
    },
    /////introproduct
    introproduct:async(req,res)=>{
        res.render('./create/introproduct')
    },
    createIntroproduct:async(req,res)=>{
        const name= req.body.name
        const link=req.body.link;
        const anh=req.file;
        const data=[];
        const img= await creat.checkImg(anh,data)
        const describe=req.body.describe
        const content=req.body.content
        const crea= await creat.introproduct(name,link,img,describe,content)
        res.redirect('/admin/introproduct')
    },
    ///////soicial
    createSoicial:async(req,res)=>{
        const name=req.body.name;
        const link=req.body.link;
        const anh=req.file;
        const data=[];
        const img= await creat.checkImg(anh,data)
        const create= await creat.createSoicial(name,link,img)
        res.redirect('/admin/soicial') 
    },
    /////////role
    createrole:async(req,res)=>{
        const position=req.body.position;
        const create= await creat.createrole(position)
        res.redirect('/admin/role') 
    },
    /////////register
    register: async (req, res) => {
        const name = req.body.name;
        const taikhoan = req.body.taikhoan;
        const pass0 = req.body.pass;
        const anh = req.file;
        const data=[]
        const img = await creat.checkImg(anh,data);
        const role = 2;
        const describe = req.body.describe;
        const position = req.body.position;
        const pass = bcrypt.hashSync(pass0, 10);
        const cre = await creat.creatuser(name, taikhoan, pass, img, role, describe, position);
        res.redirect('/login');
      },
      /////seller
    seller:async(req,res)=>{
        const email=req.body.email;
        console.log(email)
        const create= await creat.seller(email)
        res.redirect('/') 
    }

    
}
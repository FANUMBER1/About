const express=require('express');
const app = express();
app.set('view engine', 'ejs');

const edit=require('../../model/admin/edit')
const create=require('../../model/admin/create');
const page=require('../../model/admin/page')
const { introproduct } = require('./page');
module.exports={
    /////profile
    profile:async(req,res)=>{
        const data= await edit.profile()
        res.render('./edit/profile',{data:data})
    },
    editProfile:async(req,res)=>{
        const name=req.body.name;
        const phone=req.body.phone;
        const address=req.body.address;
        const gmail=req.body.gmail;
        const conten1=req.body.conten1;
        const conten2=req.body.conten2;
        const update= await edit.editProfile(name,phone,address,gmail,conten1,conten2)
        res.redirect('/admin')
    },
    ///////product
    product:async(req,res)=>{
        const id=parseInt(req.params.ID)
        const data= await edit.product(id)
        res.render('./edit/product',{data:data})
    },
    editProduct:async(req,res)=>{
        const id=parseInt(req.params.ID)
        const name=req.body.name;
        const price=req.body.price;
        const describe=req.body.describe;
        const anh=req.file;
        const data= await edit.product(id)
        const img=await create.checkImg(anh,data)
        const update= await edit.editProduct(name,price,img,describe,id)
        res.redirect('/admin/product')
    },
    /////review
    review:async(req,res)=>{
        const id=parseInt(req.params.ID)
        const data=await edit.review(id)
        res.render('./edit/review',{data:data})
    },
    editReview:async(req,res)=>{
        const id=parseInt(req.params.ID)
        const name = req.body.name;
        const product = req.body.product;
        const content = req.body.content;
        const update= await edit.editReview(name,product,content,id)
        res.redirect('/admin/review')
    },
    /////advertisement
    advertisement:async(req,res)=>{
        const id=parseInt(req.params.ID)
        const data= await edit.advertisement(id)
        res.render('./edit/advertisement',{data:data})
    },
    editAdvertisement:async(req,res)=>{
        const id=parseInt(req.params.ID)
        const name=req.body.name;
        const link=req.body.link;
        const describe=req.body.describe;
        const content=req.body.content
        const anh=req.file;
        const data= await edit.advertisement(id)
        const img=await create.checkImg(anh,data)
        const update= await edit.editAdvertisement(name,link,img,describe,content,id)
        res.redirect('/admin/advertisement')
    },
    ////introproduct
    introproduct:async(req,res)=>{
        const id=parseInt(req.params.ID)
        const data= await edit.introproduct(id)
        res.render('./edit/introproduct',{data:data})
    },
    editIntroproduct:async(req,res)=>{
        const id=parseInt(req.params.ID)
        const name=req.body.name;
        const link=req.body.link;
        const describe=req.body.describe;
        const content=req.body.content
        const anh=req.file;
        const data= await edit.introproduct(id)
        const img=await create.checkImg(anh,data)
        const update= await edit.editIntroproduct(name,link,img,describe,content,id)
        res.redirect('/admin/introproduct')
    },
    //////soicial
    soicial:async(req,res)=>{
        const id=parseInt(req.params.ID);
        const data= await edit.soicial(id)
        res.render('./edit/soicial',{data:data})
    },
    editSoicial:async(req,res)=>{
        const id=parseInt(req.params.ID);
        const name=req.body.name;
        const link=req.body.link;
        const anh=req.file;
        const data= await edit.soicial(id);
        const img=await create.checkImg(anh,data)
        const crea= await edit.editSoicial(id,name,link,img)
        res.redirect('/admin/soicial') 
    },
    //////contact
    contact:async(req,res)=>{
        const id=parseInt(req.params.ID);
        const data= await edit.contact(id);
        res.render('./edit/fullcontact',{data:data})
    },
    /////////role
    role:async(req,res)=>{
        const id=parseInt(req.params.ID);
        const data= await edit.role(id)
        res.render('./edit/inforRole',{data:data})
    },
    editrole:async(req,res)=>{
        const id=parseInt(req.params.ID);
        const position=req.body.position;
        const create= await edit.editrole(id,position)
        res.redirect('/admin/role') 

    },
    //////////user
    user:async(req,res)=>{
        const id=parseInt(req.params.ID)
        const data= await edit.user(id)
        const datarole= await page.role()
        res.render('./edit/inforuser',{data:data,datarole:datarole})
    },
    edituser:async(req,res)=>{
        const id= parseInt(req.params.ID)
        const name= req.body.name;
        const taikhoan=req.body.taikhoan;
        const pass0=req.body.pass;
        const data= await edit.user(id)
        const anh=req.file;
        const img= await create.checkImg(anh,data)
        const role=parseInt(req.body.position);
        const edi= await edit.edituser(id,name,taikhoan,pass0,img,role)
        res.redirect('/admin/user')
    }

}
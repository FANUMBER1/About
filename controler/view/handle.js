const express=require('express');
const app = express();
app.set('view engine', 'ejs');
const adminModel=require('../../model/admin/page')
const productt=require('../../model/admin/edit')
const handleModel=require('../../model/view/handle')
module.exports={
    contact:async(req,res)=>{
      const name=req.body.name;
      const gmail=req.body.email;
      const phone=req.body.phone;
      const message=req.body.message;
      const load= await handleModel.contact(name,gmail,phone,message)
      res.redirect('/contact')
    },
    addProduct:async(req,res)=>{
      const idproduct=parseInt(req.params.ID)
      const iduser=parseInt(req.session.userId)
      const quantity=parseInt(req.body.quantity)
      const add= await handleModel.addProduct(idproduct,iduser,quantity)
      res.redirect('/shop')
    },
    deleteProduct:async(req,res)=>{
      const idproduct=parseInt(req.params.ID)
      const dele= await handleModel.deleteProduct(idproduct)
      const iduser=parseInt(req.session.userId)
      const user=await productt.user(iduser)
      const cartProduct= await adminModel.cartProduct(iduser)
      const product=await adminModel.product();
      const soicial= await adminModel.soicial();
      const profile= await adminModel.profile();
      var active='show'
      const sum=await handleModel.sumProduct(iduser)
      res.render('./page/shop',{k1:'',k2:'active',k3:'',k4:'',k5:'',profile:profile,soicial:soicial,product:product,cart:cartProduct,active:active,sum:sum,user:user})
  }
    }

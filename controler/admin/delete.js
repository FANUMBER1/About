const express=require('express');
const app = express();
app.set('view engine', 'ejs');
const deletec=require('../../model/admin/delete');
const { introproduct } = require('./page');
module.exports={
    /////product
    product:async(req,res)=>{
        const id=parseInt(req.params.ID);
        const del= await deletec.product(id)
        res.redirect('/admin/product')
    },
    /////review
    review:async(req,res)=>{
        const id=parseInt(req.params.ID);
        const del= await deletec.review(id)
        res.redirect('/admin/review')
    },
    //////advertisement
    advertisement:async(req,res)=>{
        const id=parseInt(req.params.ID);
        const del= await deletec.advertisement(id)
        res.redirect('/admin/advertisement')
    },
    //////introproduct
    introproduct:async(req,res)=>{
        const id=parseInt(req.params.ID);
        const del= await deletec.introproduct(id)
        res.redirect('/admin/introproduct')
    },
    //////soicial
    soicial:async(req,res)=>{
        const id=parseInt(req.params.ID);
        const del= await deletec.soicial(id)
        res.redirect('/admin/soicial')
    },
    //////contact
    contact:async(req,res)=>{
        const id=parseInt(req.params.ID);
        const del= await deletec.contact(id)
        res.redirect('/admin/contact')
    },
    ////role
    role:async(req,res)=>{
        const id=parseInt(req.params.ID);
        const del= await deletec.role(id)
        res.redirect('/admin/role')
    },
    //////user
    user:async(req,res)=>{
        const id= parseInt(req.params.ID)  
        const del= await deletec.user(id)
        res.redirect('/admin/user')
     },
     //////seller
     seller:async(req,res)=>{
        const id=parseInt(req.params.ID);
        const del= await deletec.seller(id)
        res.redirect('/admin/seller')
    }
}
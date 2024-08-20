const express=require('express');
const app = express();
app.set('view engine', 'ejs');
const page=require('../../model/admin/page')

module.exports={
    ///profile
    profile:async(req,res)=>{
        const data=await page.profile()
        res.render('profile',{data:data});
    },
    ///product
    product:async(req,res)=>{
        const data= await page.product()
        res.render('product',{data:data})
    },
    ///introproduct
    introproduct:async(req,res)=>{
        const data= await page.introproduct()
        res.render('productintro',{data:data})
    },
    ///review
    review:async(req,res)=>{
        const data=await page.review()
        res.render('review',{data:data})
    },
    ///advertisement
    advertisement:async(req,res)=>{
        const data= await page.advertisement()
        res.render('advertisement',{data:data})
    },
    ///soicial
    soicial:async(req,res)=>{
        const data= await page.soicial();
        res.render('soicial',{data:data})
    },
    ///contact
    contact:async(req,res)=>{
        const data= await page.contact();
        res.render('contactadmin',{data:data})
    },
    /////role
    role:async(req,res)=>{
        const data= await page.role();
        res.render('inforRole',{data:data})
    },
    user:async(req,res)=>{
        const data= await page.user();
        res.render('inforUser',{data:data})
    },
    /////seller
    seller:async(req,res)=>{
        const data= await page.seller();
        res.render('seller',{data:data})
    }
}
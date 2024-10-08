const express=require('express');
const app = express();
app.set('view engine', 'ejs');
const adminModel=require('../../model/admin/page')
const productt=require('../../model/admin/edit')
const handle=require('../../model/view/handle')
var active='';
module.exports={
    index:async(req,res)=>{
        var user={}
        var cartProduct={}
        const iduser=parseInt(req.session.userId)
        if(iduser >=0){
            var user=await productt.user(iduser);
            var cartProduct= await adminModel.cartProduct(iduser)

        }else{
            var user={}
            var cartProduct={}
        }
        const advertisement=await adminModel.advertisement();
        const profile= await adminModel.profile();
        const product=await adminModel.product();
        const productintro= await adminModel.introproduct();
        const review=await adminModel.review();
        const soicial= await adminModel.soicial();
        const sum=await handle.sumProduct(iduser)
        res.render('./page/index',{k1:'active',k2:'',k3:'',k4:'',k5:'',
                  advertisement:advertisement,profile:profile,product:product,productintro:productintro,
                  review:review,soicial:soicial,cart:cartProduct,active:active,sum:sum,user:user})
    },
    contact:async(req,res)=>{
        var user={}
        var cartProduct={}
        const iduser=parseInt(req.session.userId)
        if(iduser >=0){
            var user=await productt.user(iduser);
            var cartProduct= await adminModel.cartProduct(iduser)

        }else{
            var user={}
            var cartProduct={}
        }
        const profile= await adminModel.profile();
        const soicial= await adminModel.soicial();
        const sum=await handle.sumProduct(iduser)
        res.render('./page/contact',{k1:'',k2:'',k3:'',k4:'',k5:'active',profile:profile,soicial:soicial,cart:cartProduct,active:active,sum:sum,user:user})
    },
    testimonial:async(req,res)=>{
        var user={}
        var cartProduct={}
        const iduser=parseInt(req.session.userId)
        if(iduser >=0){
            var user=await productt.user(iduser);
            var cartProduct= await adminModel.cartProduct(iduser)

        }else{
            var user={}
            var cartProduct={}
        }
        const review=await adminModel.review();
        const soicial= await adminModel.soicial();
        const profile= await adminModel.profile();
        const sum=await handle.sumProduct(iduser)
        res.render('./page/testimonial',{k1:'',k2:'',k3:'',k4:'active',k5:'',review:review,profile:profile,soicial:soicial,cart:cartProduct,active:active,sum:sum,user:user})
    },
    shop:async(req,res)=>{
        var user={}
        var cartProduct={}
        const iduser=parseInt(req.session.userId)
        if(iduser >=0){
            var user=await productt.user(iduser);
            var cartProduct= await adminModel.cartProduct(iduser)

        }else{
            var user={}
            var cartProduct={}
        }
        const product=await adminModel.product();
        const soicial= await adminModel.soicial();
        const profile= await adminModel.profile();
        const sum=await handle.sumProduct(iduser)
        res.render('./page/shop',{k1:'',k2:'active',k3:'',k4:'',k5:'',profile:profile,soicial:soicial,product:product,cart:cartProduct,active:active,sum:sum,user:user})
    },
    product:async(req,res)=>{
        var user={}
        var cartProduct={}
        const iduser=parseInt(req.session.userId)
        if(iduser >=0){
            var user=await productt.user(iduser);
            var cartProduct= await adminModel.cartProduct(iduser)

        }else{
            var user={}
            var cartProduct={}
        }
         const id=parseInt(req.params.ID)
         const data=await productt.product(id)
         const soicial= await adminModel.soicial();
         const profile= await adminModel.profile(); 
         var check=0;
         const sum=await handle.sumProduct(iduser)
        res.render('./page/product',{k1:'',k2:'active',k3:'',k4:'',k5:'',data:data,profile:profile,soicial:soicial,cart:cartProduct,check:check,active:active,sum:sum,user:user})
    },

    why:async(req,res)=>{
        var user={}
        var cartProduct={}
        const iduser=parseInt(req.session.userId)
        if(iduser >=0){
            var user=await productt.user(iduser);
            var cartProduct= await adminModel.cartProduct(iduser)

        }else{
            var user={}
            var cartProduct={}
        }
        const soicial= await adminModel.soicial();
        const profile= await adminModel.profile();
        const sum=await handle.sumProduct(iduser)
        res.render('./page/why',{k1:'',k2:'',k3:'active',k4:'',k5:'',profile:profile,soicial:soicial,cart:cartProduct,active:active,sum:sum,user:user})
    },
    login:async(req,res)=>{
        var check=1;
        res.render('dangnhap',{check:check})
    },
    dangki:async(req,res)=>{
        var check=2;
        res.render('dangki',{check:check})
    },
    logout: (req, res) => {
        req.session.destroy(err => {
          if (err) {
            console.error('Error destroying session:', err);
          }
          res.clearCookie('connect.sid');
          res.redirect('/');
        });
      },
      search:async(req,res)=>{
        const value= req.query.timkiem;
        const product= await adminModel.product()
        var user={}
        const iduser=parseInt(req.session.userId)
        if(iduser >=0){
            var user=await productt.user(iduser)
        }else{
            var user={}
        }
        const cartProduct= await adminModel.cartProduct(iduser)
        const soicial= await adminModel.soicial();
        const profile= await adminModel.profile();
        const sum=await handle.sumProduct(iduser)
        var result = product.filter( (product) => {
            return product.name.toLowerCase().indexOf(value.toLowerCase()) !== -1
        })

        res.render('./page/shop',{k1:'',k2:'active',k3:'',k4:'',k5:'',profile:profile,soicial:soicial,product:result,cart:cartProduct,active:active,sum:sum,user:user})
    }
      
}
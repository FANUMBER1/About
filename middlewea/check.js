const express=require('express');
const app = express();
app.set('view engine', 'ejs');
const modelLogin=require('../model/login/login')
const adminModel=require('../model/admin/page')
const productt=require('../model/admin/edit')
const handle=require('../model/view/handle')
module.exports = {
    quantity:async(req,res,next)=>{
        var quantity=product.querySelector("#quantity").value
        if(quantity == '' ){
            var active=''
            res.render('./page/product',{k1:'',k2:'active',k3:'',k4:'',k5:'',data:data,profile:profile,soicial:soicial,cart:cartProduct,check:check,active:active,sum:sum,user:user})
        }else{
            next();
               }
    }
}
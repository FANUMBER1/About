const express=require('express');
const app = express();
const bcrypt = require('bcrypt');
app.set('view engine', 'ejs');
const modelLogin=require('../../model/login/login')
module.exports={
    login:async(req,res)=>{
        const tentaikhoan = req.body.taikhoan;
        const data = await modelLogin.taikhoan(tentaikhoan);
        const pass1 = req.body.password;
        var check = 0;
        if (data.length >= 1) {
          for (var i = 0; i < data.length; i++) {
            const match = await bcrypt.compare(pass1, data[i].pass);
            if (match) {
              check = 1;
              var id = data[i].id
            }
          }
        }
        if (check == 1) {
          req.session.userId = id;
          res.redirect('/')
        } else {
          res.render('dangnhap', { check });
        }
      },
      register:async(req,res,next)=>{
        const name = req.body.name;
        const taikhoan = req.body.taikhoan;
        const pass0 = req.body.pass;
        const data = await modelLogin.taikhoan(taikhoan);
        const form = /^[a-zA-Z0-9]+@[a-z.]+\.com$/;
        var check = 0;
        if (taikhoan == '' || pass0 == '' || name == '') {
          res.render('dangki', { check })
        } else {
          if (form.test(taikhoan)) {
            if (data.length == 1) {
              check = 1
              res.render('dangki', { check })
            } else {
              next();
            }
          } else {
            check = 3
            res.render('dangki', { check })
          }
        }
      }
}
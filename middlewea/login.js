const express=require('express');
const app = express();
app.set('view engine', 'ejs');
const modelLogin=require('../model/login/login')
module.exports = {
  requireLogin: (req, res, next) => {
    if (!req.session.userId) {
      res.redirect('/login');
    } else {
      next();
    }
  },
  checkRole: async(req, res, next) => {
    const id = parseInt(req.session.userId);
    const data= await modelLogin.infuser(id)
    if(data[0].position == 'User' || data[0].position == 'View') {
      res.redirect('/')
    } else {
      next();
    }
  },
  checkAdmin: async (req, res, next) => {
    const id = parseInt(req.session.userId);
    const data= await modelLogin.infuser(id)
    if (data[0].position != 'Admin') {
      res.redirect('/login')
    } else {
      next();
    }
  }
}
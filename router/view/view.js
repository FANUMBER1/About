const express=require('express');
const router=express.Router();
const multer = require('multer');
const viewControler=require('../../controler/view/view')
const handleControler=require('../../controler/view/handle')
const middlewea=require('../../middlewea/login')
const checkLogin=require('../../controler/login/login')
const create=require('../../controler/admin/create')
const check=require('../../middlewea/check')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './assets/upload/');
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname);
    }
  });
const upload = multer({ storage: storage });
/////PAGE
router.get('/',viewControler.index)
router.get('/contact',viewControler.contact)
router.post('/contact',handleControler.contact)
router.get('/shop',viewControler.shop)
router.get('/product/:ID',viewControler.product)
// router.post('/product/:ID',middlewea.requireLogin,check.quantity,handleControler.addProduct) 
router.get('/delete-product/:ID',handleControler.deleteProduct)
router.get('/information',viewControler.index)
router.get('/testimonial',viewControler.testimonial)
router.get('/why',viewControler.why)
//////SELER
router.post('/seller',create.seller)
///////////////
router.get('/login',viewControler.login)
router.post('/login',checkLogin.login)
router.get('/dangki',viewControler.dangki)
router.post('/registers/:ID',upload.single('img'),checkLogin.register,create.register)
router.get('/logout',viewControler.logout)
/////////
router.post('/search',viewControler.search)

module.exports=router;
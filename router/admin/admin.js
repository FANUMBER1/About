const express=require('express');
const router=express.Router();
const multer = require('multer');
const page=require('../../controler/admin/page')
const create=require('../../controler/admin/create')
const deletec=require('../../controler/admin/delete')
const edit=require('../../controler/admin/edit')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './assets/upload/');
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname);
    }
  });
 const upload = multer({ storage: storage }); 
/////////////PROFILE
router.get('/',page.profile)
router.get('/edit-profile',edit.profile)
router.post('/edit-profile',edit.editProfile)
////////////product
router.get('/product',page.product)
router.get('/create-product',create.product)
router.post('/create-product',upload.single('img'),create.createProduct)
router.get('/edit-product/:ID',edit.product)
router.post('/edit-product/:ID',upload.single('img'),edit.editProduct)
router.get('/delete-product/:ID',deletec.product)
///////////REVIEW
router.get('/review',page.review)
router.post('/create-review',create.review)
router.get('/edit-review/:ID',edit.review)
router.post('/edit-review/:ID',edit.editReview)
router.get('/delete-review/:ID',deletec.review)
//////////ADVERTISEMENT
router.get('/advertisement',page.advertisement)
router.get('/create-advertisement',create.advertisement)
router.post('/create-advertisement',upload.single('img'),create.createAdvertisement)
router.get('/edit-advertisement/:ID',edit.advertisement)
router.post('/edit-advertisement/:ID',upload.single('img'),edit.editAdvertisement)
router.get('/delete-advertisement/:ID',deletec.advertisement)
/////////introProduct
router.get('/introproduct',page.introproduct)
router.get('/create-introproduct',create.introproduct)
router.post('/create-introproduct',upload.single('img'),create.createIntroproduct)
router.get('/edit-introproduct/:ID',edit.introproduct)
router.post('/edit-introproduct/:ID',upload.single('img'),edit.editIntroproduct)
router.get('/delete-introproduct/:ID',deletec.introproduct)
/////////Soicial
router.get('/soicial',page.soicial)
router.get('/edit-soicial/:ID',edit.soicial)
router.post('/edit-soicial/:ID',upload.single("img"),edit.editSoicial)
router.post('/create-soicial',upload.single("img"),create.createSoicial)
router.get('/delete-soicial/:ID',deletec.soicial)
/////////
router.get('/contact',page.contact)
router.get('/full-contact/:ID',edit.contact)
router.get('/delete-contact/:ID',deletec.contact)
///////role
router.get('/role',page.role)
router.get('/edit-role/:ID',edit.role)
router.post('/edit-role/:ID',edit.editrole)
router.post('/create-role',create.createrole)
router.get('/delete-role/:ID',deletec.role)
////////USER
router.get('/user',page.user)
router.get('/edit-inforuser/:ID',edit.user)
router.post('/edit-inforuser/:ID',upload.single("img"),edit.edituser)
router.get('/delete-inforuser/:ID',deletec.user)
//////SELER
router.get('/seller',page.seller)
router.get('/delete-seller/:ID',deletec.seller)
module.exports=router;
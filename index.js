const express = require('express');
const path = require('path');
const app = express();
const body=require('body-parser')
const methodOverride = require('method-override');
const port = 8888;
app.set('view engine', 'ejs');
const bcrypt = require('bcrypt');
const multer = require('multer');
const flash = require('connect-flash');
var cookieParser = require('cookie-parser');
const session = require('express-session');
const viewUser=require('./router/view/view')
const adminRouter=require('./router/admin/admin')
const middlewea=require('./middlewea/login')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './assets/upload/');
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname);
    }
  });
 const upload = multer({ storage: storage }); 
//use
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use(body.json());
app.use(body.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } 
}));
app.use(methodOverride());
app.use(flash());
app.use((req, res, next) => {
  res.locals.messages = req.flash();
  next();
});

//////////
app.use('/',viewUser)
app.use('/admin',adminRouter)

///////////
app.listen(port,()=> {
    console.log(`Server is running on http://localhost:${port}`);
});
   



require('dotenv').config();
const express=require('express'),
	app  = express(),
	mysql = require('mysql'),
  mongoose = require('mongoose'),
  User = require('./models/user')
  cors = require('cors');
app.use(cors());

mongoose.connect("mongodb://localhost:27018/testing");

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "root",
//   database:'akash',
//   connectionLimit: 10,
// });
// con.connect(function(err) {
// 	console.log("Connected!");

const PORT = process.env.PORT || 8080
app.get('/',async (req,res)=>{

	res.send('<h1>hello updated again sanath</h1>');
	}
);
app.get('/users',async (req,res)=>{
  User.find({},(err,users)=>{
    console.log(users);
    res.send(users);
  })
})
app.get('/mongo' ,async (req,res)=>{
	 var newUser = {
     name:'akash',
     email: 'akash@abc.com'
   }
   User.create(newUser,(err,user)=>{
     res.redirect('/users');
   })
    });

app.listen(PORT,()=>{
	console.log('8080');
	});


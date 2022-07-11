require('dotenv').config();
const express=require('express'),
	app  = express(),
	mysql = require('mysql'),
  mongoose = require('mongoose'),
  User = require('./models/user')
  cors = require('cors');
app.use(cors());
app.set('view engine','ejs');

const PORT = process.env.PORT ;
mongoose.connect("mongodb://172.19.0.1:27215/test_docker",{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>{
        app.listen(PORT,()=>{console.log('Server running in port '+PORT)});
    })
    .catch((err)=> console.log(err));


// var con = mysql.createConnection({
//   host: "172.19.0.1",
//   // host:'localhost',
//   user: "root",
//   password: "root",
//   database:'akash',
//   port:6035
// });
// con.connect(function(err,con) {
// 	console.log("Connected!");
// })
app.get('/',async (req,res)=>{

	res.render("index")
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
// app.get('/mysql' ,async (req,res)=>{
//     con.query('select * from t1',(err,rows,fields)=>{
//       if (err){
//         console.log(err);
//       }
//         console.log(rows);
//         res.status(201).send(rows);
//        });
//   })


app.listen(8080,()=>{
	console.log(8080);
	});


require('dotenv').config();
const express=require('express'),
	app  = express(),
	mysql = require('mysql'),
  mongoose = require('mongoose'),
  User = require('./models/user')
  cors = require('cors');
app.use(cors());
const PORT = process.env.PORT || 8080

// mongoose.connect("mongodb://localhost:27018/testing");
// mongoose.connect("mongodb://127.0.0.1:27018/test_docker", async (err))
// mongoose.connect("mongodb://172.19.0.1:27018/test_docker",{useNewUrlParser:true,useUnifiedTopology:true})
//     .then(()=>{
//         app.listen(PORT,()=>{console.log('Server running in port '+PORT)});
//     })
//     .catch((err)=> console.log(err));
var con = mysql.createPool({
  host: "172.19.0.2",
  // host:'localhost',
  user: "root",
  password: "root",
  database:'akash',
  connectionLimit: 10,
  // port:8770
});
con.getConnection(function(err,con) {
	console.log("Connected!");
})
app.get('/',async (req,res)=>{

	res.send('<h1>hello updated again sanath</h1>');
	}
);
// app.get('/users',async (req,res)=>{
//   User.find({},(err,users)=>{
//     console.log(users);
//     res.send(users);
//   })
// })
// app.get('/mongo' ,async (req,res)=>{
// 	 var newUser = {
//      name:'akash',
//      email: 'akash@abc.com'
//    }
//    User.create(newUser,(err,user)=>{
//      res.redirect('/users');
//    })
//     });
app.get('/mysql' ,async (req,res)=>{
  con.getConnection( async (err,con)=>{
    await con.query('select * from t1',(err,rows,fields)=>{
      if (err){
        console.log(err);
      }
        console.log(rows);
        res.status(201).send(rows);
       });
  })
   });


app.listen(PORT,()=>{
	console.log('8080');
	});


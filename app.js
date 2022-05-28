require('dotenv').config();
const express=require('express'),
	app  = express(),
	mysql = require('mysql');


var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database:'akash',
  port:12254,
  insecureAuth : true,
});
con.connect(function(err) {
	console.log("Connected!");
  });
const PORT = process.env.PORT || 8080
app.get('/',async (req,res)=>{

	res.send('<h1>hello updated again sanath</h1>');
	}
);
app.get('/mysql' ,async (req,res)=>{
	await con.query('select * from t1',(err,rows,fields)=>{
        res.status(201).send(rows);
     });
    });
    
app.listen(PORT,()=>{
	console.log('8080');
	});
	

const express=require('express'),
	app  = express();
	
app.get('/',(req,res)=>{
	res.send('<h1>hello updated again anup</h1>');
	}
);
app.listen(4000,()=>{
	console.log('4000');
	});
	

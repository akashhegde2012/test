const express=require('express'),
	app  = express();
const PORT = process.env.PORT || 8080
app.get('/',(req,res)=>{
	res.send('<h1>hello updated again sanath</h1>');
	}
);
app.listen(PORT,()=>{
	console.log('8080');
	});
	

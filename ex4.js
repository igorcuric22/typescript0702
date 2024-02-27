const express = require('express'); 

const app = express(); 
const PORT = 3000; 

app.use(express.json()); 




// app.use(express.static('./build'));
// app.use(express.urlencoded({extended:false}));
// app.use(express.json());


app.post('/',(req,res)=>
{
console.log(req.body);

const {name,id}=req.body;

res.status(200).send({id:id,name:name});

});



app.listen(5000,()=>
{
	console.log('Server is listening on port 5000...');
});



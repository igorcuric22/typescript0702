const express=require('express');
const app=express();
const path=require('path');
const {products,people}=require('./data1.js');


app.use(express.json());


app.get('/',(req,res)=>
{
    res.sendFile(path.resolve(__dirname,'./pop.html'));
});


app.get('/api/people',(req,res)=>
{
res.json(people);
});


app.post('/login',(req,res)=>
{
console.log(req.body);

const {name,id}=req.body;

const peoplex={
    id:people.length+1,
    name:req.body.name
};

people.push(peoplex);

res.status(200).send({id:peoplex.id,name:`Hello ${peoplex.name}`});

});



app.listen(5000,()=>
{
	console.log('Server is listening on port 5000...');
});
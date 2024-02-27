const express=require('express');
const app=express();
const path=require('path');
const {products,people}=require('./data1.js');

app.use(express.static('./build'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.get('/',(req,res)=>
{
res.send('<h1>Home Page</h1><a href="/api/people">people</a><h2>Get Data from JSON</h2><a href="/json_get">JSON GET</a><h2>');
res.end();
});

app.get('/json_get',(req,res)=>
{
    res.sendFile(path.resolve(__dirname,'./pp10.html'));
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

app.put('/login/:id',(req,res)=>
{
	const peoplex=people.find(c=>c.id===parseInt(req.params.id));
	if(!peoplex) res.status(404).send('The course with the given ID was not found.');

	console.log(peoplex);
	
	res.send(peoplex);

});

app.patch('/login/:id',(req,res)=>
{
    const peoplex=people.find(c=>c.id===parseInt(req.params.id));
	
    people.name=req.body.name;

    people[req.params.id-1].name = req.body.name;

    console.log(req.body);

	if(!peoplex) res.status(404).send('The course with the given ID was not found.');

	console.log(peoplex);
	
	res.send(peoplex);

});

app.delete('/login/:id',(req,res)=>
{
	const peopley=people.find(c=>c.id===parseInt(req.params.id));

	const index=people.indexOf(peopley);
	people.splice(index,1);
	
	console.log(peopley);
	
	res.send(peopley);

});


app.listen(5000,()=>
{
	console.log('Server is listening on port 5000...');
});
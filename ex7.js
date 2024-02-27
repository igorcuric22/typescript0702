const express = require('express');
const app = express();
const path=require('path');
const PORT = 4000;
 
// app.use(express.urlencoded({ extended: false }));
app.use(express.json()); 

const products=
[
    {   
        id:1,
        name:"tank t55",
    },
    {
        id:2,
        name:"tank t62",
    },
];

console.log(products);


app.post('/', function (req, res) {
    console.log(req.body);
    const {name}=req.body;
    const length=products.length;
    products.push({id:length+1,name:name});
    res.send({name:name,count:length});
    res.end();
    
});

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, 'pop7.html'));
    console.log(path.join(__dirname, 'pop7.html'));
});

app.get('/products',(req,res)=>{
    res.send(products);
    console.log(path.join(__dirname, 'pop7.html'));
});


app.put('/:id',(req,res)=>{
    console.log(req.body);
    const { id } = req.params;
    const productsx=products.find(c=>c.id===parseInt(id));
    console.log(productsx.name);
    products[id-1].name=req.body.name
    console.log(products);
    console.log(id);
        res.send({name:"Hello"});
})
 
app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});

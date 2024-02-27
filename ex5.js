const express = require('express');
const app = express();
const path=require('path');
const PORT = 3000;
 
// app.use(express.urlencoded({ extended: false }));
app.use(express.json()); 



let p=0;

app.post('/', function (req, res) {
    console.log(req.body);
    const {name}=req.body;
    res.send({name:name,count:p++});
    res.end();
    
});

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, 'pop5.html'));
    console.log(path.join(__dirname, 'pop5.html'));
});


app.put('/:id',(req,res)=>{
    console.log(req.body);
    const { id } = req.params;
    console.log(id);
        res.send({name:"Hello"});
})
 
app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});

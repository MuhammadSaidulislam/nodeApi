const express = require('express');
const app = express();
// app.get('/', (req, res) =>{
//     res.send("Thank you for calling me");
// });
const user = ['', 'userOne','userTwo','userthree','userFour']
app.get('/user/:id', (req,res)=>{
    const id = req.params.id;
    const name = user[id];
    res.send({name,id});
});
const user = ['', 'userOne','userTwo','userthree','userFour']
app.get('/user/:id', (req,res)=>{
    const id = req.params.id;
    const name = user[id];
    res.send({name,id});
});
const user = ['', 'userOne','userTwo','userthree','userFour']
app.get('/user/:id', (req,res)=>{
    const id = req.params.id;
    const name = user[id];
    res.send({name,id});
});
const user = ['', 'userOne','userTwo','userthree','userFour']
app.get('/user/:id', (req,res)=>{
    const id = req.params.id;
    const name = user[id];
    res.send({name,id});
});
app.listen(3000, () => console.log("Listening port 3000"));
const express = require('express');
const app = express();
// app.get('/', (req, res) =>{
//     res.send("Thank you for calling me");
// });
const user = ['', 'userOne','userTwo','userthree','userFour']
app.get('/user/:id', (req,res)=>{
    const id = req.params.id;
    const name = user[id];
    res.send({name,id});
});
const user = ['', 'userOne','userTwo','userthree','userFour']
app.get('/user/:id', (req,res)=>{
    const id = req.params.id;
    const name = user[id];
    res.send({name,id});
});
const user = ['', 'userOne','userTwo','userthree','userFour']
app.get('/user/:id', (req,res)=>{
    const id = req.params.id;
    const name = user[id];
    res.send({name,id});
});
const user = ['', 'userOne','userTwo','userthree','userFour']
app.get('/user/:id', (req,res)=>{
    const id = req.params.id;
    const name = user[id];
    res.send({name,id});
});
app.listen(3000, () => console.log("Listening port 3000"));
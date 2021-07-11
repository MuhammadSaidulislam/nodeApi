const express = require('express');
var cors = require('cors')
const app = express();
app.use(cors())


const user = ['', 'userOne','userTwo','userthree','userFour']
app.get('/user/:id', (req,res)=>{
    const id = req.params.id;
    const name = user[id];
    res.send({name,id});
});
app.listen(3000, () => console.log("Listening port 3000"));

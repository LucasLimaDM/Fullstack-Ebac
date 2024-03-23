const express = require('express');
const app = express();
const PORT = 5000;

app.get('/cadastro', (req, res) =>{
    res.sendFile(__dirname + '/html/index.html')

});

app.get('/cadastro/:nome', (req, res) =>{
    res.send(req.params.nome)
    
});

app.listen(PORT, ()=>{console.log('App online na porta 5000')});
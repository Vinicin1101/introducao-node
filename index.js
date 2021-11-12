const { randomInt } = require('crypto');
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Olá Mundo!');

})

app.get('/oi', function (req, res){
    res.send('Olá usuário!')
    req.get()
})

let herois = ["Flash", "Batman", "Homem de Ferro", "Ciborg", "Viuva-Negra"];

app.get('/herois', function (req, res) {
    res.send(herois)
})

;
app.listen(3000);

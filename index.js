
const express = require('express');
const app = express()

app.get('/', function (req, res) {
  res.send('Olá Mundo! <a href="herois">Vejas os Heróis</a>');

})

app.get('/oi', function (req, res){
    res.send('Olá usuário!')
    req.get()
})

let herois = ["Flash", "Batman", "Homem de Ferro", "Ciborg", "Viuva-Negra"];

// [GET] "/herois" - Read All
app.get('/herois', function (req, res) {
    res.send(herois)
})

// [GET] "/herois/:" - Read Single by ID
app.get('/herois/:id', function (req, res) {
    const id = +req.params.id;

    if (Number.isInteger(id)) {
        if(id >= 0 && id <= (herois.length - 1)){
            res.send(herois[id]);
        }else{
            res.send('Out of index');
        }
    } else {
        res.send('Solicitação inválida! Erro:NaN');
    }
})

;
app.listen(3000);

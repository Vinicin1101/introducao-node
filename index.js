const express = require('express');
const app = express();

// Body in Json
app.use(express.json());

app.get('/', function (req, res) {
  res.send('Olá Mundo! <a href="herois">Vejas os Heróis</a>');

});

app.get('/oi', function (req, res){
    res.send('Olá usuário!')
    req.get()
});

let herois = ["Flash", "Batman", "Super Shock", "Ciborg", "Viuva-Negra"];

// [GET] "/herois" - Read All
app.get('/herois', function (req, res) {
    res.send(herois.filter(Boolean));
});

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
});

// [POST] "/herois/create" - add to array
app.post('/herois/create', function (req, res) {
    herois.push(req.body.nome);
    res.send('Novo herói adicionado!');

});

// [PUT] "/herois/update/:id" - change
app.put('/herois/update/:id', function (req, res){
    herois[req.params.id] = req.body.nome;
    res.send('100% Atualizado')
});

// [] "/herois/delete" - remove from array
app.delete('/herois/delete/:id', function (req, res) {
   delete herois[req.params.id];
   res.send('Removido!');
});


app.listen(3000);

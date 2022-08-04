const express = require('express');
const app = express();
const path = require('path')

const mainRouter = require('./routers/main')

app.listen(3000, () =>{
    console.log('Servidor Funcionando')
})

app.use(express.static('public'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', mainRouter);
app.use('/about', mainRouter);
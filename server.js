const express = require('express');
const path = require('path');
const routes = require('./routes');
const app= express();

app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.use('/', routes);
const port = process.env.PORT||9999;
app.listen(port, () => {
    console.log(`running at ${port}`);
})
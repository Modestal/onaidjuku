const express = requre('express');
const path = require('path');
const routes = require('./routes');
const app= express();

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', 'public');

app.use('/', routes);
const port = process.env.PORT||9999;
app.listen(port, () => {
    console.log(`running at ${port}`);
})


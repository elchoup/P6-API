const express = require('express');
const mongoose = require('mongoose');
const app = express();

const stuffRoutes = require('./routes/stuff');
const userRoutes = require('./routes/user');

mongoose.connect('mongodb+srv://elchoup:databasecluster@cluster0.tg0dtjw.mongodb.net/?retryWrites=true&w=majority',
    {   useNewUrlParser: true,
        useUnifiedTopology: true})
    .then(() => console.log('Connection à MongoDB réussi !'))
    .catch(() => console.log('Connection à MongoDB échouée !'));

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use('/api/stuff', stuffRoutes);
app.use('/api/auth', userRoutes);

module.exports = app;


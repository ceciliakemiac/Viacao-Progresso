const express = require('express')
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const port = process.env.PORT || 8082;

const usuarioRouter = require('./server/routes/usuarioRouter');
const loginRouter = require('./server/routes/loginRouter');
const destinoRouter = require('./server/routes/destinoRouter');

app.use('/users', usuarioRouter);
app.use('/login', loginRouter);
app.use('/destinos', destinoRouter);

app.get('*', (req, res) => {
    res.status(200).send({
        message: 'Welcome to this API!'
    });
});

app.listen(port, () => {
    console.log(`Server is running on PORT ${port}`);
});
